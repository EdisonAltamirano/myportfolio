import Image from 'next/image';
import Link from 'next/link';
import { aboutStats } from '@/lib/constants';
import { FadeIn } from '@/components/animations/FadeIn';
import { getAssetPath } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export function AboutTeaser() {
  return (
    <section className="py-20 bg-muted/15">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <FadeIn>
            <div className="relative">
              <div className="relative aspect-square rounded-xl overflow-hidden border border-sky-500/15 shadow-2xl shadow-black/50">
                <Image
                  src={getAssetPath('/images/profile foto.png')}
                  alt="Edison Altamirano"
                  data-ai-hint="professional portrait"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                {/* Stanford badge */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/40 bg-background/80 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                    <span className="font-mono text-xs text-sky-400 tracking-wider">
                      Stanford University · MS EE
                    </span>
                  </div>
                </div>
              </div>
              {/* Decorative corner */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-xl border border-sky-500/20 bg-sky-500/5 -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-xl border border-teal-500/15 bg-teal-500/5 -z-10" />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn delay="delay-150">
            <div className="font-mono text-xs text-sky-400/70 tracking-widest uppercase mb-4">
              About
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Hardware Meets{' '}
              <span className="text-gradient-sky">Silicon</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-4 leading-relaxed">
              My journey started in robotics engineering | building autonomous boats, humanoid
              robots, and smart factories. Now at Stanford, I&#39;m going deeper: designing
              integrated circuits at the transistor level.
            </p>
            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              At the <span className="text-teal-400 font-medium">Arbabian Lab</span>, I research
              mm-wave radar sensors and multimodal AI systems. In the fab, I design analog ICs
              for <span className="text-sky-400 font-medium">actual fabrication at TSMC</span> |
              bridging the gap between physics, silicon, and intelligent perception.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {aboutStats.map((stat, index) => (
                <FadeIn key={stat.label} delay={`delay-${index * 100}`}>
                  <div className="rounded-lg border border-border bg-card/50 p-4 text-center hover:border-sky-500/30 transition-colors">
                    <span className="font-display text-3xl font-bold text-sky-400 block">{stat.value}</span>
                    <span className="font-body text-xs text-muted-foreground mt-1 block">{stat.label}</span>
                  </div>
                </FadeIn>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold tracking-wider uppercase text-sky-400 hover:text-sky-300 border border-sky-500/35 hover:border-sky-500/60 px-6 py-3 rounded-sm transition-all duration-300 group"
            >
              Learn More About Me
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
