import { SkillCategory } from '@/lib/constants';

interface TechSkillsProps {
  category: SkillCategory;
}

function levelLabel(level: number) {
  if (level >= 90) return 'Advanced';
  if (level >= 82) return 'Strong';
  return 'Applied';
}

export function TechSkillsDisplay({ category }: TechSkillsProps) {
  return (
    <div className="surface h-full p-6">
      <div className="mb-5 flex items-center gap-2.5">
        {category.icon && (
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
            <category.icon className="h-4 w-4 text-primary" />
          </div>
        )}
        <h3 className="text-lg font-semibold tracking-[-0.025em] text-foreground">{category.title}</h3>
      </div>
      <div className="space-y-3">
        {category.skills.map((skill) => (
          <div key={skill.name} className="rounded-xl border border-black/10 bg-muted/35 px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
              <span className="shrink-0 rounded-full border border-black/10 bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {levelLabel(skill.level)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
