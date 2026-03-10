"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks, siteName } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md border-b border-sky-500/10">
      {/* Sky glow line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

      <nav className="container mx-auto flex items-center justify-between px-4 lg:px-8 h-16" aria-label="Global">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded border border-sky-500/40 bg-sky-500/10 flex items-center justify-center group-hover:bg-sky-500/20 group-hover:border-sky-500/60 transition-all duration-300">
            <Cpu className="w-4 h-4 text-sky-400" />
          </div>
          <span
            className="font-display text-base font-bold tracking-widest uppercase text-foreground group-hover:text-sky-400 transition-colors duration-300"
            style={{ letterSpacing: '0.12em' }}
          >
            {siteName}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'relative px-4 py-2 text-sm font-display font-semibold tracking-wider uppercase transition-all duration-200',
                  active
                    ? 'text-sky-400'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-px bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                )}
              </Link>
            );
          })}
          <Link
            href="/docs/EdisonAltamiranoResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-1.5 text-xs font-mono font-medium tracking-widest uppercase border border-sky-500/40 text-sky-400 hover:bg-sky-500/10 hover:border-sky-500/70 transition-all duration-200 rounded-sm"
          >
            Resume
          </Link>
        </div>

        {/* Mobile menu */}
        <div className="flex lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-sky-400">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-background border-l border-sky-500/20 w-72"
            >
              <div className="flex items-center justify-between mb-8 pt-2">
                <span className="font-display text-sm font-bold tracking-widest uppercase text-sky-400">
                  Navigation
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-1">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'flex items-center gap-3 px-3 py-3 rounded-sm font-display font-semibold tracking-wider uppercase text-sm transition-all duration-200',
                        active
                          ? 'text-sky-400 bg-sky-500/10 border-l-2 border-sky-400'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      )}
                    >
                      {link.icon && <link.icon className="h-4 w-4 shrink-0" />}
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  href="/docs/EdisonAltamiranoResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center px-4 py-2 text-xs font-mono font-medium tracking-widest uppercase border border-sky-500/40 text-sky-400 hover:bg-sky-500/10 transition-all duration-200 rounded-sm"
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
