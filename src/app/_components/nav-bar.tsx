import { Avatar, Button, Separator, Text } from '@radix-ui/themes';
import { SignOut } from '@phosphor-icons/react/dist/ssr';
import { NavItems } from './nav-items';

export function NavBar() {
  return (
    <nav className="flex min-w-48 flex-col border-r-2 bg-slate-100">
      <header className="grid justify-center gap-3 px-6 py-4 text-center">
        <Avatar fallback="JD" size="7" />
        <Text as="span">John Doe</Text>
      </header>

      <Separator size="4" />

      <section className="grid h-fill grid-rows-[1fr_auto]">
        <ul className="flex flex-col gap-4 p-6 text-center">
          <NavItems />
        </ul>

        <div className="px-6 py-4">
          <Button
            className="hover:cursor-pointer"
            style={{ width: '100%' }}
            variant="outline"
            color="ruby"
          >
            Log Out
            <SignOut size="22" />
          </Button>
        </div>
      </section>
    </nav>
  );
}
