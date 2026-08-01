import { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { BookOpen, ExternalLink, Presentation, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Publications — Edison Altamirano",
  description:
    "Research publications, conference presentations, and academic contributions in robotics, VLSI, and AI.",
};

type Publication = {
  authors: string;
  year: string;
  title: string;
  venue: string;
  pages?: string;
  doi: string;
  linkLabel?: string;
};

const publications: Publication[] = [
  {
    authors: "Altamirano-Avila, E., Ahmad, R., & Rodriguez-Padilla, C.",
    year: "2022",
    title:
      "A Digital Twin Implementation for Mobile and Collaborative Robot Scenarios for Teaching Robotics Based on Robot Operating System.",
    venue: "IEEE EDUCON",
    pages: "1–6",
    doi: "https://doi.org/10.1109/EDUCON52537.2022.9766583",
  },
  {
    authors: "Rodriguez-Padilla, C., Ahmad, R., & Altamirano-Avila, E.",
    year: "2023",
    title: "Visual Navigation Algorithms for Mobile Manipulators in Service Shops.",
    venue: "International Conference on Robotics and Automation",
    pages: "1–8",
    doi: "https://doi.org/10.1007/978-3-031-47640-2_19",
  },
  {
    authors: "Vázquez-Hurtado, C., Altamirano-Avila, E., & Ahmad, R.",
    year: "2023",
    title:
      "Towards a Mixed Virtual Reality Environment Implementation to Enable Industrial Robot Programming Competencies within a Cyber-Physical Factory.",
    venue: "IEEE EDUCON",
    pages: "1–6",
    doi: "https://doi.org/10.1109/EDUCON54358.2023.10125175",
  },
  {
    authors:
      "Vázquez-Hurtado, C., Altamirano-Avila, E., Rodriguez-Padilla, C., Ahmad, R., et al.",
    year: "2024",
    title:
      "Virtual Twin for the Smart Factory as a Tool to Enable Robotics Skills Acquisition.",
    venue: "International Conference on Learning Factories (IALF)",
    pages: "113–120",
    doi: "https://doi.org/10.1007/978-3-031-65411-4_14",
  },
  {
    authors: "VANTTEC Team",
    year: "2022",
    title:
      "RoboSub 2022, 2021 and 2020: Comprehensive Papers on Autonomous Submarine Design and Operation.",
    venue: "RoboNation Technical Design Report",
    doi: "https://edisonaltamirano.github.io/myportfolio/projects/vanttec-roboboat-robosub",
    linkLabel: "VANTTEC",
  },
  {
    authors: "VANTTEC Team",
    year: "2022",
    title:
      "RoboBoat 2022, 2021, 2020 and 2019: Papers on Engineering and Design of Autonomous Surface Vehicles.",
    venue: "RoboNation Technical Design Report",
    doi: "https://edisonaltamirano.github.io/myportfolio/projects/vanttec-roboboat-robosub",
    linkLabel: "VANTTEC",
  },
  {
    authors: "Altamirano-Avila, E., Ahmad, R., & Rodriguez-Padilla, C.",
    year: "2022",
    title:
      "Work in Progress: Implementation of a Digital Twin as Technology to Support Discrete Event Control Teaching.",
    venue: "IEEE EDUNINE",
    pages: "1–6",
    doi: "https://doi.org/10.1109/EDUNINE53672.2022.9782154",
  },
];

const presentations: { year: string; items: { title: string; venue: string; link?: string; linkLabel?: string }[] }[] = [
  {
    year: "2025",
    items: [
      {
        title:
          "Intensive 20-hour Course on Robotics and Autonomous Vehicles — Teaching 30 professors from Tecnológico de Monterrey campuses on ROS1/ROS2, control systems, advanced perception algorithms, and ADAS simulations.",
        venue: "Tecnológico de Monterrey Faculty Program",
        link: "https://www.linkedin.com/posts/edison-altamirano-avila-55a0341a3_robotics-autonomousvehicles-innovation-activity-7296053708478435329-iOwt",
        linkLabel: "View Post",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title:
          '5th Anniversary of the SMART FACTORY at Tec De Monterrey — "Roadmap to the SmartFactory: Paving the Way for Intelligent Manufacturing and Advanced Robotics"',
        venue: "Tecnológico de Monterrey",
        link: "https://www.linkedin.com/posts/edison-altamirano-avila-55a0341a3_innovation-smartfactory-industry4-activity-7245875486931697664-V3Lk",
        linkLabel: "View Recording",
      },
      {
        title:
          '"Virtual Twin for the Smart Factory as a Tool to Enable Robotics Skills Acquisition"',
        venue: "IALF — University of Twente, Netherlands",
        link: "https://ialf-online.net/",
        linkLabel: "Conference Website",
      },
      {
        title:
          '"Towards a Mixed VR Environment for Industrial Robot Programming within a Cyber-Physical Factory"',
        venue: "CPLAS 2024",
        link: "https://ciie.itesm.mx/en/cplas-2024/",
        linkLabel: "Conference Website",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title:
          "VANTTEC Self-Driving Car Showcase — First official demonstration of fully autonomous SDV capabilities to company executives, academics, and school directives.",
        venue: "VANTTEC Showcase Event",
        link: "https://drive.google.com/file/d/1tOrO6Brp6VLg6hqPitjMkOtYIW-htkGg/view",
        linkLabel: "View Recording",
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        title:
          "AVEVA OSIsoft Training — Teaching 11+ professors on industrial data management using AVEVA PI System: real-time data collection, visualization, and analysis.",
        venue: "Tecnológico de Monterrey",
      },
      {
        title: 'RoboSub 2022 — "Presentation of VANTTEC UUV-IV Prototype"',
        venue: "RoboNation RoboSub 2022",
      },
    ],
  },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-circuit">
      <div className="container mx-auto px-4 py-14 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-white/70 mb-5">
            <FlaskConical className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono text-xs text-primary/80 tracking-widest uppercase">
              Academic Contributions
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4 tracking-[-0.055em]">
            Research across robotics, autonomy, and digital twins.
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-8">
            Peer-reviewed publications, technical reports, and invited talks spanning robotics
            systems, digital-twin implementation, autonomous vehicles, and engineering education.
          </p>
        </FadeIn>

        {/* Publications */}
        <FadeIn delay="delay-100" className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="font-display text-sm font-bold tracking-widest uppercase text-primary">
                Publications
              </span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
            <span className="font-mono text-xs text-muted-foreground/80">{publications.length} papers</span>
          </div>

          <div className="space-y-4">
            {publications.map((pub, i) => (
              <FadeIn key={i} delay={`delay-${(i % 4) * 75}`}>
                <div className="rounded-xl border border-border bg-card p-5 shadow-sm shadow-black/5 group">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-xs text-primary font-bold border border-black/10 bg-white/80 px-2 py-0.5 rounded-md">
                          {pub.year}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground/80">{pub.venue}</span>
                      </div>
                      <p className="font-display text-base font-semibold text-foreground leading-snug mb-1">
                        {pub.title}
                      </p>
                      <p className="font-body text-xs text-muted-foreground/85 italic">
                        {pub.authors}
                        {pub.pages && ` · pp. ${pub.pages}`}
                      </p>
                    </div>
                    {pub.doi && (
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 flex items-center gap-1.5 font-mono text-xs text-primary hover:text-primary border border-border hover:border-primary/30 bg-primary/10 hover:bg-primary/10 px-3 py-2 rounded-md transition-all duration-200"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {pub.linkLabel ?? "DOI"}
                      </a>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {/* Presentations */}
        <FadeIn delay="delay-200">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <Presentation className="w-4 h-4 text-primary" />
              <span className="font-display text-sm font-bold tracking-widest uppercase text-primary">
                Presentations & Talks
              </span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
          </div>

          <div className="space-y-8">
            {presentations.map((yearGroup) => (
              <div key={yearGroup.year}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-2xl font-bold text-foreground">{yearGroup.year}</span>
                  <div className="flex-1 h-px bg-border/50" />
                </div>
                <div className="space-y-3">
                  {yearGroup.items.map((item, i) => (
                    <FadeIn key={i} delay={`delay-${i * 75}`}>
                      <div className="rounded-xl border border-border bg-card p-5 shadow-sm shadow-black/5">
                        <p className="font-body text-sm text-foreground leading-relaxed mb-2">{item.title}</p>
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <span className="font-mono text-xs text-muted-foreground/80">{item.venue}</span>
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 font-mono text-xs text-primary hover:text-primary transition-colors"
                            >
                              <ExternalLink className="w-3 h-3" />
                              {item.linkLabel ?? "View"}
                            </a>
                          )}
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
