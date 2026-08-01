import { Metadata } from 'next';
import { FadeIn } from '@/components/animations/FadeIn';
import {
  Cpu,
  Zap,
  Radio,
  ChevronRight,
  ExternalLink,
  FileText,
  CheckCircle2,
  Clock,
  Circle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Stanford EE — Edison Altamirano',
  description:
    'MS Electrical Engineering at Stanford: Arbabian Lab mm-Wave radar research, EE271/EE272 VLSI design, an EE372 mixed-signal chip in TSMC 180 nm, and analog/RF coursework.',
};

/* ── Status badge config ──────────────────────────────── */
const statusBadge = {
  active: {
    label: 'ACTIVE',
    cls: 'bg-primary/10 text-primary border-primary/25',
    dot: 'bg-primary',
    Icon: Circle,
  },
  completed: {
    label: 'COMPLETED',
    cls: 'bg-muted text-muted-foreground border-border',
    dot: 'bg-muted-foreground',
    Icon: CheckCircle2,
  },
  upcoming: {
    label: 'UPCOMING',
    cls: 'bg-primary/10 text-primary border-primary/25',
    dot: 'bg-primary',
    Icon: Clock,
  },
};

/* ── Skill tag ────────────────────────────────────────── */
function SkillTag({ label, color = 'sky' }: { label: string; color?: string }) {
  const colorMap: Record<string, string> = {
    sky: 'border-primary/25 bg-white/80 text-primary',
    teal: 'border-border bg-primary/10 text-primary',
    violet: 'border-border bg-primary/10 text-primary',
  };
  return (
    <span className={cn('font-mono text-[10px] px-2 py-0.5 rounded-md border tracking-wide', colorMap[color] ?? colorMap.sky)}>
      {label}
    </span>
  );
}

/* ── Section heading ──────────────────────────────────── */
function TrackHeading({
  icon: Icon,
  label,
  color,
  gradientColor,
}: {
  icon: React.ElementType;
  label: string;
  color: string;
  gradientColor: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="flex items-center gap-2">
        <Icon className={cn('w-4 h-4', color)} />
        <span className={cn('font-display text-sm font-bold tracking-widest uppercase', color)}>
          {label}
        </span>
      </div>
      <div className={cn('flex-1 h-px bg-gradient-to-r to-transparent', gradientColor)} />
    </div>
  );
}

