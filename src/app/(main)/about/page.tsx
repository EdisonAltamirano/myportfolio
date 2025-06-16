import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Briefcase, Brain, Download, Layers, Lightbulb, Users } from "lucide-react";
import { aboutStats, siteName, technicalSkills } from "@/lib/constants";
import { TechSkillsDisplay } from "@/components/sections/TechSkills";
import { getAssetPath } from "@/lib/utils";

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
              As a leader in robotics and technology, I've built my career on a foundation of hands-on engineering excellence. My deep expertise in robotics systems and software development has positioned me at the forefront of innovation, driving the development of cutting-edge solutions that bridge the gap between hardware and software. This unique perspective has been instrumental in my success as a full-stack developer and AI innovator, allowing me to deliver transformative solutions that push the boundaries of what's possible.
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
                src={getAssetPath("/images/profile_robot.jpeg")}
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
        <div className="flex flex-col items-center gap-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Button size="lg" variant="outline" asChild className="relative border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105">
              <Link href={getAssetPath("docs/EdisonAltamiranoResume.pdf")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3">
                <Download className="h-5 w-5" />
                <span className="font-medium">Download My CV</span>
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">Get a detailed overview of my experience and skills</p>
        </div>
      </FadeIn>
    </div>
  );
}
