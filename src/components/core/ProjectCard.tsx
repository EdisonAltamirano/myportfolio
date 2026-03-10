import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Building2, GraduationCap, Rocket, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

const typeConfig = {
  company: {
    icon: Building2,
    label: 'Company',
    cls: 'border-sky-500/40 bg-sky-500/10 text-sky-300',
  },
  startup: {
    icon: Rocket,
    label: 'Startup',
    cls: 'border-orange-500/40 bg-orange-500/10 text-orange-300',
  },
  academic: {
    icon: GraduationCap,
    label: 'Academic',
    cls: 'border-teal-500/40 bg-teal-500/10 text-teal-300',
  },
};

export function ProjectCard({ project }: ProjectCardProps) {
  const tc   = typeConfig[project.type ?? 'academic'];
  const Icon = tc.icon;

  return (
    <div className="group relative h-full flex flex-col overflow-hidden rounded-lg project-card bg-card">
      {/* Image */}
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={600}
          height={340}
          data-ai-hint={project.imageHint}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        {/* Image overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Type badge over image */}
        <div className="absolute top-3 left-3">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-sm border',
              tc.cls
            )}
          >
            <Icon className="w-2.5 h-2.5" />
            {tc.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="mb-2">
          <span className="font-mono text-xs text-muted-foreground/60 tracking-wider uppercase">
            {project.company}
          </span>
        </div>
        <h3 className="font-display text-lg font-bold text-foreground mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] px-2 py-0.5 rounded-sm border border-border bg-muted/30 text-muted-foreground tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer links */}
        <div className="flex gap-2 mt-auto">
          <Link
            href={project.href}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-sm border border-sky-500/25 text-sky-400 hover:bg-sky-500/10 hover:border-sky-500/50 transition-all duration-200 font-display text-xs font-semibold tracking-wider uppercase group/btn"
          >
            View Project
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </Link>
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 rounded-sm border border-teal-500/25 text-teal-400 hover:bg-teal-500/10 hover:border-teal-500/50 transition-all duration-200"
              title="Visit website"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
