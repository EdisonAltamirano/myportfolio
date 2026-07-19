import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowRight, Cpu, Radio, Zap, Layers } from 'lucide-react';

const tracks = [
  {
    icon: Cpu,
    title: 'VLSI & Chip Design',
    desc: 'VLSI design flow with Cadence and Synopsys tools, plus an upcoming TSMC-oriented fabrication track.',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
  },
  {
    icon: Zap,
    title: 'Analog IC',
    desc: 'CMOS amplifier design, feedback theory, and SPICE simulation in Cadence Virtuoso.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
  },
  {
    icon: Radio,
    title: 'RF & Radar',
    desc: 'mm-Wave radar ICs at 77 GHz+, superheterodyne receivers, and RF front-end design.',
    color: 'text-teal-400',
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/20',
  },
  {
    icon: Layers,
    title: 'Mixed-Signal',
    desc: 'ADC/DAC architectures, OTA design, and switched-capacitor data converter circuits.',
    color: 'text-sky-300',
    bg: 'bg-sky-500/8',
    border: 'border-sky-500/15',
  },
];

export function StanfordTeaser() {
  return (
    <section className="py-20 relative bg-muted/10 overflow-hidden">
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, hsl(224,84%,4%), transparent)' }}
      />

      <div className="container px-4 mx-auto relative z-10">
        <FadeIn>
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                <span className="font-mono text-xs text-primary/80 tracking-widest uppercase">
                  Stanford University
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-2">
                MS Electrical Engineering
              </h2>
              <p className="font-mono text-sm text-primary tracking-wide">
                2024–Present · Arbabian Lab · TSMC Tape-out
              </p>
            </div>
            <Link
              href="/stanford"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold tracking-wider uppercase text-primary hover:text-sky-300 border border-white/12 hover:border-sky-500/60 px-6 py-3 rounded-md transition-all duration-300 group shrink-0"
            >
              Full Stanford Profile
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Track cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tracks.map((track, i) => {
              const Icon = track.icon;
              return (
                <FadeIn key={track.title} delay={`delay-${i * 75}`}>
                  <div className={`rounded-lg border ${track.border} bg-card/70 p-5 hover:bg-card/70 transition-all duration-300 group`}>
                    <div className={`w-9 h-9 rounded-md ${track.bg} flex items-center justify-center mb-3`}>
                      <Icon className={`w-4.5 h-4.5 ${track.color}`} />
                    </div>
                    <h3 className={`font-display text-sm font-bold ${track.color} mb-1.5 tracking-wide`}>
                      {track.title}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed">
                      {track.desc}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Quick stats strip */}
          <div className="mt-8 flex flex-wrap gap-6 items-center justify-center md:justify-start border-t border-border/30 pt-6">
            {[
              { label: '6 courses', sub: 'EE271, 272, 372, 214A, 233, 256' },
              { label: '1 research lab', sub: 'Arbabian Lab · mm-Wave Radar' },
              { label: 'TSMC track', sub: 'EE372 · Upcoming' },
              { label: '2 chip designs', sub: 'Digital DNN + Analog Imager' },
            ].map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="font-display text-sm font-bold text-primary">{s.label}</div>
                <div className="font-mono text-[10px] text-muted-foreground/75 tracking-wide mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to top, hsl(224,84%,4%), transparent)' }}
      />
    </section>
  );
}
