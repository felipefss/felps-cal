import { Avatar, Grid, Separator } from '@radix-ui/themes';

export function NavBar() {
  return (
    <nav className="border-r-2 flex flex-col">
      <header className="p-6 text-center">
        <Avatar fallback="A" size="7" />
      </header>

      <Separator size="4" />

      <Grid className="h-fill" rows="1fr auto">
        <ul className="p-6">
          <li>Event Types</li>
          <li>Scheduled Events</li>
          <li>Availability</li>
          <li>Settings</li>
        </ul>

        <div className="p-6 pb-8">Log off</div>
      </Grid>
    </nav>
  );
}
