import { allProjects } from '@/lib/constants';
import { ProjectCard } from '@/components/core/ProjectCard';
import { FadeIn } from '@/components/animations/FadeIn';
import { ThreeScene } from '@/components/three/ThreeScene';

export default function ProjectsPage() {
  const projectsWith3D = allProjects.filter(p => p.threeDModel);
  const otherProjects = allProjects.filter(p => !p.threeDModel);

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">My Projects</h1>
      </FadeIn>

      {projectsWith3D.length > 0 && (
        <section className="mb-16">
          <FadeIn>
            <h2 className="text-3xl font-semibold mb-8 text-center text-foreground">Interactive 3D Showcases</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsWith3D.map((project, index) => (
              <FadeIn key={project.id} delay={`delay-${index * 100}`}>
                <ProjectCard project={project} />
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <h3 className="text-lg font-medium text-foreground mb-2 text-center">3D Model: {project.title}</h3>
                  <ThreeScene modelPath={project.threeDModel} />
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Interact with the 3D model above. (Placeholder: actual model loading not implemented yet)
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      )}
      
      {otherProjects.length > 0 && (
        <section>
           <FadeIn>
            <h2 className="text-3xl font-semibold mb-8 text-center text-foreground">
              {projectsWith3D.length > 0 ? "Additional Projects" : "Project Portfolio"}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <FadeIn key={project.id} delay={`delay-${(projectsWith3D.length + index) * 100}`}>
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
