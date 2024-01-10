import 'server-only';
import { SupabaseRouteHandler as supabase } from '@/lib/API/Services/init/supabase/SupabaseRouteHandler';
import Stripe from 'stripe';
import { RetrieveSubscription } from './customer';
import { StripeEvent } from '@/lib/types/stripe';

const subscriptionStatusActive = { trailing: 'trailing', active: 'active' };
const subscriptionStatusVoid = {
  past_due: 'past_due',
  canceled: 'canceled',
  unpaid: 'unpaid',
  incomplete_expired: 'incomplete_expired'
};

const WebhookEvents = {
  subscription_updated: 'customer.subscription.updated',
  checkout_session_completed: 'checkout.session.completed'
};

export const WebhookEventHandler = async (event: StripeEvent) => {
  // Handle the event
  switch (event.type) {
    case WebhookEvents.checkout_session_completed:
      const session = event.data.object;

      const user_db_id = session.metadata.user_id;

      const subscription: Stripe.Subscription = await RetrieveSubscription(session.subscription);

      const stripe_customer_id = subscription.customer as string;
      const statusSub = subscription.status as string;

      const dataSub = {
        id: subscription.id,
        price_id: subscription.items.data[0].price.id,
        status: statusSub,
        created_at: new Date(Date.now()).toString(),
        period_starts_at: new Date(subscription.current_period_start * 1000).toString(),
        period_ends_at: new Date(subscription.current_period_end * 1000).toString()
      };

      const subscriptionRes = await supabase().from('subscriptions').insert(dataSub);
      if (subscriptionRes?.error) throw subscriptionRes.error;

      const dataUser = {
        stripe_customer_id,
        subscription_id: subscription.id
      };

      const profileRes = await supabase().from('profiles').update(dataUser).eq('id', user_db_id);
      if (profileRes?.error) throw profileRes.error;

      console.log('Stripe Customer Successfully Created');
      break;
    case WebhookEvents.subscription_updated:
      // refator for simplicity
      // wat does previous_attributes look like for price update

      const subscriptionUpdate = event.data.object;
      const UpdatedCols = Object.keys(event.data.previous_attributes);

      const validColumns = [
        'price_id',
        'status',
        'created_at',
        'period_starts_at',
        'period_ends_at'
      ];

      const validUpdatedCols = UpdatedCols.filter((element) => validColumns.includes(element));

      let dataUpdate = {};
      validUpdatedCols.map((item) => {
        dataUpdate[item] = subscriptionUpdate[item];
      });

      let status;
      if (UpdatedCols.includes('status')) {
        const validStatus = [
          ...Object.keys(subscriptionStatusActive),
          ...Object.keys(subscriptionStatusVoid)
        ];

        if (validStatus.includes(subscriptionUpdate.status)) {
          status = subscriptionUpdate.status;
        }
      }

      if (status) dataUpdate['status'] = status;

      if (Object.keys(dataUpdate).length !== 0) {
        const { error } = await supabase()
          .from('subscriptions')
          .update(dataUpdate)
          .eq('id', subscriptionUpdate.id);

        if (error) throw error;
      }

      break;
    default:
      // Unexpected event type
      console.log(`Unhandled event type ${event.type}.`);
  }
};

/* 

Webhook triggers can be triggered by stripe CLI to similate webhook events. Copy and paste into terminal.

stripe.exe trigger checkout.session.completed --add checkout_session:metadata.user_id={REPLACE WITH A SUPABASE USER ID}

stripe.exe trigger customer.subscription.updated

stripe.exe trigger invoice.paid

ngrok setup can also be used to directly trigger events from the app. See ngrok stripe webhook guide.
*/
