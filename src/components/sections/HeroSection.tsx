import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { expertiseAreas } from '@/lib/constants';
import { HeroBlob } from '@/components/core/HeroBlob';
import { FadeIn } from '@/components/animations/FadeIn';

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background"></div>
      </div>
      
      <FadeIn className="container px-4 mx-auto relative text-center">
        <div className="absolute -z-10 w-full h-full max-w-xl mx-auto left-0 right-0 opacity-30 top-1/2 -translate-y-1/2">
          <HeroBlob className="w-full h-full" />
        </div>
        
        <div className="max-w-3xl mx-auto relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              From Engineering to Innovation
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Robotics Engineer turned Full-Stack Innovator with expertise in autonomous systems, AI, and robotics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="shadow-md">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-sm border-primary text-primary hover:bg-primary/10 hover:text-primary">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {expertiseAreas.map((area, index) => (
              <FadeIn key={area.name} delay={`delay-${index * 100}`} className="text-sm text-muted-foreground">
                <span className="font-medium text-primary">{area.name}</span> {area.label}
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
