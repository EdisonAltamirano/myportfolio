import { allProjects } from '@/lib/constants';
import { ProjectCard } from '@/components/core/ProjectCard';
import { FadeIn } from '@/components/animations/FadeIn';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">My Projects</h1>
      </FadeIn>
      
      {allProjects.length > 0 && (
        <section>
           <FadeIn>
            <h2 className="text-3xl font-semibold mb-8 text-center text-foreground">
              Project Portfolio
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <FadeIn key={project.id} delay={`delay-${index * 100}`}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {allProjects.length === 0 && (
        <FadeIn>
          <p className="text-center text-muted-foreground text-xl">No projects to display at the moment. Check back soon!</p>
        </FadeIn>
      )}
    </div>
  );
}
