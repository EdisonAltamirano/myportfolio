import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, UserCircle, Tag, Target, Cpu, Eye, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FadeIn } from '@/components/animations/FadeIn';
import { siteName } from '@/lib/constants';
import { Layers, Trophy, Globe, Satellite, Map, Award, Star, Bot, Monitor, Route, Hand, Zap, FileText, CheckCircle, Car, Cog, Shield, Play, Users, Building, Factory, Settings, Brain, Network, Wrench, BookOpen, Presentation, Home, Gamepad2, Volume2, Navigation, Cloud, Headphones, ShoppingCart, Truck, DollarSign, Smartphone, ChefHat, MapPin, Bell, Server, Sparkles, Camera, Box, Clock, BarChart, GraduationCap, Code, XCircle, Layout, RefreshCw, LineChart, TestTube, Bug, Lightbulb, GitBranch, Video, ExternalLink, Download } from 'lucide-react';
import { allProjects, Project, projectSignals } from '@/lib/constants';
import { Suspense } from 'react';
import { getAssetPath } from '@/lib/utils';
// Project metadata
const projectsData = [
  {
    id: '14',
    slug: 'anello-navigation-simulation',
    title: 'ANELLO Photonics | Navigation Simulation Engineer',
    date: 'June 2026 – Present',
    author: siteName,
    category: 'Navigation Simulation',
    tags: ['MATLAB', 'Simulink', 'PX4', 'SITL', 'HITL', 'Inertial Navigation', 'IMU Modeling'],
    imageUrl: 'https://img.youtube.com/vi/s08NLhYrOQI/maxresdefault.jpg',
    imageHint: 'navigation simulation autonomous platforms inertial sensors',
    githubUrl: '',
    demoUrl: 'https://youtu.be/s08NLhYrOQI'
  },
  {
    id: '1',
    slug: "zf-autonomous-shuttle",
    title: "ZF Autonomous Shuttle",
    date: "October 26, 2023",
    author: siteName,
    category: "Autonomous Systems",
    tags: ["AI", "Robotics", "Self-Driving", "Innovation"],
    imageUrl: getAssetPath("/images/sdv image.png"),
    imageHint: "autonomous vehicle technology",
    githubUrl: "https://github.com/example/zf-shuttle",
    demoUrl: "https://demo.example.com/zf-shuttle"
  },
  {
    id: '2',
    slug: "airlab-stacking-challenge",
    title: "AirLab Stacking Challenge",
    date: "March 15, 2024",
    author: siteName,
    category: "Robotics",
    tags: ["Robotics", "Computer Vision", "AI", "Automation"],
    imageUrl: getAssetPath('/airlab/AirlabPrize.jpeg'),
    imageHint: "robotic stacking system",
    githubUrl: "https://github.com/example/airlab-stacking",
    demoUrl: "https://demo.example.com/airlab-stacking"
  },
  {
    id: '3',
    slug: "vanttec-roboboat-robosub",
    title: "VantTec RoboBoat & RoboSub",
    date: "February 20, 2024",
    author: siteName,
    category: "Marine Robotics",
    tags: ["Robotics", "Marine", "Autonomous Systems", "Competition"],
    imageUrl: getAssetPath('/images/uuv.png'),
    imageHint: "autonomous marine vehicle",
    githubUrl: "https://github.com/example/vanttec-marine",
    demoUrl: "https://demo.example.com/vanttec-marine"
  },
  {
    id: '4',
    slug: "smart-factory",
    title: "Smart Factory Implementation",
    date: "January 10, 2024",
    author: siteName,
    category: "Industrial Automation",
    tags: ["Industry 4.0", "IoT", "Automation", "Digital Twin"],
    imageUrl: getAssetPath('/smartfactory/smartfactory.jpeg'),
    imageHint: "smart factory automation system",
    githubUrl: "https://github.com/example/smart-factory",
    demoUrl: "https://demo.example.com/smart-factory"
  },
  {
    id: '5',
    slug: "chakri-ecommerce",
    title: "BAC Modelos | BIM Platform",
    date: "2024",
    author: siteName,
    category: "Full-Stack Platform",
    tags: ["Next.js", "TypeScript", "Firebase", "Elasticsearch", "BIM", "Full-Stack"],
    imageUrl: getAssetPath('/bacmodelos/mainpage.png'),
    imageHint: "BIM product discovery platform",
    githubUrl: "https://github.com/example/chakri-ecommerce",
    demoUrl: "https://demo.example.com/chakri-ecommerce"
  },
  {
    id: '6',
    slug: "john-deere-go",
    title: "John Deere Supply Chain Systems",
    date: "February 15, 2024",
    author: siteName,
    category: "Supply Chain Systems",
    tags: ["SAP ABAP", "Azure", "Computer Vision", "Power Platform", "Supply Chain"],
    imageUrl: getAssetPath('/images/JD GO.jpeg'),
    imageHint: "mobile app for agricultural equipment",
    githubUrl: "https://github.com/example/john-deere-go",
    demoUrl: "https://demo.example.com/john-deere-go"
  },
  {
    id: '7',
    slug: "robocup-competitions",
    title: "RoboCup Competitions",
    date: "March 10, 2024",
    author: siteName,
    category: "Robotics",
    tags: ["Robotics", "AI", "Competition", "Soccer"],
    imageUrl: getAssetPath('/robocup/frida.jpg'),
    imageHint: "robotic soccer competition",
    githubUrl: "https://github.com/example/robocup",
    demoUrl: "https://demo.example.com/robocup"
  },
  {
    id: '8',
    slug: "tokyo-iros-2022",
    title: "Tokyo IROS 2022",
    date: "October 23, 2022",
    author: siteName,
    category: "Research",
    tags: ["Research", "Robotics", "Conference", "AI"],
    imageUrl: getAssetPath('/tokio/tokio-general.jpg'),
    imageHint: "robotics research conference",
    githubUrl: "https://github.com/example/tokyo-iros-2022",
    demoUrl: "https://demo.example.com/tokyo-iros-2022"
  },
  {
    id: '9',
    slug: "zf-braking-systems",
    title: "ZF Braking Systems",
    date: "November 15, 2023",
    author: siteName,
    category: "Automotive Systems",
    tags: ["Automotive", "Safety Systems", "Engineering", "Innovation"],
    imageUrl: getAssetPath('/zf_job/ZF-CVS.jpg'),
    imageHint: "automotive braking system technology",
    githubUrl: "https://github.com/example/zf-braking",
    demoUrl: "https://demo.example.com/zf-braking"
  },
  {
    id: '10',
    slug: "ee272-vlsi-design",
    title: "EE272 VLSI Design Projects",
    date: "June 2025",
    author: siteName,
    category: "VLSI / Integrated Circuits",
    tags: ["VLSI", "SKY130", "Cadence", "Place & Route", "IC Design", "Stanford"],
    imageUrl: getAssetPath('/272-Course/sram.png'),
    imageHint: "VLSI chip layout design",
    githubUrl: "",
    demoUrl: ""
  },
  {
    id: '11',
    slug: "ee233-fm-radio",
    title: "EE233 | FM Superheterodyne Radio Receiver",
    date: "March 2025",
    author: siteName,
    category: "Analog IC / RF",
    tags: ["Si5351 PLL", "Superheterodyne", "I/Q Demodulation", "RF Design", "Raspberry Pi Pico", "Analog Circuits"],
    imageUrl: getAssetPath('/images/radio_hardware.png'),
    imageHint: "FM radio receiver circuit board",
    githubUrl: "",
    demoUrl: "https://youtube.com/shorts/ubQI5udW8H8?si=RdDYvzP_OdoH4A6_"
  },
  {
    id: '12',
    slug: 'ee219-uwb-radar',
    title: 'EE219 | UWB Human Tracking & Breathing Detection',
    date: 'July 2026',
    author: siteName,
    category: 'Radar / Signal Processing',
    tags: ['UWB Radar', 'OS-CFAR', 'Kalman Filter', 'Extended Kalman Filter', 'Hungarian Assignment', 'Vital Signs'],
    imageUrl: getAssetPath('/stanford/ee219/uwb-radar-cover.png'),
    imageHint: 'UWB radar people counting, person tracking, and breathing detection',
    githubUrl: '',
    demoUrl: ''
  },
  {
    id: '13',
    slug: 'ee372-ldo-chip',
    title: 'EE372 | Analog/Mixed-Signal LDO Chip',
    date: 'June 2026',
    author: siteName,
    category: 'Analog / Mixed-Signal IC',
    tags: ['TSMC 180 nm', 'LDO', 'Bandgap Reference', 'gm/Id', 'Cadence', 'DRC / LVS', 'I²C'],
    imageUrl: getAssetPath('/stanford/ee372/layout.jpg'),
    imageHint: 'TSMC 180 nanometer LDO full chip layout',
    githubUrl: '',
    demoUrl: ''
  }
];

const detailProof = {
  'anello-navigation-simulation': {
    problem: 'Navigation algorithms and inertial sensors need to be tested safely across very different vehicle dynamics before deployment on physical autonomous platforms.',
    contribution: 'Built a navigation simulation framework from the ground up, including realistic IMU behavior, sensor models, data interfaces, control integration, validation tools, and SITL/HITL workflows.',
    outcome: 'A repeatable simulation and validation pipeline for fixed-wing aircraft, ground rovers, unmanned surface vehicles, and unmanned underwater vehicles.',
    proves: ['Navigation simulation architecture', 'IMU and sensor-modeling depth', 'SITL/HITL validation discipline'],
  },
  'zf-braking-systems': {
    problem: 'Commercial-vehicle braking software has to coordinate control logic, configuration, simulation, and validation without compromising safety-critical behavior.',
    contribution: 'AUTOSAR-oriented software architecture, MATLAB/Simulink modeling, VectorCAST validation, MISRA-aware embedded C/C++, and toolchain debugging.',
    outcome: 'Professional embedded automotive work on next-generation axle modulator systems for commercial vehicles.',
    proves: ['Safety-critical embedded software', 'Automotive toolchain fluency', 'Simulation-to-validation discipline'],
  },
  'zf-autonomous-shuttle': {
    problem: 'A disused shuttle needed to become a supervised autonomous passenger platform with sensing, actuation, control, and safety layers integrated on real hardware.',
    contribution: 'Firmware/electronics, CAN-connected actuation, ROS integration, perception/localization support, dashboards, and field-test coordination with ZF engineers.',
    outcome: 'A working autonomous shuttle prototype demonstrated to academic and industry stakeholders.',
    proves: ['Robotics systems integration', 'Embedded-to-autonomy bridge', 'Real vehicle testing under constraints'],
  },
  'ee272-vlsi-design': {
    problem: 'A VLSI design flow must turn hardware intent into layout while satisfying timing, power, routing, and physical-verification constraints.',
    contribution: 'RTL modeling, synthesis, floorplanning, CTS, routing, timing closure, DRC/LVS, and DNN accelerator physical implementation using SKY130/Cadence-style flows.',
    outcome: 'Stanford EE271/EE272 project sequence with signoff-oriented design artifacts and strong assignment performance.',
    proves: ['Architecture-to-layout reasoning', 'EDA workflow discipline', 'Timing and physical verification literacy'],
  },
  'ee233-fm-radio': {
    problem: 'A real FM receiver must convert weak RF signals into intelligible baseband data while coordinating oscillators, filtering, embedded control, and UI telemetry.',
    contribution: 'Dual-conversion superheterodyne architecture, Si5351 PLL control, I/Q demodulation, RP2040 firmware, and a WiFi browser interface for tuning and spectrum display.',
    outcome: 'Working Stanford EE233 hardware/software radio with demo video, report, and interactive tuning interface.',
    proves: ['RF signal-chain understanding', 'Embedded hardware control', 'Hardware/software interface design'],
  },
  'ee219-uwb-radar': {
    problem: 'Indoor UWB returns contain static clutter, multipath, sidelobes, ambiguous peaks, and overlapping targets; breathing motion is only a few millimeters.',
    contribution: 'Built the processing stack from CIR calibration and clutter removal through OS-CFAR, Doppler, gated Kalman/EKF tracking, Hungarian assignment, group association, and slow-time phase FFT.',
    outcome: 'Raised exact two-person counting accuracy from 22.7% to 53.2% and recovered breathing at 10.8/21.1 BPM with 24.4/13.5 dB SNR.',
    proves: ['Radar signal-processing depth', 'Probabilistic estimation', 'Experiment design and ablation analysis'],
  },
  'ee372-ldo-chip': {
    problem: 'A mixed-signal LDO must generate a stable reference, regulate under load, reject false switching, expose trim control, and close physical verification across analog and digital domains.',
    contribution: 'Designed and integrated a BANBA bandgap, 5-bit trim resistor, high-gain error amplifier, Schmitt triggers, CMOS MUX, I²C trim control, and full custom layout in TSMC 180 nm.',
    outcome: 'Completed the chip, earned a 10/10 design-showcase score, and presented the work at Apple headquarters.',
    proves: ['Transistor-level analog design', 'Mixed-signal integration', 'Layout and DRC/LVS closure'],
  },
} as const;

