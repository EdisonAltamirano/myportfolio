import { SkillCategory } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface TechSkillsProps {
  category: SkillCategory;
}

export function TechSkillsDisplay({ category }: TechSkillsProps) {
  return (
    <div className="rounded-lg border border-border bg-card/60 card-glow-sky p-6">
      <div className="flex items-center gap-2.5 mb-5">
        {category.icon && (
          <div className="w-8 h-8 rounded-md bg-white/80 flex items-center justify-center">
            <category.icon className="h-4 w-4 text-primary" />
          </div>
        )}
        <h3 className="font-display text-lg font-bold text-foreground">{category.title}</h3>
      </div>
      <div className="space-y-4">
        {category.skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1.5">
              <span className="font-body text-sm text-muted-foreground">{skill.name}</span>
              <span className="font-mono text-xs text-primary/80">{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-primary shadow-none"
                style={{ width: `${skill.level}%`, transition: 'width 1s ease-out' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
