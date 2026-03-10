"use client";

import { useState } from 'react';
import { companyProjects, academicProjects, allProjects } from '@/lib/constants';
import { ProjectCard } from '@/components/core/ProjectCard';
import { FadeIn } from '@/components/animations/FadeIn';
import { Building2, GraduationCap, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

type Tab = 'all' | 'company' | 'academic';

const tabs: { id: Tab; label: string; icon: React.ElementType; desc: string }[] = [
  {
    id: 'all',
    label: 'All Projects',
    icon: Layers,
    desc: 'Complete portfolio — company work, research, and startups',
  },
  {
    id: 'company',
    label: 'Industry & Startups',
    icon: Building2,
    desc: 'Professional work at ZF, John Deere, Chakri, and more',
  },
  {
    id: 'academic',
    label: 'Academic & Research',
    icon: GraduationCap,
    desc: 'University research, robotics competitions, and publications',
  },
];

const projectMap: Record<Tab, typeof allProjects> = {
  all:      allProjects,
  company:  companyProjects,
  academic: academicProjects,
};

export default function ProjectsPage() {
  const [active, setActive] = useState<Tab>('all');
  const projects = projectMap[active];

  return (
    <div className="min-h-screen bg-circuit">
      {/* Header */}
      <div className="container mx-auto px-4 pt-14 pb-12 lg:px-8 text-center">
        <FadeIn>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
            My{' '}
            <span className="text-gradient-sky">Projects</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            From autonomous vehicles and VLSI chips to enterprise platforms and AI systems —
            built across 7+ years in industry and academia.
          </p>
        </FadeIn>

        {/* Tab bar */}
        <FadeIn delay="delay-100" className="mt-10">
          <div className="inline-flex p-1 rounded-lg border border-border bg-card/50 gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 rounded-md font-display text-sm font-semibold tracking-wider transition-all duration-200',
                    isActive
                      ? 'bg-sky-500 text-black shadow-sm shadow-sky-500/30'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.id === 'all' ? 'All' : tab.id === 'company' ? 'Industry' : 'Academic'}</span>
                </button>
              );
            })}
          </div>
          <p className="font-mono text-xs text-muted-foreground/60 mt-3 tracking-wide">
            {tabs.find((t) => t.id === active)?.desc}
          </p>
        </FadeIn>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 pb-20 lg:px-8">
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <FadeIn key={project.id} delay={`delay-${(index % 6) * 75}`}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn>
            <p className="text-center font-body text-muted-foreground text-xl py-20">
              No projects in this category yet.
            </p>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
