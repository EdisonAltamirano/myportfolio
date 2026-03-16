import { Book, Bot, Brain, Cpu, CodeXml, Contact, Home, Radio, Briefcase, Server, UserCircle, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
  icon?: LucideIcon;
};

export const navLinks: NavLink[] = [
  { href: '/',         label: 'Home',     icon: Home },
  { href: '/about',    label: 'About',    icon: UserCircle },
  { href: '/projects', label: 'Projects', icon: Briefcase },
  { href: '/research', label: 'Research', icon: Book },
  { href: '/contact',  label: 'Contact',  icon: Contact },
];

export type ProjectType = 'company' | 'academic' | 'startup';

export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  category: string;
  company: string;
  tags: string[];
  href: string;
  type: ProjectType;
  websiteUrl?: string;
};

const BASE = process.env.NODE_ENV === 'production' ? '/myportfolio' : '';

export const primaryEmail = 'eraltam@stanford.edu';
export const workEmail = 'edison.altamirano@drijet.io';
export const linkedinUrl = 'https://www.linkedin.com/in/edison-altamirano-avila-55a0341a3';
export const officialWebsiteUrl = 'https://edisonaltamirano.github.io/myportfolio/';
export const phoneHref = '+16503349546';
export const phoneDisplay = '+1 (650) 334-9546';

export const featuredProjects: Project[] = [
  {
    id: 'zf-autonomous-shuttle',
    title: 'ZF Autonomous Shuttle',
    description:
      "Pioneered firmware and electronics for Mexico's first autonomous passenger shuttle, complete with sensor fusion and path planning algorithms.",
    imageUrl: `${BASE}/images/sdv image.png`,
    imageHint: 'autonomous vehicle',
    category: 'Robotics',
    company: 'ZF Group',
    tags: ['Robotics', 'Autonomous Systems', 'Firmware', 'CAN Bus'],
    href: '/projects/zf-autonomous-shuttle',
    type: 'company',
  },
  {
    id: 'airlab-stacking-challenge',
    title: 'AIRLab Stacking Challenge | Winner',
    description:
      'Won "Most Consistent Solution" award in international robotics competition hosted in the Netherlands, developing vision-based robotic grasping algorithms.',
    imageUrl: `${BASE}/airlab/AirlabPrize.jpeg`,
    imageHint: 'robotic arm stacking products',
    category: 'Robotics',
    company: 'Ahold Delhaize / TU Delft',
    tags: ['Computer Vision', 'Robotic Manipulation', 'AI', 'International Competition'],
    href: '/projects/airlab-stacking-challenge',
    type: 'academic',
  },
  {
    id: 'vanttec-roboboat-robosub',
    title: 'Vanttec Roboboat & Robosub',
    description:
      'Led development of perception and control systems for autonomous surface and underwater vehicles competing internationally at RoboNation.',
    imageUrl: `${BASE}/images/uuv.png`,
    imageHint: 'robotic boat',
    category: 'Robotics',
    company: 'RoboNation / Tecnológico de Monterrey',
    tags: ['Autonomous Systems', 'Computer Vision', 'Robotics', 'SLAM'],
    href: '/projects/vanttec-roboboat-robosub',
    type: 'academic',
  },
];

