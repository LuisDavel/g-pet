import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../components/ui/globals.css';
// import { SessionProvider } from 'next-auth/react';

import React from 'react';
import { ThemeProvider } from '@/components/ui/theme-provider';
import AuthGuard from '@/components/auth-guard';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <SessionProvider>
    <html lang="en">
      <body className={inter.className}>
        <Toaster richColors expand />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <AuthGuard>{children}</AuthGuard> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
    // </SessionProvider>
  );
}
