import { Header } from './_PageSections/Header';
import { LayoutProps } from '@/lib/types/types';
import Footer from '@/components/Footer';

export default async function MarketingLayout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
        {children}
      <Footer />
    </div>
  );
}
