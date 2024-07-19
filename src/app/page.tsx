import { Flex } from '@radix-ui/themes';
import { redirect } from 'next/navigation';
import { NavBar } from './_components/nav-bar';

export default function Home() {
  // TODO: use redirect to /login if not logged in
  // if (true) {
  //   redirect('/login');
  // }

  //ml-60
  return (
    <Flex className="h-dvh">
      <NavBar />
      <main className="">
        <h1>Home</h1>
        <p>Welcome to the home page</p>
      </main>
    </Flex>
  );
}
