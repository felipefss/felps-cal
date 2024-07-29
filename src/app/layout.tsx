import '@radix-ui/themes/styles.css';
import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Felps Cal',
};

export default function RootLayout({
  main,
  login,
}: Readonly<{
  main: React.ReactNode;
  login: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme accentColor="indigo" grayColor="auto" radius="medium">
          {main}
        </Theme>
      </body>
    </html>
  );
}
