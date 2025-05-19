import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group relative h-full flex flex-col overflow-hidden project-card shadow-lg dark:shadow-neutral-900/50">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={600}
          height={400}
          data-ai-hint={project.imageHint}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="mb-2 flex items-center">
          <Badge variant="outline" className="border-primary text-primary bg-primary/10">{project.category}</Badge>
          <span className="ml-2 text-xs text-muted-foreground">{project.company}</span>
        </div>
        <CardTitle className="text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-secondary/10 text-secondary-foreground hover:bg-secondary/20">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full mt-auto group/button">
          <Link href={project.href}>
            View Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
