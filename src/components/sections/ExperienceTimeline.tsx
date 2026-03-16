"use client";

import { Building2, CalendarDays, GraduationCap, Zap, Rocket, FlaskConical } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

type TimelineCategory = 'company' | 'academic' | 'startup' | 'research';

interface TimelineEntry {
  title: string;
  org: string;
  period: string;
  description: string;
  details?: string;
  category: TimelineCategory;
  highlight?: string;
}

const categoryConfig: Record<TimelineCategory, { icon: React.ElementType; color: string; bg: string; border: string }> = {
  research: {
    icon: FlaskConical,
    color: 'text-teal-400',
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/30',
  },
  company: {
    icon: Building2,
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/30',
  },
  academic: {
    icon: GraduationCap,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/30',
  },
  startup: {
    icon: Rocket,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
  },
};

const timelineData: TimelineEntry[] = [
  {
    title: "Stanford University | MS Electrical Engineering",
    org: "Stanford University",
    period: "2024–Present",
    description:
      "Graduate research in Arbabian Lab (EE391): mm-wave radar sensor ICs and multimodal AI systems. Completed VLSI design coursework in EE271 and EE272, with EE372 upcoming for analog IC fabrication through TSMC. Analog IC design courses: EE214A, EE233.",
    details: "Upcoming: EE372 | analog IC (imager/camera) design for TSMC-oriented fabrication.",
    category: "research",
    highlight: "Arbabian Lab · IC Design Track",
  },
  {
    title: "ZF | Next-Gen Axle Modulators",
    org: "ZF Friedrichshafen AG",
    period: "2023–Present",
    description:
      "Developing next-generation braking systems for commercial vehicles. Mathematical modeling, embedded software (AUTOSAR), and reverse engineering commercial systems. Project valued at millions in financial projections.",
    category: "company",
  },
  {
    title: "John Deere. Supply Chain Management Intern",
    org: "John Deere",
    period: "2022–2023",
    description:
      "Built internal supply-chain systems at John Deere Labs, including IM Reserver for SAP-connected reservation workflows and ShieldGuard for computer-vision-based loss prevention. Delivered solutions with Azure, Power Platform, and ABAP.",
    category: "company",
  },
  {
    title: "Chakri | Agricultural E-commerce",
    org: "Chakri (Co-founder)",
    period: "2020–Present",
    description:
      "Co-founded platform connecting farmers directly with consumers. Built three integrated apps (customer, vendor, admin). 300+ users, 6,000+ products. Also developed BACModelos.com marketplace website.",
    category: "startup",
    highlight: "bacmodelos.com",
  },
  {
    title: "ZF Autonomous Shuttle",
    org: "ZF Group",
    period: "2022–2023",
    description:
      "Led software for Mexico's first student autonomous passenger shuttle sponsored by ZF. CAN bus control, visual SLAM, and sensor fusion. Presented to Tesla executives before their Gigafactory announcement.",
    category: "company",
    highlight: "First in Mexico",
  },
  {
    title: "ROBORREGOS | RoboCup & IROS Tokyo",
    org: "Roborregos / Tecnológico de Monterrey",
    period: "2022–2023",
    description:
      "Led navigation software for humanoid service robots (TIAGO). Competed in RoboCup@Home Mexico nationals and achieved 3rd place in HandyMan Challenge at IROS 2022 in Tokyo.",
    category: "academic",
    highlight: "3rd place IROS 2022",
  },
  {
    title: "VANTTEC | Autonomous Marine Vehicles",
    org: "RoboNation / Tecnológico de Monterrey",
    period: "2020–2023",
    description:
      "Led software for autonomous surface vessels and underwater vehicles. State machines, computer vision, SLAM, and radio communication. Published multiple IEEE and RoboNation technical papers.",
    details: "Won 1st place in RoboBoat and 3rd in RoboSub international competitions.",
    category: "academic",
    highlight: "🥇 RoboBoat Champion",
  },
  {
    title: "Smart Factory | Industry 4.0",
    org: "Tecnológico de Monterrey",
    period: "2019–2022",
    description:
      "Built one of Latin America's most advanced automated factories. AGV robots, PLC integration, digital twins, VR interfaces. Now MIT-partnered and recognized by IEEE EDUCON and IALF.",
    category: "academic",
  },
  {
    title: "Robotics Beginnings",
    org: "LIONS Team / Tecnológico de Monterrey",
    period: "2018–2019",
    description:
      "Joined LIONS robotics team and won regional Robocup in MazeRescue. Built computer vision and electronics for maze-solving robots. Also served as TA for mobile app development.",
    category: "academic",
  },
];

