import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SidebarProvider } from '@/components/providers/SidebarProvider';
import { Sidebar } from '@/components/Sidebar';
import { BottomNav } from '@/components/BottomNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LearnHub - Next-Gen Learning Dashboard',
  description: 'Interactive learning dashboard with real-time progress tracking',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex">
            <Sidebar />
            <main className="flex-1 min-h-screen transition-all duration-300">
              {children}
            </main>
            <BottomNav />
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}