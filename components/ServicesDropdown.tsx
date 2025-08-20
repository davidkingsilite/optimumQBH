'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/constants';


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
            {/* Desktop Dropdown on hover (hidden on mobile) */}
            <div
             className="absolute left-0 mt-2 w-48 text-sm bg-white border rounded-lg shadow-lg
                   opacity-0 invisible group-hover:opacity-100 group-hover:visible
                   transition duration-200 ease-in-out z-50 hidden lg:block"
             >

        <ul className="py-2 max-h-120 overflow-y-auto custom-scrollbar">
          {services.map((service) => (
            <li key={service.title}>
              <Link
                href={service.slug}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-purple transition"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown on click (only shown below lg breakpoint) */}
      {mobileOpen && (
        <div className="mt-2 bg-white border rounded-lg shadow-lg transition z-40 block lg:hidden">
          <ul className="py-2 max-h-80 overflow-y-auto custom-scrollbar">
            {services.map((service) => (
              <li key={service.title}>
                <Link
                  href={service.slug}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 border-b transition"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { ChevronDown } from 'lucide-react';
// import Link from 'next/link';
// import { services } from '@/constants';

// export function ServicesDropdown() {
//   const [open, setOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Close dropdown on outside click or Escape key
//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//         setOpen(false);
//       }
//     };
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') setOpen(false);
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     document.addEventListener('keydown', handleEsc);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//       document.removeEventListener('keydown', handleEsc);
//     };
//   }, []);

//   return (
//     <div
//       ref={dropdownRef}
//       className="relative group inline-block pb-[10px] pl-[16px] border-b lg:pb-0 lg:pl-0 lg:border-none lg:self-center"
//     >
//       {/* Trigger button */}
//       <button
//         aria-haspopup="true"
//         aria-expanded={open}
//         onClick={() => setOpen((prev) => !prev)}
//         className="flex items-center gap-1 text-black hover:text-purple transition font-bevietnam hover:bg-gray-100 p-3 rounded-2xl"
//       >
//         Services
//         <ChevronDown
//           className={`w-4 h-4 transition-transform duration-200 ${
//             open ? 'rotate-180' : 'group-hover:rotate-180'
//           }`}
//         />
//       </button>

//       {/* Dropdown Menu */}
//       <div
//         className={`absolute left-0 mt-2 w-56 text-sm bg-white border rounded-lg shadow-lg transition-all duration-200 ease-out z-50
//           ${open ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
//           lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:group-hover:visible lg:block`}
//       >
//         <ul className="py-2">
//           {services.map((service) => (
//             <li key={service.title}>
//               <Link
//                 href={service.slug}
//                 onClick={() => setOpen(false)}
//                 className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-purple transition"
//               >
//                 {service.title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
