"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
import { TypingText } from '@/components/ui/typing-text';
import { ArrowRight, ExternalLink } from 'lucide-react';

const expertiseTags = [
  'Radar IC Design',
  'VLSI @ TSMC',
  'Multimodal AI',
  'Chip Fabrication',
  'Autonomous Systems',
  'Full-Stack Dev',
];

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-circuit">
      {/* Scan line */}
      <div className="scan-line" />

      {/* ── Radar animation ─────────────────────────────────── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="relative" style={{ width: 640, height: 640, opacity: 0.11 }}>
          {/* Concentric rings */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                inset: `${(5 - i) * 12.5}%`,
                border: `1px solid rgba(45, 212, 191, ${0.15 + i * 0.08})`,
              }}
            />
          ))}
          {/* Cross-hairs */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-teal-400/20" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-teal-400/20" />
          {/* 45-degree lines */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(45deg, transparent calc(50% - 0.5px), rgba(45,212,191,0.12) 50%, transparent calc(50% + 0.5px))',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(-45deg, transparent calc(50% - 0.5px), rgba(45,212,191,0.12) 50%, transparent calc(50% + 0.5px))',
            }}
          />
          {/* Sweep */}
          <div
            className="absolute inset-0 rounded-full animate-radar-sweep"
            style={{
              background:
                'conic-gradient(from 0deg, transparent 280deg, rgba(56,189,248,0.04) 310deg, rgba(56,189,248,0.32) 360deg)',
            }}
          />
          {/* Radar blips */}
          <div
            className="absolute w-2.5 h-2.5 rounded-full bg-sky-400"
            style={{ top: '22%', left: '62%' }}
          >
            <div className="absolute inset-0 rounded-full bg-sky-400 animate-radar-blip" />
          </div>
          <div
            className="absolute w-2 h-2 rounded-full bg-teal-400"
            style={{ top: '67%', left: '30%' }}
          >
            <div className="absolute inset-0 rounded-full bg-teal-400 animate-radar-blip" style={{ animationDelay: '1.2s' }} />
          </div>
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-sky-300"
            style={{ top: '43%', left: '75%' }}
          >
            <div className="absolute inset-0 rounded-full bg-sky-300 animate-radar-blip" style={{ animationDelay: '2.1s' }} />
          </div>
        </div>
      </div>

      {/* ── Radial gradient overlay ──────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 50% 50%, transparent 0%, hsl(224,84%,4%) 70%)',
        }}
      />

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="container px-4 mx-auto relative z-10 text-center">
        <FadeIn className="max-w-4xl mx-auto">

          {/* Stanford pill badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-sky-500/25 bg-sky-500/6 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span
              className="font-mono text-xs text-sky-400/80 tracking-widest uppercase"
              style={{ letterSpacing: '0.14em' }}
            >
              Stanford University · MS Electrical Engineering
            </span>
          </div>

          {/* Name */}
          <h1 className="font-display font-bold mb-5 tracking-tight leading-none">
            <span
              className="block text-foreground/90"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}
            >
              EDISON
            </span>
            <span
              className="block text-gradient-sky"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}
            >
              ALTAMIRANO
            </span>
          </h1>

          {/* Role line */}
          <p className="font-display text-lg md:text-2xl text-muted-foreground/80 mb-3 tracking-wide font-medium">
            Arbabian Lab Researcher &nbsp;·&nbsp; VLSI Designer &nbsp;·&nbsp; Radar & AI Systems
          </p>

          {/* Body subtitle */}
          <p className="font-body text-base text-muted-foreground/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Building next-generation sensors on silicon | from radar-integrated circuits
            fabricated at TSMC to multimodal AI perception systems.
          </p>

          {/* Typing line */}
          <div className="flex justify-center mb-10 h-6">
            <div className="font-mono text-sm tracking-widest">
              <span className="text-muted-foreground/40">$ focus &nbsp;</span>
              <TypingText
                texts={expertiseTags}
                className="text-teal-400"
                cursorClassName="text-sky-400"
                typingSpeed={65}
                deletingSpeed={40}
                pauseTime={2200}
              />
            </div>
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-sky-500 hover:bg-sky-400 text-black font-display font-bold tracking-wider shadow-lg shadow-sky-500/20 border-0 px-8"
            >
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-teal-500/30 text-teal-400 hover:bg-teal-400/8 hover:border-teal-400/50 font-display font-semibold tracking-wider px-8"
            >
              <Link href="/research">Research & Publications</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-muted-foreground hover:text-foreground font-display font-semibold tracking-wider"
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          {/* Quick stats */}
          <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              { value: 'EE391', label: 'Arbabian Lab Research' },
              { value: 'EE372', label: 'Upcoming IC Fabrication' },
              { value: 'EE272', label: 'VLSI Design' },
              { value: '4×', label: 'IEEE Publications' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-xl font-bold text-sky-400">{s.value}</div>
                <div className="font-mono text-xs text-muted-foreground/60 tracking-wider uppercase mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, hsl(224,84%,4%))',
        }}
      />
    </section>
  );
}
