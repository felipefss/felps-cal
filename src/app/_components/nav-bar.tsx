import { Avatar, Separator, Text } from '@radix-ui/themes';
import { Link } from './link';

export function NavBar() {
  return (
    <nav className="flex flex-col border-r-2 bg-slate-100">
      <header className="grid justify-center gap-3 p-6 pb-4 pt-4 text-center">
        <Avatar fallback="JD" size="7" />
        <Text as="span">John Doe</Text>
      </header>

      <Separator size="4" />

      <section className="grid h-fill grid-rows-[1fr_auto]">
        <ul className="flex flex-col gap-4 p-6 text-center">
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
        </ul>

        <div className="p-6 pb-8">Log off</div>
      </section>
    </nav>
  );
}
