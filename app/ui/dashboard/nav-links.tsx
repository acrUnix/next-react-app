'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'inicio', href: '/dashboard', icon: HomeIcon },
  {
    name: 'facturas',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'personalizar', href: '/dashboard/customers', icon: UserGroupIcon },
  {name: 'home', href: '/dashboard/home', icon: UserGroupIcon }
];

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-200 p-3 text-sm font-medium hover:bg-sky-100 md:flex-none md:justify-start md:p-2 md:px-3
              ${pathname === link.href ? 'bg-sky-200 text-black' : ''}
              `}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
