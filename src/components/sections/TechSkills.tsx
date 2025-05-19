import { SkillCategory } from '@/lib/constants';
import { SkillBar } from '@/components/core/SkillBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn } from '@/components/animations/FadeIn';

interface TechSkillsProps {
  category: SkillCategory;
}

export function TechSkillsDisplay({ category }: TechSkillsProps) {
  return (
    <FadeIn>
      <Card className="bg-card shadow-lg h-full">
        <CardHeader className="flex flex-row items-center space-x-2 pb-4">
          {category.icon && <category.icon className="h-6 w-6 text-primary" />}
          <CardTitle className="text-xl">{category.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {category.skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </CardContent>
      </Card>
    </FadeIn>
  );
}
