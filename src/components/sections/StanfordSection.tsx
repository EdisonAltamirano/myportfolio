"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';
import { stanfordCourses, type StanfordCourse } from '@/lib/constants';
import { Radio, Cpu, Zap, FlaskConical, ChevronRight, ExternalLink, FileText, ChevronDown, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getAssetPath } from '@/lib/utils';

const areaConfig = {
  research: {
    icon: Radio,
    label: 'Research',
    color: 'teal',
    border: 'border-teal-500/25',
    bg: 'bg-teal-500/5',
    dot: 'bg-teal-400',
    text: 'text-teal-400',
    glow: 'hover:border-teal-400/45 hover:shadow-[0_0_24px_rgba(45,212,191,0.12)]',
    badge: 'bg-teal-500/15 text-teal-300 border-teal-500/30',
  },
  vlsi: {
    icon: Cpu,
    label: 'VLSI',
    color: 'sky',
    border: 'border-sky-500/25',
    bg: 'bg-sky-500/5',
    dot: 'bg-sky-400',
    text: 'text-sky-400',
    glow: 'hover:border-sky-400/45 hover:shadow-[0_0_24px_rgba(56,189,248,0.12)]',
    badge: 'bg-sky-500/15 text-primary border-white/12',
  },
  analog: {
    icon: Zap,
    label: 'Analog',
    color: 'violet',
    border: 'border-violet-500/25',
    bg: 'bg-violet-500/5',
    dot: 'bg-violet-400',
    text: 'text-violet-400',
    glow: 'hover:border-violet-400/45 hover:shadow-[0_0_24px_rgba(139,92,246,0.12)]',
    badge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
  },
};

const statusConfig = {
  active:    { label: 'ACTIVE',    cls: 'bg-green-500/15 text-green-300 border-green-500/30' },
  completed: { label: 'COMPLETED', cls: 'bg-muted/50 text-muted-foreground border-border' },
  upcoming:  { label: 'UPCOMING',  cls: 'bg-violet-500/15 text-violet-300 border-violet-500/30' },
};

