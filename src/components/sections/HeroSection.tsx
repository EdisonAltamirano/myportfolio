"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowRight, ExternalLink, FileText } from 'lucide-react';

const highlights = [
  { value: 'Stanford EE', label: 'MS candidate, Arbabian Lab' },
  { value: 'VLSI + Radar', label: 'IC design, sensing, fabrication track' },
  { value: 'Robotics', label: 'Autonomous vehicles, ROS, perception' },
  { value: 'Full-stack', label: 'Production apps and engineering systems' },
];

const focusAreas = [
  'Radar IC design',
  'VLSI systems',
  'Autonomous robotics',
  'Multimodal AI',
  'Embedded software',
  'Product engineering',
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-circuit">
      <div className="container mx-auto px-4 py-24 sm:py-28 lg:px-8 lg:py-36">
        <FadeIn className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-8 flex max-w-[18rem] items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white/80 px-4 py-2 text-center text-xs leading-5 text-muted-foreground shadow-sm shadow-black/5 sm:inline-flex sm:max-w-full sm:text-sm">
            <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span className="min-w-0 truncate sm:whitespace-normal">Stanford Electrical Engineering · Research, silicon, robotics, and software</span>
          </div>

          <h1 className="mx-auto max-w-[22rem] text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-foreground sm:max-w-none sm:text-7xl sm:tracking-[-0.07em] lg:text-8xl">
            Edison Altamirano builds systems from silicon to software.
          </h1>

          <p className="mx-auto mt-8 max-w-[18rem] text-base leading-7 text-muted-foreground [text-wrap:wrap] sm:max-w-3xl sm:text-xl sm:leading-8 sm:[text-wrap:pretty]">
            Stanford EE researcher at Arbabian Lab, VLSI designer, and robotics engineer with work spanning mm-wave radar sensors, chip design, autonomous vehicles, and production-grade full-stack platforms.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-full bg-foreground px-6 text-sm font-semibold text-white shadow-none transition-transform duration-150 hover:scale-[1.01] hover:bg-foreground/90 active:scale-[0.98]">
              <Link href="/projects">
                View selected work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-full border-black/10 bg-transparent px-6 text-sm font-semibold text-foreground hover:bg-black/[0.04]">
              <Link href="/docs/EdisonAltamiranoResume.pdf" target="_blank" rel="noopener noreferrer">
                Resume <FileText className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="h-12 rounded-full px-6 text-sm font-semibold text-muted-foreground hover:bg-black/[0.04] hover:text-foreground">
              <Link href="/contact">
                Contact <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.value} className="rounded-2xl border border-black/10 bg-white/80 p-5 text-left shadow-sm shadow-black/5">
                <div className="text-base font-semibold text-foreground">{item.value}</div>
                <div className="mt-2 text-sm leading-6 text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {focusAreas.map((area) => (
              <span key={area} className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                {area}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
