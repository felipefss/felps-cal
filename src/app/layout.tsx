import './globals.css';
import '@radix-ui/themes/styles.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Felps Cal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme accentColor="indigo" grayColor="auto" radius="medium">
          {children}
        </Theme>
      </body>
    </html>
  );
}
