"use client";

import { useMemo, useState } from 'react';
import { allProjects, projectSignals } from '@/lib/constants';
import { ProjectCard } from '@/components/core/ProjectCard';
import { FadeIn } from '@/components/animations/FadeIn';
import { Bot, Cpu, Factory, Layers, Radio, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

type Tab = 'all' | 'hardware' | 'embedded' | 'robotics' | 'industrial' | 'product';

const featuredProjectOrder: string[] = [
  'anello-navigation-simulation',
  'ee372-ldo-chip',
  'ee219-uwb-radar',
  'ee233-fm-radio',
  'ee272-vlsi-design',
  'zf-braking-systems',
  'zf-autonomous-shuttle',
  'airlab-stacking-challenge',
  'vanttec-roboboat-robosub',
  'smart-factory',
  'chakri-ecommerce',
];

function sortProjects<T extends { id: string }>(projects: T[]) {
  const priority = new Map(featuredProjectOrder.map((id, index) => [id, index]));
  return [...projects].sort((a, b) => {
    const aPriority = priority.get(a.id);
    const bPriority = priority.get(b.id);

    if (aPriority !== undefined && bPriority !== undefined) return aPriority - bPriority;
    if (aPriority !== undefined) return -1;
    if (bPriority !== undefined) return 1;
    return 0;
  });
}

const tabs: { id: Tab; label: string; short: string; icon: React.ElementType; desc: string }[] = [
  {
    id: 'all',
    label: 'All selected work',
    short: 'All',
    icon: Layers,
    desc: 'A curated view of hardware, embedded, robotics, industrial, and product systems.',
  },
  {
    id: 'hardware',
    label: 'RF / IC / VLSI',
    short: 'RF / IC',
    icon: Radio,
    desc: 'Stanford EE work in RF systems, analog circuits, VLSI, and silicon-oriented design flows.',
  },
  {
    id: 'embedded',
    label: 'Embedded automotive',
    short: 'Embedded',
    icon: ShieldCheck,
    desc: 'Safety-critical software, AUTOSAR, Simulink, CAN/electronics, and automotive systems integration.',
  },
  {
    id: 'robotics',
    label: 'Robotics & autonomy',
    short: 'Robotics',
    icon: Bot,
    desc: 'Autonomous vehicles, perception, navigation, manipulation, ROS, and international competitions.',
  },
  {
    id: 'industrial',
    label: 'Industrial / digital twins',
    short: 'Industry 4.0',
    icon: Factory,
    desc: 'Smart factories, automation, simulation, digital twins, and industrial engineering systems.',
  },
  {
    id: 'product',
    label: 'Product systems',
    short: 'Product',
    icon: Cpu,
    desc: 'Production software systems that prove breadth: platforms, enterprise tools, search, analytics, and internal workflows.',
  },
];

const tabProjectIds: Record<Tab, string[] | null> = {
  all: null,
  hardware: ['ee372-ldo-chip', 'ee219-uwb-radar', 'ee233-fm-radio', 'ee272-vlsi-design'],
  embedded: ['zf-braking-systems', 'zf-autonomous-shuttle'],
  robotics: ['anello-navigation-simulation', 'airlab-stacking-challenge', 'vanttec-roboboat-robosub', 'robocup-competitions', 'tokyo-iros-2022', 'zf-autonomous-shuttle'],
  industrial: ['smart-factory', 'john-deere-go'],
  product: ['chakri-ecommerce', 'john-deere-go'],
};

export default function ProjectsPage() {
  const [active, setActive] = useState<Tab>('all');

  const projects = useMemo(() => {
    const ids = tabProjectIds[active];
    if (!ids) return sortProjects(allProjects);
    const allowed = new Set(ids);
    return sortProjects(allProjects.filter((project) => allowed.has(project.id)));
  }, [active]);

  const currentTab = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <main className="min-h-screen w-full min-w-0 bg-circuit">
      <div className="container mx-auto w-full max-w-full px-4 pt-14 pb-12 text-center lg:px-8">
        <FadeIn>
          <div className="eyebrow mb-4">Selected work</div>
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-[-0.055em] text-foreground sm:text-5xl md:text-6xl">
            Selected engineering work.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            Projects spanning hardware, embedded software, robotics, industrial systems, and full-stack products.
          </p>
        </FadeIn>

        <FadeIn delay="delay-100" className="mt-10">
          <div className="mx-auto flex max-w-5xl gap-2 overflow-x-auto rounded-2xl border border-border bg-card p-1.5 shadow-sm shadow-black/5 sm:flex-wrap sm:justify-center sm:overflow-visible">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={cn(
                    'flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all duration-200 sm:px-4',
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/20'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="hidden md:inline">{tab.label}</span>
                  <span className="md:hidden">{tab.short}</span>
                </button>
              );
            })}
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
            {currentTab.desc}
          </p>
        </FadeIn>
      </div>

      <div className="container mx-auto w-full max-w-full px-4 pb-24 lg:px-8">
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => {
              return (
                <FadeIn key={project.id} delay={`delay-${(index % 6) * 75}`}>
                  <ProjectCard project={project} />
                </FadeIn>
              );
            })}
          </div>
        ) : (
          <FadeIn>
            <p className="py-20 text-center text-xl text-muted-foreground">
              No projects in this category yet.
            </p>
          </FadeIn>
        )}
      </div>
    </main>
  );
}
