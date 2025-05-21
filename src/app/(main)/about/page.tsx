import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Briefcase, Brain, Download, Layers, Lightbulb, Users } from "lucide-react";
import { aboutStats, siteName, technicalSkills } from "@/lib/constants";
import { TechSkillsDisplay } from "@/components/sections/TechSkills";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-primary">About Me</h1>
      </FadeIn>

      <FadeIn delay="delay-100">
        <Card className="overflow-hidden shadow-xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-semibold mb-4 text-foreground">Edison Ricardo Altamirano Avila</h2>
              <p className="text-primary mb-6 font-medium">Robotics Engineer & Full-Stack Innovator</p>
              <p className="text-muted-foreground mb-4">
                My journey began in the intricate world of robotics systems, fostering a deep understanding of how things work from the ground up. This foundation in engineering principles—problem-solving, systems thinking, and precision—has been pivotal in my evolution into a full-stack developer and AI enthusiast.
              </p>
              <p className="text-muted-foreground mb-6">
                I thrive on bridging the gap between the physical and digital, transforming complex challenges into elegant, functional solutions. My passion lies in developing intelligent systems, whether they're autonomous vehicles navigating city streets, AI algorithms deciphering complex data, or robust enterprise applications streamlining operations.
              </p>
              <Button asChild size="lg" className="mt-4 w-full sm:w-auto">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
            <div className="relative min-h-[300px] md:min-h-full">
              <Image
                src="/images/profile_robot.jpeg"
                alt={`${siteName} - Professional Portrait`}
                data-ai-hint="professional developer"
                layout="fill"
                objectFit="cover"
                className=" group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </Card>
      </FadeIn>

      <FadeIn delay="delay-200">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">My Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg">
              <CardHeader>
                <Lightbulb className="mx-auto h-12 w-12 text-primary mb-2" />
                <CardTitle>Innovation First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Constantly exploring new technologies and methodologies to push boundaries and deliver cutting-edge solutions.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg">
              <CardHeader>
                <Layers className="mx-auto h-12 w-12 text-primary mb-2" />
                <CardTitle>Systems Thinking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Approaching problems holistically, understanding the interplay of components to build robust and scalable systems.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg">
              <CardHeader>
                <Users className="mx-auto h-12 w-12 text-primary mb-2" />
                <CardTitle>User-Centric Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Prioritizing user experience and needs to create intuitive and impactful products.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay="delay-300">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Key Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {aboutStats.map((stat) => (
              <Card key={stat.label} className="text-center bg-muted/50 p-6 rounded-lg shadow-sm">
                <CardContent className="p-0">
                  <span className="text-4xl font-bold text-primary block">{stat.value}</span>
                  <span className="text-sm text-muted-foreground mt-1 block">{stat.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </FadeIn>
      
      <FadeIn delay="delay-400">
        <section className="py-12 bg-muted/30 dark:bg-neutral-800/30 rounded-lg">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Core Technical Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">My skill set spans across modern development stacks and AI technologies.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSkills.map((category) => (
              <TechSkillsDisplay key={category.title} category={category} />
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay="delay-500" className="text-center mt-12">
        <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
          <Link href="/cv_edison_altamirano.pdf" target="_blank" rel="noopener noreferrer">
            <Download className="mr-2 h-5 w-5" />
            Download My CV
          </Link>
        </Button>
      </FadeIn>
    </div>
  );
}