function CourseCard({ course }: { course: StanfordCourse }) {
  const area   = areaConfig[course.area];
  const status = statusConfig[course.status];
  const Icon   = area.icon;

  return (
    <div
      className={cn(
        'relative rounded-lg border p-5 transition-all duration-300 bg-card/70 group cursor-default',
        area.border,
        area.glow
      )}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-3 gap-2">
        <div className="flex items-center gap-2.5">
          <div className={cn('w-8 h-8 rounded-md flex items-center justify-center shrink-0', area.bg)}>
            <Icon className={cn('w-4 h-4', area.text)} />
          </div>
          <div>
            <div className={cn('font-mono text-xs font-bold tracking-widest', area.text)}>
              {course.code}
            </div>
            <div className="font-display text-sm font-semibold text-foreground leading-tight">
              {course.title}
            </div>
          </div>
        </div>
        <span
          className={cn(
            'shrink-0 font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md border',
            status.cls
          )}
        >
          {status.label}
        </span>
      </div>

      {/* Description */}
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
        {course.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground/80">{course.semester}</span>
        {course.highlight && (
          <span
            className={cn(
              'font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md border',
              area.badge
            )}
          >
            {course.highlight}
          </span>
        )}
      </div>
    </div>
  );
}

export function StanfordSection() {
  const researchCourses = stanfordCourses.filter((c) => c.area === 'research');
  const vlsiCourses     = stanfordCourses.filter((c) => c.area === 'vlsi');
  const analogCourses   = stanfordCourses.filter((c) => c.area === 'analog');

  const [showRadio,  setShowRadio]  = useState(false);
  const [showLayout, setShowLayout] = useState(false);

  return (
    <section className="py-20 relative bg-circuit overflow-hidden">
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, hsl(224,84%,4%), transparent)' }}
      />

      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] mb-5">
            <FlaskConical className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono text-xs text-primary/80 tracking-widest uppercase">
              Stanford University — Electrical Engineering
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Graduate Research &{' '}
            <span className="text-gradient-sky">Advanced Coursework</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Pursuing an MS in EE at Stanford with a focus on integrated circuit design — from
            mm-wave radar sensors to VLSI chip fabrication at TSMC.
          </p>
        </FadeIn>

        {/* ── Research ────────────────────────────────────────────── */}
        <FadeIn delay="delay-100">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-teal-400" />
                <span className="font-display text-sm font-bold tracking-widest uppercase text-teal-400">
                  Research Lab
                </span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-teal-500/30 to-transparent" />
            </div>

            {researchCourses.map((c) => (
              <div
                key={c.code}
                className="rounded-xl border border-teal-500/20 bg-card/65 p-6 md:p-8 transition-all duration-300 hover:border-teal-400/35 hover:shadow-[0_0_32px_rgba(45,212,191,0.08)]"
              >
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/25 bg-teal-500/8 mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                      <span className="font-mono text-xs text-teal-400/90 tracking-widest uppercase">Active Research</span>
                    </div>
                    <div className="font-mono text-sm font-bold text-teal-400 mb-1 tracking-wider">{c.code}</div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">{c.title}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">{c.description}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="font-mono text-xs text-muted-foreground/80 uppercase tracking-widest mb-3">
                      Research Focus Areas
                    </div>
                    {[
                      'mm-Wave & radar integrated circuit design',
                      'Multimodal sensor fusion (radar + vision + AI)',
                      'RF signal processing for perception tasks',
                      'Low-power sensor IC architectures',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <ChevronRight className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" />
                        <span className="font-body text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── VLSI ────────────────────────────────────────────────── */}
        <FadeIn delay="delay-200">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-primary" />
                <span className="font-display text-sm font-bold tracking-widest uppercase text-primary">
                  VLSI & Chip Design
                </span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-sky-500/30 to-transparent" />
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {vlsiCourses.map((c, i) => (
                <FadeIn key={c.code} delay={`delay-${(i + 1) * 100}`}>
                  <CourseCard course={c} />
                </FadeIn>
              ))}
            </div>

            {/* EE272 — Chip Layout Viewer */}
            <FadeIn delay="delay-300">
              <div className="rounded-xl border border-white/10 bg-card/65 overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setShowLayout(!showLayout)}
                  className="w-full flex items-center justify-between px-6 py-4 group hover:bg-sky-500/5 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-white/[0.05] flex items-center justify-center">
                      <Layers className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="font-mono text-xs text-primary font-bold tracking-widest uppercase mb-0.5">
                        EE272 — Final Project
                      </div>
                      <div className="font-display text-sm font-semibold text-foreground">
                        SKY130 DNN Accelerator — Interactive VLSI Layout Viewer
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-4">
                    <span className="font-mono text-[10px] text-primary/70 uppercase tracking-wider hidden sm:block">
                      {showLayout ? 'collapse' : 'view chip layout'}
                    </span>
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 text-primary/60 transition-transform duration-300',
                        showLayout && 'rotate-180'
                      )}
                    />
                  </div>
                </button>

                <div
                  className={cn(
                    'overflow-hidden transition-all duration-500',
                    showLayout ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'
                  )}
                >
                  <div className="px-4 pb-4">
                    <div className="rounded-lg overflow-hidden border border-white/10" style={{ height: '560px' }}>
                      {showLayout && (
                        <iframe
                          src={getAssetPath('/272-Course/viewer.html')}
                          className="w-full h-full border-0"
                          title="VLSI Layout Viewer — SKY130 DNN Accelerator"
                          sandbox="allow-scripts allow-same-origin"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </FadeIn>

        {/* ── Analog ──────────────────────────────────────────────── */}
        <FadeIn delay="delay-300">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-violet-400" />
                <span className="font-display text-sm font-bold tracking-widest uppercase text-violet-400">
                  Analog IC Design
                </span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-violet-500/30 to-transparent" />
            </div>

            {/* EE233 — FM Radio Project (expandable) */}
            <div className="rounded-xl border border-violet-500/20 bg-card/65 overflow-hidden mb-5 transition-all duration-300 hover:border-violet-400/30">
              {/* Project summary row */}
              <div className="flex flex-col md:flex-row md:items-start gap-5 p-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-violet-400 border border-violet-500/30 bg-violet-500/10 px-2 py-0.5 rounded-md">EE233 Final Project</span>
                    <span className="font-mono text-[10px] text-green-300 border border-green-500/30 bg-green-500/15 px-2 py-0.5 rounded-md font-bold tracking-widest uppercase">COMPLETED</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    FM Superheterodyne Radio Receiver
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                    Dual-conversion FM receiver (87.5–108 MHz). Uses a{' '}
                    <span className="text-violet-300 font-medium">Si5351 PLL clock IC</span> to
                    generate LO and quadrature I/Q signals via I²C. A{' '}
                    <span className="text-violet-300 font-medium">Raspberry Pi Pico</span> hosts a
                    WiFi HTTP server with an embedded{' '}
                    <span className="text-violet-300 font-medium">real-time spectrum analyzer</span>{' '}
                    and interactive tuning interface — all served from the microcontroller.
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[
                      ['Architecture', 'Dual-conversion heterodyne'],
                      ['Stage 1 IF', '10.700 MHz'],
                      ['Stage 2 Low-IF', '250 kHz target'],
                      ['I/Q Demod', 'CLK0/CLK1 at 90° phase'],
                      ['LO Control', 'Si5351 PLL via I²C'],
                      ['Interface', 'WiFi HTTP + Spectrum UI'],
                    ].map(([k, v]) => (
                      <div key={k} className="rounded-md bg-violet-500/5 border border-violet-500/15 px-3 py-2">
                        <div className="font-mono text-[10px] text-muted-foreground/80 uppercase tracking-wider">{k}</div>
                        <div className="font-body text-xs text-foreground mt-0.5">{v}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={getAssetPath('/233-FinalProject/FinalProject.pdf')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-violet-400 hover:text-violet-300 border border-violet-500/30 hover:border-violet-400/50 bg-violet-500/5 hover:bg-violet-500/10 px-3 py-1.5 rounded-md transition-all duration-200"
                    >
                      <FileText className="w-3 h-3" /> Project Report (PDF)
                    </a>
                    <a
                      href="https://youtube.com/shorts/ubQI5udW8H8?si=RdDYvzP_OdoH4A6_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-violet-400 hover:text-violet-300 border border-violet-500/30 hover:border-violet-400/50 bg-violet-500/5 hover:bg-violet-500/10 px-3 py-1.5 rounded-md transition-all duration-200"
                    >
                      <ExternalLink className="w-3 h-3" /> Live Demo
                    </a>
                  </div>
                </div>
                {/* Signal chain diagram */}
                <div className="md:w-52 rounded-lg bg-background/60 border border-violet-500/15 p-4 font-mono text-xs text-muted-foreground/85 leading-relaxed shrink-0">
                  <div className="text-violet-400/80 text-[10px] tracking-widest uppercase mb-2">Signal Chain</div>
                  <div className="space-y-1">
                    <div className="text-foreground/80">FM Antenna</div>
                    <div className="text-muted-foreground/40 pl-2">↓  87.5–108 MHz RF</div>
                    <div className="text-foreground/80">Mixer Stage 1</div>
                    <div className="text-muted-foreground/40 pl-2">↓  CLK2 LO (Si5351)</div>
                    <div className="text-violet-300">IF ≈ 10.700 MHz</div>
                    <div className="text-muted-foreground/40 pl-2">↓  I/Q (CLK0·CLK1)</div>
                    <div className="text-foreground/80">Quadrature Mixer</div>
                    <div className="text-muted-foreground/40 pl-2">↓  90° phase split</div>
                    <div className="text-violet-300">Low-IF ≈ 250 kHz</div>
                    <div className="text-muted-foreground/40 pl-2">↓  Demod → Audio</div>
                  </div>
                </div>
              </div>

              {/* Expandable Radio Interface */}
              <div className="border-t border-violet-500/15">
                <button
                  onClick={() => setShowRadio(!showRadio)}
                  className="w-full flex items-center justify-between px-6 py-3 group hover:bg-violet-500/5 transition-colors duration-200"
                >
                  <div className="flex items-center gap-2">
                    <Radio className="w-3.5 h-3.5 text-violet-400/70" />
                    <span className="font-mono text-xs text-violet-400/80 uppercase tracking-widest">
                      {showRadio ? 'Hide tuning interface' : 'Show live tuning interface'}
                    </span>
                  </div>
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 text-violet-400/50 transition-transform duration-300',
                      showRadio && 'rotate-180'
                    )}
                  />
                </button>

                <div
                  className={cn(
                    'overflow-hidden transition-all duration-500',
                    showRadio ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
                  )}
                >
                  <div className="px-4 pb-4">
                    <div className="rounded-lg overflow-hidden border border-violet-500/15" style={{ height: '620px' }}>
                      {showRadio && (
                        <iframe
                          src={getAssetPath('/233-FinalProject/radioUI.html')}
                          className="w-full h-full border-0"
                          title="FM Radio Tuning Interface"
                          sandbox="allow-scripts allow-same-origin"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {analogCourses.filter(c => c.code !== 'EE233').map((c, i) => (
                <FadeIn key={c.code} delay={`delay-${(i + 1) * 100}`}>
                  <CourseCard course={c} />
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to top, hsl(224,84%,4%), transparent)' }}
      />
    </section>
  );
}
