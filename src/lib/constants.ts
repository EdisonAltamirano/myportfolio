import type { Book, Bot, Brain, CodeXml, Contact, FileText, Home, Layers, Settings, Briefcase } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: FileText },
  { href: '/projects', label: 'Projects', icon: Briefcase },
  { href: '/blog', label: 'Blog', icon: Book },
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
  threeDModel?: string; // Path to a 3D model or identifier
};

export const featuredProjects: Project[] = [
  {
    id: 'zf-autonomous-shuttle',
    title: 'ZF Autonomous Shuttle',
    description: "Pioneered firmware and electronics for Mexico's first autonomous passenger shuttle, complete with sensor fusion and path planning algorithms.",
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'autonomous vehicle',
    category: 'Robotics',
    company: 'ZF Group',
    tags: ['Robotics', 'Autonomous Systems', 'Firmware'],
    href: '/projects/zf-autonomous-shuttle',
    threeDModel: 'shuttle.glb'
  },
  {
    id: 'john-deere-go',
    title: 'John Deere GO',
    description: 'Developed SAP-integrated reservation application and AI-powered grasp detection camera system for agricultural machinery.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'agricultural technology',
    category: 'AI',
    company: 'John Deere',
    tags: ['AI', 'Computer Vision', 'Mobile App'],
    href: '/projects/john-deere-go',
  },
  {
    id: 'vanttec-roboboat-robosub',
    title: 'Vanttec Roboboat & Robosub',
    description: 'Led development of perception and control systems for autonomous surface and underwater vehicles competing internationally at RoboNation.',
    imageUrl: 'https://placehold.co/600x400.png',
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
];


export type SkillCategory = {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  skills: Skill[];
};

export type Skill = {
  name: string;
  level: number; // Percentage 0-100
};

export const technicalSkills: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: CodeXml,
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 90 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    title: 'AI & ML',
    icon: Brain,
    skills: [
      { name: 'TensorFlow', level: 85 },
      { name: 'PyTorch', level: 80 },
      { name: 'Computer Vision', level: 85 },
      { name: 'NLP', level: 75 },
    ],
  },
  {
    title: 'DevOps & Robotics',
    icon: Bot,
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 75 },
      { name: 'AWS', level: 80 },
      { name: 'ROS', level: 80 },
    ],
  },
];

export const expertiseAreas = [
    { name: 'Robotics', label: 'Expert' },
    { name: 'AI & Vision', label: 'Specialist' },
    { name: 'Full-Stack', label: 'Developer' },
    { name: 'Systems', label: 'Architect' },
];

export const aboutStats = [
    { value: '6+', label: 'Years of Experience' },
    { value: '12+', label: 'Completed Projects' },
    { value: '5+', label: 'Industries Served' },
    { value: '3+', label: 'Autonomous Systems' },
];

export const siteName = "Edison R. Altamirano";
