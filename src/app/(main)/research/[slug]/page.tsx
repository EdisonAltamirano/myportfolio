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
import { researchPostsData, ResearchPost } from "@/lib/research-posts";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = researchPostsData.find((post: ResearchPost) => post.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.content.replace(/<[^>]*>/g, "").substring(0, 160),
  };
}

export async function generateStaticParams() {
  return researchPostsData.map((post: ResearchPost) => ({
    slug: post.slug,
  }));
}

export default async function ResearchPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = researchPostsData.find((post: ResearchPost) => post.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <FadeIn>
        <Button variant="outline" asChild className="mb-8">
          <Link href="/research">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Research
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
