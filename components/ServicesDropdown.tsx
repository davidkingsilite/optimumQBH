'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const services = [
  { name: 'Eating Disorders', href: '/services/web-design' },
  { name: 'Depression', href: '/services/frontend-development' },
  { name: 'Telepsychiatry', href: '/services/full-stack' },
  { name: 'Bipolar Disorder', href: '/services/ui-ux' },
  { name: 'Insomnia', href: '/services/maintenance' },
  { name: 'ADHD', href: '/services/maintenance' },
  { name: 'Mood Disorders', href: '/services/maintenance' },
  { name: 'PTSD', href: '/services/maintenance' },
  { name: 'Addiction', href: '/services/maintenance' },
  { name: 'Schizophrenia', href: '/services/maintenance' },
  { name: 'Adolescents Care', href: '/services/maintenance' },
  { name: 'Adult Care', href: '/services/maintenance' },
  { name: 'Geriatric Psychiatry', href: '/services/maintenance' },
  { name: 'Weight Management Services', href: '/services/maintenance' },
];



export function ServicesDropdown() {
    const [mobileOpen, setMobileOpen] = useState(false);

    // Close on route change (optional enhancement)
    useEffect(() => {
      const closeDropdown = () => setMobileOpen(false);
      window.addEventListener('resize', closeDropdown);
      return () => window.removeEventListener('resize', closeDropdown);
    }, []);
  

  return (
    <div className="relative group inline-block pb-[10px] pl-[16px] border-b lg:pb-0 lg:pl-0 lg:border-none lg:self-center">
      {/* Trigger button*/}
      <button className={`flex items-center gap-1 text-black hover:text-purple transition font-bevietnam hover:bg-gray-100 p-3 rounded-2xl`}
              onClick={() => setMobileOpen((prev) => !prev)}
        >
        Services
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            mobileOpen ? 'rotate-180' : 'group-hover:rotate-180'
          }`}
        />      
        </button>
      {/* Trigger
      <div className="flex items-center gap-1 pb-1 text-[#4D4D4D] hover:text-black transition cursor-pointer font-bevietnam">
        <span>Services</span>
        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
      </div> */}
{/* 
      <div className="absolute top-full left-0 w-48 bg-white border rounded-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50 text-sm hidden lg:block"> */}

            {/* Desktop Dropdown on hover (hidden on mobile) */}
            <div
             className="absolute left-0 mt-2 w-48 text-sm bg-white border rounded-lg shadow-lg
                   opacity-0 invisible group-hover:opacity-100 group-hover:visible
                   transition duration-200 ease-in-out z-50 hidden lg:block"
             >

        <ul className="py-2">
          {services.map((service) => (
            <li key={service.name}>
              <Link
                href={service.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-purple transition"
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown on click (only shown below lg breakpoint) */}
      {mobileOpen && (
        <div className="mt-2 bg-white border rounded-lg shadow-lg transition z-40 block lg:hidden">
          <ul className="py-2">
            {services.map((service) => (
              <li key={service.name}>
                <Link
                  href={service.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 border-b transition"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}
