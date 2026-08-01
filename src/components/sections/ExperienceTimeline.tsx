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
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/25',
  },
  company: {
    icon: Building2,
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/25',
  },
  academic: {
    icon: GraduationCap,
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/25',
  },
  startup: {
    icon: Rocket,
    color: 'text-foreground',
    bg: 'bg-primary/10',
    border: 'border-border',
  },
};

const timelineData: TimelineEntry[] = [
  {
    title: "Navigation Simulation Engineer",
    org: "ANELLO Photonics",
    period: "June 2026 – Present",
    description:
      "California, United States. Engineering navigation simulation systems for advanced photonics-based positioning and autonomy applications.",
    category: "company",
    highlight: "Current",
  },
  {
    title: "Application Engineer",
    org: "ZF Group",
    period: "November 2023 – September 2025",
    description:
      "Monterrey, Mexico. Supported advanced vehicle systems through application engineering, modeling, embedded software, and cross-functional product development.",
    category: "company",
  },
  {
    title: "Autonomous Vehicle Intern",
    org: "ZF Group",
    period: "August 2022 – June 2023",
    description:
      "Monterrey, Mexico. Contributed to autonomous vehicle development, including shuttle software, CAN bus control, visual SLAM, and sensor-fusion workflows.",
    category: "company",
    highlight: "Autonomy",
  },
  {
    title: "Undergraduate Research Assistant",
    org: "Tecnológico de Monterrey",
    period: "January 2020 – July 2022",
    description:
      "Monterrey, Mexico. Supported applied research in robotics and Industry 4.0 systems, including automated factories, AGV robots, digital twins, and VR interfaces.",
    category: "research",
  },
  {
    title: "Robotics Developer",
    org: "VantTec",
    period: "August 2019 – June 2023",
    description:
      "Monterrey, Mexico. Developed autonomous marine robotics software for surface and underwater vehicles, spanning state machines, computer vision, SLAM, and communications.",
    details: "International RoboBoat and RoboSub competition work.",
    category: "academic",
    highlight: "Marine Robotics",
  },
  {
    title: "Software Developer",
    org: "RoBorregos",
    period: "October 2022 – May 2023",
    description:
      "Mexico. Built robotics software for humanoid service robots, including navigation and autonomy systems for RoboCup and international robotics challenges.",
    category: "academic",
  },
  {
    title: "Supply Chain Management Intern",
    org: "John Deere",
    period: "January 2022 – February 2023",
    description:
      "Monterrey, Mexico. Built internal supply-chain systems and automation tools using Azure, Power Platform, SAP-connected workflows, and ABAP.",
    category: "company",
  },
];

function TimelineCard({ entry, isLeft }: { entry: TimelineEntry; isLeft: boolean }) {
  const cfg  = categoryConfig[entry.category];
  const Icon = cfg.icon;

  return (
    <div className={cn('relative flex md:flex-row items-start mb-10 md:mb-16 gap-4 md:gap-0', isLeft && 'md:flex-row-reverse')}>
      {/* Card */}
      <FadeIn
        className={cn('w-full md:w-5/12 card-glow-sky rounded-xl border bg-card p-5', cfg.border)}
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
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/10 to-primary/5 -translate-x-1/2" />
          {/* Left line | mobile */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 to-primary/5" />

          {timelineData.map((entry, index) => (
            <div key={index} className="relative">
              {/* Mobile layout */}
              <div className="md:hidden pl-12 pb-8">
                <div className="absolute left-[16px] top-5 w-3 h-3 rounded-full bg-card border-2 border-primary/50" />
                <FadeIn delay={`delay-${(index % 4) * 100}`}>
                  <div className={cn('rounded-xl border bg-card p-4', categoryConfig[entry.category].border)}>
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
