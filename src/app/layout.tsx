import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { Theme } from "@radix-ui/themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Felps Cal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <Theme accentColor="indigo" grayColor="auto" radius="medium">
            {children}
          </Theme>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
