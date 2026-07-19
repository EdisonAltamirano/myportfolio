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
    <main className="min-h-screen bg-circuit">
      <div className="container mx-auto px-4 py-14 lg:px-8">
      <FadeIn>
        <Button variant="outline" asChild className="mb-8 rounded-full border-black/10 bg-white/80 shadow-sm shadow-black/5 hover:bg-white">
          <Link href="/research">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Research
          </Link>
        </Button>
      </FadeIn>

      <FadeIn delay="delay-100">
        <article className="case-study mx-auto max-w-4xl rounded-2xl border border-black/10 bg-white/[0.82] p-5 shadow-sm shadow-black/5 backdrop-blur-sm sm:p-8 lg:p-10">
          <header className="mb-10 text-center">
            <Badge variant="outline" className="mb-4 rounded-full border-primary/25 bg-primary/10 px-3 py-1 text-primary">{post.category}</Badge>
            <h1 className="mx-auto max-w-3xl text-3xl font-semibold tracking-[-0.055em] text-foreground sm:text-4xl md:text-5xl">{post.title}</h1>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center"><UserCircle className="mr-1.5 h-4 w-4" /> {post.author}</span>
              <span className="flex items-center"><Calendar className="mr-1.5 h-4 w-4" /> {post.date}</span>
            </div>
          </header>

          {post.imageUrl && (
            <div className="relative aspect-video rounded-xl overflow-hidden mb-10 shadow-lg">
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
            className="prose prose-lg max-w-none"
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
    </main>
  );
}