function ProjectProofPanel({ slug }: { slug: keyof typeof detailProof }) {
  const proof = detailProof[slug];
  return (
    <FadeIn delay="delay-250">
      <Card className="border-primary/20 bg-primary/10 shadow-sm shadow-black/5">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground flex items-center">
            <Target className="mr-3 h-6 w-6 text-primary" />
            Project at a Glance
          </CardTitle>
          <p className="text-muted-foreground">
            The challenge, my contribution, and the measured result.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              ['Problem', proof.problem],
              ['My contribution', proof.contribution],
              ['Outcome', proof.outcome],
            ].map(([label, body]) => (
              <div key={label} className="rounded-xl border border-border bg-card p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80">{label}</div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {proof.proves.map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-white/80 px-3 py-1.5 text-xs font-medium text-foreground">
                <CheckCircle className="h-3.5 w-3.5 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
}



function ZFBrakingProjectContent() {
  return (
    <div className="space-y-12">
      <ProjectProofPanel slug="zf-braking-systems" />
      {/* Project Overview Section */}
      <FadeIn delay="delay-300">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Cog className="mr-3 h-6 w-6 text-primary" />
              Application Engineer - Embedded Systems & Brake Technology
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Building Safer, Smarter Braking Systems</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Leading the development of embedded systems for commercial vehicle braking, focusing on AUTOSAR-based software components and safety-critical applications.
              </p>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Key Responsibilities Section */}
      <FadeIn delay="delay-400">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Key Responsibilities</CardTitle>
            <p className="text-muted-foreground">Core duties and technical leadership</p>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Layers className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-bold">Software Architecture Design</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Conceptualized high-level software architecture for new machine platforms based on AUTOSAR Classic, ensuring compliance with industry standards and safety requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <LineChart className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-bold">Modeling and Simulation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Simulated physical system behavior using MATLAB/Simulink to model complex braking physics, enabling Software-in-the-Loop (SiL) testing and design validation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <TestTube className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-bold">Testing & Validation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Applied MISRA-C compliance and performed rigorous software validation with tools like VectorCAST and DaVinci Developer to ensure system reliability.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Bug className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-bold">Toolchain Integration</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Resolved system-level issues in AUTOSAR environments, analyzing runtime bugs, interface mismatches, and configuration anomalies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Technical Stack Section */}
      <FadeIn delay="delay-500">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Technical Stack</CardTitle>
            <p className="text-muted-foreground">Tools and technologies utilized</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-primary/10 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                      <Settings className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">Development Tools</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></div>
                      Da Vinci Configurator Classic
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></div>
                      VectorCAST
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></div>
                      AUTOSAR Builder
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></div>
                      MATLAB/Simulink
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                      <Code className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">Programming</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></div>
                      Embedded C/C++
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></div>
                      MISRA-C Compliance
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></div>
                      AUTOSAR Architecture
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></div>
                      Control Systems
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                      <GitBranch className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">Version Control</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></div>
                      Git
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></div>
                      IBM Rhapsody
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></div>
                      Configuration Management
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></div>
                      Documentation Systems
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">Safety & Standards</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></div>
                      ISO 26262
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></div>
                      Automotive Safety
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></div>
                      Quality Assurance
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></div>
                      Risk Management
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Achievements Section */}
      <FadeIn delay="delay-600">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Key Achievements</CardTitle>
            <p className="text-muted-foreground">Notable contributions and improvements</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <Card className="bg-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-bold">Architectural Improvements</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Proposed and implemented architectural improvements adopted by the team for future system designs, enhancing maintainability and performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-bold">Efficiency Gains</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Reduced debugging time by 30% through implementation of better trace analysis techniques and toolchain optimizations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <BarChart className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-bold">Test Coverage</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Improved test coverage by 25% through development of custom simulation scenarios that identified edge cases in braking behavior.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Impact Section */}
      <FadeIn delay="delay-700">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Project Impact</CardTitle>
            <p className="text-muted-foreground">Long-term influence and contributions</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-primary/10 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Trophy className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-medium text-foreground">Technical Leadership</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Established best practices for AUTOSAR implementation and system architecture that became team standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-medium text-foreground">Knowledge Transfer</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Created comprehensive documentation and training materials for new team members and cross-functional teams.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Star className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-medium text-foreground">Innovation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Introduced new testing methodologies and tools that improved overall system reliability and performance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}

// ZF Autonomous Shuttle-specific content component
function ZFShuttleProjectContent() {
  return (
    <div className="space-y-12">
      <ProjectProofPanel slug="zf-autonomous-shuttle" />
      {/* Project Overview Section */}
      <FadeIn delay="delay-300">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Car className="mr-3 h-6 w-6 text-primary" />
              ZF Autonomous Shuttle Project
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Student Autonomous Shuttle Development</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                In collaboration with ZF Group, the German company inaugurated its first research center in Mexico and sponsored a student team to develop an autonomous transport shuttle from a disused vehicle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card border-border hover:border-primary/25 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Objective</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Convert a disused campus shuttle into a 100% autonomous vehicle, capable of accelerating, braking, turning, and signaling safely.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/25 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Partnership</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    ZF Group's first research center in Mexico, establishing core development capabilities in Latin America.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/25 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Team Leadership</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Led technical software and electronics development, coordinating between student team and ZF engineers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Video Demonstrations Section */}
      <FadeIn delay="delay-400">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Play className="mr-3 h-6 w-6 text-primary" />
              System Demonstrations
            </CardTitle>
            <p className="text-muted-foreground">Live demonstrations of autonomous capabilities</p>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Video 1: Initial Control Demo */}
              <Card className="bg-primary/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Initial Control System Demo</h3>
                  <div className="relative overflow-hidden rounded-xl shadow-lg aspect-video mb-4">
                    <iframe
                      src="https://www.youtube.com/embed/rN4bV2_FTRk?si=245hcTpTJKdsCn8M"
                      title="ZF Shuttle Control Demo"
                      width="600"
                      height="400"
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    />
                  </div>
                  <p className="text-muted-foreground">
                    Demonstration of manual control via Xbox controller: steering, acceleration, braking, lights, horn, and radio functionality.
                  </p>
                </CardContent>
              </Card>

              {/* Video 2: Autonomous Navigation Demo */}
              <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Autonomous Navigation Demo</h3>
                  <div className="relative overflow-hidden rounded-xl shadow-lg aspect-video mb-4">
                    <iframe
                      src="https://www.youtube.com/embed/6oElwB4LGKE?si=B7PK7hxKPENC7Qs3"
                      title="ZF Shuttle Autonomous Demo"
                      width="600"
                      height="400"
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    />
                  </div>
                  <p className="text-muted-foreground">
                    Full autonomous operation with vision algorithms, SLAM navigation, and safety systems for campus transportation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Technologies and Development Section */}
      <FadeIn delay="delay-500">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Technologies & Development</CardTitle>
            <p className="text-muted-foreground">Comprehensive technical implementation</p>
          </CardHeader>
          <CardContent className="space-y-12">
            {/* Power Electronics and Actuator Control */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Cog className="mr-3 h-6 w-6 text-primary" />
                Power Electronics & Actuator Control
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <Card className="bg-primary/10">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Custom PCB Design</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>PWM acceleration and brake modulation via CAN Bus</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Light control (headlights, turn signals)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Horn and audio system integration</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex justify-center">
                  <Image
                    src={getAssetPath("/zf_autonomous_shuttle/placa.jpg")}
                    alt="Custom PCB Design"
                    width={400}
                    height={300}
                    className="rounded-xl shadow-md object-cover"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Middleware and Embedded Software */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Cpu className="mr-3 h-6 w-6 text-primary" />
                Middleware & Embedded Software
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-center">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-center">
                  <div className="flex justify-center">
                    <Image
                      src={getAssetPath("/zf_autonomous_shuttle/zf-jetson.jpeg")}
                      alt="Jetson Xavier Setup"
                      width={500}
                      height={375}
                      className="rounded-xl shadow-md object-cover w-auto"
                    />
                  </div>
                  <div className="space-y-6">
                    <Card className="bg-gradient-to-r from-secondary/5 to-secondary/10">
                      <CardContent className="p-6">
                        <h4 className="font-bold mb-3">ROS 2 Integration</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span>Jetson Xavier orchestrating perception, planning, and actuators</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span>CAN AUTOSAR-like architecture</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span>Separate nodes for speed, brake, and telemetry</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Perception and Localization */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Eye className="mr-3 h-6 w-6 text-primary" />
                Perception & Localization
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <Card className="bg-primary/10 border-border">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Stereo Vision & SLAM</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Carnegie Mellon stereo camera system</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>3D obstacle detection via point clouds</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Camera + LiDAR sensor fusion</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Short-range LiDAR for noise reduction</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Image
                    src={getAssetPath("/zf_autonomous_shuttle/pedestrian_detection.jpeg")}
                    alt="Pedestrian Detection System"
                    width={300}
                    height={200}
                    className="rounded-xl shadow-md object-cover w-auto"
                  />
                  <Image
                    src={getAssetPath("/zf_autonomous_shuttle/lidar.jpeg")}
                    alt="LiDAR Setup"
                    width={300}
                    height={200}
                    className="rounded-xl shadow-md object-cover w-auto"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Trajectory Planning and Safety */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Shield className="mr-3 h-6 w-6 text-primary" />
                Trajectory Planning & Safety
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <Image
                    src={getAssetPath("/zf_autonomous_shuttle/longitudinal_lateral_control.jpeg")}
                    alt="Longitudinal & Lateral Control"
                    width={400}
                    height={300}
                    className="rounded-xl shadow-md object-cover w-auto"
                  />
                </div>
                <div className="space-y-6">
                  <Card className="bg-primary/10 border border-primary/20 shadow-sm shadow-black/5">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Advanced Control Systems</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Model Predictive Control (MPC) algorithms</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Real-time state monitoring</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Industrial visualization dashboards</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Emergency stop and safety protocols</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Integration and Testing Section */}
      <FadeIn delay="delay-600">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Integration & Testing</CardTitle>
            <p className="text-muted-foreground">Validation and field testing process</p>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-primary/10 border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Monitor className="mr-3 h-5 w-5" />
                    Testing Infrastructure
                  </h3>
                  <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-xl shadow-lg aspect-video">
                      <iframe
                        src="https://www.youtube.com/embed/uKGA_UsuovQ?si=N-FvFzhoShNCuiVF"
                        title="Electronics Test Bench"
                        width="400"
                        height="250"
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      />
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span>Electronics test bench for firmware validation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span>CAN simulation before deployment</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Car className="mr-3 h-5 w-5" />
                    Field Testing
                  </h3>
                  <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-xl shadow-lg aspect-video">
                      <iframe
                        src="https://www.youtube.com/embed/D6kxck312BE?si=XqUFCR4nPePFSNsC"
                        title="Campus Field Testing"
                        width="400"
                        height="250"
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      />
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span>Campus testing with ZF supervision</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span>Safe turning, emergency stop, lane change</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Awards and Recognition Section */}
      <FadeIn delay="delay-700">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Awards & Recognition</CardTitle>
            <p className="text-muted-foreground">Industry recognition and academic achievements</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Extended Funding */}
              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">Extended Funding</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    ZF granted additional 5-month funding after successful first presentation, recognizing the project's potential and technical excellence.
                  </p>
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={getAssetPath("/zf_autonomous_shuttle/10-reconocidos.jpeg")}
                      alt="First Presentation to ZF"
                      width={400}
                      height={250}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* High-Level Visits */}
              <Card className="bg-primary/10 border-primary/25">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-muted p-3 rounded-xl">
                      <Users className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">High-Level Visits</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Building className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">ZF Delegations</h4>
                        <p className="text-sm text-muted-foreground">Mexico and Germany teams inspected the project</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Car className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">BYD Vice President in North America</h4>
                        <p className="text-sm text-muted-foreground">Visited us to see the project</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-xl mt-4">
                    <Image
                      src={getAssetPath("/zf_autonomous_shuttle/byd-presentacion.jpeg")}
                      alt="First Presentation to ZF"
                      width={400}
                      height={250}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Official Presentation */}
            <Card className="mt-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/20 p-3 rounded-xl">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">Official Presentation & Documentation</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Live presentation to ZF deans and engineers</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Technical manuals approved by ZF for homologation</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Live recording and institutional coverage</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={getAssetPath("/zf_autonomous_shuttle/zf-80.jpeg")}
                      alt="Official Presentation"
                      width={400}
                      height={250}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Impact Section */}
      <FadeIn delay="delay-800">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Social & Academic Impact</CardTitle>
            <p className="text-muted-foreground">Long-term influence and legacy</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-primary/10 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Building className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-medium text-foreground">Institutional Reputation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Consolidated Tecnológico de Monterrey as "core development center" for ZF in Latin America.
                  </p>
                  <div className="relative overflow-hidden rounded-xl shadow-lg aspect-video mt-4">
                    <iframe
                      src="https://www.youtube.com/embed/-CX4PDktpAQ?si=QH_wdJw52Rr-wuFt"
                      title="Educational Impact"
                      width="300"
                      height="200"
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Car className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-medium text-foreground">Investment Attraction</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Project visibility contributed to Tesla choosing Monterrey for its first Mexican Gigafactory.
                  </p>
                  <div className="mt-4">
                    <Image
                      src={getAssetPath("/zf_autonomous_shuttle/gigaFactory.jpeg")}
                      alt="Tesla Visit"
                      width={300}
                      height={200}
                      className="rounded-xl object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-medium text-foreground">Educational Impact</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Know-how incorporated into autonomous vehicle courses taught to teachers across Mexico.
                  </p>
                  <div className="mt-4">
                    <Image
                      src={getAssetPath("/zf_autonomous_shuttle/teach-professores.jpeg")}
                      alt="Educational Impact"
                      width={300}
                      height={200}
                      className="rounded-xl object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}

