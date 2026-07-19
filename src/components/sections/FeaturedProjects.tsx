import Link from 'next/link';
import { featuredProjects } from '@/lib/constants';
import { FadeIn } from '@/components/animations/FadeIn';
import { ProjectCard } from '@/components/core/ProjectCard';
import { ArrowRight, Star } from 'lucide-react';

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-muted/20 relative">
      <div className="container px-4 mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] mb-5">
              <Star className="w-3 h-3 text-primary" />
              <span className="font-mono text-xs text-primary/80 tracking-widest uppercase">
                Highlighted Work
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my most impactful work — autonomous systems,
              international competitions, and enterprise applications.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={`delay-${index * 150}`}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-display text-sm font-semibold tracking-wider uppercase text-muted-foreground hover:text-sky-400 border border-border hover:border-sky-500/40 px-6 py-3 rounded-md transition-all duration-300 group"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
