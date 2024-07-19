import { ReactNode } from 'react';
import { NavBar } from '../_components/nav-bar';
import { Flex } from '@radix-ui/themes';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <Flex className="h-dvh" gap="4">
      <NavBar />
      {children}
    </Flex>
  );
}
