import { siteName } from './constants';

export interface ResearchPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  imageUrl: string;
  imageHint: string;
  content: string;
}

const researchPostsData: ResearchPost[] = [
  {
    id: '1',
    slug: "digital-twin-implementation",
    title: "A Digital Twin Implementation",
    date: "March 28, 2022",
    author: siteName,
    category: "Research",
    tags: ["Robotics", "Education"],
    imageUrl: "https://placehold.co/1200x600.png",
    imageHint: "digital twin robotics",
    content: `
      <p>This paper presents a digital twin implementation for a robotic arm, focusing on real-time monitoring and control. The implementation uses ROS2 and Unity for visualization and simulation.</p>
      <p>Key features include:</p>
      <ul>
        <li>Real-time joint state monitoring</li>
        <li>3D visualization of the robot</li>
        <li>Collision detection and prevention</li>
        <li>Path planning and execution</li>
      </ul>
      <p>Read the full paper: <a href="https://example.com/digital-twin-paper" target="_blank" rel="noopener noreferrer">Digital Twin Implementation for Robotic Arms</a></p>
    `
  },
  {
    id: '2',
    slug: "virtual-twin-smart-factory",
    title: "Virtual Twin for Smart Factory",
    date: "March 28, 2022",
    author: siteName,
    category: "Research",
    tags: ["Industry 4.0", "Digital Twin"],
    imageUrl: "https://placehold.co/1200x600.png",
    imageHint: "smart factory digital twin",
    content: `
      <p>This research explores the implementation of a virtual twin for a smart factory environment, integrating IoT sensors and real-time data processing.</p>
      <p>Main contributions:</p>
      <ul>
        <li>Real-time production monitoring</li>
        <li>Predictive maintenance system</li>
        <li>Energy consumption optimization</li>
        <li>Quality control automation</li>
      </ul>
      <p>Read the full paper: <a href="https://example.com/smart-factory-paper" target="_blank" rel="noopener noreferrer">Virtual Twin Implementation for Smart Factories</a></p>
    `
  },
  {
    id: '3',
    slug: "robosub-roboboat-competitions",
    title: "RoboSub and RoboBoat Competitions",
    date: "March 28, 2022",
    author: siteName,
    category: "Research",
    tags: ["Robotics", "Competitions"],
    imageUrl: "https://placehold.co/1200x600.png",
    imageHint: "robosub roboboat competition",
    content: `
      <p>This paper details our team's participation in the RoboSub and RoboBoat competitions, focusing on autonomous underwater and surface vehicles.</p>
      <p>Key achievements:</p>
      <ul>
        <li>Autonomous navigation system</li>
        <li>Computer vision for object detection</li>
        <li>Underwater communication protocols</li>
        <li>Power management optimization</li>
      </ul>
      <p>Read the full paper: <a href="https://example.com/robosub-paper" target="_blank" rel="noopener noreferrer">RoboSub and RoboBoat: A Comprehensive Analysis</a></p>
    `
  },
  {
    id: '4',
    slug: "educational-innovations",
    title: "Educational Innovations in Industrial Automation",
    date: "March 28, 2022",
    author: siteName,
    category: "Research",
    tags: ["Education", "Industry 4.0"],
    imageUrl: "https://placehold.co/1200x600.png",
    imageHint: "industrial automation education",
    content: `
      <p>This research presents innovative approaches to teaching industrial automation concepts, combining theoretical knowledge with practical applications.</p>
      <p>Key innovations:</p>
      <ul>
        <li>Virtual laboratory environments</li>
        <li>Hands-on project-based learning</li>
        <li>Industry-academia collaboration</li>
        <li>Assessment and evaluation methods</li>
      </ul>
      <p>Read the full paper: <a href="https://example.com/education-paper" target="_blank" rel="noopener noreferrer">Innovative Approaches to Industrial Automation Education</a></p>
    `
  }
];

export { researchPostsData }; 