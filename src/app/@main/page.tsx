import { redirect } from 'next/navigation';

export default function Home() {
  // TODO: use redirect to /login if not logged in
  // if (true) {
  //   redirect('/login');
  // }

  return (
    <main className="">
      <h1>Home</h1>
      <p>Welcome to the home page</p>
    </main>
  );
}
