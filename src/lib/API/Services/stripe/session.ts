'use server';

import stripe from '@/lib/API/Services/init/stripe';
import config from '@/lib/config/auth';
import { PortalSessionT, CreatePortalSessionPropsT } from '@/lib/types/stripe';
import Stripe from 'stripe';
import { StripeError } from '@/lib/utils/error';
import { GetProfileByUserId } from '../../Database/profile/queries';
import { SupabaseUser } from '../supabase/user';
import configuration from '@/lib/config/site';

interface createCheckoutProps {
  price: string;
}

export const createCheckoutSession = async ({ price }: createCheckoutProps) => {
  const { redirects } = config;
  const { toBilling, toSubscription } = redirects;

  const user = await SupabaseUser();
  const user_id = user.id;
  const customer_email = user.email;
  const origin = configuration.url;

  let session: Stripe.Checkout.Session;

  try {
    session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price,
          quantity: 1
        }
      ],
      mode: 'subscription',
      success_url: `${origin}${toBilling}`,
      cancel_url: `${origin}${toSubscription}`,
      metadata: {
        user_id
      },
      customer_email,
      subscription_data: {
        trial_period_days: 14
      }
    });
  } catch (err) {
    StripeError(err);
  }

  return session;
};

export const createPortalSession = async (): Promise<PortalSessionT> => {
  let portalSession: PortalSessionT;

  const user = await SupabaseUser();
  const profile = await GetProfileByUserId(user?.id);
  const customer = profile?.data?.[0]?.stripe_customer_id;
  const origin = configuration.url;

  try {
    portalSession = await stripe.billingPortal.sessions.create({
      customer,
      return_url: `${origin}${config.redirects.toSubscription}`
    });
  } catch (err) {
    StripeError(err);
  }

  return portalSession;
};
