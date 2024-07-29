import { redirect } from 'next/navigation';

export default function Home() {
  // redirect('/event-types');

  return (
    <main className="">
      <h1>Home</h1>
      <p>Welcome to the home page</p>
    </main>
  );
}
