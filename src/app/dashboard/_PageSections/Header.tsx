'use client';

import { useEffect, useState } from 'react';
import { UserNav } from './UserNav';
import TeamSwitcher from './TeamSwitcher';
import { usePathname } from 'next/navigation';
import configuration from '@/lib/config/dashboard';
import { MobileNav } from '@/components/MobileNav';

interface HeaderProps {
  display_name: string;
  email: string;
  avatar_url: string;
}

const Header = ({ display_name, email, avatar_url }: HeaderProps) => {
  const [headerText, setHeaderText] = useState('');
  const pathname = usePathname().split('/');
  const { routes } = configuration;

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="mr-8">
          <MobileNav items={routes} />
        </div>
        <div className="max-[410px]:hidden">
          <TeamSwitcher />
        </div>

        <div className="hidden md:inline-block text-lg ml-3">{headerText}</div>
        <div className="ml-auto flex items-center space-x-4">
          <UserNav avatar_url={avatar_url} display_name={display_name} email={email} />
        </div>
      </div>
    </div>
  );
};

export default Header;
