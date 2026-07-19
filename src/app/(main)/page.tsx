import { HeroSection } from '@/components/sections/HeroSection';
import { StanfordSection } from '@/components/sections/StanfordSection';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { AboutTeaser } from '@/components/sections/AboutTeaser';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { RoleFitSection } from '@/components/sections/RoleFitSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <RoleFitSection />
      <StanfordSection />
      <FeaturedProjects />
      <AboutTeaser />
      <ExperienceTimeline />
      <SkillsSection />
    </div>
  );
}
