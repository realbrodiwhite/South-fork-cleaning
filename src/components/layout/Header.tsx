
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sparkles } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/smart-services', label: 'Smart Services' },
  { href: '/self-help-portal', label: 'Self-Help Portal' },
  { href: '/ai-recommendations', label: 'AI Recommendations' },
  { href: '/resupply-checklist', label: 'Resupply Checklist' },
  { href: '/request-service', label: 'Request Service' },
];

const dashboardItems = [
  { href: '/client', label: 'Client Dashboard' },
  { href: '/employee', label: 'Employee Dashboard' },
  { href: '/admin', label: 'Admin Dashboard' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline sm:inline-block text-lg">
            South Fork Cleaning &amp; Supply
          </span>
        </Link>
        
        <nav className="hidden flex-1 items-center space-x-1 md:flex">
          {navItems.map((item) => (
            <Button key={item.label} variant="link" asChild className="text-muted-foreground hover:text-foreground px-2 lg:px-3 text-xs lg:text-sm">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="hidden flex-1 items-center justify-end space-x-2 md:flex">
           {dashboardItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild size="sm">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 pt-6">
                {navItems.map((item) => (
                  <Link key={item.label} href={item.href} className="block px-2 py-1 text-lg hover:bg-accent hover:text-accent-foreground rounded-md">
                    {item.label}
                  </Link>
                ))}
                 <hr className="my-4"/>
                {dashboardItems.map((item) => (
                  <Link key={item.label} href={item.href} className="block px-2 py-1 text-lg hover:bg-accent hover:text-accent-foreground rounded-md">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

    