// AIRLab-specific content component
function AIRLabProjectContent() {
  return (
    <div className="space-y-12">

      {/* About the AIRLab Stacking Challenge */}
      <FadeIn delay="delay-300">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Target className="mr-3 h-6 w-6 text-primary" />
              About the AIRLab Stacking Challenge
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Video Demonstration */}
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-xl">
              <h3 className="text-lg font-bold text-foreground mb-4">Project Functionality Demonstration</h3>
              <div className="relative overflow-hidden rounded-xl aspect-video shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/sTFtxwSkYfI?si=Iwi-O_nJTJAtQZO0"
                  title="AIRLab Stacking Challenge - Autonomous Can Stacking Demo"
                  width={800}
                  height={450}
                  allowFullScreen
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full h-full"
                />
              </div>
              <p className="text-sm text-foreground mt-3 italic">
                Complete demonstration of our autonomous can-stacking system from object detection to successful placement
              </p>
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Overview</h3>
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-xl">
                <p className="text-muted-foreground italic mb-4">
                  "Ahold Delhaize's AI for Retail Lab (AIRLab) and YES!Delft invited us to the Finals Event of the AIRLab Stacking Challenge. Within this challenge, we have challenged students and research teams from all over the world to share knowledge and dive deep into the tech to better understand the ground principles of robotics."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <Card className="bg-primary/10 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Target className="h-6 w-6 text-primary mr-3" />
                      <h4 className="font-medium text-foreground">Goal</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Develop algorithms that autonomously stack products in a simulated environment and then deploy them onto the TIAGo robot in a live demo.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/10 border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Building className="h-6 w-6 text-primary mr-3" />
                      <h4 className="font-medium text-foreground">Context</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Hosted by AIRLab (Ahold Delhaize / TU Delft) with support from PAL Robotics and YES!Delft.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/10 border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Star className="h-6 w-6 text-foreground mr-3" />
                      <h4 className="font-medium text-foreground">Why It Matters</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Retail shelving is a repetitive but delicate task. Automating "pick and place" in a cluttered environment tests both vision and manipulation subsystems end-to-end.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Robotic Platform */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Robotic Platform: TIAGo by PAL Robotics</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">TIAGo Overview</h4>
                  <p className="text-muted-foreground mb-4">
                    TIAGo is a mobile, differential-drive platform equipped with:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                      <span className="text-sm">A 6-DOF manipulator arm (payload ≈ 1.5 kg)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                      <span className="text-sm">RGB-D head camera by default</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                      <span className="text-sm">A wheeled base with odometry and IMU sensors</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                      <span className="text-sm">A built-in NVIDIA Jetson TX2 for on-board compute</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                      <span className="text-sm">Open-source software stack based on ROS (Noetic)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="relative overflow-hidden rounded-xl shadow-lg aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/mZ5a6zwiWZk?si=U76CDGK8pd4wqrf_"
                      title="TIAGo Robot Demonstration at AIRLab Challenge"
                      width={400}
                      height={300}
                      allowFullScreen
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 text-center italic">
                    TIAGo Robot demonstration at the AIRLab Challenge Finals
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">Key Features Enabling Our Work</h4>
                <div className="space-y-4">
                  <div className="bg-secondary/10 p-4 rounded-xl">
                    <h5 className="font-medium mb-2">Modular Hardware</h5>
                    <p className="text-sm text-muted-foreground">End effector can be replaced by custom gripper if needed.</p>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-xl">
                    <h5 className="font-medium mb-2">Open-Source Drivers</h5>
                    <p className="text-sm text-muted-foreground">ROS nodes for camera streaming, joint controllers (using ros_control and MoveIt!).</p>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-xl">
                    <h5 className="font-medium mb-2">3D Perception Capability</h5>
                    <p className="text-sm text-muted-foreground">The RGB-D head streams a 640×480 depth image at 30 fps, enabling point-cloud generation on the Jetson.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulation Environment */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Simulation Environment: Gazebo</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Why Simulation First?</h4>
                  <p className="text-muted-foreground mb-4">
                    Gazebo ( ROS compatibility ) lets us:
                  </p>
                  <ol className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-bold mt-0.5">1</span>
                      <span className="text-sm">Iterate quickly on perception algorithms without risking hardware</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-bold mt-0.5">2</span>
                      <span className="text-sm">Simulate real-world lighting, textures and sensor noise (via Gazebo plugins)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-bold mt-0.5">3</span>
                      <span className="text-sm">Validate grasping pipelines before moving to TIAGo</span>
                    </li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Simulation Setup</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Box className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">World Model</p>
                        <p className="text-xs text-muted-foreground">A mock "retail shelf" with multiple product cans|each defined as a Gazebo model with collision and visual meshes.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Camera className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Camera Plugin</p>
                        <p className="text-xs text-muted-foreground">A Gazebo camera plugin publishes synthetic depth and RGB images through ROS topics.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Physics Engine</p>
                        <p className="text-xs text-muted-foreground">ODE coupled with a 1 ms physics step ensures accurate joint collisions during stacking attempts.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Architecture */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">System Architecture Overview</h3>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={getAssetPath("/airlab/mainengine.jpeg")}
                  alt="Main Functions Diagram of the Autonomous Stacking System"
                  width={800}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center italic">
                System architecture showing the complete pipeline from perception to manipulation
              </p>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Organizers and Involved Institutions */}
      <FadeIn delay="delay-400">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Building className="mr-3 h-6 w-6 text-primary" />
              Organizers and Involved Institutions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* AIRLab */}
              <Card className="bg-primary/10 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-muted p-3 rounded-xl">
                      <Building className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">AIRLab (Ahold Delhaize / TU Delft)</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Mission:</strong> Redefine retail through technology, researching how robotics can assist store associates, reduce errors, and optimize workflows.
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Location:</strong> RoboValley, Delft (TU Delft Robotics Institute)
                  </p>
                  <div>
                    <p className="font-medium text-sm mb-2">Core Research Areas:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Robotic grippers for delicate items (e.g., fruits, vegetables)</li>
                      <li>• Image-recognition models for packaging and product identification</li>
                      <li>• Automated warehouse logistics and "last-mile" retail robotics</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Ahold Delhaize */}
              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <ShoppingCart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">Ahold Delhaize</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Profile:</strong> One of the world's largest food retail groups|leader in supermarkets, e-commerce, and sustainable retailing.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Relevance:</strong> Focuses on same-day delivery, in-store robotics pilot programs, and AI-driven inventory management.
                  </p>
                </CardContent>
              </Card>

              {/* TU Delft */}
              <Card className="bg-primary/10 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-muted p-3 rounded-xl">
                      <GraduationCap className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">TU Delft</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Collaboration Role:</strong> Provide access to lab infrastructure (manipulators, 3D printers, sensor testbeds) and guidance on robotic research protocols.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Signature Strength:</strong> Combining fundamental robotics research with applied industry labs|helped shape the evaluation criteria for the stacking challenge.
                  </p>
                </CardContent>
              </Card>

              {/* PAL Robotics */}
              <Card className="bg-primary/10 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-muted p-3 rounded-xl">
                      <Bot className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">PAL Robotics</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Founded:</strong> 2004 by a small group of engineers building Europe's first fully autonomous biped robot.
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Notable Robots:</strong> REEM (humanoid research platform), TALOS (high-payload humanoid), and TIAGo (service-robotic base).
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Expertise:</strong> Service robots for research, logistics, retail and assistance; active R&D in ROS drivers, Gazebo plugins, and machine-learning integration.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* My Experience and Work Approach */}
      <FadeIn delay="delay-500">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Wrench className="mr-3 h-6 w-6 text-primary" />
              Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">

            {/* Results */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-primary/10 border-primary/25">
                  <CardContent className="p-6 text-center">
                    <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-bold text-foreground mb-2">💎 Award</h4>
                    <p className="text-sm text-muted-foreground">"Most Consistent Solution" (out of 25+ international teams)</p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/10 border-border">
                  <CardContent className="p-6 text-center">
                    <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-bold text-foreground mb-2">🏅 Key Differentiator</h4>
                    <p className="text-sm text-muted-foreground">Robust error handler with retry mechanism|minimized deadlocks</p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/10 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-bold text-foreground mb-2">🔤 Tech Stack</h4>
                    <p className="text-sm text-muted-foreground">ROS Noetic, OpenCV 4.2, PCL, MoveIt!, TensorFlow 1.15, C++/Python</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

    </div>
  );
}

// Smart Factory-specific content component
function SmartFactoryProjectContent() {
  return (
    <div className="space-y-12">
      {/* Project Overview Section */}
      <FadeIn delay="delay-300">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Factory className="mr-3 h-6 w-6 text-primary" />
              Smart Factory - Industry 4.0
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Fully Automated Manufacturing Line</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Design and implementation of a completely automated manufacturing line, integrating PLCs, mobile robots, robotic arms, and cyber-physical systems at Tecnológico de Monterrey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Objective</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Design and implement a fully automated manufacturing line integrating PLCs, mobile robots, robotic arms, and cyber-physical systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Scope</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    From initial prototype (AGV robot) to pilot factory with real-time monitoring, digital twin, and virtual reality.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Impact</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Foundation for Cyber-Physical Systems course and collaboration with MIT (FredFactory project).
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Technologies and Development Section */}
      <FadeIn delay="delay-400">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Technologies & Applied Developments</CardTitle>
            <p className="text-muted-foreground">Comprehensive Industry 4.0 implementation</p>
          </CardHeader>
          <CardContent className="space-y-12">
            {/* Industrial Automation */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Settings className="mr-3 h-6 w-6 text-primary" />
                Industrial Automation
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <Card className="bg-primary/10">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">PLCs & Discrete State Machines</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Orchestration of conveyors and automatic storage</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Robot sequence coordination</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>HMI and AVEVA-OSIsoft dashboards</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Real-time production parameter monitoring</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Image
                    src={getAssetPath("/smartfactory/hmi.png")}
                    alt="PLC Control System"
                    width={300}
                    height={200}
                    className="rounded-xl shadow-md object-cover"
                  />
                  <Image
                    src={getAssetPath("/smartfactory/aveva.png")}
                    alt="HMI Dashboard"
                    width={300}
                    height={200}
                    className="rounded-xl shadow-md object-cover"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Mobile Robotics and Manipulators */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Bot className="mr-3 h-6 w-6 text-primary" />
                Mobile Robotics & Manipulators
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Image
                    src={getAssetPath("/smartfactory/dashgos.png")}
                    alt="AGV Line Following Robot"
                    width={300}
                    height={200}
                    className="rounded-xl shadow-md object-cover"
                  />
                  <Image
                    src={getAssetPath("/smartfactory/omron.png")}
                    alt="ABB Yumi Robot"
                    width={300}
                    height={200}
                    className="rounded-xl shadow-md object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <Card className="bg-gradient-to-r from-secondary/5 to-secondary/10">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Robotic Integration</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>AGV line-following robot as initial project</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>UR, ABB Yumi, and mobile robot integration</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Pick, transport, and place operations</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>MoveIt! trajectory planning with ROS</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Collision avoidance algorithms</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <Separator />

            {/* Computer Vision & Digital Twin */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Eye className="mr-3 h-6 w-6 text-primary" />
                Computer Vision & Digital Twin
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <Card className="bg-primary/10 border-border">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Vision & Simulation Systems</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Industrial cameras for part inspection</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Real-time feedback to PLC systems</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Gazebo + Blender simulation environments</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Virtual reality applied to robotics</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Flow validation before physical testing</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid grid-cols-1 gap-4">

                  <Image
                    src={getAssetPath("/smartfactory/tecnomatix.png")}
                    alt="Digital Twin Interface"
                    width={400}
                    height={300}
                    className="rounded-xl shadow-md object-cover"
                  />

                </div>
              </div>
            </div>

            <Separator />

            {/* Cyber-Physical Systems */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Network className="mr-3 h-6 w-6 text-primary" />
                Cyber-Physical Systems
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                <div className="grid grid-cols-1 gap-2">
                  <Image
                    src={getAssetPath("/smartfactory/laboratory.png")}
                    alt="Cyber-Physical Systems"
                    width={300}
                    height={200}
                    className="rounded-xl shadow-md object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <Card className="bg-primary/10 border border-primary/20 shadow-sm shadow-black/5">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">CPS Infrastructure Development</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Infrastructure for inaugural CPS course</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Pilot factory integration with Digital Twin tools</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Real-time data integration and analysis</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Foundation for MIT collaboration</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Awards and Recognition Section */}
      <FadeIn delay="delay-500">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Awards & Recognition</CardTitle>
            <p className="text-muted-foreground">Industry recognition and academic achievements</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Industry Presentation */}
              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Presentation className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">Industry Presentation 2021</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Final presentation to OMRON, ABB, AVEVA, and UR executives who were impressed by the industrial-level automation achieved.
                  </p>
                  <div className="relative overflow-hidden rounded-xl">
                    <video
                      controls
                      width={400}
                      height={250}
                      className="object-cover w-full h-full"
                      poster={getAssetPath("/smartfactory/presentacionSM.jpeg")}
                    >
                      <source src={getAssetPath("/smartfactory/smartfactory-entrega.mp4")} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </CardContent>
              </Card>

              {/* Academic Publications */}
              <Card className="bg-primary/10 border-primary/25">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-muted p-3 rounded-xl">
                      <FileText className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">Academic Publications</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">"Virtual Twin for the Smart Factory"</h4>
                        <p className="text-sm text-muted-foreground">IALF 2023 - VR in Smart Factory applications</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FileText className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">CPLAS 2024 Presentations</h4>
                        <p className="text-sm text-muted-foreground">Multiple works presented at conference</p>
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl">
                      <video
                        controls
                        width={400}
                        height={250}
                        className="object-cover w-full h-full"
                        poster={getAssetPath("/smartfactory/empower.jpeg")}
                      >
                        <source src={getAssetPath("/smartfactory/VR Demostracion.mp4")} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </CardContent>
        </Card>
      </FadeIn>

      {/* Special Recognition */}
      <FadeIn delay="delay-600">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Special Recognition & Partnerships</CardTitle>
            <p className="text-muted-foreground">Industry and academic recognition</p>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-6">
              <div className="bg-primary/20 p-3 rounded-xl">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="ml-3 text-xl font-bold">Special Recognition & Partnerships</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-primary mt-0.5" />
                    <span>Special guest speaker at Smart Factory 5th anniversary ceremony</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Building className="h-5 w-5 text-primary mt-0.5" />
                    <span>Founding partner in MIT alliance (FredFactory project)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Globe className="h-5 w-5 text-primary mt-0.5" />
                    <span>International recognition for Industry 4.0 implementation</span>
                  </li>
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={getAssetPath("/smartfactory/reconocimento.jpeg")}
                  alt="Smart Factory Anniversary"
                  width={400}
                  height={250}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Leadership Roles Section */}
      <FadeIn delay="delay-700">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Leadership Roles</CardTitle>
            <p className="text-muted-foreground">Coordination and mentorship responsibilities</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* General Coordinator */}
              <Card className="bg-primary/10 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-medium text-foreground">General Coordinator</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Led a team of 50 scholarship students, 70 students, and 3 teachers to design, implement, and validate the pilot factory.
                  </p>
                  <div className="mt-4">
                    <Image
                      src={getAssetPath("/smartfactory/presentacionSM.jpeg")}
                      alt="Smart Factory Team"
                      width={300}
                      height={200}
                      className="rounded-xl object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* CADI Instructor */}
              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-medium text-foreground">CADI Instructor</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Trained 20 teachers from CDMX, Toluca, Guadalajara, and Monterrey in monitoring and control with AVEVA-OSIsoft.
                  </p>
                  <div className="mt-4">
                    <Image
                      src={getAssetPath("/smartfactory/cadi.png")}
                      alt="Teacher Training"
                      width={300}
                      height={200}
                      className="rounded-xl object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mentor and Facilitator */}
            <Card className="mt-8 bg-primary/10 border-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-muted p-3 rounded-xl">
                    <Wrench className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">Mentor & Facilitator</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-card border border-border p-4 rounded-xl">
                    <h4 className="font-medium text-foreground mb-2">Team Leadership</h4>
                    <p className="text-sm text-muted-foreground">
                      Guided group leaders, defined weekly objectives, and reviewed progress presentations.
                    </p>
                  </div>
                  <div className="bg-card border border-border p-4 rounded-xl">
                    <h4 className="font-medium text-foreground mb-2">Immediate Feedback</h4>
                    <p className="text-sm text-muted-foreground">
                      Provided real-time feedback to prevent technical blockages and maintain project momentum.
                    </p>
                  </div>
                  <div className="bg-card border border-border p-4 rounded-xl">
                    <h4 className="font-medium text-foreground mb-2">Weekend Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Resolved technical problems on weekends alongside faculty to ensure continuous progress.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Impact Section */}
      <FadeIn delay="delay-800">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Social & Academic Impact</CardTitle>
            <p className="text-muted-foreground">Long-term influence and legacy</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-primary/10 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Network className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-medium text-foreground">Knowledge Multiplier</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Created a replicable model for other campuses, strengthening the Smart Factory network in Latin America.
                  </p>
                  <div className="mt-4">
                    <Image
                      src={getAssetPath("/smartfactory/epic-ur.png")}
                      alt="Smart Factory Network"
                      width={300}
                      height={200}
                      className="rounded-xl object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-medium text-foreground">Talent Formation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Empowered hundreds of students and teachers with Industry 4.0, robotics, and CPS competencies.
                  </p>
                  <div className="mt-4">
                    <Image
                      src={getAssetPath("/smartfactory/empower.jpeg")}
                      alt="Student Empowerment"
                      width={300}
                      height={200}
                      className="rounded-xl object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-medium text-foreground">International Collaboration</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Positioned Tec as partner of Cyber-Physical Learning Alliance (CPL) and MIT in Digital Twin projects.
                  </p>
                  <div className="mt-4">
                    <Image
                      src={getAssetPath("/smartfactory/mit.jpeg")}
                      alt="MIT Collaboration"
                      width={300}
                      height={200}
                      className="rounded-xl object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Building className="h-6 w-6 text-foreground mr-3" />
                    <h4 className="font-medium text-foreground">Technological Pillar</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Consolidated a pilot factory that serves as reference laboratory for global institutions and companies.
                  </p>
                  <div className="mt-4">
                    <Image
                      src={getAssetPath("/smartfactory/cplas.jpeg")}
                      alt="Reference Laboratory"
                      width={300}
                      height={200}
                      className="rounded-xl object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}