export default function StanfordPage() {
  return (
    <div className="min-h-screen bg-circuit">
      <div className="container mx-auto px-4 py-14 lg:px-8">

        {/* ══ SECTION 1: HERO ══════════════════════════════════ */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-white/80 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs text-primary/80 tracking-widest uppercase">
              MS Electrical Engineering · 2024–Present
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Stanford EE{' '}
            <span className="text-foreground">Courses & Research</span>
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            My graduate work connects RF/mm-wave sensing research, VLSI physical design,
            analog/RF lab hardware, and mixed-signal circuits for intelligent sensing systems.
          </p>

          {/* Quick stat row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { value: '8', label: 'Course codes' },
              { value: '1', label: 'Research lab' },
              { value: 'RF', label: 'Sensing focus' },
              { value: '2', label: 'VLSI design tracks' },
            ].map((s) => (
              <div key={s.label} className="text-center px-4">
                <div className="font-display text-3xl font-bold text-foreground">{s.value}</div>
                <div className="font-mono text-xs text-muted-foreground/80 tracking-wider uppercase mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay="delay-75" className="mb-16">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'RF / sensing systems',
                body: 'Arbabian Lab research and EE233 radio work show signal-chain thinking from front-end hardware to perception-facing data.',
              },
              {
                title: 'ASIC / VLSI discipline',
                body: 'EE271/EE272 prove comfort with RTL, synthesis, physical design, timing closure, and verification constraints.',
              },
              {
                title: 'Physical AI foundation',
                body: 'Analog, mixed-signal, and radar coursework support roles that bridge sensors, embedded systems, and ML perception.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-5 text-left shadow-sm shadow-black/5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80">Technical area</div>
                <h2 className="mt-2 font-display text-lg font-semibold text-foreground">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ══ SECTION 2: ARBABIAN LAB RESEARCH ════════════════ */}
        <FadeIn delay="delay-100" className="mb-16">
          <TrackHeading
            icon={Radio}
            label="Arbabian Lab Research"
            color="text-primary"
            gradientColor="from-primary/20"
          />

          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md border bg-primary/10 text-primary border-primary/25">
                    ACTIVE RESEARCH
                  </span>
                  <span className="font-mono text-xs text-primary font-bold">EE391</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Arbabian Lab — mm-Wave Radar & Sensing Research
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed max-w-3xl">
                  The Arbabian Lab at Stanford designs next-generation mm-wave radar systems for
                  gesture recognition, vehicular situational awareness, and imaging. Research
                  combines custom RF/analog ICs with machine learning algorithms for real-time sensing.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Research areas */}
              <div>
                <div className="font-mono text-xs text-muted-foreground/80 uppercase tracking-widest mb-4">
                  Research Areas
                </div>
                <div className="space-y-3">
                  {[
                    'mm-Wave radar IC design (77 GHz+ systems)',
                    'Multimodal sensor fusion: radar + vision + AI',
                    'Closed-loop adaptive sensing circuit architectures',
                    'Real-time signal processing for radar perception',
                    'Motion compensation for non-stationary platforms',
                    'Low-power RF/mmWave IoT device design',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <ChevronRight className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                      <span className="font-body text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </FadeIn>

        {/* ══ SECTION 3: VLSI & CHIP DESIGN TRACK ════════════ */}
        <FadeIn delay="delay-150" className="mb-16">
          <TrackHeading
            icon={Cpu}
            label="VLSI & Chip Design Track"
            color="text-primary"
            gradientColor="from-primary/20"
          />

          {/* Track overview */}
          <div className="rounded-xl border border-black/10 bg-white/70 px-5 py-4 mb-6">
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary font-medium">Track Overview:</span>{' '}
              The VLSI design sequence at Stanford covers the complete chip design flow from RTL
              specification through physical verification, including an EE372 mixed-signal LDO chip in TSMC 180 nm. Tools: Cadence Virtuoso,
              Synopsys Design Compiler, Innovus P&R, plus the SkyWater 130nm open PDK.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-4">
            {/* EE372 */}
            <div className="rounded-xl border border-black/10 bg-card p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-black/5 transition-all duration-300">
              <div className="flex items-start justify-between gap-2 mb-4">
                <div>
                  <div className="font-mono text-xs font-bold text-foreground tracking-widest mb-1">EE372</div>
                  <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                    Analog/Mixed-Signal IC Design & Fabrication
                  </h3>
                </div>
                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md border bg-primary/10 text-primary border-primary/25">
                    COMPLETED
                  </span>
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md border bg-black/[0.04] text-primary border-black/10">
                    FABRICATION TRACK
                  </span>
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground/80 mb-3">TSMC 180 nm</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                Designed and laid out a mixed-signal LDO chip with bandgap reference, OTA,
                compensation, and digital trim control; completed DRC/LVS and presented the work at Apple.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Physical layout (Cadence)', 'DRC/LVS', 'Analog schematic design', 'TSMC PDK'].map((s) => (
                  <SkillTag key={s} label={s} color="sky" />
                ))}
              </div>
            </div>

            {/* EE272 */}
            <div className="rounded-xl border border-black/10 bg-card p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-black/5 transition-all duration-300">
              <div className="flex items-start justify-between gap-2 mb-4">
                <div>
                  <div className="font-mono text-xs font-bold text-foreground tracking-widest mb-1">EE271 / EE272</div>
                  <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                    Design Projects in VLSI Systems
                  </h3>
                </div>
                <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md border bg-muted text-muted-foreground border-border shrink-0">
                  COMPLETED
                </span>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                Two-course VLSI sequence. EE271 and EE272 covered chip architecture, Verilog/C++
                models, synthesis, place-and-route, physical verification, and a DNN accelerator
                implementation in SkyWater 130nm.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Verilog/SystemVerilog',
                  'Synthesis (Synopsys DC)',
                  'Place & Route (Cadence Innovus)',
                  'Mixed-signal IC',
                  'DNN accelerator design',
                  'SkyWater PDK',
                ].map((s) => (
                  <SkillTag key={s} label={s} color="sky" />
                ))}
              </div>
            </div>
          </div>

        </FadeIn>

        {/* ══ SECTION 4: ANALOG IC & RF TRACK ════════════════ */}
        <FadeIn delay="delay-200" className="mb-16">
          <TrackHeading
            icon={Zap}
            label="Analog IC & RF Track"
            color="text-primary"
            gradientColor="from-primary/20"
          />

          {/* Track overview */}
          <div className="rounded-xl border border-border bg-primary/10 px-5 py-4 mb-6">
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary font-medium">Track Overview:</span>{' '}
              Deep analog IC design from device physics through advanced mixed-signal systems.
              Covers CMOS amplifier design, RF communications circuits, and ADC/DAC architectures
              using industry-standard Cadence tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-4">
            {/* EE214A */}
            <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-black/5 transition-all duration-300">
              <div className="flex items-start justify-between gap-2 mb-4">
                <div>
                  <div className="font-mono text-xs font-bold text-foreground tracking-widest mb-1">EE214A</div>
                  <h3 className="font-display text-base font-bold text-foreground leading-tight">
                    Fundamentals of Analog Integrated Circuit Design
                  </h3>
                </div>
                <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md border bg-muted text-muted-foreground border-border shrink-0">
                  DONE
                </span>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                MOSFET device physics, single/differential amplifier stages, current mirrors,
                bias circuits, feedback, frequency response, and circuit noise. Back-of-the-envelope
                design + SPICE simulation with Cadence.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['CMOS circuit design', 'Cadence Virtuoso', 'SPICE simulation', 'Amplifier design', 'Feedback analysis'].map((s) => (
                  <SkillTag key={s} label={s} color="violet" />
                ))}
              </div>
            </div>

            {/* EE233 */}
            <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-black/5 transition-all duration-300">
              <div className="flex items-start justify-between gap-2 mb-4">
                <div>
                  <div className="font-mono text-xs font-bold text-foreground tracking-widest mb-1">EE233</div>
                  <h3 className="font-display text-base font-bold text-foreground leading-tight">
                    Analog Communications Design Laboratory
                  </h3>
                </div>
                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md border bg-muted text-muted-foreground border-border">
                    DONE
                  </span>
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md border bg-primary/10 text-primary border-primary/25">
                    FM RADIO
                  </span>
                </div>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                Design and characterization of RF electronics: AM, FM, and SDR systems. Final
                project: dual-conversion FM superheterodyne receiver (87.5–108 MHz) using Si5351
                PLL with WiFi-controlled quadrature I/Q demodulation.
              </p>
              <a
                href="/233-FinalProject/FinalProject.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:text-primary border border-primary/25 hover:border-primary/30 bg-primary/10 hover:bg-primary/10 px-3 py-1.5 rounded-md transition-all duration-200 mb-4"
              >
                <FileText className="w-3 h-3" /> View Final Project PDF
              </a>
              <div className="flex flex-wrap gap-1.5">
                {['RF circuit design', 'SDR', 'Superheterodyne receivers', 'I/Q demodulation', 'Si5351 PLL', 'Spectrum analysis'].map((s) => (
                  <SkillTag key={s} label={s} color="violet" />
                ))}
              </div>
            </div>

          </div>

        </FadeIn>

      </div>
    </div>
  );
}
