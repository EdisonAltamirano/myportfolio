import Link from 'next/link';
import { ArrowRight, Bot, Cpu, Factory, Layers3, Radio, ShieldCheck } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

const roleFits = [
  {
    title: 'Robotics & Autonomy Engineer',
    summary: 'Autonomous vehicles, marine robots, service robots, perception, navigation, and ROS-based systems.',
    proof: 'ZF shuttle · RoboBoat/RoboSub · RoboCup · AIRLab',
    icon: Bot,
  },
  {
    title: 'Embedded / Automotive Software Engineer',
    summary: 'Safety-critical software, AUTOSAR workflows, MATLAB/Simulink modeling, validation, and systems integration.',
    proof: 'ZF braking systems · autonomous shuttle electronics',
    icon: ShieldCheck,
  },
  {
    title: 'AI, Perception & Sensor Systems Engineer',
    summary: 'Computer vision, radar sensing, multimodal AI, SLAM, simulation-to-real, and intelligent physical systems.',
    proof: 'Stanford Arbabian Lab · AIRLab · robotics competitions',
    icon: Radio,
  },
  {
    title: 'Industrial Automation / Digital Twin Engineer',
    summary: 'Industry 4.0 systems that connect robotics, PLCs, simulation, VR, data, and production workflows.',
    proof: 'Smart Factory · MIT-linked lab work · IEEE publications',
    icon: Factory,
  },
  {
    title: 'Full-stack Technical Product Engineer',
    summary: 'Production web platforms for technical domains, from BIM search systems to internal enterprise workflows.',
    proof: 'BAC Modelos · John Deere systems · Firebase/Next.js/Azure',
    icon: Layers3,
  },
  {
    title: 'VLSI / EE Hardware Candidate',
    summary: 'Stanford EE work across VLSI, analog circuits, RF systems, and silicon-oriented design flows.',
    proof: 'EE271/272 · EE233 · EE372 chip design',
    icon: Cpu,
  },
];

export function RoleFitSection() {
  return (
    <section className="border-y border-black/10 bg-white py-20 sm:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="eyebrow mb-4">Best-fit roles</div>
            <h2 className="text-4xl font-semibold tracking-[-0.055em] text-foreground sm:text-5xl">
              Engineering depth across intelligent physical systems.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              My strongest work sits at the intersection of software, hardware, robotics, and product engineering.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {roleFits.map((role, index) => {
            const Icon = role.icon;
            return (
              <FadeIn key={role.title} delay={`delay-${(index % 3) * 100}`}>
                <article className="surface group h-full p-5 transition duration-200 hover:-translate-y-0.5 hover:border-black/15 hover:shadow-lg hover:shadow-black/5 sm:p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-[-0.035em] text-foreground">
                    {role.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {role.summary}
                  </p>
                  <div className="mt-5 rounded-xl border border-black/10 bg-muted/40 p-3 text-xs leading-5 text-muted-foreground">
                    <span className="font-semibold text-foreground">Evidence:</span> {role.proof}
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:border-black/20 hover:bg-black/[0.04]"
          >
            Explore work by role fit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
