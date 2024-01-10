import React from 'react'
import { buttonVariants } from '@/components/ui/Button';
import Link from 'next/link';
import { cn } from '@/lib/utils/helpers';
import { Nav } from './NavBar';
import config from '@/lib/config/marketing';
import { MainLogoText } from '@/components/MainLogo';
import { ThemeDropDownMenu } from '../../../components/ThemeDropdown';
import { SupabaseSession } from '@/lib/API/Services/supabase/user';



export const Header = async () => {
  const { routes } = config;
  const { data } = await SupabaseSession();

  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-14 flex flex-wrap pt-5  justify-between md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-yellow mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-2xl text-green-600">ESG buddy</span>
    </a>
    <nav className="flex flex-wrap items-center text-base justify-center gap-6">
      <a className="mr-5 text-gray-900">Home</a>
      <a className="mr-5 text-gray-900">Our solutions</a>
      <a className="mr-5 text-gray-900">Clients</a>
      <a className="mr-5 text-gray-900">About us</a>
      <a className="mr-5 text-gray-900">Contact us</a>
      
    </nav>

    {!data?.session && (
              <Link
              href="/auth/login"
              className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'px-6')}
              >
              Login
              </Link>)}


  </div>
</header>
  )
}


export default Header