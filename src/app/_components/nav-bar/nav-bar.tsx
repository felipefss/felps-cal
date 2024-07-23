import { Avatar, Separator, Text } from '@radix-ui/themes';

export function NavBar() {
  return (
    <nav className="flex flex-col border-r-2">
      <header className="grid justify-center gap-3 p-6 pb-4 pt-4 text-center">
        <Avatar fallback="JD" size="7" />
        <Text as="span">John Doe</Text>
      </header>

      <Separator size="4" />

      <section className="grid h-fill grid-rows-[1fr_auto]">
        <ul className="p-6">
          <li>Event Types</li>
          <li>Scheduled Events</li>
          <li>Availability</li>
          <li>Settings</li>
        </ul>

        <div className="p-6 pb-8">Log off</div>
      </section>
    </nav>
  );
}
