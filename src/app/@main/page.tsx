import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/event-types');

  return null;
}
