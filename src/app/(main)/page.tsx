import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { AboutTeaser } from '@/components/sections/AboutTeaser';
import { SkillsSection } from '@/components/sections/SkillsSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedProjects />
      <AboutTeaser />
      <SkillsSection />
    </div>
  );
}
