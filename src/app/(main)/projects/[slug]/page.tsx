import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, UserCircle, Tag, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FadeIn } from '@/components/animations/FadeIn';
import { siteName } from '@/lib/constants';

// Mock data - In a real app, this would come from a CMS or database
const projectsData = [
  {
    id: '1',
    slug: "zf-autonomous-shuttle",
    title: "ZF Autonomous Shuttle",
    date: "October 26, 2023",
    author: siteName,
    category: "Autonomous Systems",
    tags: ["AI", "Robotics", "Self-Driving", "Innovation"],
    imageUrl: "https://placehold.co/1200x600.png",
    imageHint: "autonomous vehicle technology",
    content: `
      <p>The ZF Autonomous Shuttle project represents a significant advancement in urban mobility solutions. This article explores the technical innovations and real-world applications of this cutting-edge autonomous vehicle platform.</p>
      <h2 class="text-2xl font-semibold my-4">Technical Architecture</h2>
      <p>The shuttle's architecture combines advanced sensor fusion, AI-driven decision making, and robust safety systems. Key components include:</p>
      <ul class="list-disc pl-6 my-4">
        <li>Multi-sensor perception system</li>
        <li>Real-time path planning and obstacle avoidance</li>
        <li>Redundant control systems for safety</li>
        <li>Cloud-connected fleet management</li>
      </ul>
      <h2 class="text-2xl font-semibold my-4">Real-World Applications</h2>
      <p>The platform has been successfully deployed in various urban environments, demonstrating its versatility and reliability. Use cases include:</p>
      <ul class="list-disc pl-6 my-4">
        <li>Last-mile transportation</li>
        <li>Campus mobility solutions</li>
        <li>Urban public transport integration</li>
        <li>Specialized logistics operations</li>
      </ul>
      <h2 class="text-2xl font-semibold my-4">Future Developments</h2>
      <p>Ongoing research and development focus on enhancing the platform's capabilities in areas such as:</p>
      <ul class="list-disc pl-6 my-4">
        <li>Advanced AI algorithms for complex urban scenarios</li>
        <li>Improved energy efficiency</li>
        <li>Enhanced passenger experience</li>
        <li>Integration with smart city infrastructure</li>
      </ul>
      <p>The ZF Autonomous Shuttle continues to push the boundaries of what's possible in autonomous mobility, setting new standards for safety, efficiency, and user experience.</p>
    `,
    githubUrl: "https://github.com/example/zf-shuttle",
    demoUrl: "https://demo.example.com/zf-shuttle"
  },
  {
    id: '2',
    slug: "airlab-stacking-challenge",
    title: "AirLab Stacking Challenge",
    date: "March 15, 2024",
    author: siteName,
    category: "Robotics",
    tags: ["Robotics", "Computer Vision", "AI", "Automation"],
    imageUrl: "https://placehold.co/1200x600.png",
    imageHint: "robotic stacking system",
    content: `
      <p>The AirLab Stacking Challenge project demonstrates advanced robotic manipulation and computer vision capabilities in a real-world industrial application.</p>
      <h2 class="text-2xl font-semibold my-4">Project Overview</h2>
      <p>This project focuses on developing an intelligent robotic system capable of precise object manipulation and stacking operations. Key features include:</p>
      <ul class="list-disc pl-6 my-4">
        <li>Advanced computer vision for object detection</li>
        <li>Precise robotic arm control</li>
        <li>Real-time path planning</li>
        <li>Adaptive stacking algorithms</li>
      </ul>
      <h2 class="text-2xl font-semibold my-4">Technical Implementation</h2>
      <p>The system incorporates several cutting-edge technologies:</p>
      <ul class="list-disc pl-6 my-4">
        <li>Deep learning for object recognition</li>
        <li>Real-time 3D reconstruction</li>
        <li>Advanced motion planning</li>
        <li>Robust error handling</li>
      </ul>
      <h2 class="text-2xl font-semibold my-4">Results and Impact</h2>
      <p>The project has achieved significant milestones in robotic manipulation:</p>
      <ul class="list-disc pl-6 my-4">
        <li>Improved stacking accuracy</li>
        <li>Reduced operation time</li>
        <li>Enhanced system reliability</li>
        <li>Successful industrial deployment</li>
      </ul>
      <p>This project represents a significant step forward in industrial automation and robotic manipulation capabilities.</p>
    `,
    githubUrl: "https://github.com/example/airlab-stacking",
    demoUrl: "https://demo.example.com/airlab-stacking"
  }
];

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  
  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} - ${siteName} Projects`,
    description: project.content.substring(0, 160).replace(/<[^>]*>?/gm, ''),
    openGraph: {
      title: project.title,
      description: project.content.substring(0, 160).replace(/<[^>]*>?/gm, ''),
      type: 'article',
      publishedTime: project.date,
      authors: [project.author],
      tags: project.tags,
      images: project.imageUrl ? [project.imageUrl] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.content.substring(0, 160).replace(/<[^>]*>?/gm, ''),
      images: project.imageUrl ? [project.imageUrl] : [],
    },
  };
}

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

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
        <article className="max-w-3xl mx-auto">
          <header className="mb-10">
            <Badge variant="outline" className="mb-3 text-primary border-primary bg-primary/10">{project.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
            <div className="flex items-center space-x-4 text-muted-foreground text-sm">
              <span className="flex items-center"><UserCircle className="mr-1.5 h-4 w-4" /> {project.author}</span>
              <span className="flex items-center"><Calendar className="mr-1.5 h-4 w-4" /> {project.date}</span>
            </div>
          </header>

          {project.imageUrl && (
            <div className="relative aspect-video rounded-lg overflow-hidden mb-10 shadow-lg">
              <Image
                src={project.imageUrl}
                alt={project.title}
                data-ai-hint={project.imageHint}
                width={1200}
                height={675}
                className="object-cover w-full h-full"
              />
            </div>
          )}

          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />

          <Separator className="my-10" />

          <footer className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                <Tag className="mr-2 h-5 w-5 text-primary" /> Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> View on GitHub
                  </Link>
                </Button>
              )}
              {project.demoUrl && (
                <Button variant="outline" asChild>
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              )}
            </div>
          </footer>
        </article>
      </FadeIn>
    </div>
  );
}
