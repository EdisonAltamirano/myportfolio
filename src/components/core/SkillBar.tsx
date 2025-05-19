"use client";
import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
}

export function SkillBar({ name, level }: SkillBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar on mount
    const timer = setTimeout(() => setProgress(level), 100);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium text-foreground text-sm">{name}</span>
        <span className="text-muted-foreground text-sm">{level}%</span>
      </div>
      <Progress value={progress} className="h-2 [&>div]:bg-primary" aria-label={`${name} skill level ${level}%`} />
    </div>
  );
}
