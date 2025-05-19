import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { AboutTeaser } from '@/components/sections/AboutTeaser';
import { SkillsSection } from '@/components/sections/SkillsSection';
// import { ThreeScene } from '@/components/three/ThreeScene'; // Example import for 3D scene

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedProjects />
      <AboutTeaser />
      <SkillsSection />
      {/* 
      Example of embedding a 3D scene if needed directly on a page:
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Interactive 3D Model</h2>
        <ThreeScene />
      </section> 
      */}
    </div>
  );
}
