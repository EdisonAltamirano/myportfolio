import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { aboutStats } from '@/lib/constants';
import { FadeIn } from '@/components/animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';
import { getAssetPath } from '@/lib/utils';

export function AboutTeaser() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={getAssetPath('/images/profile foto.png')}
                alt="Edison Altamirano"
                data-ai-hint="professional portrait"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </FadeIn>
          <FadeIn delay="delay-150">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Bridging Hardware & Software</h2>
              <p className="text-lg text-muted-foreground mb-6">
                My journey began in robotics engineering, where I developed a strong foundation in systems thinking and hardware design. This unique background has proven invaluable as I've pivoted to full-stack development.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                I now specialize in creating intelligent systems at the intersection of hardware and software, from autonomous vehicles to AI-powered applications and industrial automation solutions.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {aboutStats.map((stat, index) => (
                  <FadeIn key={stat.label} delay={`delay-${index * 100}`}>
                    <Card className="text-center bg-muted/50 p-4 rounded-lg shadow-sm">
                      <CardContent className="p-0">
                        <span className="text-3xl font-bold text-primary block">{stat.value}</span>
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                      </CardContent>
                    </Card>
                  </FadeIn>
                ))}
              </div>
              <Button asChild size="lg" className="shadow-md">
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
