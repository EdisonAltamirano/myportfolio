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
    'MS Electrical Engineering at Stanford: Arbabian Lab mm-Wave radar research, EE271/EE272 VLSI chip design, upcoming EE372 fabrication work, and analog/RF coursework.',
};

/* ── Status badge config ──────────────────────────────── */
const statusBadge = {
  active: {
    label: 'ACTIVE',
    cls: 'bg-green-500/15 text-green-300 border-green-500/30',
    dot: 'bg-green-400',
    Icon: Circle,
  },
  completed: {
    label: 'COMPLETED',
    cls: 'bg-muted/50 text-muted-foreground border-border',
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
    sky: 'border-sky-500/25 bg-white/80 text-primary',
    teal: 'border-border bg-primary/10 text-primary',
    violet: 'border-border bg-primary/10 text-primary',
  };
  return (
    <span className={cn('font-mono text-[10px] px-2 py-0.5 rounded-md border tracking-wide', colorMap[color] ?? colorMap.sky)}>
      {label}
    </span>
  );
}

/* ── Employer box ─────────────────────────────────────── */
function EmployerBox({ text }: { text: string }) {
  return (
    <div className="mt-4 rounded-md border border-black/10 bg-white/70 px-4 py-3">
      <div className="font-mono text-[10px] text-primary/70 tracking-widest uppercase mb-1">What employers see</div>
      <p className="font-body text-xs text-muted-foreground leading-relaxed">{text}</p>
    </div>
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
            Stanford EE Research &{' '}
            <span className="text-gradient-sky">Coursework</span>
          </h1>

          {/* Quick stat row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { value: '6', label: 'Courses' },
              { value: '1', label: 'Research Lab' },
              { value: 'TSMC', label: 'Tape-out' },
              { value: '2', label: 'Chip Designs' },
            ].map((s) => (
              <div key={s.label} className="text-center px-4">
                <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
                <div className="font-mono text-xs text-muted-foreground/80 tracking-wider uppercase mt-0.5">{s.label}</div>
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

          <div className="rounded-xl border border-border bg-card/65 p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md border bg-green-500/15 text-green-300 border-green-500/30">
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

              {/* Photo placeholders */}
              <div>
                <div className="font-mono text-xs text-muted-foreground/80 uppercase tracking-widest mb-4">
                  Lab Photos
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Radar Measurement Setup', placeholder: '📷 Add lab bench photo' },
                    { label: 'IC Characterization', placeholder: '📷 Add probing setup photo' },
                    { label: 'System Demo', placeholder: '📷 Add radar demo photo' },
                    { label: 'Lab / Conference', placeholder: '📷 Add team/presentation photo' },
                  ].map((photo) => (
                    <div key={photo.label} className="space-y-1">
                      <div className="rounded border border-black/10 bg-white/70 aspect-video flex items-center justify-center">
                        <span className="font-mono text-[10px] text-muted-foreground/85 text-center px-2 leading-relaxed">
                          {photo.placeholder}
                        </span>
                      </div>
                      <p className="font-mono text-[10px] text-muted-foreground/75 text-center">{photo.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <EmployerBox text="RF IC design expertise, hardware-algorithm co-design, mmWave systems (Qualcomm, NXP, Aptiv, Bosch)" />
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
          <div className="rounded-lg border border-black/10 bg-white/70 px-5 py-4 mb-6">
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary font-medium">Track Overview:</span>{' '}
              The VLSI design sequence at Stanford covers the complete chip design flow from RTL
              specification through physical verification, with EE372 as the upcoming TSMC-oriented fabrication track. Tools: Cadence Virtuoso,
              Synopsys Design Compiler, Innovus P&R, plus the SkyWater 130nm open PDK.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-4">
            {/* EE372 */}
            <div className="rounded-xl border border-black/10 bg-card/70 p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-black/5 transition-all duration-300">
              <div className="flex items-start justify-between gap-2 mb-4">
                <div>
                  <div className="font-mono text-xs font-bold text-primary tracking-widest mb-1">EE372</div>
                  <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                    Analog/Mixed-Signal IC Design & Fabrication
                  </h3>
                </div>
                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md border bg-primary/10 text-primary border-primary/25">
                    UPCOMING
                  </span>
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md border bg-black/[0.04] text-primary border-black/10">
                    FABRICATION TRACK
                  </span>
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground/80 mb-3">Upcoming</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                Planned full chip design flow for an analog IC (imager/camera circuit), from
                specification and schematic capture through layout, DRC/LVS verification, and
                TSMC-oriented fabrication.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Physical layout (Cadence)', 'DRC/LVS', 'Analog schematic design', 'TSMC PDK'].map((s) => (
                  <SkillTag key={s} label={s} color="sky" />
                ))}
              </div>
            </div>

            {/* EE272 */}
            <div className="rounded-xl border border-black/10 bg-card/70 p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-black/5 transition-all duration-300">
              <div className="flex items-start justify-between gap-2 mb-4">
                <div>
                  <div className="font-mono text-xs font-bold text-primary tracking-widest mb-1">EE271 / EE272</div>
                  <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                    Design Projects in VLSI Systems
                  </h3>
                </div>
                <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md border bg-muted/50 text-muted-foreground border-border shrink-0">
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

          <EmployerBox text="Roles: Digital/Analog IC Designer at Intel, Apple, NVIDIA, AMD, Qualcomm. Full chip design flow experience is highly sought after." />
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
          <div className="rounded-lg border border-violet-500/15 bg-primary/10 px-5 py-4 mb-6">
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary font-medium">Track Overview:</span>{' '}
              Deep analog IC design from device physics through advanced mixed-signal systems.
              Covers CMOS amplifier design, RF communications circuits, and ADC/DAC architectures
              using industry-standard Cadence tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-4">
            {/* EE214A */}
            <div className="rounded-xl border border-border bg-card/70 p-6 hover:border-primary/30 hover:shadow-[0_0_24px_rgba(139,92,246,0.1)] transition-all duration-300">
              <div className="flex items-start justify-between gap-2 mb-4">
                <div>
                  <div className="font-mono text-xs font-bold text-primary tracking-widest mb-1">EE214A</div>
                  <h3 className="font-display text-base font-bold text-foreground leading-tight">
                    Fundamentals of Analog Integrated Circuit Design
                  </h3>
                </div>
                <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md border bg-muted/50 text-muted-foreground border-border shrink-0">
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
            <div className="rounded-xl border border-border bg-card/70 p-6 hover:border-primary/30 hover:shadow-[0_0_24px_rgba(139,92,246,0.1)] transition-all duration-300">
              <div className="flex items-start justify-between gap-2 mb-4">
                <div>
                  <div className="font-mono text-xs font-bold text-primary tracking-widest mb-1">EE233</div>
                  <h3 className="font-display text-base font-bold text-foreground leading-tight">
                    Analog Communications Design Laboratory
                  </h3>
                </div>
                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md border bg-muted/50 text-muted-foreground border-border">
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
                <FileText className="w-3 h-3" /> View Project Code
              </a>
              <div className="flex flex-wrap gap-1.5">
                {['RF circuit design', 'SDR', 'Superheterodyne receivers', 'I/Q demodulation', 'Si5351 PLL', 'Spectrum analysis'].map((s) => (
                  <SkillTag key={s} label={s} color="violet" />
                ))}
              </div>
            </div>

            {/* EE256 */}
            <div className="rounded-xl border border-border bg-card/70 p-6 hover:border-primary/30 hover:shadow-[0_0_24px_rgba(139,92,246,0.1)] transition-all duration-300">
              <div className="flex items-start justify-between gap-2 mb-4">
                <div>
                  <div className="font-mono text-xs font-bold text-primary tracking-widest mb-1">EE256</div>
                  <h3 className="font-display text-base font-bold text-foreground leading-tight">
                    Analog-Digital Interface Circuits
                  </h3>
                </div>
                <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md border bg-primary/10 text-primary border-primary/25 shrink-0">
                  UPCOMING
                </span>
              </div>
              <p className="font-mono text-xs text-muted-foreground/80 mb-3">Spring 2026</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                Design of circuits for signal conditioning and data conversion. ADC/DAC architectures
                at transistor level: OTAs, active filters, sampling circuits, switched-capacitor
                stages, voltage comparators, Nyquist-rate and oversampled converters.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['ADC/DAC design', 'OTA design', 'Switched-capacitor circuits', 'Data converter characterization'].map((s) => (
                  <SkillTag key={s} label={s} color="violet" />
                ))}
              </div>
            </div>
          </div>

          <EmployerBox text="Roles: Analog IC Designer at Texas Instruments, Analog Devices, Broadcom, Apple. Mixed-signal interface experience critical for IoT, automotive, and communications chips." />
        </FadeIn>

        {/* ══ SECTION 5: EMPLOYER SUMMARY ═════════════════════ */}
        <FadeIn delay="delay-250">
          <div className="rounded-xl border border-black/10 bg-card/65 p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-white/70 mb-4">
                <span className="font-mono text-xs text-primary/80 tracking-widest uppercase">
                  Employer Summary
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                What This Means
              </h2>
              <p className="font-body text-muted-foreground mt-2 max-w-xl mx-auto">
                What Edison uniquely brings from his Stanford EE program.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: 'Full Chip Design Flow',
                  sub: 'RTL → Synthesis → P&R → Tape-out (TSMC experience)',
                  color: 'text-primary',
                  border: 'border-sky-500/25',
                  bg: 'bg-primary/10',
                },
                {
                  title: 'Analog & RF IC Design',
                  sub: 'CMOS amplifier to superheterodyne radios',
                  color: 'text-primary',
                  border: 'border-border',
                  bg: 'bg-primary/10',
                },
                {
                  title: 'mm-Wave Radar Systems',
                  sub: 'Co-designing ICs with ML perception algorithms',
                  color: 'text-primary',
                  border: 'border-border',
                  bg: 'bg-primary/10',
                },
                {
                  title: 'Mixed-Signal',
                  sub: 'Bridging analog sensors to digital AI systems',
                  color: 'text-primary',
                  border: 'border-sky-500/20',
                  bg: 'bg-primary/10',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={cn(
                    'rounded-lg border p-5 text-center',
                    item.border,
                    item.bg
                  )}
                >
                  <h3 className={cn('font-display text-sm font-bold mb-2', item.color)}>
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
