'use client';

import { Link } from './link';

export function NavItems() {
  // This one is a client component, because it will need to keep state of the current page
  return (
    <>
      <li>
        <Link href="#">Event Types</Link>
      </li>
      <li>
        <Link href="#">Scheduled Events</Link>
      </li>
      <li>
        <Link href="#">Availability</Link>
      </li>
      <li>
        <Link href="#">Settings</Link>
      </li>
    </>
  );
}
