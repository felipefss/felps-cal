import { ReactNode } from 'react';
import { NavBar } from '../_components/nav-bar';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-dvh">
      <NavBar />
      {children}
    </div>
  );
}
