import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { Calendar, ArrowRight } from "lucide-react";

// Mock data for blog posts
const blogPosts = [
  {
    id: '1',
    title: "The Future of Autonomous Systems: Trends to Watch",
    date: "October 26, 2023",
    excerpt: "Autonomous systems are rapidly evolving. Discover the key trends that will shape their future, from AI advancements to regulatory landscapes.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "futuristic technology",
    slug: "future-autonomous-systems",
    category: "Autonomous Systems"
  },
  {
    id: '2',
    title: "Bridging Hardware and Software: A Full-Stack Approach to Robotics",
    date: "November 15, 2023",
    excerpt: "Effective robotics development requires a deep understanding of both hardware and software. Explore a full-stack perspective.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "robot arm circuit",
    slug: "robotics-full-stack",
    category: "Robotics"
  },
  {
    id: '3',
    title: "AI in Manufacturing: Optimizing for Efficiency and Quality",
    date: "December 5, 2023",
    excerpt: "Artificial intelligence is revolutionizing the manufacturing sector. Learn how AI can enhance production lines and improve quality control.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "factory automation",
    slug: "ai-manufacturing",
    category: "AI"
  },
];


export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">Insights & Articles</h1>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <FadeIn key={post.id} delay={`delay-${index * 100}`}>
            <Card className="group flex flex-col h-full overflow-hidden article-card shadow-lg">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  data-ai-hint={post.imageHint}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
                <CardDescription className="text-sm flex items-center">
                  <Calendar className="mr-1.5 h-4 w-4" /> {post.date}
                  <span className="mx-2">|</span>
                  <span className="text-primary">{post.category}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="p-0 text-primary group/button">
                  <Link href={`/blog/${post.slug}`}>
                    Read More 
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </FadeIn>
        ))}
      </div>

      {blogPosts.length === 0 && (
        <FadeIn>
          <p className="text-center text-muted-foreground text-xl">No blog posts yet. Stay tuned for insights and articles!</p>
        </FadeIn>
      )}
    </div>
  );
}
