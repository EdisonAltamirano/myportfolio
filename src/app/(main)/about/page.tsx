import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { Download, FlaskConical, Cpu, Brain, Users, Layers } from "lucide-react";
import { aboutStats, siteName, technicalSkills } from "@/lib/constants";
import { TechSkillsDisplay } from "@/components/sections/TechSkills";
import { getAssetPath } from "@/lib/utils";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-circuit">
      <div className="container mx-auto px-4 py-14 lg:px-8">

        {/* Page title */}
        <FadeIn className="text-center mb-14">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
            About <span className="text-gradient-sky">Me</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Engineer. Researcher. Builder. From Monterrey to Stanford.
          </p>
        </FadeIn>

        {/* Hero card */}
        <FadeIn delay="delay-100" className="mb-14">
          <div className="rounded-xl border border-white/10 bg-card/70 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] mb-5 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  <span className="font-mono text-xs text-primary/80 tracking-widest uppercase">
                    Stanford University · MS Electrical Engineering
                  </span>
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                  {siteName}
                </h2>
                <p className="font-mono text-sm text-primary mb-5 tracking-wide">
                  Arbabian Lab Researcher · VLSI Designer · Robotics Engineer
                </p>
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  I started as a robotics engineer, building autonomous boats, humanoid service
                  robots, and industrial automation systems across Mexico and the Netherlands.
                  That hands-on foundation led me to Stanford, where I&apos;m now going deeper
                  into the hardware stack — designing integrated circuits at the transistor level.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  At the <span className="text-teal-400 font-medium">Arbabian Lab</span>, I research
                  mm-wave radar sensor ICs and multimodal AI systems. In the fab, I design analog
                  circuits for <span className="text-sky-400 font-medium">real fabrication at TSMC</span>{" "}
                  — bridging physics, silicon, and intelligent perception.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-display text-sm font-semibold tracking-wider uppercase text-primary hover:text-sky-300 border border-white/12 hover:border-sky-500/60 px-6 py-3 rounded-md transition-all duration-300"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
              <div className="relative min-h-[300px] md:min-h-full">
                <Image
                  src={getAssetPath("/images/profile_robot.jpeg")}
                  alt={`${siteName} - Professional Portrait`}
                  data-ai-hint="professional developer with robot"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card/60 to-transparent" />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay="delay-200" className="mb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border bg-card/70 p-6 text-center hover:border-sky-500/30 transition-colors card-glow-sky"
              >
                <span className="font-display text-4xl font-bold text-primary block">{stat.value}</span>
                <span className="font-body text-sm text-muted-foreground mt-1 block">{stat.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Philosophy */}
        <FadeIn delay="delay-200" className="mb-14">
          <h2 className="font-display text-3xl font-bold text-center text-foreground mb-8">
            My Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Cpu,
                title: "Silicon First",
                body: "Understanding systems at the transistor level — the physics of silicon — makes everything else more elegant. From circuits to software.",
              },
              {
                icon: Layers,
                title: "Full-Stack Thinking",
                body: "Every great system is a stack. I work from analog IC design up through embedded firmware, AI models, and cloud APIs.",
              },
              {
                icon: Users,
                title: "Real-World Impact",
                body: "From autonomous vehicles and radar chips to agricultural e-commerce: technology only matters when it solves real problems for real people.",
              },
            ].map((p) => (
              <div key={p.title} className="rounded-lg border border-border bg-card/70 p-6 text-center card-glow-sky">
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center mx-auto mb-4">
                  <p.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Skills */}
        <FadeIn delay="delay-300" className="mb-14">
          <div className="rounded-xl border border-border bg-card/60 p-8">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold text-foreground mb-3">
                Core Technical Expertise
              </h2>
              <p className="font-body text-muted-foreground">
                From transistors to cloud deployments — a full-stack technical skill set.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalSkills.map((category) => (
                <TechSkillsDisplay key={category.title} category={category} />
              ))}
            </div>
          </div>
        </FadeIn>

        {/* CV download */}
        <FadeIn delay="delay-400" className="text-center">
          <div className="inline-flex flex-col items-center gap-3">
            <Link
              href="/docs/EdisonAltamiranoResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-display text-sm font-bold tracking-wider uppercase px-8 py-4 rounded-md border border-white/12 text-primary hover:bg-sky-500/10 hover:border-sky-500/70 transition-all duration-300 animate-sky-glow"
            >
              <Download className="h-5 w-5" />
              Download Full CV
            </Link>
            <p className="font-mono text-xs text-muted-foreground/75">
              PDF — updated 2025
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
