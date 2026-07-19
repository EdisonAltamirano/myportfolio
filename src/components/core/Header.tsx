"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks, siteName } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useState } from 'react';

function isActiveRoute(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-background/86 backdrop-blur-xl supports-[backdrop-filter]:bg-background/76">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8" aria-label="Primary navigation">
        <Link href="/" className="group flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 bg-white/80 text-primary transition-colors duration-200 group-hover:border-black/15 group-hover:bg-black/[0.05]">
            <Cpu className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold tracking-[-0.01em] text-foreground">
            {siteName}
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = isActiveRoute(pathname, link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  active
                    ? 'bg-foreground text-white'
                    : 'text-muted-foreground hover:bg-black/[0.04] hover:text-foreground'
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/docs/EdisonAltamiranoResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 rounded-full border border-black/10 px-3.5 py-2 text-sm font-medium text-foreground transition-colors duration-150 hover:border-black/20 hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Resume
          </Link>
        </div>

        <div className="flex lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 border-l border-black/10 bg-background/95 p-0 backdrop-blur-xl">
              <div className="border-b border-black/10 px-6 py-5">
                <div className="text-sm font-semibold text-foreground">Navigation</div>
                <p className="mt-1 text-sm text-muted-foreground">Portfolio sections and resume.</p>
              </div>
              <div className="space-y-1 p-4">
                {navLinks.map((link) => {
                  const active = isActiveRoute(pathname, link.href);
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors duration-150',
                        active ? 'bg-foreground text-white' : 'text-muted-foreground hover:bg-black/[0.04] hover:text-foreground'
                      )}
                    >
                      {Icon && <Icon className="h-4 w-4 shrink-0" />}
                      {link.label}
                    </Link>
                  );
                })}
                <Link
                  href="/docs/EdisonAltamiranoResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-4 block rounded-xl border border-black/10 px-4 py-3 text-center text-sm font-medium text-foreground transition-colors duration-150 hover:border-black/20 hover:bg-black/[0.04]"
                >
                  Download Resume
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
