import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, UserCircle, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FadeIn } from '@/components/animations/FadeIn';
import { siteName } from '@/lib/constants';

// Mock data - In a real app, this would come from a CMS or database
const blogPostsData = [
  {
    id: '1',
    slug: "future-autonomous-systems",
    title: "The Future of AutonomousSystems: Trends to Watch",
    date: "October 26, 2023",
    author: siteName,
    category: "Autonomous Systems",
    tags: ["AI", "Robotics", "Self-Driving", "Innovation"],
    imageUrl: "https://placehold.co/1200x600.png",
    imageHint: "futuristic technology",
    content: `
      <p>Autonomous systems are rapidly evolving, promising to reshape industries from transportation to healthcare. This article delves into the key trends that will define their trajectory in the coming years.</p>
      <h2 class="text-2xl font-semibold my-4">Advancements in AI and Machine Learning</h2>
      <p>The backbone of any autonomous system is its intelligence. We're seeing significant strides in reinforcement learning, enabling systems to learn from experience in complex, dynamic environments. Furthermore, improvements in sensor fusion techniques are allowing for more robust perception and decision-making.</p>
      <h2 class="text-2xl font-semibold my-4">Edge Computing Takes Center Stage</h2>
      <p>For real-time decision-making, especially in mobile autonomous systems like drones and self-driving cars, reliance on cloud connectivity is not always feasible. Edge computing, which processes data closer to its source, is becoming crucial. This reduces latency and enhances reliability.</p>
      <h2 class="text-2xl font-semibold my-4">Ethical Considerations and Regulatory Frameworks</h2>
      <p>As autonomous systems become more prevalent, the ethical implications and the need for clear regulatory frameworks are paramount. Discussions around accountability, safety standards, and data privacy are shaping the development and deployment of these technologies.</p>
      <p>The journey ahead is exciting, filled with challenges and opportunities. Staying abreast of these trends is key for anyone involved in the field of autonomous systems.</p>
    `
  },
  // Add other mock posts if needed
];

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);
  
  if (!post) {
    return { title: 'Blog Post Not Found' };
  }

  return {
    title: `${post.title} - ${siteName} Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>?/gm, ''), // Simple excerpt
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160).replace(/<[^>]*>?/gm, ''),
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: post.imageUrl ? [post.imageUrl] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.content.substring(0, 160).replace(/<[^>]*>?/gm, ''),
      images: post.imageUrl ? [post.imageUrl] : [],
    },
  };
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <FadeIn>
        <Button variant="outline" asChild className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </FadeIn>

      <FadeIn delay="delay-100">
        <article className="max-w-3xl mx-auto">
          <header className="mb-10">
            <Badge variant="outline" className="mb-3 text-primary border-primary bg-primary/10">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{post.title}</h1>
            <div className="flex items-center space-x-4 text-muted-foreground text-sm">
              <span className="flex items-center"><UserCircle className="mr-1.5 h-4 w-4" /> {post.author}</span>
              <span className="flex items-center"><Calendar className="mr-1.5 h-4 w-4" /> {post.date}</span>
            </div>
          </header>

          {post.imageUrl && (
            <div className="relative aspect-video rounded-lg overflow-hidden mb-10 shadow-lg">
              <Image
                src={post.imageUrl}
                alt={post.title}
                data-ai-hint={post.imageHint}
                width={1200}
                height={675}
                className="object-cover w-full h-full"
              />
            </div>
          )}

          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <Separator className="my-10" />

          <footer className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                <Tag className="mr-2 h-5 w-5 text-primary" /> Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
            {/* Add share buttons or related posts section here if desired */}
          </footer>
        </article>
      </FadeIn>
    </div>
  );
}
