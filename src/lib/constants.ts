import { Book, Bot, Brain, CodeXml, Contact, FileText, Home, Layers, Settings, Briefcase, Server, UserCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
  icon?: LucideIcon;
};

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: UserCircle }, // Changed from FileText for better semantic meaning
  { href: '/projects', label: 'Projects', icon: Briefcase },
  { href: '/research', label: 'Research', icon: Book },
  { href: '/contact', label: 'Contact', icon: Contact },
];

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
};

export const featuredProjects: Project[] = [
  {
    id: 'zf-autonomous-shuttle',
    title: 'ZF Autonomous Shuttle',
    description: "Pioneered firmware and electronics for Mexico's first autonomous passenger shuttle, complete with sensor fusion and path planning algorithms.",
    imageUrl: `${process.env.NODE_ENV === 'production' ? '/myportfolio' : ''}/images/sdv image.png`,
    imageHint: 'autonomous vehicle',
    category: 'Robotics',
    company: 'ZF Group',
    tags: ['Robotics', 'Autonomous Systems', 'Firmware'],
    href: '/projects/zf-autonomous-shuttle',
  },
  {
    id: 'airlab-stacking-challenge',
    title: 'AIRLab Stacking Challenge - Winner',
    description: 'Won "Most Consistent Solution" award in international robotics competition hosted in Netherlands, developing vision-based robotic grasping algorithms.',
    imageUrl: `${process.env.NODE_ENV === 'production' ? '/myportfolio' : ''}/airlab/AirlabPrize.jpeg`,
    imageHint: 'robotic arm stacking products',
    category: 'Robotics',
    company: 'Ahold Delhaize / TU Delft',
    tags: ['Computer Vision', 'Robotic Manipulation', 'AI', 'International Competition'],
    href: '/projects/airlab-stacking-challenge',
  },
  {
    id: 'vanttec-roboboat-robosub',
    title: 'Vanttec Roboboat & Robosub',
    description: 'Led development of perception and control systems for autonomous surface and underwater vehicles competing internationally at RoboNation.',
    imageUrl: `${process.env.NODE_ENV === 'production' ? '/myportfolio' : ''}/images/uuv.png`,
    imageHint: 'robotic boat',
    category: 'Robotics',
    company: 'RoboNation / Tecnológico de Monterrey',
    tags: ['Autonomous Systems', 'Computer Vision', 'Robotics'],
    href: '/projects/vanttec-roboboat-robosub',
  },
];

