import { Avatar, Flex, Grid, Separator } from '@radix-ui/themes';

export function NavBar() {
  //fixed h-full w-60
  return (
    <nav className="border-r-2 flex flex-col">
      <header className="p-6 text-center">
        <Avatar fallback="A" size="7" />
      </header>

      <Separator size="4" />

      <Flex className="h-fill" direction="column" justify="between">
        <ul className="p-6">
          <li>Event Types</li>
          <li>Scheduled Events</li>
          <li>Availability</li>
          <li>Settings</li>
        </ul>

        <div className="p-6 pb-8">Log off</div>
      </Flex>
    </nav>
  );
}
