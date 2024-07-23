import { ReactNode } from 'react';
import { Button } from '@radix-ui/themes';
import NextLink from 'next/link';

interface Props {
  href: string;
  children: ReactNode;
}

export function Link({ href, children }: Props) {
  return (
    <Button
      variant="ghost"
      asChild={true}
      size="3"
      color="gray"
      style={{ width: '100%' }}
    >
      <NextLink href={href}>{children}</NextLink>
    </Button>
  );
}
