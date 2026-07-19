import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/constants';
import { ArrowRight, Building2, GraduationCap, Rocket, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

const typeConfig = {
  company: { icon: Building2, label: 'Industry' },
  startup: { icon: Rocket, label: 'Startup' },
  academic: { icon: GraduationCap, label: 'Academic' },
};

export function ProjectCard({ project }: ProjectCardProps) {
  const tc = typeConfig[project.type ?? 'academic'];
  const Icon = tc.icon;

  return (
    <article className="project-card group relative flex h-full flex-col overflow-hidden rounded-2xl bg-card/70 shadow-sm shadow-black/5">
      <Link href={project.href} aria-label={`View ${project.title}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={720}
            height={450}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            data-ai-hint={project.imageHint}
            className="h-full w-full object-cover grayscale-[20%] transition duration-300 group-hover:scale-[1.025] group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/64 via-transparent to-transparent opacity-70" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-background/70 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur-md">
            <Icon className="h-3 w-3" />
            {tc.label}
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/80">
          {project.company}
        </div>
        <h3 className="mt-3 text-xl font-semibold leading-tight tracking-[-0.035em] text-foreground">
          <Link href={project.href} className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="rounded-full border border-black/10 bg-white/70 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 border-t border-black/10 pt-4">
          <Link
            href={project.href}
            className="inline-flex flex-1 items-center justify-between rounded-full px-1 text-sm font-semibold text-foreground transition-colors duration-150 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Read case study
            <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
          </Link>
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit external website for ${project.title}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-muted-foreground transition-colors duration-150 hover:border-black/15 hover:bg-black/[0.04] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