export const companyProjects: Project[] = [
  {
    id: 'zf-autonomous-shuttle',
    title: 'ZF Autonomous Shuttle',
    description:
      "Pioneered firmware and electronics for Mexico's first autonomous passenger shuttle, complete with sensor fusion and path planning algorithms. Presented to Tesla executives before their Gigafactory announcement.",
    imageUrl: `${BASE}/images/sdv image.png`,
    imageHint: 'autonomous vehicle',
    category: 'Robotics',
    company: 'ZF Group',
    tags: ['Robotics', 'Autonomous Systems', 'Firmware', 'CAN Bus'],
    href: '/projects/zf-autonomous-shuttle',
    type: 'company',
  },
  {
    id: 'zf-braking-systems',
    title: 'ZF | Next-Gen Axle Modulators',
    description:
      'Developing next-generation braking systems for commercial vehicles. Mathematical modeling, embedded software (AUTOSAR), and reverse engineering of commercial systems. Project valued at millions of dollars.',
    imageUrl: `${BASE}/zf_job/ZF-CVS.jpg`,
    imageHint: 'embedded systems engineering',
    category: 'Automotive Embedded',
    company: 'ZF Friedrichshafen AG',
    tags: ['AUTOSAR', 'VectorCAST', 'MATLAB', 'Embedded C', 'System Simulation'],
    href: '/projects/zf-braking-systems',
    type: 'company',
  },
  {
    id: 'john-deere-go',
    title: 'John Deere Supply Chain Systems',
    description:
      'Built internal supply-chain systems at John Deere, including IM Reserver for SAP-connected reservation workflows and ShieldGuard for computer-vision-based loss prevention.',
    imageUrl: `${BASE}/images/JD GO.jpeg`,
    imageHint: 'agricultural technology',
    category: 'Supply Chain Systems',
    company: 'John Deere',
    tags: ['AI', 'Computer Vision', 'SAP ABAP', 'Azure', 'Power Platform'],
    href: '/projects/john-deere-go',
    type: 'company',
  },
  {
    id: 'chakri-ecommerce',
    title: 'BAC Modelos | BIM Platform',
    description:
      'Full-stack BIM product discovery platform built with CHAKRI for a Mexico-based client. Combines a searchable BIM library, secure downloads, manufacturer onboarding, content CMS, and analytics in one scalable Next.js + Firebase + Elasticsearch product.',
    imageUrl: `${BASE}/bacmodelos/mainpage.png`,
    imageHint: 'BIM product discovery platform',
    category: 'Full-Stack Platform',
    company: 'CHAKRI Studio',
    tags: ['Next.js', 'Firebase', 'Elasticsearch', 'TypeScript', 'BIM'],
    href: '/projects/chakri-ecommerce',
    type: 'startup',
    websiteUrl: 'https://www.bacmodelos.com/',
  },
];

