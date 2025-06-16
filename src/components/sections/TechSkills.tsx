import { SkillCategory } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn } from '@/components/animations/FadeIn';
import { D3SkillChart } from '@/components/core/D3SkillChart';

interface TechSkillsProps {
  category: SkillCategory;
}

export function TechSkillsDisplay({ category }: TechSkillsProps) {
  return (
    <FadeIn>
      <Card className="bg-card shadow-lg">
        <CardHeader className="flex flex-row items-center space-x-2 pb-4">
          {category.icon && <category.icon className="h-6 w-6 text-primary" />}
          <CardTitle className="text-xl">{category.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <D3SkillChart 
            skills={category.skills} 
            className="min-h-[400px] h-auto" 
          />
        </CardContent>
      </Card>
    </FadeIn>
  );
}
