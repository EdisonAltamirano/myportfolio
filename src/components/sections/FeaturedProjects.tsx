import Link from 'next/link';
import { featuredProjects } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/core/ProjectCard';
import { FadeIn } from '@/components/animations/FadeIn';

export function FeaturedProjects() {
  return (
    <section className="py-16 bg-muted/50 dark:bg-neutral-800/50">
      <div className="container px-4 mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my flagship projects in autonomous systems, robotics, and enterprise applications
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={`delay-${index * 150}`}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
        <FadeIn className="text-center mt-12">
          <Button asChild size="lg" className="shadow-md">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
