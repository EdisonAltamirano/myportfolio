import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { Download, Cpu, Users, Layers } from "lucide-react";
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
            About <span className="text-gradient-sky">Edison</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Stanford EE engineer building intelligent sensing systems across silicon, embedded software, and autonomy.
          </p>
        </FadeIn>

        {/* Hero card */}
        <FadeIn delay="delay-100" className="mb-14">
          <div className="rounded-xl border border-black/10 bg-card overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-white/70 mb-5 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono text-xs text-primary/80 tracking-widest uppercase">
                    Stanford University · MS Electrical Engineering
                  </span>
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                  {siteName}
                </h2>
                <p className="font-mono text-sm text-primary mb-5 tracking-wide">
                  Hardware-AI / Sensing Systems · VLSI · Embedded Autonomy
                </p>
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  I started by building physical systems: autonomous boats, humanoid service
                  robots, automotive prototypes, and industrial automation labs. That foundation
                  now shapes how I approach Stanford EE work: not as isolated coursework, but as
                  a path toward sensing systems that connect circuits, embedded software, and AI.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  My strongest direction is hardware-aware intelligence: mm-wave radar, analog
                  and VLSI design, sensor fusion, safety-critical embedded systems, and robotics
                  autonomy. I can also ship production software, which helps me turn technical
                  systems into usable products.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-display text-sm font-semibold tracking-wider uppercase text-primary hover:text-primary border border-black/10 hover:border-primary/30 px-6 py-3 rounded-md transition-all duration-300"
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
                className="rounded-xl border border-border bg-card p-6 text-center hover:border-primary/25 transition-colors card-glow-sky"
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
            How I create value
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Cpu,
                title: "Hardware-aware intelligence",
                body: "I care about the full sensing stack: signals, circuits, embedded control, perception algorithms, and the physical system around them.",
              },
              {
                icon: Layers,
                title: "Systems thinking",
                body: "My projects cross layers: analog and VLSI fundamentals, firmware, robotics middleware, simulation, AI, and production interfaces.",
              },
              {
                icon: Users,
                title: "Employer-ready execution",
                body: "I focus on evidence: working demos, validated systems, competition results, industry projects, publications, and tools people can use.",
              },
            ].map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-card p-6 text-center card-glow-sky">
                <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center mx-auto mb-4">
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
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold text-foreground mb-3">
                Technical strengths by role
              </h2>
              <p className="font-body text-muted-foreground">
                The strongest hiring signals are RF/analog systems, VLSI, embedded automotive software, robotics perception, and technical product engineering.
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
              className="inline-flex items-center gap-3 font-display text-sm font-bold tracking-wider uppercase px-8 py-4 rounded-md border border-black/10 text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 animate-sky-glow"
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