function TimelineCard({ entry, isLeft }: { entry: TimelineEntry; isLeft: boolean }) {
  const cfg  = categoryConfig[entry.category];
  const Icon = cfg.icon;

  return (
    <div className={cn('relative flex md:flex-row items-start mb-10 md:mb-16 gap-4 md:gap-0', isLeft && 'md:flex-row-reverse')}>
      {/* Card */}
      <FadeIn
        className={cn('w-full md:w-5/12 card-glow-sky rounded-lg border bg-card/60 p-5', cfg.border)}
        delay={isLeft ? "delay-200" : "delay-100"}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-start gap-2.5">
            <div className={cn('w-8 h-8 rounded-md flex items-center justify-center shrink-0 mt-0.5', cfg.bg)}>
              <Icon className={cn('w-4 h-4', cfg.color)} />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-foreground leading-tight">
                {entry.title}
              </h3>
              <p className={cn('font-mono text-xs mt-0.5', cfg.color)}>{entry.org}</p>
            </div>
          </div>
        </div>
        {/* Period */}
        <div className="flex items-center gap-1.5 mb-3">
          <CalendarDays className="h-3 w-3 text-muted-foreground/60" />
          <span className="font-mono text-xs text-muted-foreground/60">{entry.period}</span>
          {entry.highlight && (
            <span className={cn('ml-2 font-mono text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-sm border', cfg.bg, cfg.border, cfg.color)}>
              {entry.highlight}
            </span>
          )}
        </div>
        {/* Description */}
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-2">
          {entry.description}
        </p>
        {entry.details && (
          <p className="font-body text-xs text-muted-foreground/60 italic">{entry.details}</p>
        )}
      </FadeIn>

      {/* Desktop center dot */}
      <div
        className="hidden md:flex absolute top-5 items-center justify-center w-9 h-9 rounded-full border-4 border-background z-10"
        style={{ left: isLeft ? 'auto' : 'calc(50% - 18px)', right: isLeft ? 'calc(50% - 18px)' : 'auto' }}
      >
        <div className={cn('w-full h-full rounded-full flex items-center justify-center', cfg.bg, cfg.border, 'border')}>
          <Icon className={cn('w-3.5 h-3.5', cfg.color)} />
        </div>
      </div>

      {/* Spacer */}
      <div className="hidden md:block md:w-2/12" />
      <div className="hidden md:block md:w-5/12" />
    </div>
  );
}

export function ExperienceTimeline() {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Professional{' '}
              <span className="text-gradient-sky">Journey</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              From robotics competitions to Stanford research and global industry.
            </p>
            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {(Object.entries(categoryConfig) as [TimelineCategory, typeof categoryConfig[TimelineCategory]][]).map(([key, cfg]) => {
                const Icon = cfg.icon;
                return (
                  <div key={key} className="flex items-center gap-1.5">
                    <div className={cn('w-5 h-5 rounded-sm flex items-center justify-center', cfg.bg)}>
                      <Icon className={cn('w-3 h-3', cfg.color)} />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground capitalize">{key}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Center line | desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/40 via-teal-500/20 to-sky-500/10 -translate-x-1/2" />
          {/* Left line | mobile */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/40 to-sky-500/10" />

          {timelineData.map((entry, index) => (
            <div key={index} className="relative">
              {/* Mobile layout */}
              <div className="md:hidden pl-12 pb-8">
                <div className="absolute left-[16px] top-5 w-3 h-3 rounded-full bg-card border-2 border-sky-400/60" />
                <FadeIn delay={`delay-${(index % 4) * 100}`}>
                  <div className={cn('rounded-lg border bg-card/60 p-4', categoryConfig[entry.category].border)}>
                    <div className="flex items-center gap-2 mb-2">
                      {(() => {
                        const cfg = categoryConfig[entry.category];
                        const Icon = cfg.icon;
                        return <Icon className={cn('w-4 h-4 shrink-0', cfg.color)} />;
                      })()}
                      <h3 className="font-display text-sm font-bold text-foreground leading-tight">{entry.title}</h3>
                    </div>
                    <div className="font-mono text-xs text-muted-foreground/60 mb-2">{entry.period}</div>
                    <p className="font-body text-sm text-muted-foreground">{entry.description}</p>
                    {entry.details && <p className="font-body text-xs text-muted-foreground/60 italic mt-1">{entry.details}</p>}
                  </div>
                </FadeIn>
              </div>
              {/* Desktop layout */}
              <div className="hidden md:block">
                <TimelineCard entry={entry} isLeft={index % 2 !== 0} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