export const allProjects: Project[] = [
  ...featuredProjects,
  // Add more projects here if needed for the /projects page
  {
    id: 'zf-braking-systems',
    title: 'ZF - Advanced Braking Systems',
    description: 'Contributed to the development of next-generation braking systems for commercial vehicles, focusing on AUTOSAR-based software architecture, system simulation, and rigorous testing under safety-critical conditions.',
    imageUrl: `${process.env.NODE_ENV === 'production' ? '/myportfolio' : ''}/zf_job/ZF-CVS.jpg`,
    imageHint: 'embedded systems engineering',
    category: 'Automotive Embedded Systems',
    company: 'ZF Friedrichshafen AG',
    tags: ['AUTOSAR', 'VectorCAST', 'MATLAB', 'Embedded C', 'System Simulation'],
    href: '/projects/zf-braking-systems',
  },
  {
    id: 'smart-factory',
    title: 'Smart Factory - Industry 4.0',
    description: 'Led development of one of Latin America\'s most advanced automated factories, now partnered with MIT and recognized by international organizations.',
    imageUrl: `${process.env.NODE_ENV === 'production' ? '/myportfolio' : ''}/smartfactory/smartfactory.jpeg`,
    imageHint: 'industrial automation',
    category: 'Industrial IoT',
    company: 'Tecnológico de Monterrey',
    tags: ['Industry 4.0', 'PLC', 'Industrial Automation', 'IoT'],
    href: '/projects/smart-factory',
  },
  {
    id: 'chakri-ecommerce',
    title: 'Chakri - Agricultural E-commerce',
    description: 'Co-founded and developed a revolutionary e-commerce platform connecting farmers directly with consumers, now serving 300+ users with 6,000+ products.',
    imageUrl: `${process.env.NODE_ENV === 'production' ? '/myportfolio' : ''}/chakri/portada.jpg`,
    imageHint: 'mobile e-commerce app',
    category: 'E-commerce',
    company: 'Chakri (Co-founder)',
    tags: ['Mobile App', 'E-commerce', 'Agriculture', 'Logistics'],
    href: '/projects/chakri-ecommerce',
  },
  {
    id: 'john-deere-go',
    title: 'John Deere GO', 
    description: 'Developed SAP-integrated reservation application and AI-powered grasp detection camera system for agricultural machinery.',
    imageUrl: `${process.env.NODE_ENV === 'production' ? '/myportfolio' : ''}/images/JD GO.jpeg`,
    imageHint: 'agricultural technology',
    category: 'AI',
    company: 'John Deere',
    tags: ['AI', 'Computer Vision', 'Mobile App'],
    href: '/projects/john-deere-go',
  },
  {
    id: 'robocup-competitions',
    title: 'RoboCup International Competitions',
    description: 'Led navigation software development for humanoid service robots, competing in Mexico nationals.',
    imageUrl: `${process.env.NODE_ENV === 'production' ? '/myportfolio' : ''}/robocup/frida.jpg`,
    imageHint: 'humanoid service robot',
    category: 'Robotics',
    company: 'Roborregos / Tecnológico de Monterrey',
    tags: ['Humanoid Robotics', 'SLAM', 'Navigation', 'ROS'],
    href: '/projects/robocup-competitions',
  },
  {
    id: 'tokyo-iros-2022',
    title: 'IROS 2022 Tokyo - Home Simulation',
    description: 'Achieved 3rd place in HandyMan Challenge at IROS 2022, developing autonomous home assistance robots with advanced navigation and manipulation.',
    imageUrl: `${process.env.NODE_ENV === 'production' ? '/myportfolio' : ''}/tokio/tokio-general.jpg`,
    imageHint: 'robot in home environment',
    category: 'Robotics',
    company: 'IEEE/RSJ IROS',
    tags: ['Service Robotics', 'AI Planning', 'Human-Robot Interaction', 'Simulation'],
    href: '/projects/tokyo-iros-2022',
  },
];


export type SkillCategory = {
  title: string;
  icon?: LucideIcon;
  skills: Skill[];
};

export type Skill = {
  name: string;
  level: number; // Percentage 0-100
};

export const technicalSkills: SkillCategory[] = [
  {
    title: 'Robotics & Embedded',
    icon: Bot,
    skills: [
      { name: 'ROS/ROS2', level: 95 },
      { name: 'Embedded C/C++', level: 95 },
      { name: 'AUTOSAR', level: 90 },
      { name: 'Matlab', level: 85 },
    ],
  },
  {
    title: 'AI & Computer Vision',
    icon: Brain,
    skills: [
      { name: 'OpenCV', level: 90 },
      { name: 'Computer Vision', level: 90 },
      { name: 'SLAM', level: 85 },
      { name: 'Deep Learning', level: 80 },
    ],
  },
  {
    title: 'Enterprise & Cloud',
    icon: Server,
    skills: [
      { name: 'SAP ABAP', level: 85 },
      { name: 'Azure', level: 80 },
      { name: 'Power Platform', level: 85 },
      { name: 'AWS', level: 75 },
    ],
  },
  {
    title: 'Full Stack',
    icon: CodeXml,
    skills: [
      { name: 'React/Next.js', level: 85 },
      { name: 'Flutter', level: 95 },
      { name: 'Python', level: 90 },
      { name: 'Node.js', level: 75 },
    ],
  },
];

export const expertiseAreas = [
    { name: 'Robotics ', label: 'Expert' },
    { name: 'AI & Vision ', label: 'Specialist' },
    { name: 'Full-Stack ', label: 'Developer' },
    { name: 'Systems ', label: 'Architect' },
];

export const aboutStats = [
    { value: '6+', label: 'Years of Experience' },
    { value: '12+', label: 'Completed Projects' },
    { value: '5+', label: 'Industries Served' },
    { value: '3+', label: 'Autonomous Systems' },
];

export const siteName = "Edison R. Altamirano";
