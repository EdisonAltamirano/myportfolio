import { technicalSkills } from '@/lib/constants';
import { TechSkillsDisplay } from './TechSkills';
import { FadeIn } from '@/components/animations/FadeIn';

export function SkillsSection() {
  return (
    <section className="py-16 bg-muted/50 dark:bg-neutral-800/50">
      <div className="container px-4 mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across various domains
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technicalSkills.map((category) => (
            <TechSkillsDisplay key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
