import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks, siteName } from '@/lib/constants';
// import { ThemeToggle } from './ThemeToggle'; // Removed ThemeToggle

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/80 dark:bg-background/80 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold text-primary">{siteName}</span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          {/* <ThemeToggle /> */} {/* Removed ThemeToggle */}
        </div>
        <div className="flex lg:hidden">
          {/* <ThemeToggle /> */} {/* Removed ThemeToggle */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open main menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="space-y-4 py-6">
                <Link href="/" className="block -m-1.5 p-1.5 mb-4">
                  <span className="text-xl font-bold text-primary">{siteName}</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-foreground hover:bg-muted hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
