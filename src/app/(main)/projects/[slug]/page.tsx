import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Layers, Calendar, Tag } from 'lucide-react';
import { allProjects, Project } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ThreeScene } from '@/components/three/ThreeScene';
import { FadeIn } from '@/components/animations/FadeIn';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = allProjects.find((p) => p.id === params.slug);
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: `${project.title} - Edison's Lab`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.id,
  }));
}

export default function ProjectDetailsPage({ params }: Props) {
  const project = allProjects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <FadeIn>
        <Button variant="outline" asChild className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>
      </FadeIn>

      <FadeIn delay="delay-100">
        <article>
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">{project.title}</h1>
            <div className="flex items-center space-x-4 text-muted-foreground text-sm">
              <span className="flex items-center"><Layers className="mr-1.5 h-4 w-4" /> {project.category}</span>
              <span className="flex items-center"><Calendar className="mr-1.5 h-4 w-4" /> {project.company}</span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden shadow-xl mb-8">
                <div className="aspect-video relative">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    data-ai-hint={project.imageHint}
                    width={1200}
                    height={675}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>

              {project.threeDModel && (
                <FadeIn delay="delay-200">
                  <Card className="shadow-xl mb-8">
                    <CardHeader>
                      <CardTitle className="text-2xl text-foreground">Interactive 3D Model</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ThreeScene modelPath={project.threeDModel} />
                       <p className="text-xs text-muted-foreground mt-2 text-center">
                        (Placeholder: This is a generic 3D scene. Actual model loading for "{project.title}" would require specific integration.)
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              )}
              
              <FadeIn delay="delay-300">
                <Card className="shadow-xl">
                  <CardHeader>
                      <CardTitle className="text-2xl text-foreground">Project Highlights</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-lg dark:prose-invert max-w-none">
                    {/* Placeholder content for project details */}
                    <p>Detailed information about the project, its challenges, my role, and outcomes would go here. This could include:</p>
                    <ul>
                      <li>Specific technologies used beyond the tags.</li>
                      <li>Key features and functionalities implemented.</li>
                      <li>Problems solved and innovative solutions developed.</li>
                      <li>Impact of the project.</li>
                    </ul>
                    <p>For the <strong>{project.title}</strong>, a significant aspect was {project.tags.length > 0 ? `its focus on ${project.tags[0].toLowerCase()}` : 'its innovative approach'}. The work done at {project.company} was crucial for its success.</p>
                  </CardContent>
                </Card>
              </FadeIn>

            </div>

            <aside className="lg:col-span-1 space-y-6">
              <FadeIn delay="delay-200">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Project Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium text-muted-foreground">Category:</span>
                      <span className="text-foreground">{project.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-muted-foreground">Organization:</span>
                      <span className="text-foreground">{project.company}</span>
                    </div>
                    {/* Add more relevant info like date, client, etc. */}
                  </CardContent>
                </Card>
              </FadeIn>
              <FadeIn delay="delay-300">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center"><Tag className="mr-2 h-5 w-5 text-primary"/> Technologies</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/10 text-secondary-foreground hover:bg-secondary/20">{tag}</Badge>
                    ))}
                  </CardContent>
                </Card>
              </FadeIn>
            </aside>
          </div>
        </article>
      </FadeIn>
    </div>
  );
}