export const academicProjects: Project[] = [
  {
    id: 'airlab-stacking-challenge',
    title: 'AIRLab Stacking Challenge | Winner',
    description:
      'Won "Most Consistent Solution" award in international robotics competition hosted in the Netherlands, developing vision-based robotic grasping algorithms at TU Delft.',
    imageUrl: `${BASE}/airlab/AirlabPrize.jpeg`,
    imageHint: 'robotic arm stacking products',
    category: 'Robotics Competition',
    company: 'Ahold Delhaize / TU Delft',
    tags: ['Computer Vision', 'Robotic Manipulation', 'AI', 'International Competition'],
    href: '/projects/airlab-stacking-challenge',
    type: 'academic',
  },
  {
    id: 'vanttec-roboboat-robosub',
    title: 'Vanttec Roboboat & Robosub',
    description:
      'Led development of perception and control systems for autonomous surface and underwater vehicles. Won 1st place in RoboBoat and 3rd in RoboSub international competitions.',
    imageUrl: `${BASE}/images/uuv.png`,
    imageHint: 'robotic boat',
    category: 'Autonomous Vehicles',
    company: 'RoboNation / Tecnológico de Monterrey',
    tags: ['Autonomous Systems', 'Computer Vision', 'SLAM', 'ROS', 'Navigation'],
    href: '/projects/vanttec-roboboat-robosub',
    type: 'academic',
  },
  {
    id: 'smart-factory',
    title: 'Smart Factory | Industry 4.0',
    description:
      "Led development of one of Latin America's most advanced automated factories, now partnered with MIT and recognized by international organizations including IEEE EDUCON.",
    imageUrl: `${BASE}/smartfactory/smartfactory.jpeg`,
    imageHint: 'industrial automation',
    category: 'Industrial IoT',
    company: 'Tecnológico de Monterrey',
    tags: ['Industry 4.0', 'PLC', 'Digital Twin', 'ROS', 'IoT'],
    href: '/projects/smart-factory',
    type: 'academic',
  },
  {
    id: 'robocup-competitions',
    title: 'RoboCup International Competitions',
    description:
      'Led navigation software development for humanoid service robots (TIAGO), competing in Mexico nationals and international simulated home challenges.',
    imageUrl: `${BASE}/robocup/frida.jpg`,
    imageHint: 'humanoid service robot',
    category: 'Robotics',
    company: 'Roborregos / Tecnológico de Monterrey',
    tags: ['Humanoid Robotics', 'SLAM', 'Navigation', 'ROS', 'AI Planning'],
    href: '/projects/robocup-competitions',
    type: 'academic',
  },
  {
    id: 'tokyo-iros-2022',
    title: 'IROS 2022 Tokyo | HandyMan Challenge',
    description:
      'Achieved 3rd place in the HandyMan Challenge at IROS 2022 in Tokyo, developing autonomous home assistance robots with advanced navigation, manipulation, and task planning.',
    imageUrl: `${BASE}/tokio/tokio-general.jpg`,
    imageHint: 'robot in home environment',
    category: 'Robotics Research',
    company: 'IEEE/RSJ IROS',
    tags: ['Service Robotics', 'AI Planning', 'Human-Robot Interaction', 'Simulation'],
    href: '/projects/tokyo-iros-2022',
    type: 'academic',
  },
  {
    id: 'ee272-vlsi-design',
    title: 'EE271 / EE272 - VLSI Design Projects',
    description:
      'Full-custom VLSI design in SKY130 open-source PDK at Stanford. Eight homeworks all receiving 100/100, culminating in a DNN accelerator chip | from RTL through place-and-route, timing closure, and tapeout signoff.',
    imageUrl: `${BASE}/272-Course/sram.png`,
    imageHint: 'VLSI chip layout design',
    category: 'VLSI / IC Design',
    company: 'Stanford University - EE271/EE272',
    tags: ['VLSI', 'SKY130', 'Cadence', 'Place & Route', 'IC Design', 'Stanford'],
    href: '/projects/ee272-vlsi-design',
    type: 'academic',
  },
  {
    id: 'ee233-fm-radio',
    title: 'EE233 - FM Superheterodyne Radio Receiver',
    description:
      'Built a dual-conversion FM receiver for Stanford EE233 with a Si5351 PLL, quadrature I/Q demodulation, Raspberry Pi Pico control, and a live browser-based tuning interface.',
    imageUrl: `${BASE}/images/radio_hardware.png`,
    imageHint: 'FM radio tuning interface',
    category: 'Analog IC / RF',
    company: 'Stanford University - EE233',
    tags: ['RF Design', 'Superheterodyne', 'Si5351 PLL', 'Raspberry Pi Pico', 'I/Q Demodulation'],
    href: '/projects/ee233-fm-radio',
    type: 'academic',
    websiteUrl: `${BASE}/233-FinalProject/radioUI.html`,
  },
];

export const allProjects: Project[] = [...companyProjects, ...academicProjects];

/* ── Skills ──────────────────────────────────────────────── */

export type SkillCategory = {
  title: string;
  icon?: LucideIcon;
  skills: Skill[];
};

export type Skill = {
  name: string;
  level: number;
};

export const technicalSkills: SkillCategory[] = [
  {
    title: 'VLSI & Analog IC',
    icon: Cpu,
    skills: [
      { name: 'Analog IC Design (CMOS)',  level: 85 },
      { name: 'VLSI System Design',       level: 82 },
      { name: 'Cadence / Synopsys',       level: 78 },
      { name: 'RF & mm-Wave Circuits',    level: 75 },
    ],
  },
  {
    title: 'Robotics & Embedded',
    icon: Bot,
    skills: [
      { name: 'ROS/ROS2',       level: 95 },
      { name: 'Embedded C/C++', level: 95 },
      { name: 'AUTOSAR',        level: 90 },
      { name: 'Matlab/Simulink', level: 85 },
    ],
  },
  {
    title: 'AI & Perception',
    icon: Brain,
    skills: [
      { name: 'Radar Signal Processing', level: 80 },
      { name: 'Computer Vision',         level: 90 },
      { name: 'SLAM',                    level: 85 },
      { name: 'Deep Learning',           level: 80 },
    ],
  },
  {
    title: 'Full Stack & Cloud',
    icon: CodeXml,
    skills: [
      { name: 'React/Next.js', level: 85 },
      { name: 'Flutter',       level: 95 },
      { name: 'Python',        level: 90 },
      { name: 'SAP ABAP',      level: 85 },
    ],
  },
];

