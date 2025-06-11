import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Toaster } from "@/components/ui/toaster";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col font-body">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
}
