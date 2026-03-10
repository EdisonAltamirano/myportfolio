import Link from 'next/link';
import { siteName } from '@/lib/constants';
import { PageViewTracker } from '@/components/analytics/PageViewTracker';
import { Cpu, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/10 border-t border-sky-500/10 text-muted-foreground py-12 relative">
      <PageViewTracker />

      {/* Sky glow line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded border border-sky-500/30 bg-sky-500/10 flex items-center justify-center">
                <Cpu className="w-3.5 h-3.5 text-sky-400" />
              </div>
              <span className="font-display text-sm font-bold tracking-widest uppercase text-foreground">
                {siteName}
              </span>
            </div>
            <p className="font-body text-sm text-muted-foreground/70 leading-relaxed">
              Stanford EE Researcher · VLSI Designer · Radar & AI Systems.
              Building at the intersection of silicon and intelligence.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-mono text-xs text-sky-400/70 tracking-widest uppercase mb-4">Navigation</div>
            <div className="space-y-2">
              {[
                { href: '/about',    label: 'About' },
                { href: '/stanford', label: 'Stanford' },
                { href: '/projects', label: 'Projects' },
                { href: '/research', label: 'Research' },
                { href: '/contact',  label: 'Contact' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block font-body text-sm text-muted-foreground/70 hover:text-sky-400 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-mono text-xs text-sky-400/70 tracking-widest uppercase mb-4">Connect</div>
            <div className="space-y-3">
              <Link
                href="https://www.linkedin.com/in/edison-altamirano-avila-55a0341a3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-muted-foreground/70 hover:text-teal-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </Link>
              <Link
                href="/docs/EdisonAltamiranoResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-muted-foreground/70 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" /> Download CV
              </Link>
              <a
                href="https://www.bacmodelos.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-muted-foreground/70 hover:text-teal-400 transition-colors"
              >
                <Github className="w-3.5 h-3.5" /> BACModelos.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-muted-foreground/50">
            &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-foreground/40">
            Built with Next.js · Deployed on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
}
