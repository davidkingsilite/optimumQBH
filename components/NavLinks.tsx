// src/components/NavLink.tsx
'use client'; // This is a Client Component

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;

  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        // Base styles for all links
        text-base font-medium transition-colors duration-200 ease-in-out text-black hover:text-purple hover:bg-gray-100 p-3 rounded-2xl
        // Styles for the active link
        ${isActive ? 'text-lavender border-b-2 border-purple' : 'text-black'}
      `}
    >
      {children}
    </Link>
  );
}