// RoboCup-specific content component
function RoboCupProjectContent() {
  return (
    <div className="space-y-12">
      {/* Project Overview Section */}
      <FadeIn delay="delay-300">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Home className="mr-3 h-6 w-6 text-primary" />
              RoboCup@Home Competition
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Domestic Service Robots in Real Home Environments</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Team Roborregos competing in the RoboCup@Home league, where robots must navigate and perform tasks in a realistic apartment setting with multiple rooms and dynamic environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Team</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Roborregos, Tecnológico de Monterrey Campus Monterrey - representing Mexico in international RoboCup competition.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Home className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Arena</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Realistic apartment setting with bedroom, dining room, living room, and kitchen, featuring standard furniture and dynamic environments.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Achievement</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    3rd place in RoboCup@Home competition with recognition for robust navigation and object manipulation in dynamic environments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Arena and Environment Section */}
      <FadeIn delay="delay-400">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Competition Environment</CardTitle>
            <p className="text-muted-foreground">RoboCup@Home Arena Specifications</p>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Video Demonstration */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Video className="mr-3 h-6 w-6 text-primary" />
                Competition Demonstration
              </h3>
              <div className="aspect-video w-full overflow-hidden rounded-xl">
                <iframe
                  src="https://www.youtube.com/embed/Mzi_xq-Lm4o"
                  title="RoboCup Competition Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Video demonstration of Frida robot during the RoboCup@Home competition in Veracruz, showcasing navigation, person following, and object manipulation capabilities.
              </p>
            </div>

            <Separator />

            {/* Technical Overview */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Cpu className="mr-3 h-6 w-6 text-primary" />
                Technical Implementation
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-primary/10">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3">Navigation Stack</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span>ROS Navigation Stack with Gmapping for SLAM</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span>SMACH for robust state machine implementation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span>Dynamic obstacle avoidance and path planning</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-secondary/5 to-secondary/10">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3">Vision & Manipulation</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span>MediaPipe for person detection and tracking</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span>Advanced grasping algorithms for object manipulation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span>Real-time person following with visual servoing</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Technical Implementation Section */}
      <FadeIn delay="delay-500">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Technical Implementation</CardTitle>
            <p className="text-muted-foreground">Robust solutions for real-world challenges</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Navigation System */}
              <Card className="bg-primary/10 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Navigation className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-medium text-foreground">Adaptive Navigation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Implemented robust navigation system capable of handling dynamic environments, including:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Dynamic obstacle avoidance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Door handling and navigation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Real-time path planning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Object Manipulation */}
              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Hand className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-medium text-foreground">Object Manipulation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Developed versatile manipulation system for various objects:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Grasping different object types</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Safe handling of fragile items</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Bimanual manipulation for complex tasks</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Human-Robot Interaction */}
            <Card className="mt-8 bg-primary/10 border-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-muted p-3 rounded-xl">
                    <Users className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">Human-Robot Interaction</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-card border border-border p-4 rounded-xl">
                    <h4 className="font-medium text-foreground mb-2">Voice Commands</h4>
                    <p className="text-sm text-muted-foreground">
                      Natural language processing for understanding and executing voice commands in noisy environments.
                    </p>
                  </div>
                  <div className="bg-card border border-border p-4 rounded-xl">
                    <h4 className="font-medium text-foreground mb-2">Person Recognition</h4>
                    <p className="text-sm text-muted-foreground">
                      Face recognition and tracking for identifying and interacting with different people in the arena.
                    </p>
                  </div>
                  <div className="bg-card border border-border p-4 rounded-xl">
                    <h4 className="font-medium text-foreground mb-2">Task Execution</h4>
                    <p className="text-sm text-muted-foreground">
                      Robust task planning and execution system for completing complex domestic service tasks.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Impact Section */}
      <FadeIn delay="delay-600">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Competition Impact</CardTitle>
            <p className="text-muted-foreground">Achievements and recognition</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Competition Results */}
              <Card className="bg-primary/10 border-primary/25">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <Trophy className="h-6 w-6 text-foreground" />
                    <h3 className="ml-3 text-xl font-bold">3rd Place Achievement</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Successfully completed complex tasks in the dynamic RoboCup@Home environment, demonstrating:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <Star className="h-5 w-5 text-primary mt-0.5" />
                      <span>Robust navigation in changing environments</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="h-5 w-5 text-primary mt-0.5" />
                      <span>Reliable object manipulation and handling</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="h-5 w-5 text-primary mt-0.5" />
                      <span>Effective human-robot interaction</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Technical Recognition */}
              <Card className="bg-primary/10 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <Award className="h-6 w-6 text-foreground" />
                    <h3 className="ml-3 text-xl font-bold">Technical Excellence</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Brain className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Adaptive Navigation</h4>
                        <p className="text-sm text-muted-foreground">Recognized for robust navigation in dynamic environments</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Hand className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Object Manipulation</h4>
                        <p className="text-sm text-muted-foreground">Outstanding performance in handling various objects</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Team Impact Section */}
      <FadeIn delay="delay-500">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Team Impact</CardTitle>
            <p className="text-muted-foreground">Advancing Robotics in Mexico</p>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Image
                  src={getAssetPath("/robocup/roborregos-premiacion.jpg")}
                  alt="Team Roborregos Award Ceremony"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg object-cover w-full"
                />
                <p className="text-sm text-muted-foreground">
                  Team Roborregos celebrating their achievement at the award ceremony, representing Mexico's excellence in robotics.
                </p>
              </div>
              <div className="space-y-4">
                <Image
                  src={getAssetPath("/robocup/roborregos-veracruz.jpg")}
                  alt="Team Roborregos in Veracruz"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg object-cover w-full"
                />
                <p className="text-sm text-muted-foreground">
                  The team preparing for competition in Veracruz, showcasing the collaborative effort behind Mexico's robotics advancement.
                </p>
              </div>
            </div>

            <Card className="bg-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <GraduationCap className="mr-3 h-6 w-6 text-primary" />
                  Future of Technology in Mexico
                </h3>
                <p className="text-muted-foreground mb-4">
                  This project represents more than just a competition achievement - it's a testament to Mexico's growing capabilities in robotics and artificial intelligence. Through initiatives like RoboCup@Home, we're:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>Developing the next generation of robotics engineers and researchers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>Creating opportunities for Mexican talent to compete on the global stage</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>Building a foundation for future technological innovation in Mexico</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}



// Tokyo IROS 2022-specific content component
function TokyoIROSProjectContent() {
  return (
    <div className="space-y-12">
      {/* Project Overview Section */}
      <FadeIn delay="delay-300">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Bot className="mr-3 h-6 w-6 text-primary" />
              Interactive Service Robot Competition @ IROS 2022 Tokyo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Humanoid Robot in Virtual Domestic Environment</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Team Roborregos from Tecnológico de Monterrey Campus Monterrey competing in the Home Simulation category - humanoid robot performing domestic tasks in virtual environment with voice command response.
              </p>
              <div className="mt-4">
                <Link
                  href="https://drive.google.com/file/d/1Jor8UZXW6xFtBZmMvmZmJlUWtryMW7rQ/view?pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl transition-colors"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  View Complete Competition Rules
                </Link>
              </div>
            </div>

            {/* Competition Rules Overview */}
            <div className="bg-primary/10 p-6 rounded-xl">
              <h4 className="text-lg font-bold mb-4">Competition Rules & Structure</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-2">HandyMan Challenge</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Navigation with obstacle avoidance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Object recognition and manipulation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Human detection and interaction</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Error detection in human instructions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Scoring System</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Room arrival: +20 points</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Object grasping: +50 points</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Task completion: +30 points</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Error detection: +50 points</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Additional Rules */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-2">Penalties</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <XCircle className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span>Collision with objects: -5 to -50 points</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span>Failed task completion: -10 points</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span>Object collision after release: -1 to -50 points</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Time Limits</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span>6-10 minutes per session</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span>10-24 sessions total</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span>Real-world time limit announced 7 days prior</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Team</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Roborregos, Tecnológico de Monterrey Campus Monterrey - representing Mexico at IROS 2022 in Kyoto.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Bot className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Category</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Home Simulation - humanoid robot performing domestic tasks in virtual environment with voice command interaction.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Achievement</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    3rd place in HandyMan Challenge at IROS 2022 (October 23-27, Kyoto) with community recognition.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Video Demonstrations Section */}
      <FadeIn delay="delay-400">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Play className="mr-3 h-6 w-6 text-primary" />
              Competition Demonstrations
            </CardTitle>
            <p className="text-muted-foreground">Live demonstrations of our robot's capabilities</p>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Video 1: HandyMan Challenge Demo */}
              <Card className="bg-primary/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">HandyMan Challenge Demo</h3>
                  <div className="relative overflow-hidden rounded-xl shadow-lg aspect-video mb-4">
                    <iframe
                      src="https://www.youtube.com/embed/6-ixvZpijes?si=-TOcxu-nm-_Qof4s"
                      title="IROS 2022 HandyMan Challenge Demo"
                      width="600"
                      height="400"
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    />
                  </div>
                  <p className="text-muted-foreground">
                    Complete demonstration of our robot's capabilities in the HandyMan Challenge, including navigation, object manipulation, and human interaction.
                  </p>
                </CardContent>
              </Card>

              {/* Video 2: Interactive Cleanup Demo */}
              <Card className="bg-primary/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Interactive Cleanup Demo</h3>
                  <div className="relative overflow-hidden rounded-xl shadow-lg aspect-video mb-4">
                    <iframe
                      src="https://www.youtube.com/embed/8PyehsxmFc8?si=VcPegoKlOKXndqxB"
                      title="IROS 2022 Interactive Cleanup Demo"
                      width="600"
                      height="400"
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    />
                  </div>
                  <p className="text-muted-foreground">
                    Showcase of our robot's ability to understand pointing gestures and perform cleanup tasks in a virtual domestic environment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Technologies and Development Section */}
      <FadeIn delay="delay-400">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Technologies & Applied Developments</CardTitle>
            <p className="text-muted-foreground">Advanced humanoid robotics in virtual environments</p>
          </CardHeader>
          <CardContent className="space-y-12">
            {/* State Machine and Mission Logic */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Brain className="mr-3 h-6 w-6 text-primary" />
                State Machine & Mission Logic
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <Card className="bg-primary/10">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Dynamic Orchestration</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Voice command interpretation and processing</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Mission selection ("grab apple", "clean room")</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Route planning and execution</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Return to standby state after completion</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <Image
                    src={getAssetPath("/tokio/system-comms.png")}
                    alt="IROS State Machine Architecture"
                    width={300}
                    height={200}
                    className="rounded-xl shadow-md object-cover"
                  />

                </div>
              </div>
            </div>

            <Separator />

            {/* Navigation Planning */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Navigation className="mr-3 h-6 w-6 text-primary" />
                Navigation Planning
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="grid grid-cols-1 gap-4">
                  <Image
                    src={getAssetPath("/tokio/tokio-path.jpg")}
                    alt="ROS Navigation Stack"
                    width={300}
                    height={200}
                    className="rounded-xl shadow-md object-cover"
                  />

                </div>
                <div className="space-y-6">
                  <Card className="bg-gradient-to-r from-secondary/5 to-secondary/10">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Advanced Navigation</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>ROS Navigation Stack adapted for SIGVerse</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Automatic recovery from unexpected obstacles</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Real-time evasion and replanning algorithms</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>A* and Dijkstra adapted for simulator</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <Separator />

            {/* Manipulation and Grasping */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Hand className="mr-3 h-6 w-6 text-primary" />
                Manipulation & Grasping
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <Card className="bg-primary/10 border-border">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Intelligent Manipulation</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>MoveIt! integrated with SIGVerse simulation</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Arm movement planning with collision avoidance</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Virtual furniture and people collision detection</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Geometry-based grasp point calculation</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Stability heuristics for object grasping</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <Image
                    src={getAssetPath("/tokio/graspable-objects.jpg")}
                    alt="MoveIt! SIGVerse Integration"
                    width={300}
                    height={200}
                    className="rounded-xl shadow-md object-cover"
                  />

                </div>
              </div>
            </div>

            <Separator />

            {/* Vision and Perception */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Eye className="mr-3 h-6 w-6 text-primary" />
                Vision & Perception
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="grid grid-cols-1 gap-4">
                  <Image
                    src={getAssetPath("/tokio/vision.png")}
                    alt="Stereo Vision System"
                    width={300}
                    height={200}
                    className="rounded-xl shadow-md object-cover"
                  />


                </div>
                <div className="space-y-6">
                  <Card className="bg-primary/10 border border-primary/20 shadow-sm shadow-black/5">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Advanced Perception</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Simulated stereo cameras for 3D point clouds</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Mobile obstacle detection and tracking</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>2D image processing for object recognition</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>Interest area recognition (apples, toys, plates)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <span>YOLO-derived detection techniques</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <Separator />
          </CardContent>
        </Card>
      </FadeIn>

      {/* Awards and Recognition Section */}
      <FadeIn delay="delay-500">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Awards & Recognition</CardTitle>
            <p className="text-muted-foreground">IROS 2022 competition achievements and community recognition</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Competition Award */}
              <Card className="bg-primary/10 border-primary/25 border-primary/25">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Trophy className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">3rd Place HandyMan Challenge</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Achieved 3rd place in the HandyMan Challenge at IROS 2022 (October 23-27, Kyoto), competing against top international teams.
                  </p>
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={getAssetPath("/tokio/thirdplace.png")}
                      alt="IROS HandyMan Award Ceremony"
                      width={400}
                      height={250}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Community Recognition */}
              <Card className="bg-primary/10 border-primary/25">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-muted p-3 rounded-xl">
                      <Award className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">IROS Community Recognition</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Brain className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Mission Logic Robustness</h4>
                        <p className="text-sm text-muted-foreground">Praised by IROS community for exceptional state machine design</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Headphones className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Human-Robot Interaction Fluidity</h4>
                        <p className="text-sm text-muted-foreground">Outstanding VR interaction and voice command processing</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={getAssetPath("/tokio/portada.png")}
                      alt="IROS HandyMan Award Ceremony"
                      width={400}
                      height={250}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Competition Highlights */}
            <Card className="mt-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/20 p-3 rounded-xl">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">IROS 2022 Highlights</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Star className="h-5 w-5 text-primary mt-0.5" />
                        <span>Premier international robotics conference in Kyoto</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Bot className="h-5 w-5 text-primary mt-0.5" />
                        <span>Advanced humanoid robot simulation competition</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Volume2 className="h-5 w-5 text-primary mt-0.5" />
                        <span>Complex voice-driven domestic task execution</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={getAssetPath("/tokio/premiacion-tokio.jpg")}
                      alt="IROS 2022 Kyoto"
                      width={400}
                      height={250}
                      className="object-cover w-full h-full"
                    />

                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Leadership Roles Section */}
      <FadeIn delay="delay-600">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Leadership Roles</CardTitle>
            <p className="text-muted-foreground">Technical leadership and system architecture</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Navigation and Recovery Leader */}
              <Card className="bg-primary/10 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Navigation className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-medium text-foreground">Navigation & Recovery Leader</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Designed autonomous navigation layer and failure replanning mechanisms, ensuring mission completion without interruption.
                  </p>
                  <div className="mt-4">
                    <Image
                      src={getAssetPath("/tokio/places.png")}
                      alt="Navigation Leadership"
                      width={300}
                      height={200}
                      className="rounded-xl object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* ROS-SIGVerse Integration Architect */}
              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Cog className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-medium text-foreground">ROS-SIGVerse Integration Architect</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Coordinated ROS node adaptation for SIGVerse virtual environment, ensuring synchrony between simulator and real control.
                  </p>
                  <div className="mt-4">
                    <Image
                      src={getAssetPath("/tokio/aws.jpg")}
                      alt="Integration Architecture"
                      width={300}
                      height={200}
                      className="rounded-xl object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Training and Mentorship */}
            <Card className="mt-8 bg-primary/10 border-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-muted p-3 rounded-xl">
                    <BookOpen className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">Training & Mentorship</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-card border border-border p-4 rounded-xl">
                    <h4 className="font-medium text-foreground mb-2">MoveIt! Best Practices</h4>
                    <p className="text-sm text-muted-foreground">
                      Trained team in advanced manipulation planning, optimization techniques, and collision avoidance strategies.
                    </p>
                  </div>
                  <div className="bg-card border border-border p-4 rounded-xl">
                    <h4 className="font-medium text-foreground mb-2">SIGVerse Simulation</h4>
                    <p className="text-sm text-muted-foreground">
                      Conducted comprehensive training on virtual environment setup, debugging, and performance optimization.
                    </p>
                  </div>
                  <div className="bg-card border border-border p-4 rounded-xl">
                    <h4 className="font-medium text-foreground mb-2">Code Review & Testing</h4>
                    <p className="text-sm text-muted-foreground">
                      Organized code review sessions and cross-testing protocols to ensure system reliability and robustness.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Impact Section */}
      <FadeIn delay="delay-700">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Academic & Social Impact</CardTitle>
            <p className="text-muted-foreground">International recognition and educational legacy</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-primary/10 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-medium text-foreground">International Recognition</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Positioned Roborregos on the IROS scene and reinforced Tec de Monterrey's reputation in service robotics.
                  </p>
                  <div className="mt-4">
                    <Image
                      src={getAssetPath("/tokio/roborregos.png")}
                      alt="International Recognition"
                      width={300}
                      height={200}
                      className="rounded-xl object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <FileText className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-medium text-foreground">Reusable Resources</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Navigation packages and ROS-AWS integration scripts documented and shared for future simulation projects.
                  </p>
                  <div className="mt-4">
                    <Image
                      src={getAssetPath("/tokio/sigverse-general.png")}
                      alt="Reusable Resources"
                      width={300}
                      height={200}
                      className="rounded-xl object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Star className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-medium text-foreground">Inspiration & Research</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Motivated student community to explore human-robot interaction in virtual environments, driving new SLAM and VR research.
                  </p>
                  <div className="mt-4">
                    <Image
                      src={getAssetPath("/tokio/team.jpg")}
                      alt="Research Inspiration"
                      width={300}
                      height={200}
                      className="rounded-xl object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}

