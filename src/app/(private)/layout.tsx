import { Sidebar } from '@/components/sidebar';
import React from 'react';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />

      {children}
    </div>
  );
}
