import { technicalSkills } from '@/lib/constants';
import { TechSkillsDisplay } from './TechSkills';
import { FadeIn } from '@/components/animations/FadeIn';
import { Cpu } from 'lucide-react';

export function SkillsSection() {
  return (
    <section className="py-20 bg-muted/15">
      <div className="container px-4 mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-white/70 mb-5">
              <Cpu className="w-3 h-3 text-primary" />
              <span className="font-mono text-xs text-primary/80 tracking-widest uppercase">
                Technical Expertise
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills grouped by hiring signal
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Instead of a generic toolbox, these are the technical clusters that connect my projects to concrete roles.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {technicalSkills.map((category, i) => (
            <FadeIn key={category.title} delay={`delay-${i * 100}`}>
              <TechSkillsDisplay category={category} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