// BAC Modelos | CHAKRI case study
function ChakriProjectContent() {
  return (
    <div className="space-y-14">

      {/* Hero Statement */}
      <FadeIn delay="delay-200">
        <div className="rounded-xl border border-border bg-card p-8 md:p-10">
          <div className="flex items-center gap-2 mb-5">
            <span className="font-mono text-xs text-primary/70 tracking-widest uppercase border border-primary/25 bg-primary/10 px-2 py-0.5 rounded-sm">CHAKRI Studio</span>
            <span className="font-mono text-xs text-muted-foreground/50">·</span>
            <span className="font-mono text-xs text-muted-foreground/50">Client Project | Mexico</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Engineering a BIM platform for discovery,<br className="hidden md:block" /> downloads, and manufacturer growth
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-3xl">
            For BAC Modelos, CHAKRI delivered a modern Next.js platform that combines searchable
            product catalogs, secure file delivery, content management, manufacturer onboarding,
            and analytics into one scalable web product.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            {['Full-stack platform','Search + Auth + CMS + Analytics','Mexico-based client'].map(t=>(
              <span key={t} className="font-mono text-xs text-primary border border-primary/25 bg-primary/10 px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Main screenshot */}
      <FadeIn delay="delay-250">
        <div className="rounded-xl overflow-hidden border border-border shadow-sm shadow-black/5">
          <Image
            src={getAssetPath('/bacmodelos/mainpage.png')}
            alt="BAC Modelos main page"
            width={1400}
            height={860}
            className="w-full object-cover"
          />
        </div>
      </FadeIn>

      {/* Challenge + Solution */}
      <FadeIn delay="delay-300">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-card border-border shadow-sm shadow-black/5">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" /> The Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-sm">
                The client needed more than a polished website. They needed a platform that could
                serve architects and designers looking for BIM-ready products, while also creating
                a business funnel for manufacturers who wanted visibility, analytics, and a
                structured publishing workflow | balancing public UX, internal operations, gated
                downloads, content publishing, and long-term scalability.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border shadow-sm shadow-black/5">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" /> The Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-sm">
                CHAKRI designed and built BAC Modelos as a multi-surface digital product. On the
                public side, users browse manufacturers, explore a BIM library, search and filter
                products, and access gated downloads. On the business side, manufacturers have a
                dedicated acquisition path, and administrators manage hero content, featured
                inventory, categories, blog content, and analytics through a custom dashboard.
              </p>
            </CardContent>
          </Card>
        </div>
      </FadeIn>

      {/* Feature Highlights */}
      <FadeIn delay="delay-350">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Sparkles className="mr-3 h-6 w-6 text-primary" />
              Platform Features
            </CardTitle>
            <p className="text-muted-foreground">A full product platform | not a brochure site</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {icon:BookOpen, title:'Searchable BIM Library', body:'Advanced filtering, product discovery, pagination, and manufacturer-aware search powered by Elasticsearch.'},
                {icon:Shield,   title:'Secure Downloads',       body:'Authenticated download flow protected with Firebase ID tokens and server-side checks.'},
                {icon:Users,    title:'Manufacturer Funnel',    body:'Dedicated pages and onboarding flows designed to convert brands into platform participants.'},
                {icon:FileText, title:'Content Publishing',     body:'Blog, resources, featured sections, and homepage content managed from the admin side via TipTap rich text editor.'},
                {icon:Settings, title:'Admin Dashboard',        body:'Internal tooling for content operations, manufacturer management, product management, and moderation.'},
                {icon:BarChart, title:'Analytics Layer',        body:'GA-connected dashboards with D3 visual charts and live Firestore-backed download activity counts.'},
              ].map(f=>(
                <div key={f.title} className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <f.icon className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm">{f.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* BIM Library screenshot */}
      <FadeIn delay="delay-400">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <div className="font-mono text-xs text-primary/70 uppercase tracking-widest mb-3">BIM Library</div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Product Discovery at Scale</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              The BIM library is the core of the platform: search with Elasticsearch, category
              and manufacturer filters, format filters, sorting, and pagination. Product cards
              include ratings, favorites, and gated download actions.
            </p>
            <div className="space-y-2">
              {['Search + Elasticsearch-powered APIs','Category / manufacturer / format filters','Product ratings, favorites, download tracking','Gated downloads with Firebase token auth'].map(i=>(
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />{i}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-border shadow-lg">
            <Image
              src={getAssetPath('/bacmodelos/bibliotecaBIM.png')}
              alt="BAC Modelos BIM Library"
              width={800}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </div>
      </FadeIn>

      {/* Admin + Analytics screenshots */}
      <FadeIn delay="delay-450">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="font-mono text-xs text-primary/70 uppercase tracking-widest mb-2">Admin CMS</div>
            <div className="rounded-xl overflow-hidden border border-border shadow-lg mb-3">
              <Image
                src={getAssetPath('/bacmodelos/gestionproductos.png')}
                alt="BAC Modelos Admin Product Management"
                width={700}
                height={440}
                className="w-full object-cover"
              />
            </div>
            <p className="text-xs text-muted-foreground">Product management with 36 admin-area files and dedicated tabs for hero, featured products, categories, blog, resources, partners, and ads.</p>
          </div>
          <div>
            <div className="font-mono text-xs text-primary/70 uppercase tracking-widest mb-2">Analytics Dashboard</div>
            <div className="rounded-xl overflow-hidden border border-border shadow-lg mb-3">
              <Image
                src={getAssetPath('/bacmodelos/analytics.png')}
                alt="BAC Modelos Analytics Dashboard"
                width={700}
                height={440}
                className="w-full object-cover"
              />
            </div>
            <p className="text-xs text-muted-foreground">Google Analytics Data API + live Firestore-backed activity counts visualized with D3 charts.</p>
          </div>
        </div>
      </FadeIn>

      {/* Tech Stack */}
      <FadeIn delay="delay-500">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Code className="mr-3 h-6 w-6 text-primary" />
              Tech Stack
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {cat:'Frontend',      items:['Next.js 16','React 18','TypeScript','Tailwind CSS']},
                {cat:'Rich UI',       items:['D3 charts','TipTap editor','React Icons','Suspense']},
                {cat:'Backend / Cloud',items:['Firebase Auth','Firestore','Firebase Storage','Cloud Functions','Elasticsearch']},
                {cat:'Quality / DX',  items:['ESLint + Prettier','Husky','Docker','Firebase emulators']},
              ].map(g=>(
                <div key={g.cat} className="bg-card border border-border rounded-xl p-4">
                  <div className="font-mono text-[10px] text-primary/70 uppercase tracking-widest mb-3">{g.cat}</div>
                  <div className="space-y-1.5">
                    {g.items.map(i=>(<div key={i} className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-primary/50" /><span className="text-xs text-muted-foreground">{i}</span></div>))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Architecture */}
      <FadeIn delay="delay-550">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Network className="mr-3 h-6 w-6 text-primary" />
              System Architecture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {[
                {label:'API Routes',  value:'58',  sub:'Next.js App Router handlers'},
                {label:'Admin Files', value:'36',  sub:'Full admin area surface'},
                {label:'Components',  value:'45',  sub:'Reusable UI components'},
                {label:'App Files',   value:'122', sub:'Total pages and modules'},
              ].map(s=>(
                <div key={s.label} className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="font-display text-3xl font-bold text-foreground">{s.value}</div>
                  <div className="font-mono text-xs text-foreground mt-1">{s.label}</div>
                  <div className="font-body text-[11px] text-muted-foreground/70 mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
            <div className="bg-card border border-border rounded-xl p-5 font-mono text-xs text-muted-foreground/80 leading-loose mb-4">
              <div className="text-primary/60 text-[10px] uppercase tracking-widest mb-3">Data Flow</div>
              <div className="flex flex-col gap-1">
                <span><span className="text-primary">Architects / Designers / Admins</span>  →  Next.js Web App (SSR + ISR)</span>
                <span className="pl-4 text-muted-foreground/50">↓  58 API Route Handlers</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-1 pl-4">
                  {['Firebase Auth','Firestore','Firebase Storage','Elasticsearch','Google Analytics API','Cloud Functions'].map(s=>(
                    <span key={s} className="border border-border rounded px-2 py-1 text-[10px] text-muted-foreground/70">{s}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {[
                'ISR on homepage (revalidate=60) | sections stream progressively with Suspense',
                'Lazy-loaded admin tabs reduce initial bundle cost',
                'Library pages implement filtering, pagination, preload, and retry logic',
                'Image optimization with AVIF / WebP; secure downloads gated by Firebase tokens',
              ].map(i=>(
                <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />{i}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Why it matters */}
      <FadeIn delay="delay-600">
        <Card className="bg-primary/10 shadow-sm shadow-black/5">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Why This Project Matters</h3>
                <p className="text-muted-foreground leading-relaxed">
                  What makes BAC Modelos strong is its breadth. It is not just visually polished |
                  it is operationally useful. It supports content, catalog management, brand
                  onboarding, gated resources, analytics, and user workflows in a single cohesive
                  platform. That is the kind of build that demonstrates product thinking, not just
                  web design. CHAKRI delivered end-to-end: architecture, full-stack implementation,
                  auth, search infrastructure, CMS, and analytics in one codebase.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

    </div>
  );
}


// John Deere-specific content component
function JohnDeereProjectContent() {
  return (
    <div className="space-y-12">
      {/* Navigation Links */}
      <FadeIn delay="delay-100">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button variant="outline" size="sm" asChild>
            <a href="#overview" className="scroll-smooth">Overview</a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="#im-reserver" className="scroll-smooth">IM Reserver</a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="#shelf-guard" className="scroll-smooth">ShelfGuard</a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="#tech-stack" className="scroll-smooth">Technology Stack</a>
          </Button>
        </div>
      </FadeIn>

      {/* Project Overview Section */}
      <div id="overview">
        <FadeIn delay="delay-200">
          <Card className="shadow-sm shadow-black/5">
            <CardHeader>
              <CardTitle className="text-3xl text-foreground flex items-center justify-center">
                <Truck className="mr-3 h-8 w-8 text-primary" />
                John Deere Supply Chain Systems
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">Advanced Agricultural Technology Solutions</h3>
                <p className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
                  As a <strong>Supply Chain Management Intern at John Deere</strong>, I built internal systems that improved
                  reservation workflows, inventory visibility, and loss-prevention monitoring. The work combined SAP automation,
                  cloud services, and computer vision to support operational supply-chain processes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <Card className="bg-primary/10 border-primary/20 border-primary/25 ">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary/10 p-3 rounded-xl">
                        <ShoppingCart className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="ml-3 text-lg font-bold text-foreground ">IM Reserver</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      A customer self-service web/app reservation system with fully automated checkout,
                      eliminating cashier intervention and streamlining equipment pickup processes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/10 border-border border-primary/25 ">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-muted p-3 rounded-xl">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="ml-3 text-lg font-bold text-foreground">ShelfGuard</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      An AI-powered security camera system that detects shelf-grab theft in real time,
                      using computer vision to monitor unauthorized item removal.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-primary/10 p-6 rounded-xl">
                <p className="text-center text-muted-foreground">
                  <strong>Key Achievement:</strong> IM Reserver leveraged end-to-end SAP automation, Azure services,
                  and Power Platform flows to streamline supply management across John Deere operations.
                </p>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      {/* Project 1: IM Reserver */}
      <div id="im-reserver">
        <FadeIn delay="delay-300">
          <Card className="shadow-sm shadow-black/5">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center">
                <ShoppingCart className="mr-3 h-6 w-6 text-primary" />
                IM Reserver - Automated In-Store Reservation Platform
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-foreground">Revolutionary Customer Experience</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Mobile/web interface lets customers reserve equipment or parts and pick up without cashier intervention</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Real-time inventory sync via custom SAP ABAP function   modules keeps stock levels current</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Azure Functions and AWS Lambda handle backend logic, while Power Platform dashboards let the supply team approve reservations and monitor alerts</span>
                    </li>
                  </ul>
                </div>

                <div className="relative">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <video
                      controls
                      className="w-full h-full object-cover"
                      poster={getAssetPath("/images/im-reserver-poster.jpg")}
                    >
                      <source src={getAssetPath("/jdgo/IM RESERVACION.mp4")} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-2 font-medium">
                    Watch the IM Reserver demo
                  </p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Settings className="mr-3 h-6 w-6 text-primary" />
                  Key Features & Capabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="bg-secondary/5">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-3">
                        <Zap className="h-5 w-5 text-primary mr-2" />
                        <h4 className="font-medium">Instant Reservation</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Instant reservation assignment with no checkout line required
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-secondary/5">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-3">
                        <Smartphone className="h-5 w-5 text-primary mr-2" />
                        <h4 className="font-medium">Mobile-First Design</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Frontend built in Microsoft PowerApps with mobile-first design
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-secondary/5">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-3">
                        <Network className="h-5 w-5 text-primary mr-2" />
                        <h4 className="font-medium">SAP Integration</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        SAP ABAP-driven integration for real-time stock updates with API integration
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-secondary/5">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-3">
                        <Cloud className="h-5 w-5 text-primary mr-2" />
                        <h4 className="font-medium">Azure Logic Apps</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Azure Logic Apps flow syncing SAP stock levels automatically
                      </p>
                    </CardContent>
                  </Card>


                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      {/* Project 2: ShelfGuard */}
      <div id="shelf-guard">
        <FadeIn delay="delay-400">
          <Card className="shadow-sm shadow-black/5">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center">
                <Shield className="mr-3 h-6 w-6 text-primary" />
                ShelfGuard - AI-Powered Theft Prevention
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-foreground">Intelligent Security Solution</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Eye className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Overhead cameras detect when someone removes an item from the shelf without authorization</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Brain className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Computer vision algorithms track hand-item interactions using OpenCV/OpenVINO</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Triggers instant alerts to store associates or locks gates automatically</span>
                    </li>
                  </ul>
                </div>

                <div className="relative">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <video
                      controls
                      className="w-full h-full object-cover"
                      poster={getAssetPath("/images/shelfguard-poster.jpg")}
                    >
                      <source src={getAssetPath("/jdgo/Security Video.mp4")} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-2 font-medium">
                    See ShelfGuard in action
                  </p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Cpu className="mr-3 h-6 w-6 text-primary" />
                  Advanced AI Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-secondary/5">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-3">
                        <Eye className="h-5 w-5 text-primary mr-2" />
                        <h4 className="font-medium">Real-time Detection</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Real-time object and person detection with advanced computer vision algorithms
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-secondary/5">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-3">
                        <Network className="h-5 w-5 text-primary mr-2" />
                        <h4 className="font-medium">System Integration</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Integration with store access control and POS systems for comprehensive security
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      {/* Technology Stack */}
      <div id="tech-stack">
        <FadeIn delay="delay-500">
          <Card className="shadow-sm shadow-black/5">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center justify-center">
                <Layers className="mr-3 h-6 w-6 text-primary" />
                Technology Stack Highlight
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <div className="text-center space-y-3">
                  <div className="bg-muted  p-4 rounded-xl">
                    <FileText className="h-8 w-8 text-primary mx-auto" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">SAP</h4>
                    <p className="text-xs text-muted-foreground">Enterprise Integration</p>
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <div className="bg-primary/10  p-4 rounded-xl">
                    <Cog className="h-8 w-8 text-primary mx-auto" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">ABAP</h4>
                    <p className="text-xs text-muted-foreground">Custom API Integration</p>
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <div className="bg-muted  p-4 rounded-xl">
                    <Cloud className="h-8 w-8 text-primary mx-auto" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Azure</h4>
                    <p className="text-xs text-muted-foreground">Logic Apps & Functions</p>
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <div className="bg-muted  p-4 rounded-xl">
                    <Zap className="h-8 w-8 text-primary mx-auto" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Power Platform</h4>
                    <p className="text-xs text-muted-foreground">Mobile Apps & Dashboards</p>
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <div className="bg-muted  p-4 rounded-xl">
                    <Eye className="h-8 w-8 text-primary mx-auto" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">OpenCV</h4>
                    <p className="text-xs text-muted-foreground">Computer Vision</p>
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <div className="bg-muted  p-4 rounded-xl">
                    <Brain className="h-8 w-8 text-muted-foreground mx-auto" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">OpenVINO</h4>
                    <p className="text-xs text-muted-foreground">Open-source software toolkit</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}

// Vanttec-specific content component
function VanttecProjectContent() {
  return (
    <div className="space-y-12">
      {/* About VANTTEC Section */}
      <FadeIn delay="delay-300">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Globe className="mr-3 h-6 w-6 text-primary" />
              About VANTTEC
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Innovation in Autonomous Vehicles</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Research group from Tec de Monterrey focused on developing autonomous aerial and marine systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Mission</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Develop cutting-edge autonomous technology to compete internationally and train new generations of Mexican engineers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Competitions</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Participation in RoboBoat (surface vehicles) and RoboSub (underwater vehicles) organized by RoboNation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Collaborations</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Presentations to ZF, BYD, and Tesla executives. Work with Southwest Research Institute (SwRI) on underwater navigation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Vehicles Section */}
      <FadeIn delay="delay-400">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Our Vehicles</CardTitle>
            <p className="text-muted-foreground">Innovative autonomous systems competing globally</p>
          </CardHeader>
          <CardContent className="space-y-12">
            {/* Autonomous Boat */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative overflow-hidden rounded-xl shadow-lg aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/dAObTRLfQEE?si=7plRS60a2Qzlwgu5"
                  title="Autonomous Boat Demo"
                  allowFullScreen
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Autonomous Boat</h3>
                <p className="text-muted-foreground mb-6">
                  Our autonomous surface vehicle designed to compete in RoboBoat. Capable of navigating predefined routes, avoiding obstacles, and completing complex missions autonomously.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <Cpu className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Jetson TX2</p>
                      <p className="text-sm text-muted-foreground">System brain</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Satellite className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">XBee RF</p>
                      <p className="text-sm text-muted-foreground">Communication</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Eye className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Computer Vision</p>
                      <p className="text-sm text-muted-foreground">YOLO Darknet</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Layers className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">ROS/ROS2</p>
                      <p className="text-sm text-muted-foreground">Middleware</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Autonomous Submarine */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-last">
                <div className="relative overflow-hidden rounded-xl shadow-lg aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/f6_OrUrVz84?si=bPnS3Ug2ikezZ02J"
                    title="Autonomous Submarine Demo"
                    allowFullScreen
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="lg:order-first">
                <h3 className="text-xl font-bold mb-4">Autonomous Submarine</h3>
                <p className="text-muted-foreground mb-6">
                  Autonomous underwater vehicle designed to compete in RoboSub. Equipped with advanced vision and navigation systems to operate in challenging underwater environments.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="h-5 w-5 bg-primary rounded-full mt-0.5" />
                    <div>
                      <p className="font-medium">6 Thrusters</p>
                      <p className="text-sm text-muted-foreground">6DOF Movement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Eye className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Stereo Cameras</p>
                      <p className="text-sm text-muted-foreground">Point clouds</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Map className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Navigation</p>
                      <p className="text-sm text-muted-foreground">ORBSLAM3</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-5 w-5 bg-primary rounded-full mt-0.5" />
                    <div>
                      <p className="font-medium">RANSAC</p>
                      <p className="text-sm text-muted-foreground">Point cloud filtering</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Competition Awards Section */}
      <FadeIn delay="delay-450">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Trophy className="mr-3 h-6 w-6 text-primary" />
              Competition Awards & Recognition
            </CardTitle>
            <p className="text-muted-foreground">
              Winning these international competitions was extremely challenging, competing against some of the world's most prestigious universities including MIT, Cornell, Caltech, Carnegie Mellon, and many others.
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Competition Difficulty Context */}
            <div className="bg-gradient-to-r from-white to-muted p-6 rounded-xl border border-border ">
              <div className="flex items-start space-x-4">
                <Globe className="h-6 w-6 text-muted-foreground mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Global Competition</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    These RoboNation competitions feature the world's most elite universities and research institutions, making our achievements particularly remarkable.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <strong>Competing institutions include:</strong> Massachusetts Institute of Technology (MIT), Cornell University, California Institute of Technology (Caltech),
                    Carnegie Mellon University, University of Michigan, National University of Singapore, Istanbul Technical University,
                    AGH University of Krakow, and many other top-tier institutions worldwide.
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* RoboBoat Awards */}
              <Card className="bg-primary/10 border-border border-primary/25 ">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-muted p-3 rounded-xl">
                      <Car className="h-8 w-8 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-foreground ">RoboBoat Awards</h3>
                      <p className="text-sm text-primary ">Autonomous Surface Vehicle Competition</p>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <Image
                      src={getAssetPath("/vanttec/roboboat-award.png")}
                      alt="RoboBoat Competition Award"
                      width={200}
                      height={150}
                      className="rounded-xl shadow-md mx-auto"
                    />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-foreground  mb-3">2021 Achievements:</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <Trophy className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">1st Place Skills Video Sensor Optimization</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Trophy className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">1st Place Skills Video Power Management</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Trophy className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">1st Place Optional Video</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Award className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">3rd Place Website</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Award className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">4th Place Technical Design Report</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Star className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                          <span className="text-sm">Special Award Advanced Techniques</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground  mb-3">2020 Achievements:</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <Trophy className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">1st Place 2020 Overall Standings</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Trophy className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">1st Place 2020 Technical Design Report</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Trophy className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">1st Place 2020 Website</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Trophy className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">1st Place 2020 Video</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Star className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                          <span className="text-sm">Special Award 2020 Evidence In Testing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* RoboSub Awards */}
              <Card className="bg-primary/10 border border-border shadow-sm shadow-black/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/10 p-3 rounded-xl border border-border">
                      <Navigation className="h-8 w-8 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-foreground">RoboSub Awards</h3>
                      <p className="text-sm text-primary/80">Autonomous Underwater Vehicle Competition</p>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <Image
                      src={getAssetPath("/vanttec/robosub-award.png")}
                      alt="RoboSub Competition Award"
                      width={200}
                      height={150}
                      className="rounded-xl shadow-md mx-auto"
                    />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-foreground  mb-3">2020 Achievements:</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <Award className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">3rd Place 2020 Overall Standings</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Trophy className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">1st Place 2020 Video Submission</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Award className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">4th Place 2020 Website</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/10  p-4 rounded-xl">
                      <div className="flex items-start space-x-3">
                        <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium text-foreground  mb-1">Outstanding Achievement</h5>
                          <p className="text-sm text-muted-foreground">
                            Remarkable performance in our first year competing in both RoboBoat and RoboSub competitions,
                            establishing VANTTEC as a leading force in autonomous marine robotics.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Technologies Section */}
      <FadeIn delay="delay-500">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Key Technologies</CardTitle>
            <p className="text-muted-foreground">Our technology stack</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Navigation */}
              <Card className="bg-secondary/5 hover:bg-secondary/10 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Map className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Navigation</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2" />
                      <span>High-level state machine</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2" />
                      <span>Body-NED transforms for navigation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2" />
                      <span>ORBSLAM3 for underwater localization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Communication */}
              <Card className="bg-secondary/5 hover:bg-secondary/10 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Satellite className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Communication</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2" />
                      <span>XBee (RF) for vehicle-base communication</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2" />
                      <span>CAN protocols for vehicle control</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2" />
                      <span>Real-time telemetry</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Computer Vision */}
              <Card className="bg-secondary/5 hover:bg-secondary/10 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Eye className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Computer Vision</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2" />
                      <span>Stereo cameras for point clouds</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2" />
                      <span>YOLO Darknet for object detection</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2" />
                      <span>RANSAC for point cloud filtering</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Achievements Section */}
      <FadeIn delay="delay-600">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Achievements</CardTitle>
            <p className="text-muted-foreground">Recognition and awards</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* RoboNation Competitions */}
              <Card className="bg-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/20 p-3 rounded-xl">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">RoboNation Competitions</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary rounded-full h-4 w-4 flex items-center justify-center mt-1">
                        <div className="h-2 w-2 bg-foreground rounded-full" />
                      </div>
                      <div>
                        <h4 className="font-medium">1st place in RoboBoat</h4>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary rounded-full h-4 w-4 flex items-center justify-center mt-1">
                        <div className="h-2 w-2 bg-foreground rounded-full" />
                      </div>
                      <div>
                        <h4 className="font-medium">3rd place in RoboSub</h4>
                        <p className="text-sm text-muted-foreground">Team's first year of participation</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Other Awards */}
              <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-secondary/20 p-3 rounded-xl">
                      <Award className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">Other Recognition</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Rómulo Garza Sada Award</h4>
                        <p className="text-sm text-muted-foreground">Best university research project at Tec de Monterrey</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Globe className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Executive Presentations</h4>
                        <p className="text-sm text-muted-foreground">Prototypes presented to many important companies executives</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Impact Section */}
            <Card className="mt-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/20 p-3 rounded-xl">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">Social and Academic Impact</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-card border border-border p-4 rounded-xl">
                    <h4 className="font-medium text-foreground mb-2">International Collaborations</h4>
                    <div className="text-center mb-3">
                      <Image
                        src={getAssetPath("/vanttec/swri.jpeg")}
                        alt="International collaboration with SwRI"
                        width={120}
                        height={80}
                        className="rounded-md mx-auto object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Work with Southwest Research Institute (SwRI) on underwater localization and navigation with ORBSLAM3.
                    </p>
                  </div>
                  <div className="bg-card border border-border p-4 rounded-xl">
                    <h4 className="font-medium text-foreground mb-2">Talent Formation</h4>
                    <div className="text-center mb-3">
                      <Image
                        src={getAssetPath("/vanttec/vanttec-meeting.jpeg")}
                        alt="VANTTEC Team Meeting and Training Session"
                        width={120}
                        height={80}
                        className="rounded-md mx-auto object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Creation of "elite groups" in high school and mentoring of scholarship students at university.
                    </p>
                  </div>
                  <div className="bg-card border border-border p-4 rounded-xl">
                    <h4 className="font-medium text-foreground mb-2">Legacy</h4>
                    <div className="text-center mb-3">
                      <Image
                        src={getAssetPath("/vanttec/vanttec-logo.jpeg")}
                        alt="Vanttec logo"
                        width={120}
                        height={80}
                        className="rounded-md mx-auto object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Consolidation of VANTTEC as one of the most important robotics teams in Latin America.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}



// EE272 VLSI Design | full project detail
function EE272ProjectContent() {
  return (
    <div className="space-y-12">
      <ProjectProofPanel slug="ee272-vlsi-design" />
      {/* Overview */}
      <FadeIn delay="delay-300">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Cpu className="mr-3 h-6 w-6 text-primary" />
              EE271 / EE272 - VLSI System Design Projects
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Full-Custom Silicon from RTL to Tape-Out</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A two-course advanced VLSI design sequence covering the complete digital IC design flow:
                from RTL description and logic synthesis to custom layout, place &amp; route, timing
                closure, and post-layout verification using industry-standard Cadence tools and the
                open-source SKY130 process design kit.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-primary/10 border-border rounded-xl border p-5">
                <div className="flex items-center mb-3">
                  <GraduationCap className="h-5 w-5 text-primary mr-2" />
                  <h4 className="font-semibold">Final Grade</h4>
                </div>
                <p className="text-3xl font-bold text-foreground">8 / 8</p>
                <p className="text-sm text-muted-foreground mt-1">Homeworks | all 100 / 100</p>
              </div>
              <div className="bg-primary/10 border-border rounded-xl border p-5">
                <div className="flex items-center mb-3">
                  <Layers className="h-5 w-5 text-primary mr-2" />
                  <h4 className="font-semibold">Process Node</h4>
                </div>
                <p className="text-2xl font-bold text-foreground">SKY130</p>
                <p className="text-sm text-muted-foreground mt-1">130 nm open-source PDK</p>
              </div>
              <div className="bg-primary/10 border-border rounded-xl border p-5">
                <div className="flex items-center mb-3">
                  <Cpu className="h-5 w-5 text-primary mr-2" />
                  <h4 className="font-semibold">Final Project</h4>
                </div>
                <p className="text-lg font-bold text-foreground">DNN Accelerator</p>
                <p className="text-sm text-muted-foreground mt-1">Convolution engine P&amp;R</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Design Flow */}
      <FadeIn delay="delay-400">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <GitBranch className="mr-3 h-6 w-6 text-primary" />
              VLSI Design Flow
            </CardTitle>
              <p className="text-muted-foreground">End-to-end IC design methodology covered across EE271 and EE272</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  step: '01', title: 'RTL Design & Simulation',
                  body: 'Hardware description in Verilog/SystemVerilog. Functional simulation with VCS to verify design intent before synthesis.',
                  icon: Code,
                },
                {
                  step: '02', title: 'Logic Synthesis',
                  body: 'Automated mapping of RTL to standard cell gates using Cadence Genus. Timing-driven synthesis with setup/hold constraints via SDC.',
                  icon: Settings,
                },
                {
                  step: '03', title: 'Floorplanning & Placement',
                  body: 'Definition of die area, I/O ring, power grid design (VDD/VSS straps), and automated placement of standard cells with Cadence Innovus.',
                  icon: Layout,
                },
                {
                  step: '04', title: 'Clock Tree Synthesis (CTS)',
                  body: 'Balanced clock distribution tree generated to meet skew and insertion delay targets across all sequential elements.',
                  icon: RefreshCw,
                },
                {
                  step: '05', title: 'Routing & Timing Closure',
                  body: 'Global and detailed routing of all signal nets. Iterative ECO-based timing closure to meet setup/hold across all PVT corners.',
                  icon: Network,
                },
                {
                  step: '06', title: 'DRC / LVS / Post-Layout STA',
                  body: 'Design Rule Check (DRC), Layout vs. Schematic (LVS), and final static timing analysis on the extracted parasitics for sign-off.',
                  icon: CheckCircle,
                },
              ].map((s) => (
                <div key={s.step} className="bg-card border border-border rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs text-primary/50 font-bold mt-0.5 shrink-0">
                      {s.step}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <s.icon className="h-4 w-4 text-primary" />
                        <h4 className="font-semibold text-foreground text-sm">{s.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Homework Breakdown */}
      <FadeIn delay="delay-500">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <BookOpen className="mr-3 h-6 w-6 text-primary" />
              Homework Progression | 8 / 8 Perfect Scores
            </CardTitle>
            <p className="text-muted-foreground">Each assignment built on the previous, constructing a complete design flow</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { hw: 'HW 1', topic: 'Standard Cell Layout',         desc: 'Manual full-custom layout of inverter and NAND2 cells in SKY130. DRC/LVS clean. GDS extraction.', score: '100/100' },
                { hw: 'HW 2', topic: 'RTL-to-GDS Synthesis Flow',    desc: 'First automated synthesis run with Genus + Innovus. Setup timing constraints, area targets, and power grid generation.', score: '100/100' },
                { hw: 'HW 3', topic: 'Floorplanning & Timing',       desc: 'Manual floorplan refinement. I/O placement, power rail design, utilization optimization.', score: '100/100' },
                { hw: 'HW 4', topic: 'Clock Tree Synthesis',         desc: 'CTS implementation and tuning. Achieving <50 ps skew across all registers while minimizing insertion delay.', score: '100/100' },
                { hw: 'HW 5', topic: 'Post-Route Timing Closure',    desc: 'Timing ECO iterations. Hold/setup fix with buffer insertion. Multi-corner sign-off with extracted RC parasitics.', score: '95/100' },
                { hw: 'HW 6', topic: 'Power Analysis & Optimization', desc: 'Dynamic and static power estimation with Innovus. Clock gating insertion and power intent (CPF/UPF) basics.', score: '100/100' },
                { hw: 'HW 7', topic: 'DNN Accelerator | P&R',       desc: 'Place & route of a convolutional DNN accelerator using Cadence Innovus on SKY130. Final merged GDS passed DRC/LVS sign-off.', score: '100/100' },
                { hw: 'HW 8', topic: 'Physical Verification & Tape-out', desc: 'Full DRC/LVS/ERC checks on completed design. Preparation of final GDS for tape-out readiness review.', score: '95/100' },
              ].map((h) => (
                <div key={h.hw} className="flex items-start gap-4 bg-card border border-border rounded-xl p-4">
                  <div className="shrink-0 w-16 text-center">
                    <div className="font-mono text-xs font-bold text-foreground">{h.hw}</div>
                    <div className="font-mono text-[10px] text-primary border border-primary/25 bg-primary/10 rounded px-1 mt-1">{h.score}</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-foreground mb-1">{h.topic}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Final Project: DNN Accelerator */}
      <FadeIn delay="delay-600">
        <Card className="shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Brain className="mr-3 h-6 w-6 text-primary" />
              Final Project: Convolutional DNN Accelerator
            </CardTitle>
            <p className="text-muted-foreground">Homework 7 | Place & Route with Cadence Innovus on SKY130</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              The culminating project was a full place-and-route implementation of a convolutional
              neural network (DNN) accelerator on the SKY130 open-source PDK. Starting from a
              synthesized Verilog netlist, the design was placed, routed, and timed in Cadence Innovus
              targeting a 10 ns clock period. The final merged GDS ({' '}
              <span className="font-mono text-primary text-sm">conv-merged.gds</span>) passed DRC
              and LVS sign-off, representing a tape-out-ready silicon implementation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Technology', value: 'SKY130 (130 nm CMOS, open PDK)' },
                { label: 'Target Clock', value: '10 ns (100 MHz)' },
                { label: 'Tool Flow', value: 'Cadence Genus → Innovus → Calibre' },
                { label: 'Verification', value: 'DRC + LVS + Post-route STA' },
                { label: 'GDS Output', value: 'conv-merged.gds (~44 MB)' },
                { label: 'Signoff Stage', value: 'Cadence Innovus Signoff (#19)' },
              ].map((item) => (
                <div key={item.label} className="bg-card border border-border rounded-xl px-4 py-3">
                  <div className="font-mono text-[10px] text-muted-foreground/60 uppercase tracking-wider">{item.label}</div>
                  <div className="font-body text-sm text-foreground mt-0.5">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Layout Viewer embed */}
            <div className="rounded-xl border border-primary/20 bg-card overflow-hidden">
              <div className="px-4 py-3 border-b border-primary/15 flex items-center gap-2">
                <Layers className="h-4 w-4 text-primary" />
                <span className="font-mono text-xs text-primary uppercase tracking-widest">Interactive Layout Viewer</span>
              </div>
              <div style={{ height: '520px' }}>
                <iframe
                  src={getAssetPath('/272-Course/viewer.html')}
                  className="w-full h-full border-0"
                  title="SKY130 DNN Accelerator Layout"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
            </div>

            {/* What I Learned */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Key Learnings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Timing-driven synthesis: how SDC constraints steer logic mapping',
                    'Power grid design and the impact of IR drop on timing closure',
                    'Clock tree synthesis trade-offs: skew vs. power vs. area',
                    'How P&R tools perform global/detailed routing and handle DRC fixes',
                    'Post-layout parasitic extraction (RC) and its effect on critical paths',
                    'Multi-corner/multi-mode (MCMM) sign-off for robust silicon',
                    'DRC/LVS debugging workflow for tape-out readiness',
                    'Open-source EDA (SKY130 PDK, OpenROAD) vs. commercial Cadence flows',
                  ].map(item => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} - ${siteName} Projects`,
    description: `${project.title} - ${project.category} project by ${project.author}`,
    openGraph: {
      title: project.title,
      description: `${project.title} - ${project.category} project by ${project.author}`,
      type: 'article',
      publishedTime: project.date,
      authors: [project.author],
      tags: project.tags,
      images: project.imageUrl ? [project.imageUrl] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: `${project.title} - ${project.category} project by ${project.author}`,
      images: project.imageUrl ? [project.imageUrl] : [],
    },
  };
}

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = projectsData.map((project) => ({
    slug: project.slug,
  }));
  console.log('Generating static params for slugs:', slugs);
  return slugs;
}

// EE233 FM Superheterodyne Radio Receiver | project detail
function EE233ProjectContent() {
  return (
    <div className="space-y-10">
      <ProjectProofPanel slug="ee233-fm-radio" />

      {/* Hero */}
      <FadeIn delay="delay-200">
        <div className="rounded-xl border border-primary/20 bg-card p-8 md:p-10">
          <div className="flex items-center gap-2 mb-5">
            <span className="font-mono text-xs text-primary/70 tracking-widest uppercase border border-primary/25 bg-primary/8 px-2 py-0.5 rounded-sm">Stanford EE233</span>
            <span className="font-mono text-xs text-muted-foreground/50">·</span>
            <span className="font-mono text-xs text-muted-foreground/50">Winter 2025</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Dual-Conversion FM Superheterodyne<br className="hidden md:block" /> Radio Receiver
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Final project for Stanford EE233 (Advanced Analog Circuits). Designed and built a complete
            FM radio receiver (87.5–108 MHz) using a Si5351 PLL IC for local oscillator synthesis,
            implementing I/Q quadrature demodulation with a Raspberry Pi Pico and a real-time
            spectrum analyzer web interface over WiFi.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {['Si5351 PLL', 'I/Q Demodulation', 'Superheterodyne', 'Raspberry Pi Pico', 'RF Design'].map(t => (
              <span key={t} className="font-mono text-xs text-primary/80 border border-primary/25 bg-primary/8 px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://youtube.com/shorts/ubQI5udW8H8?si=RdDYvzP_OdoH4A6_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground border border-primary/30 rounded-xl px-4 py-2 hover:bg-primary/10 transition-colors"
            >
              <ExternalLink className="h-4 w-4" /> Watch Live Demo
            </a>
          </div>
        </div>
      </FadeIn>

      {/* Interactive radio interface */}
      <FadeIn delay="delay-250">
        <Card className="bg-card border-border shadow-sm shadow-black/5 overflow-hidden">
          <CardHeader className="space-y-3">
            <CardTitle className="text-xl text-foreground flex items-center gap-2">
              <Monitor className="h-5 w-5 text-primary" /> Interactive Tuning Interface
            </CardTitle>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Visitors can use the same browser-based FM tuning interface you built for the project, including the
              station selector and spectrum analyzer view.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={getAssetPath('/233-FinalProject/radioUI.html')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground border border-primary/30 rounded-xl px-4 py-2 hover:bg-primary/10 transition-colors"
              >
                <ExternalLink className="h-4 w-4" /> Open Standalone Interface
              </a>
              <a
                href={getAssetPath('/233-FinalProject/FinalProject.pdf')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground border border-primary/30 rounded-xl px-4 py-2 hover:bg-primary/10 transition-colors"
              >
                <ExternalLink className="h-4 w-4" /> View PDF
              </a>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-xl overflow-hidden border border-border bg-[#070c14]" style={{ height: '620px' }}>
              <iframe
                src={getAssetPath('/233-FinalProject/radioUI.html')}
                className="w-full h-full border-0"
                title="FM Radio Tuning Interface"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </CardContent>
        </Card>
      </FadeIn>
      {/* Expandable block diagram */}
      <FadeIn delay="delay-350">
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <details className="group">
            <summary className="flex items-center gap-3 px-6 py-4 cursor-pointer select-none hover:bg-primary/5 transition-colors list-none">
              <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <ChevronDown className="h-4 w-4 text-primary transition-transform duration-300 group-open:rotate-180" />
              </div>
              <span className="font-mono text-xs text-primary uppercase tracking-widest">System Block Diagram</span>
              <span className="text-xs text-muted-foreground/50 ml-auto">click to expand</span>
            </summary>
            <div className="px-4 pb-4 pt-2 border-t border-border/50">
              <Image
                src={getAssetPath('/233-FinalProject/FinalProject.png')}
                alt="FM Superheterodyne Receiver Block Diagram"
                width={1100}
                height={420}
                className="w-full rounded-xl"
              />
              <p className="text-xs text-muted-foreground/60 mt-2 text-center">
                Signal flow: antenna → LNA → first mixer (ω₁−ω₀) → IF bandpass filter → second mixer with I/Q quadrature oscillator (0°/90°) → baseband demodulation
              </p>
            </div>
          </details>
        </div>
      </FadeIn>

      {/* Technical highlights */}
      <FadeIn delay="delay-400">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-card border-border shadow-sm shadow-black/5">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                <Cpu className="h-5 w-5 text-primary" /> Architecture
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                'Dual-conversion superheterodyne topology',
                'Si5351 PLL IC for programmable LO synthesis',
                'First IF stage: ω₁ − ω₀ downconversion',
                'Second stage: CLK0/CLK1 at 90° for I/Q demodulation',
                'Raspberry Pi Pico controls Si5351 via I²C',
                'HTTP server streams spectrum data over WiFi',
              ].map(s => (
                <div key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />{s}
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="bg-card border-border shadow-sm shadow-black/5">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" /> Specifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { label: 'Frequency Range', value: '87.5 – 108 MHz' },
                  { label: 'LO IC', value: 'Si5351 (3-output PLL)' },
                  { label: 'Demodulation', value: 'I/Q Quadrature (CLK0 / CLK1)' },
                  { label: 'MCU', value: 'Raspberry Pi Pico (RP2040)' },
                  { label: 'Interface', value: 'Real-time spectrum analyzer via WiFi HTTP' },
                  { label: 'Course', value: 'Stanford EE233 | Winter 2025' },
                ].map(row => (
                  <div key={row.label} className="flex justify-between items-start gap-4 text-sm border-b border-border/30 pb-2 last:border-0 last:pb-0">
                    <span className="text-muted-foreground/70 font-mono text-xs uppercase tracking-wide shrink-0">{row.label}</span>
                    <span className="text-foreground text-right">{row.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </FadeIn>

      {/* PDF report link */}
      <FadeIn delay="delay-450">
        <Card className="bg-primary/10 shadow-sm shadow-black/5">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">Full Project Report</h3>
              <p className="text-sm text-muted-foreground">Complete writeup including schematics, measurements, and analysis.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={getAssetPath('/233-FinalProject/FinalProject.pdf')}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-foreground border border-primary/30 rounded-xl px-4 py-2 hover:bg-primary/10 transition-colors"
              >
                <ExternalLink className="h-4 w-4" /> View PDF
              </a>
              <a
                href="https://youtube.com/shorts/ubQI5udW8H8?si=RdDYvzP_OdoH4A6_"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-foreground border border-primary/30 rounded-xl px-4 py-2 hover:bg-primary/10 transition-colors"
              >
                <ExternalLink className="h-4 w-4" /> Watch Demo
              </a>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

    </div>
  );
}

function EE219RadarProjectContent() {
  const stages = [
    ['1 · Sensor data', 'Decode complex CIR frames from the NCJ29D6/SR250 on IEEE 802.15.4z channel 9; calibrate 0.15 m taps and two receive paths.'],
    ['2 · Detection', 'Remove static clutter, compute range-Doppler maps, and apply OS-CFAR to produce range and radial-velocity detections.'],
    ['3 · Association', 'Use Mahalanobis gating and Hungarian assignment so noisy detections are matched globally instead of greedily.'],
    ['4 · Tracking', 'Progress from a 1-D constant-velocity Kalman baseline to a Cartesian EKF with nonlinear range, angle, and radial-velocity observations.'],
    ['5 · Vital signs', 'Select the strongest chest range tap, unwrap slow-time phase, bandpass 0.2–0.5 Hz, and estimate breathing frequency with an FFT.'],
  ];
  return (
    <div className="space-y-10">
      <ProjectProofPanel slug="ee219-uwb-radar" />
      <FadeIn delay="delay-300">
        <Card><CardHeader><CardTitle>End-to-end radar pipeline</CardTitle></CardHeader><CardContent>
          <div className="grid gap-3 md:grid-cols-5">{stages.map(([title, body]) => (
            <div key={title} className="rounded-xl border bg-muted/35 p-4"><div className="font-mono text-xs font-semibold text-primary">{title}</div><p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p></div>
          ))}</div>
        </CardContent></Card>
      </FadeIn>
      <FadeIn delay="delay-350">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
          <Card><CardHeader><CardTitle>Measured results</CardTitle></CardHeader><CardContent className="grid gap-4 sm:grid-cols-2">
            {[
              ['53.2%', 'Exact two-person count accuracy; baseline was 22.7%.'],
              ['0.047', 'False-positive tracks per frame in the full pipeline.'],
              ['10.8 BPM', 'Deep-breathing estimate at ~1 m with 24.4 dB peak SNR.'],
              ['21.1 BPM', 'Semi-rapid breathing estimate at ~1.5 m with 13.5 dB peak SNR.'],
            ].map(([value, label]) => <div key={value} className="rounded-xl border border-primary/20 bg-primary/10 p-4"><div className="text-2xl font-semibold">{value}</div><p className="mt-1 text-sm leading-6 text-muted-foreground">{label}</p></div>)}
          </CardContent></Card>
          <Card><CardHeader><CardTitle>Engineering judgment</CardTitle></CardHeader><CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
            <p>The ablation study showed that more sophisticated association did not improve every metric monotonically; it exposed tuning and close-crossing failure modes instead of hiding them.</p>
            <p>The two-antenna geometry limits angular resolution to roughly 51°, while 500 MHz bandwidth limits range resolution to 0.30 m. Those physical limits explain unresolved close crossings.</p>
            <p className="font-medium text-foreground">Collaboration: Stanford EE219 project using Bosch automotive UWB radar hardware in an industry-connected research program.</p>
          </CardContent></Card>
        </div>
      </FadeIn>
      <FadeIn delay="delay-400">
        <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/[0.06] p-6 text-center sm:p-8">
          <FileText className="mx-auto h-9 w-9 text-primary" />
          <h3 className="mt-3 text-xl font-semibold text-foreground">Technical report</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground">Read the complete EE219 report for the radar architecture, experiments, ablation study, measured results, and limitations.</p>
          <Button asChild className="mt-5 rounded-full">
            <a href={getAssetPath('/stanford/ee219/EE219-UWB-Radar-Report.pdf')} download>
              <Download className="mr-2 h-4 w-4" /> Read the full report
            </a>
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}

function EE372LdoProjectContent() {
  return (
    <div className="space-y-10">
      <ProjectProofPanel slug="ee372-ldo-chip" />
      <FadeIn delay="delay-300">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card><CardHeader><CardTitle>Architecture and design choices</CardTitle></CardHeader><CardContent className="space-y-3">
            {[
              ['BANBA bandgap + 5-bit trim', 'A resistor trim network corrects reference variation while preserving a programmable production-style calibration path.'],
              ['3-mirror NMOS-input OTA', 'Chosen for the reduced 0.8–1.0 V common-mode range; the cascoded implementation reached approximately 80 dB gain.'],
              ['Stability compensation', 'Miller capacitance and a nulling resistor were swept in the closed LDO loop rather than selected in isolation.'],
              ['Protection and control', 'Two Schmitt triggers add ~0.4 V hysteresis; a transmission-gate MUX and I²C shadow/commit register control trimming safely.'],
            ].map(([title, body]) => <div key={title} className="rounded-xl border bg-muted/35 p-4"><div className="font-semibold">{title}</div><p className="mt-1 text-sm leading-6 text-muted-foreground">{body}</p></div>)}
          </CardContent></Card>
          <Card><CardHeader><CardTitle>Full-chip execution</CardTitle></CardHeader><CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
            <p>Used gm/Id-based sizing, lookup tables for the TSMC 180 nm devices, and MATLAB sweeps to turn hand calculations into optimized transistor dimensions.</p>
            <p>The layout was integrated incrementally: each block passed DRC/LVS before assembly. Analog-on-top integration treated the digital trim controller as a verified block with separated analog and digital power nets.</p>
            <div className="rounded-xl border border-primary/20 bg-primary/10 p-4"><div className="font-mono text-xs uppercase tracking-widest text-primary">Academic result</div><p className="mt-2 text-foreground">A+ course grade · perfect milestone scores · 10/10 design showcase · final presentation at Apple headquarters.</p></div>
          </CardContent></Card>
        </div>
      </FadeIn>
      <FadeIn delay="delay-350"><div className="grid gap-4 md:grid-cols-3">
        {[
          ['/stanford/ee372/architecture.jpg', 'System architecture'],
          ['/stanford/ee372/layout.jpg', 'Full-chip layout'],
          ['/stanford/ee372/bgr.jpg', 'BANBA bandgap design'],
        ].map(([src, alt]) => <div key={src} className="overflow-hidden rounded-2xl border bg-card"><Image src={getAssetPath(src)} alt={alt} width={1440} height={810} className="aspect-video w-full object-cover" /><div className="p-3 text-sm font-medium">{alt}</div></div>)}
      </div></FadeIn>
    </div>
  );
}

function AnelloNavigationSimulationProjectContent() {
  const platforms = [
    ['Fixed-wing aircraft', 'Modeled higher-speed flight dynamics, control response, and navigation behavior for aerial autonomy testing.'],
    ['Ground rovers', 'Simulated lower-speed vehicle motion, terrain-style maneuvers, and platform-specific control conditions.'],
    ['Unmanned surface vehicles', 'Supported marine surface-motion behavior and sensor conditions for navigation-system evaluation.'],
    ['Unmanned underwater vehicles', 'Extended the framework toward submerged platform dynamics and constrained navigation scenarios.'],
  ];

  const technicalWork = [
    'Created the complete navigation simulation framework from the ground up.',
    'Made the IMU operate realistically inside the simulated environment instead of acting like an idealized sensor.',
    'Integrated simulated sensor data with navigation and control systems for closed-loop evaluation.',
    'Validated performance under different vehicle dynamics, operating conditions, and sensor assumptions.',
    'Built Software-in-the-Loop and Hardware-in-the-Loop workflows for repeatable pre-deployment testing.',
    'Developed reusable sensor models, data interfaces, validation tools, and simulation components.',
  ];

  return (
    <div className="space-y-10">
      <ProjectProofPanel slug="anello-navigation-simulation" />

      <FadeIn delay="delay-250">
        <Card className="overflow-hidden border-primary/20 bg-card shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-foreground">
              <Video className="h-6 w-6 text-primary" /> ANELLO Photonics video
            </CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Featured video used as the project cover and embedded here for the full case study.
            </p>
          </CardHeader>
          <CardContent>
            <div className="aspect-video overflow-hidden rounded-2xl border border-black/10 bg-black shadow-lg shadow-black/10">
              <iframe
                src="https://www.youtube.com/embed/s08NLhYrOQI"
                title="ANELLO Photonics Navigation Simulation Engineer video"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://youtu.be/s08NLhYrOQI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-primary/30 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/10"
              >
                <ExternalLink className="h-4 w-4" /> Watch on YouTube
              </a>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      <FadeIn delay="delay-300">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm shadow-black/5 md:p-8">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">Role summary</div>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.045em] text-foreground md:text-4xl">
            Navigation simulation framework for inertial sensors and autonomous systems.
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-muted-foreground">
            At ANELLO Photonics, I developed a complete simulation framework for testing inertial sensors and navigation algorithms across multiple autonomous platforms. The work connected vehicle dynamics, sensor modeling, navigation logic, and control behavior so systems could be evaluated consistently before moving to real hardware.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay="delay-350">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Card className="border-border bg-card shadow-sm shadow-black/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-foreground">
                <Navigation className="h-5 w-5 text-primary" /> What I built
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {technicalWork.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                  <CheckCircle className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-sm shadow-black/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-foreground">
                <Route className="h-5 w-5 text-primary" /> Platform coverage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {platforms.map(([title, body]) => (
                  <div key={title} className="rounded-xl border border-primary/15 bg-primary/[0.06] p-4">
                    <div className="text-sm font-semibold text-foreground">{title}</div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </FadeIn>

      <FadeIn delay="delay-400">
        <Card className="border-primary/20 bg-primary/10 shadow-sm shadow-black/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-foreground">
              <Cpu className="h-5 w-5 text-primary" /> Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
                'MATLAB', 'Simulink', 'PX4', 'SITL', 'HITL', 'Inertial navigation systems', 'IMUs',
                'Sensor modeling', 'Vehicle dynamics', 'Autonomous systems', 'Fixed-wing aircraft',
                'Rovers', 'USVs', 'UUVs', 'Control systems', 'Signal processing', 'Python', 'C/C++', 'Git',
              ].map((tech) => (
                <span key={tech} className="rounded-full border border-primary/20 bg-white/80 px-3 py-1.5 text-xs font-medium text-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}

// Map of slugs to their corresponding content components
const projectComponents: { [key: string]: React.ComponentType } = {
  'anello-navigation-simulation': AnelloNavigationSimulationProjectContent,
  'zf-autonomous-shuttle': ZFShuttleProjectContent,
  'airlab-stacking-challenge': AIRLabProjectContent,
  'smart-factory': SmartFactoryProjectContent,
  'robocup-competitions': RoboCupProjectContent,
  'zf-braking-systems': ZFBrakingProjectContent,
  'tokyo-iros-2022': TokyoIROSProjectContent,
  'chakri-ecommerce': ChakriProjectContent,
  'john-deere-go': JohnDeereProjectContent,
  'vanttec-roboboat-robosub': VanttecProjectContent,
  'ee272-vlsi-design': EE272ProjectContent,
  'ee233-fm-radio': EE233ProjectContent,
  'ee219-uwb-radar': EE219RadarProjectContent,
  'ee372-ldo-chip': EE372LdoProjectContent,
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const ProjectContent = projectComponents[slug];
  const signal = projectSignals[slug];

  return (
    <main className="min-h-screen w-full min-w-0 bg-circuit">
      <div className="container mx-auto w-full max-w-full px-4 py-14 lg:px-8">
      <FadeIn>
        <Button variant="outline" asChild className="mb-8 rounded-full border-black/10 bg-white/80 shadow-sm shadow-black/5 hover:bg-white">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>
      </FadeIn>

      <FadeIn delay="delay-100">
        <article className="case-study mx-auto w-full min-w-0 max-w-6xl rounded-2xl border border-black/10 bg-white/[0.82] p-4 shadow-sm shadow-black/5 backdrop-blur-sm sm:p-8 lg:p-10">
          <header className="mb-10 text-center">
            <Badge variant="outline" className="mb-4 rounded-full border-primary/25 bg-primary/10 px-3 py-1 text-primary">{project.category}</Badge>
            <h1 className="mx-auto max-w-3xl break-words text-3xl font-semibold tracking-[-0.055em] text-foreground sm:text-4xl md:text-5xl">{project.title}</h1>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center"><UserCircle className="mr-1.5 h-4 w-4" /> {project.author}</span>
              <span className="flex items-center"><Calendar className="mr-1.5 h-4 w-4" /> {project.date}</span>
            </div>
          </header>

          {project.imageUrl && (
            <div className="relative mb-10 aspect-video overflow-hidden rounded-2xl border border-black/10 shadow-lg shadow-black/10">
              <Image
                src={project.imageUrl}
                alt={project.title}
                data-ai-hint={project.imageHint}
                width={1200}
                height={675}
                className="object-cover w-full h-full"
              />
            </div>
          )}

          {signal && (
            <section className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-muted/40 p-5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Role fit</div>
                <p className="mt-2 text-sm font-semibold leading-6 text-foreground">{signal.roleFit}</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-muted/40 p-5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">My contribution</div>
                <p className="mt-2 text-sm leading-6 text-foreground">{signal.contribution}</p>
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/80">Technical focus</div>
                <p className="mt-2 text-sm leading-6 text-foreground">{signal.technicalSummary}</p>
              </div>
            </section>
          )}

          {ProjectContent && <ProjectContent />}

          <Separator className="my-10" />

          <footer className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                <Tag className="mr-2 h-5 w-5 text-primary" /> Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>

            {/* <div className="flex flex-wrap gap-4 mt-8">
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> View on GitHub
                  </Link>
                </Button>
              )}
              {project.demoUrl && (
                <Button variant="outline" asChild>
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              )}
            </div> */}
          </footer>
        </article>
      </FadeIn>
      </div>
    </main>
  );
}
