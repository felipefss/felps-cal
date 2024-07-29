'use client';

import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import { Link } from './link';

const navItems = [
  {
    name: 'Event Types',
    href: '/event-types',
  },
  {
    name: 'Scheduled Events',
    href: '/scheduled-events',
  },
  {
    name: 'Availability',
    href: '/availability',
  },
  {
    name: 'Settings',
    href: '/settings',
  },
];

const activeClass = 'bg-[--accent-a6]';

export function NavItems() {
  const segment = useSelectedLayoutSegment();
  return (
    <>
      {navItems.map(({ href, name }) => {
        const isActive = !!segment && href.includes(segment);
        return (
          <li key={href}>
            <Link className={isActive ? activeClass : undefined} href={href}>
              {name}
            </Link>
          </li>
        );
      })}
    </>
  );
}