export const expertiseAreas = [
  { name: 'VLSI Chip Design',     label: '@ TSMC' },
  { name: 'Radar Sensing',        label: 'Arbabian Lab' },
  { name: 'Multimodal AI',        label: 'Research' },
  { name: 'Autonomous Systems',   label: 'Expert' },
  { name: 'Full-Stack Dev',       label: 'Builder' },
  { name: 'Analog IC Design',     label: 'Stanford EE' },
];

export const aboutStats = [
  { value: '7+',  label: 'Years of Experience' },
  { value: '15+', label: 'Completed Projects' },
  { value: '5+',  label: 'Industries Served' },
  { value: '4',   label: 'IEEE Publications' },
];

export type StanfordCourse = {
  code: string;
  title: string;
  semester: string;
  description: string;
  highlight?: string;
  status: 'completed' | 'active' | 'upcoming';
  area: 'vlsi' | 'analog' | 'research';
};

export const stanfordCourses: StanfordCourse[] = [
  {
    code: 'EE391',
    title: 'Research | Arbabian Lab',
    semester: '2024–Present',
    description:
      'Graduate research in one of Stanford\'s leading RF/mm-wave IC groups. Focus on next-generation radar sensor systems and multimodal AI frameworks that fuse radar data with vision and other sensing modalities for perception tasks.',
    highlight: 'Radar · Multimodal AI',
    status: 'active',
    area: 'research',
  },
  {
    code: 'EE372',
    title: 'Design for Test & IC Fabrication',
    semester: 'Upcoming',
    description:
      'Upcoming full chip design flow for an analog integrated circuit (camera/imager), spanning specification, schematic capture, layout, DRC/LVS verification, and TSMC-oriented fabrication.',
    highlight: 'Upcoming TSMC Fabrication',
    status: 'upcoming',
    area: 'vlsi',
  },
  {
    code: 'EE271 / EE272',
    title: 'VLSI Design Projects',
    semester: '2024–2025',
    description:
      'Advanced VLSI system design covering full-custom layout, logic synthesis, timing closure, and mixed-signal IC verification across the EE271/EE272 sequence.',
    highlight: 'Silicon Design',
    status: 'completed',
    area: 'vlsi',
  },
  {
    code: 'EE214A',
    title: 'Analog Integrated Circuit Design',
    semester: 'Fall 2024',
    description:
      'Core analog IC design principles: MOSFET device physics, single-stage/multi-stage amplifiers, noise analysis, frequency response, and feedback theory in deep-submicron CMOS.',
    status: 'completed',
    area: 'analog',
  },
  {
    code: 'EE233',
    title: 'Advanced Analog Circuits',
    semester: 'Winter 2025',
    description:
      'Op-amp design, comparators, bandgap references, data converters (ADC/DAC architectures), and switched-capacitor circuits. Final project: a dual-conversion FM superheterodyne radio receiver using a Si5351 PLL IC with WiFi-controlled quadrature I/Q demodulation.',
    highlight: 'FM Radio IC Project',
    status: 'completed',
    area: 'analog',
  },
  {
    code: 'EE256',
    title: 'Analog–Digital Interface Circuits',
    semester: 'Spring 2026',
    description:
      'Design of high-performance ADCs, DACs, and mixed-signal circuits for interfacing physical sensors with digital systems | closing the loop between the analog world and AI.',
    status: 'upcoming',
    area: 'analog',
  },
];

export const siteName = "Edison R. Altamirano";
