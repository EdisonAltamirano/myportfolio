import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, UserCircle, Tag,  Target,  Cpu, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FadeIn } from '@/components/animations/FadeIn';
import { siteName } from '@/lib/constants';
import {  Layers,  Trophy, Globe, Satellite, Map, Award, Star, Bot, Monitor, Route, Hand, Zap, FileText, CheckCircle, Car, Cog, Shield, Play, Users, Building, Factory, Settings, Brain, Network, Wrench, BookOpen, Presentation, Home, Gamepad2, Volume2, Navigation, Cloud, Headphones, ShoppingCart, Truck, DollarSign, Smartphone, ChefHat, MapPin, Bell, Server, Sparkles, Camera, Box, Clock, BarChart, GraduationCap, Code, XCircle, Layout, RefreshCw, LineChart, TestTube, Bug, Lightbulb, GitBranch, Video, ExternalLink } from 'lucide-react';
import { allProjects, Project } from '@/lib/constants';
import { Suspense } from 'react';
// Project metadata
const projectsData = [
  {
    id: '1',
    slug: "zf-autonomous-shuttle",
    title: "ZF Autonomous Shuttle",
    date: "October 26, 2023",
    author: siteName,
    category: "Autonomous Systems",
    tags: ["AI", "Robotics", "Self-Driving", "Innovation"],
    imageUrl: '/images/sdv image.png',
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
    imageUrl:'/airlab/AirlabPrize.jpeg',
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
    imageUrl: '/images/uuv.png',
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
    imageUrl:  '/smartfactory/smartfactory.jpeg',
    imageHint: "smart factory automation system",
    githubUrl: "https://github.com/example/smart-factory",
    demoUrl: "https://demo.example.com/smart-factory"
  },
  {
    id: '5',
    slug: "chakri-ecommerce",
    title: "Chakri E-commerce Platform",
    date: "March 1, 2024",
    author: siteName,
    category: "Web Development",
    tags: ["E-commerce", "Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: '/chakri/portada.jpg',
    imageHint: "e-commerce platform interface",
    githubUrl: "https://github.com/example/chakri-ecommerce",
    demoUrl: "https://demo.example.com/chakri-ecommerce"
  },
  {
    id: '6',
    slug: "john-deere-go",
    title: "John Deere GO",
    date: "February 15, 2024",
    author: siteName,
    category: "Mobile App Development",
    tags: ["Mobile App", "React Native", "IoT", "Agriculture"],
    imageUrl: '/images/JD GO.jpeg',
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
    imageUrl:'/robocup/frida.jpg',
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
    imageUrl:'/tokio/tokio-general.jpg',
    imageHint: "robotics research conference",
    githubUrl: "https://github.com/example/tokyo-iros-2022",
    demoUrl: "https://demo.example.com/tokyo-iros-2022"
  }
];


// ZF Autonomous Shuttle-specific content component
function   ZFShuttleProjectContent() {
  return (
    <div className="space-y-12">
      {/* Project Overview Section */}
      <FadeIn delay="delay-300">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Car className="mr-3 h-6 w-6 text-primary" />
              ZF Autonomous Shuttle Project
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Student Autonomous Shuttle Development</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                In collaboration with ZF Group, the German company inaugurated its first research center in Mexico and sponsored a student team to develop an autonomous transport shuttle from a disused vehicle.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Objective</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Convert a disused campus shuttle into a 100% autonomous vehicle, capable of accelerating, braking, turning, and signaling safely.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Partnership</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    ZF Group's first research center in Mexico, establishing core development capabilities in Latin America.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
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
        <Card className="shadow-xl">
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
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Initial Control System Demo</h3>
                  <div className="relative overflow-hidden rounded-lg shadow-lg aspect-video mb-4">
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
                  <div className="relative overflow-hidden rounded-lg shadow-lg aspect-video mb-4">
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
        <Card className="shadow-xl">
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
                  <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Custom PCB Design</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>PWM acceleration and brake modulation via CAN Bus</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Light control (headlights, turn signals)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Horn and audio system integration</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/zf_autonomous_shuttle/placa.jpg"
                    alt="Custom PCB Design"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md object-cover"
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
                      src="/zf_autonomous_shuttle/zf-jetson.jpeg"
                      alt="Jetson Xavier Setup"
                      width={500}
                      height={375}
                      className="rounded-lg shadow-md object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <Card className="bg-gradient-to-r from-secondary/5 to-secondary/10">
                      <CardContent className="p-6">
                        <h4 className="font-bold mb-3">ROS 2 Integration</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>Jetson Xavier orchestrating perception, planning, and actuators</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>CAN AUTOSAR-like architecture</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
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
                  <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Stereo Vision & SLAM</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Carnegie Mellon stereo camera system</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>3D obstacle detection via point clouds</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Camera + LiDAR sensor fusion</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Short-range LiDAR for noise reduction</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/zf_autonomous_shuttle/pedestrian_detection.jpeg"
                    alt="Pedestrian Detection System"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/zf_autonomous_shuttle/lidar.jpeg"
                    alt="LiDAR Setup"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
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
                    src="/zf_autonomous_shuttle/longitudinal_lateral_control.jpeg"
                    alt="Longitudinal & Lateral Control"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <Card className="bg-gradient-to-r from-green-50 to-green-100">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Advanced Control Systems</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Model Predictive Control (MPC) algorithms</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Real-time state monitoring</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Industrial visualization dashboards</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
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
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Integration & Testing</CardTitle>
            <p className="text-muted-foreground">Validation and field testing process</p>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Monitor className="mr-3 h-5 w-5" />
                    Testing Infrastructure
                  </h3>
                  <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-lg shadow-lg aspect-video">
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
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Electronics test bench for firmware validation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>CAN simulation before deployment</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Car className="mr-3 h-5 w-5" />
                    Field Testing
                  </h3>
                  <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-lg shadow-lg aspect-video">
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
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Campus testing with ZF supervision</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
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
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Awards & Recognition</CardTitle>
            <p className="text-muted-foreground">Industry recognition and academic achievements</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Extended Funding */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-200 p-3 rounded-lg">
                      <Trophy className="h-6 w-6 text-green-700" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">Extended Funding</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    ZF granted additional 5-month funding after successful first presentation, recognizing the project's potential and technical excellence.
                  </p>
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src="/zf_autonomous_shuttle/10-reconocidos.jpeg"
                      alt="First Presentation to ZF"
                      width={400}
                      height={250}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* High-Level Visits */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-200 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-blue-700" />
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
                  <div className="relative overflow-hidden rounded-lg mt-4">
                    <Image
                      src="/zf_autonomous_shuttle/byd-presentacion.jpeg"
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
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">Official Presentation & Documentation</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>Live presentation to ZF deans and engineers</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>Technical manuals approved by ZF for homologation</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>Live recording and institutional coverage</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src="/zf_autonomous_shuttle/zf-80.jpeg"
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
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Social & Academic Impact</CardTitle>
            <p className="text-muted-foreground">Long-term influence and legacy</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Building className="h-6 w-6 text-purple-600 mr-3" />
                    <h4 className="font-medium text-purple-800">Institutional Reputation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Consolidated Tecnológico de Monterrey as "core development center" for ZF in Latin America.
                  </p>
                  <div className="relative overflow-hidden rounded-lg shadow-lg aspect-video mt-4">
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

              <Card className="bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Car className="h-6 w-6 text-green-600 mr-3" />
                    <h4 className="font-medium text-green-800">Investment Attraction</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Project visibility contributed to Tesla choosing Monterrey for its first Mexican Gigafactory.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/zf_autonomous_shuttle/gigaFactory.jpeg"
                      alt="Tesla Visit"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-blue-600 mr-3" />
                    <h4 className="font-medium text-blue-800">Educational Impact</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Know-how incorporated into autonomous vehicle courses taught to teachers across Mexico.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/zf_autonomous_shuttle/teach-professores.jpeg"
                      alt="Educational Impact"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full"
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
function   AIRLabProjectContent() {
  return (
    <div className="space-y-12">

      {/* About the AIRLab Stacking Challenge */}
      <FadeIn delay="delay-300">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Target className="mr-3 h-6 w-6 text-primary" />
              About the AIRLab Stacking Challenge
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Video Demonstration */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-4">Project Functionality Demonstration</h3>
              <div className="relative overflow-hidden rounded-lg aspect-video shadow-lg">
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
              <p className="text-sm text-blue-700 mt-3 italic">
                Complete demonstration of our autonomous can-stacking system from object detection to successful placement
              </p>
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Overview</h3>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-muted-foreground italic mb-4">
                  "Ahold Delhaize's AI for Retail Lab (AIRLab) and YES!Delft invited us to the Finals Event of the AIRLab Stacking Challenge. Within this challenge, we have challenged students and research teams from all over the world to share knowledge and dive deep into the tech to better understand the ground principles of robotics."
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <Card className="bg-gradient-to-br from-green-50 to-green-100">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Target className="h-6 w-6 text-green-600 mr-3" />
                      <h4 className="font-medium text-green-800">Goal</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Develop algorithms that autonomously stack products in a simulated environment and then deploy them onto the TIAGo robot in a live demo.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Building className="h-6 w-6 text-purple-600 mr-3" />
                      <h4 className="font-medium text-purple-800">Context</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Hosted by AIRLab (Ahold Delhaize / TU Delft) with support from PAL Robotics and YES!Delft.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-orange-50 to-orange-100">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Star className="h-6 w-6 text-orange-600 mr-3" />
                      <h4 className="font-medium text-orange-800">Why It Matters</h4>
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
              <h3 className="text-xl font-bold text-primary mb-4">Robotic Platform: TIAGo by PAL Robotics</h3>
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
                  <div className="relative overflow-hidden rounded-lg shadow-lg aspect-video">
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
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Modular Hardware</h5>
                    <p className="text-sm text-muted-foreground">End effector can be replaced by custom gripper if needed.</p>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Open-Source Drivers</h5>
                    <p className="text-sm text-muted-foreground">ROS nodes for camera streaming, joint controllers (using ros_control and MoveIt!).</p>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">3D Perception Capability</h5>
                    <p className="text-sm text-muted-foreground">The RGB-D head streams a 640×480 depth image at 30 fps, enabling point-cloud generation on the Jetson.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulation Environment */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Simulation Environment: Gazebo</h3>
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
                        <p className="text-xs text-muted-foreground">A mock "retail shelf" with multiple product cans—each defined as a Gazebo model with collision and visual meshes.</p>
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
              <h3 className="text-xl font-bold text-primary mb-4">System Architecture Overview</h3>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/airlab/mainengine.jpeg"
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
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Building className="mr-3 h-6 w-6 text-primary" />
              Organizers and Involved Institutions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* AIRLab */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-200 p-3 rounded-lg">
                      <Building className="h-6 w-6 text-blue-700" />
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
              <Card className="bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-200 p-3 rounded-lg">
                      <ShoppingCart className="h-6 w-6 text-green-700" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">Ahold Delhaize</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Profile:</strong> One of the world's largest food retail groups—leader in supermarkets, e-commerce, and sustainable retailing.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Relevance:</strong> Focuses on same-day delivery, in-store robotics pilot programs, and AI-driven inventory management.
                  </p>
                </CardContent>
              </Card>

              {/* TU Delft */}
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-200 p-3 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-purple-700" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">TU Delft</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Collaboration Role:</strong> Provide access to lab infrastructure (manipulators, 3D printers, sensor testbeds) and guidance on robotic research protocols.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Signature Strength:</strong> Combining fundamental robotics research with applied industry labs—helped shape the evaluation criteria for the stacking challenge.
                  </p>
                </CardContent>
              </Card>

              {/* PAL Robotics */}
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-200 p-3 rounded-lg">
                      <Bot className="h-6 w-6 text-orange-700" />
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
        <Card className="shadow-xl">
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
                <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300">
                  <CardContent className="p-6 text-center">
                    <Trophy className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                    <h4 className="font-bold text-yellow-800 mb-2">💎 Award</h4>
                    <p className="text-sm text-muted-foreground">"Most Consistent Solution" (out of 25+ international teams)</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
                  <CardContent className="p-6 text-center">
                    <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="font-bold text-blue-800 mb-2">🏅 Key Differentiator</h4>
                    <p className="text-sm text-muted-foreground">Robust error handler with retry mechanism—minimized deadlocks</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-green-50 to-green-100">
                  <CardContent className="p-6 text-center">
                    <Code className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h4 className="font-bold text-green-800 mb-2">🔤 Tech Stack</h4>
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
function   SmartFactoryProjectContent() {
  return (
    <div className="space-y-12">
      {/* Project Overview Section */}
      <FadeIn delay="delay-300">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Factory className="mr-3 h-6 w-6 text-primary" />
              Smart Factory - Industry 4.0
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Fully Automated Manufacturing Line</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Design and implementation of a completely automated manufacturing line, integrating PLCs, mobile robots, robotic arms, and cyber-physical systems at Tecnológico de Monterrey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
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
                    <div className="bg-primary/10 p-3 rounded-lg">
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
                    <div className="bg-primary/10 p-3 rounded-lg">
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
        <Card className="shadow-xl">
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
                  <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">PLCs & Discrete State Machines</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Orchestration of conveyors and automatic storage</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Robot sequence coordination</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>HMI and AVEVA-OSIsoft dashboards</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Real-time production parameter monitoring</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/smartfactory/hmi.png"
                    alt="PLC Control System"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/smartfactory/aveva.png"
                    alt="HMI Dashboard"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
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
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/smartfactory/dashgos.png"
                    alt="AGV Line Following Robot"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/smartfactory/omron.png"
                    alt="ABB Yumi Robot"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <Card className="bg-gradient-to-r from-secondary/5 to-secondary/10">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Robotic Integration</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>AGV line-following robot as initial project</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>UR, ABB Yumi, and mobile robot integration</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Pick, transport, and place operations</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>MoveIt! trajectory planning with ROS</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
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
                  <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Vision & Simulation Systems</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Industrial cameras for part inspection</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Real-time feedback to PLC systems</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Gazebo + Blender simulation environments</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Virtual reality applied to robotics</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Flow validation before physical testing</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid grid-cols-1 gap-4">
              
                  <Image
                    src="/smartfactory/tecnomatix.png"
                    alt="Digital Twin Interface"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md object-cover"
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
                    src="/smartfactory/laboratory.png"
                    alt="Cyber-Physical Systems"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <Card className="bg-gradient-to-r from-green-50 to-green-100">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">CPS Infrastructure Development</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Infrastructure for inaugural CPS course</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Pilot factory integration with Digital Twin tools</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Real-time data integration and analysis</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
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
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Awards & Recognition</CardTitle>
            <p className="text-muted-foreground">Industry recognition and academic achievements</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Industry Presentation */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-200 p-3 rounded-lg">
                      <Presentation className="h-6 w-6 text-green-700" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">Industry Presentation 2021</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Final presentation to OMRON, ABB, AVEVA, and UR executives who were impressed by the industrial-level automation achieved.
                  </p>
                  <div className="relative overflow-hidden rounded-lg">
                    <video
                      controls
                      width={400}
                      height={250}
                      className="object-cover w-full h-full"
                      poster="/smartfactory/industry-presentation.png"
                    >
                      <source src="/smartfactory/smartfactory-entrega.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </CardContent>
              </Card>

              {/* Academic Publications */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-200 p-3 rounded-lg">
                      <FileText className="h-6 w-6 text-blue-700" />
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
                    <div className="relative overflow-hidden rounded-lg">
                    <video
                      controls
                      width={400}
                      height={250}
                      className="object-cover w-full h-full"
                      poster="/smartfactory/VR Demostracion.png"
                    >
                      <source src="/smartfactory/VR Demostracion.mp4" type="video/mp4" />
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
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Special Recognition & Partnerships</CardTitle>
            <p className="text-muted-foreground">Industry and academic recognition</p>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-6">
              <div className="bg-primary/20 p-3 rounded-lg">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="ml-3 text-xl font-bold">Special Recognition & Partnerships</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5" />
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
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/smartfactory/reconocimento.jpeg"
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
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Leadership Roles</CardTitle>
            <p className="text-muted-foreground">Coordination and mentorship responsibilities</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* General Coordinator */}
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-purple-600 mr-3" />
                    <h4 className="font-medium text-purple-800">General Coordinator</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Led a team of 50 scholarship students, 70 students, and 3 teachers to design, implement, and validate the pilot factory.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/smartfactory/presentacionSM.jpeg"
                      alt="Smart Factory Team"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* CADI Instructor */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-6 w-6 text-green-600 mr-3" />
                    <h4 className="font-medium text-green-800">CADI Instructor</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Trained 20 teachers from CDMX, Toluca, Guadalajara, and Monterrey in monitoring and control with AVEVA-OSIsoft.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/smartfactory/cadi.png"
                      alt="Teacher Training"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mentor and Facilitator */}
            <Card className="mt-8 bg-gradient-to-r from-blue-50 to-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-200 p-3 rounded-lg">
                    <Wrench className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">Mentor & Facilitator</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Team Leadership</h4>
                    <p className="text-sm text-muted-foreground">
                      Guided group leaders, defined weekly objectives, and reviewed progress presentations.
                    </p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Immediate Feedback</h4>
                    <p className="text-sm text-muted-foreground">
                      Provided real-time feedback to prevent technical blockages and maintain project momentum.
                    </p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Weekend Support</h4>
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
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Social & Academic Impact</CardTitle>
            <p className="text-muted-foreground">Long-term influence and legacy</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Network className="h-6 w-6 text-purple-600 mr-3" />
                    <h4 className="font-medium text-purple-800">Knowledge Multiplier</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Created a replicable model for other campuses, strengthening the Smart Factory network in Latin America.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/smartfactory/epic-ur.png"
                      alt="Smart Factory Network"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-green-600 mr-3" />
                    <h4 className="font-medium text-green-800">Talent Formation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Empowered hundreds of students and teachers with Industry 4.0, robotics, and CPS competencies.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/smartfactory/empower.jpeg"
                      alt="Student Empowerment"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="h-6 w-6 text-blue-600 mr-3" />
                    <h4 className="font-medium text-blue-800">International Collaboration</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Positioned Tec as partner of Cyber-Physical Learning Alliance (CPL) and MIT in Digital Twin projects.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/smartfactory/mit.jpeg"
                      alt="MIT Collaboration"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Building className="h-6 w-6 text-orange-600 mr-3" />
                    <h4 className="font-medium text-orange-800">Technological Pillar</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Consolidated a pilot factory that serves as reference laboratory for global institutions and companies.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/smartfactory/cplas.jpeg"
                      alt="Reference Laboratory"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full"
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
function   RoboCupProjectContent() {
  return (
    <div className="space-y-12">
      {/* Project Overview Section */}
      <FadeIn delay="delay-300">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Home className="mr-3 h-6 w-6 text-primary" />
              RoboCup@Home Competition
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Domestic Service Robots in Real Home Environments</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Team Roborregos competing in the RoboCup@Home league, where robots must navigate and perform tasks in a realistic apartment setting with multiple rooms and dynamic environments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
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
                    <div className="bg-primary/10 p-3 rounded-lg">
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
                    <div className="bg-primary/10 p-3 rounded-lg">
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
        <Card className="shadow-xl">
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
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <video 
                  src="/robocup/frida.mp4"
                  controls
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
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
                <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3">Navigation Stack</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>ROS Navigation Stack with Gmapping for SLAM</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>SMACH for robust state machine implementation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
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
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>MediaPipe for person detection and tracking</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Advanced grasping algorithms for object manipulation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
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
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Technical Implementation</CardTitle>
            <p className="text-muted-foreground">Robust solutions for real-world challenges</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Navigation System */}
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Navigation className="h-6 w-6 text-purple-600 mr-3" />
                    <h4 className="font-medium text-purple-800">Adaptive Navigation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Implemented robust navigation system capable of handling dynamic environments, including:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Dynamic obstacle avoidance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Door handling and navigation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Real-time path planning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Object Manipulation */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Hand className="h-6 w-6 text-green-600 mr-3" />
                    <h4 className="font-medium text-green-800">Object Manipulation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Developed versatile manipulation system for various objects:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Grasping different object types</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Safe handling of fragile items</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Bimanual manipulation for complex tasks</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Human-Robot Interaction */}
            <Card className="mt-8 bg-gradient-to-r from-blue-50 to-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-200 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">Human-Robot Interaction</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Voice Commands</h4>
                    <p className="text-sm text-muted-foreground">
                      Natural language processing for understanding and executing voice commands in noisy environments.
                    </p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Person Recognition</h4>
                    <p className="text-sm text-muted-foreground">
                      Face recognition and tracking for identifying and interacting with different people in the arena.
                    </p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Task Execution</h4>
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
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Competition Impact</CardTitle>
            <p className="text-muted-foreground">Achievements and recognition</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Competition Results */}
              <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <Trophy className="h-6 w-6 text-yellow-700" />
                    <h3 className="ml-3 text-xl font-bold">3rd Place Achievement</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Successfully completed complex tasks in the dynamic RoboCup@Home environment, demonstrating:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5" />
                      <span>Robust navigation in changing environments</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5" />
                      <span>Reliable object manipulation and handling</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5" />
                      <span>Effective human-robot interaction</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Technical Recognition */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <Award className="h-6 w-6 text-blue-700" />
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
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Team Impact</CardTitle>
            <p className="text-muted-foreground">Advancing Robotics in Mexico</p>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Image
                  src="/robocup/roborregos-premiacion.jpg"
                  alt="Team Roborregos Award Ceremony"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
                <p className="text-sm text-muted-foreground">
                  Team Roborregos celebrating their achievement at the award ceremony, representing Mexico's excellence in robotics.
                </p>
              </div>
              <div className="space-y-4">
                <Image
                  src="/robocup/roborregos-veracruz.jpg"
                  alt="Team Roborregos in Veracruz"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
                <p className="text-sm text-muted-foreground">
                  The team preparing for competition in Veracruz, showcasing the collaborative effort behind Mexico's robotics advancement.
                </p>
              </div>
            </div>

            <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
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
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Developing the next generation of robotics engineers and researchers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Creating opportunities for Mexican talent to compete on the global stage</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
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

function   ZFBrakingProjectContent() {
  return (
    <div className="space-y-12">
      {/* Project Overview Section */}
      <FadeIn delay="delay-300">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Cog className="mr-3 h-6 w-6 text-primary" />
              Application Engineer - Embedded Systems & Brake Technology
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Building Safer, Smarter Braking Systems</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Leading the development of embedded systems for commercial vehicle braking, focusing on AUTOSAR-based software components and safety-critical applications.
              </p>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Key Responsibilities Section */}
      <FadeIn delay="delay-400">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Key Responsibilities</CardTitle>
            <p className="text-muted-foreground">Core duties and technical leadership</p>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
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

              <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
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

              <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
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

              <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
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
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Technical Stack</CardTitle>
            <p className="text-muted-foreground">Tools and technologies utilized</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                      <Settings className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary">Development Tools</h4>
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

              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                      <Code className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary">Programming</h4>
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

              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                      <GitBranch className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary">Version Control</h4>
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

              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary">Safety & Standards</h4>
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
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Key Achievements</CardTitle>
            <p className="text-muted-foreground">Notable contributions and improvements</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
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

              <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
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

              <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
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
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Project Impact</CardTitle>
            <p className="text-muted-foreground">Long-term influence and contributions</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Trophy className="h-6 w-6 text-purple-600 mr-3" />
                    <h4 className="font-medium text-purple-800">Technical Leadership</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Established best practices for AUTOSAR implementation and system architecture that became team standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-6 w-6 text-green-600 mr-3" />
                    <h4 className="font-medium text-green-800">Knowledge Transfer</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Created comprehensive documentation and training materials for new team members and cross-functional teams.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Star className="h-6 w-6 text-blue-600 mr-3" />
                    <h4 className="font-medium text-blue-800">Innovation</h4>
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

// Tokyo IROS 2022-specific content component
function   TokyoIROSProjectContent() {
  return (
    <div className="space-y-12">
      {/* Project Overview Section */}
      <FadeIn delay="delay-300">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Bot className="mr-3 h-6 w-6 text-primary" />
              Interactive Service Robot Competition @ IROS 2022 Tokyo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Humanoid Robot in Virtual Domestic Environment</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Team Roborregos from Tecnológico de Monterrey Campus Monterrey competing in the Home Simulation category - humanoid robot performing domestic tasks in virtual environment with voice command response.
              </p>
              <div className="mt-4">
                <Link 
                  href="https://drive.google.com/file/d/1Jor8UZXW6xFtBZmMvmZmJlUWtryMW7rQ/view?pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  View Complete Competition Rules
                </Link>
              </div>
            </div>

            {/* Competition Rules Overview */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-4">Competition Rules & Structure</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-2">HandyMan Challenge</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Navigation with obstacle avoidance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Object recognition and manipulation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Human detection and interaction</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Error detection in human instructions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Scoring System</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Room arrival: +20 points</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Object grasping: +50 points</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Task completion: +30 points</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
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
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5" />
                      <span>Collision with objects: -5 to -50 points</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5" />
                      <span>Failed task completion: -10 points</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5" />
                      <span>Object collision after release: -1 to -50 points</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Time Limits</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <Clock className="h-4 w-4 text-blue-500 mt-0.5" />
                      <span>6-10 minutes per session</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Clock className="h-4 w-4 text-blue-500 mt-0.5" />
                      <span>10-24 sessions total</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Clock className="h-4 w-4 text-blue-500 mt-0.5" />
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
                    <div className="bg-primary/10 p-3 rounded-lg">
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
                    <div className="bg-primary/10 p-3 rounded-lg">
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
                    <div className="bg-primary/10 p-3 rounded-lg">
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
        <Card className="shadow-xl">
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
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">HandyMan Challenge Demo</h3>
                  <div className="relative overflow-hidden rounded-lg shadow-lg aspect-video mb-4">
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
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Interactive Cleanup Demo</h3>
                  <div className="relative overflow-hidden rounded-lg shadow-lg aspect-video mb-4">
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
        <Card className="shadow-xl">
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
                  <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Dynamic Orchestration</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Voice command interpretation and processing</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Mission selection ("grab apple", "clean room")</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Route planning and execution</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Return to standby state after completion</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <Image
                    src="/tokio/system-comms.png"
                    alt="IROS State Machine Architecture"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
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
                    src="/tokio/tokio-path.jpg"
                    alt="ROS Navigation Stack"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  
                </div>
                <div className="space-y-6">
                  <Card className="bg-gradient-to-r from-secondary/5 to-secondary/10">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Advanced Navigation</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>ROS Navigation Stack adapted for SIGVerse</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Automatic recovery from unexpected obstacles</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Real-time evasion and replanning algorithms</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
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
                  <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Intelligent Manipulation</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>MoveIt! integrated with SIGVerse simulation</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Arm movement planning with collision avoidance</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Virtual furniture and people collision detection</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Geometry-based grasp point calculation</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Stability heuristics for object grasping</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <Image
                    src="/tokio/graspable-objects.jpg"
                    alt="MoveIt! SIGVerse Integration"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
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
                    src="/tokio/vision.png"
                    alt="Stereo Vision System"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                 
                
                </div>
                <div className="space-y-6">
                  <Card className="bg-gradient-to-r from-green-50 to-green-100">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Advanced Perception</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Simulated stereo cameras for 3D point clouds</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Mobile obstacle detection and tracking</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>2D image processing for object recognition</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Interest area recognition (apples, toys, plates)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
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
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Awards & Recognition</CardTitle>
            <p className="text-muted-foreground">IROS 2022 competition achievements and community recognition</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Competition Award */}
              <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-yellow-200 p-3 rounded-lg">
                      <Trophy className="h-6 w-6 text-yellow-700" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">3rd Place HandyMan Challenge</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Achieved 3rd place in the HandyMan Challenge at IROS 2022 (October 23-27, Kyoto), competing against top international teams.
                  </p>
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src="/tokio/thirdplace.png"
                      alt="IROS HandyMan Award Ceremony"
                      width={400}
                      height={250}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Community Recognition */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-200 p-3 rounded-lg">
                      <Award className="h-6 w-6 text-blue-700" />
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
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src="/tokio/portada.png"
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
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">IROS 2022 Highlights</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Star className="h-5 w-5 text-yellow-500 mt-0.5" />
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
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src="/tokio/premiacion-tokio.jpg"
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
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Leadership Roles</CardTitle>
            <p className="text-muted-foreground">Technical leadership and system architecture</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Navigation and Recovery Leader */}
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Navigation className="h-6 w-6 text-purple-600 mr-3" />
                    <h4 className="font-medium text-purple-800">Navigation & Recovery Leader</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Designed autonomous navigation layer and failure replanning mechanisms, ensuring mission completion without interruption.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/tokio/places.png"
                      alt="Navigation Leadership"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* ROS-SIGVerse Integration Architect */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Cog className="h-6 w-6 text-green-600 mr-3" />
                    <h4 className="font-medium text-green-800">ROS-SIGVerse Integration Architect</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Coordinated ROS node adaptation for SIGVerse virtual environment, ensuring synchrony between simulator and real control.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/tokio/aws.jpg"
                      alt="Integration Architecture"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Training and Mentorship */}
            <Card className="mt-8 bg-gradient-to-r from-blue-50 to-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-200 p-3 rounded-lg">
                    <BookOpen className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">Training & Mentorship</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">MoveIt! Best Practices</h4>
                    <p className="text-sm text-muted-foreground">
                      Trained team in advanced manipulation planning, optimization techniques, and collision avoidance strategies.
                    </p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">SIGVerse Simulation</h4>
                    <p className="text-sm text-muted-foreground">
                      Conducted comprehensive training on virtual environment setup, debugging, and performance optimization.
                    </p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Code Review & Testing</h4>
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
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Academic & Social Impact</CardTitle>
            <p className="text-muted-foreground">International recognition and educational legacy</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="h-6 w-6 text-purple-600 mr-3" />
                    <h4 className="font-medium text-purple-800">International Recognition</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Positioned Roborregos on the IROS scene and reinforced Tec de Monterrey's reputation in service robotics.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/tokio/roborregos.png"
                      alt="International Recognition"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <FileText className="h-6 w-6 text-green-600 mr-3" />
                    <h4 className="font-medium text-green-800">Reusable Resources</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Navigation packages and ROS-AWS integration scripts documented and shared for future simulation projects.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/tokio/sigverse-general.png"
                      alt="Reusable Resources"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Star className="h-6 w-6 text-blue-600 mr-3" />
                    <h4 className="font-medium text-blue-800">Inspiration & Research</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Motivated student community to explore human-robot interaction in virtual environments, driving new SLAM and VR research.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/tokio/team.jpg"
                      alt="Research Inspiration"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full"
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

// Chakri E-commerce-specific content component
function   ChakriProjectContent() {
  return (
    <div className="space-y-12">
      {/* App Store Links Section */}
      <FadeIn delay="delay-200">
        <Card className="shadow-xl bg-gradient-to-r from-primary/5 to-primary/10">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Smartphone className="mr-3 h-6 w-6 text-primary" />
              Available on App Stores
            </CardTitle>
            <p className="text-muted-foreground">Download Chakri for iOS and Android</p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center space-x-4">
                <Image
                  src="/chakri/appstore.png"
                  alt="App Store"
                  width={120}
                  height={40}
                  className="rounded-lg hover:opacity-80 transition-opacity"
                />
                <Image
                  src="/chakri/playstore.png"
                  alt="Play Store"
                  width={120}
                  height={40}
                  className="rounded-lg hover:opacity-80 transition-opacity"
                />
              </div>
              <a 
                href="https://lnk.bio/Chakriapp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Get the App
              </a>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Project Overview Section */}
      <FadeIn delay="delay-300">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <ShoppingCart className="mr-3 h-6 w-6 text-primary" />
              CHAKRI (ALTAVI S.A.S) - Fair Trade Platform
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-2">SaaS Platform Connecting Producers, Supermarkets & Consumers</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                SaaS platform that directly connects producers, supermarkets, and consumers, eliminating intermediaries and reducing logistics costs while promoting fair trade and real-time price transparency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Mission</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Eliminate intermediaries, reduce logistics costs, and promote fair trade with real-time price transparency and competitive freshness.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <ChefHat className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Innovation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Recipe plugin linking products with culinary options, improving customer experience and cross-selling opportunities.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <DollarSign className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Valuation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Technology app valued at ~$20,000 USD after first seed investment round with 300+ active users.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Technologies and Development Section */}
      <FadeIn delay="delay-400">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Technologies & Applied Developments</CardTitle>
            <p className="text-muted-foreground">Comprehensive e-commerce and logistics platform</p>
          </CardHeader>
          <CardContent className="space-y-12">
            {/* Backend Architecture and SaaS */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Cloud className="mr-3 h-6 w-6 text-primary" />
                Backend Architecture & SaaS
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Microservices Architecture</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Catalog, orders, and payments microservices</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Cloud-hosted with automatic scalability</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Intelligent routing algorithms</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Optimized collection and delivery routes by zones</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Reduced delivery times and costs (Quito zones)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/chakri/architecture.png"
                    alt="System Architecture"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg object-contain w-full max-w-[300px]"
                    priority
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Mobile Apps Overview */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Smartphone className="mr-3 h-6 w-6 text-primary" />
                Mobile Applications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-r from-secondary/5 to-secondary/10">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Users className="h-6 w-6 text-primary mr-3" />
                      <h4 className="font-bold">Client App</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Interactive catalog with recipe integration</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Real-time order tracking</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Secure payment gateway</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Building className="h-6 w-6 text-primary mr-3" />
                      <h4 className="font-bold">Vendor App</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Virtual store management</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Real-time sales analytics</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Quality standards management</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-green-50 to-green-100">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Truck className="h-6 w-6 text-primary mr-3" />
                      <h4 className="font-bold">Delivery App</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Real-time geolocation tracking</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Optimized route planning</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Delivery state management</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Impact Section */}
      <FadeIn delay="delay-500">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Social & Commercial Impact</CardTitle>
            <p className="text-muted-foreground">Transforming agricultural commerce and empowering communities</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-green-600 mr-3" />
                    <h4 className="font-medium text-green-800">Producer Empowerment</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Increased income for small farmers by connecting them directly with consumers, avoiding intermediary speculation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Award className="h-6 w-6 text-blue-600 mr-3" />
                    <h4 className="font-medium text-blue-800">Fair Trade Promotion</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Promotes clean competition and product freshness, improving supermarket perception as community ally.
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

// John Deere GO-specific content component
function   JohnDeereProjectContent() {
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
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl text-foreground flex items-center justify-center">
                <Truck className="mr-3 h-8 w-8 text-green-600" />
                John Deere Innovation Showcase
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-green-600 mb-4">Advanced Agricultural Technology Solutions</h3>
                <p className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
                  As part of <strong>John Deere Labs</strong>, I led the development of two flagship products that helped 
                  agricultural equipment management and security. These innovative solutions demonstrate the power of integrating 
                  SAP automation, cloud services, and AI technologies to streamline operations and enhance security in 
                  agricultural environments.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-700">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-600/10 p-3 rounded-lg">
                        <ShoppingCart className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="ml-3 text-lg font-bold text-green-700 dark:text-green-300">IM Reserver</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      A customer self-service web/app reservation system with fully automated checkout, 
                      eliminating cashier intervention and streamlining equipment pickup processes.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600/10 p-3 rounded-lg">
                        <Shield className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="ml-3 text-lg font-bold text-blue-700 dark:text-blue-300">ShelfGuard</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      An AI-powered security camera system that detects shelf-grab theft in real time, 
                      using computer vision to monitor unauthorized item removal.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 rounded-lg">
                <p className="text-center text-muted-foreground">
                  <strong>Key Achievement:</strong> IM Reserver leverages end-to-end SAP Automation (ABAP), Azure services, 
                  and Power Platform flows to streamline supply management across John Deere's agricultural equipment network.
                </p>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      {/* Project 1: IM Reserver */}
      <div id="im-reserver">
        <FadeIn delay="delay-300">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center">
                <ShoppingCart className="mr-3 h-6 w-6 text-green-600" />
                IM Reserver - Automated In-Store Reservation Platform
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-green-600">Revolutionary Customer Experience</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Mobile/web interface lets customers reserve equipment or parts and pick up without cashier intervention</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Real-time inventory sync via custom SAP ABAP function   modules keeps stock levels current</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Azure Functions and AWS Lambda handle backend logic, while Power Platform dashboards let the supply team approve reservations and monitor alerts</span>
                    </li>
                  </ul>
                </div>
                
                <div className="relative">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                    <video 
                      controls 
                      className="w-full h-full object-cover"
                      poster="/images/im-reserver-poster.jpg"
                    >
                      <source src="/jdgo/IM RESERVACION.mp4" type="video/mp4" />
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
                  <Settings className="mr-3 h-6 w-6 text-green-600" />
                  Key Features & Capabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="bg-secondary/5">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-3">
                        <Zap className="h-5 w-5 text-green-600 mr-2" />
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
                        <Smartphone className="h-5 w-5 text-green-600 mr-2" />
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
                        <Network className="h-5 w-5 text-green-600 mr-2" />
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
                        <Cloud className="h-5 w-5 text-green-600 mr-2" />
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
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center">
                <Shield className="mr-3 h-6 w-6 text-blue-600" />
                ShelfGuard - AI-Powered Theft Prevention
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-blue-600">Intelligent Security Solution</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Eye className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Overhead cameras detect when someone removes an item from the shelf without authorization</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Brain className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Computer vision algorithms track hand-item interactions using OpenCV/OpenVINO</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Zap className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Triggers instant alerts to store associates or locks gates automatically</span>
                    </li>
                  </ul>
                </div>
                
                <div className="relative">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                    <video 
                      controls 
                      className="w-full h-full object-cover"
                      poster="/images/shelfguard-poster.jpg"
                    >
                      <source src="/jdgo/Security Video.mp4" type="video/mp4" />
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
                  <Cpu className="mr-3 h-6 w-6 text-blue-600" />
                  Advanced AI Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-secondary/5">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-3">
                        <Eye className="h-5 w-5 text-blue-600 mr-2" />
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
                        <Network className="h-5 w-5 text-blue-600 mr-2" />
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
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center justify-center">
                <Layers className="mr-3 h-6 w-6 text-primary" />
                Technology Stack Highlight
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <div className="text-center space-y-3">
                  <div className="bg-blue-100 dark:bg-blue-900/20 p-4 rounded-lg">
                    <FileText className="h-8 w-8 text-blue-600 mx-auto" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">SAP</h4>
                    <p className="text-xs text-muted-foreground">Enterprise Integration</p>
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-lg">
                    <Cog className="h-8 w-8 text-green-600 mx-auto" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">ABAP</h4>
                    <p className="text-xs text-muted-foreground">Custom API Integration</p>
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <div className="bg-blue-100 dark:bg-blue-900/20 p-4 rounded-lg">
                    <Cloud className="h-8 w-8 text-blue-600 mx-auto" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Azure</h4>
                    <p className="text-xs text-muted-foreground">Logic Apps & Functions</p>
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <div className="bg-purple-100 dark:bg-purple-900/20 p-4 rounded-lg">
                    <Zap className="h-8 w-8 text-purple-600 mx-auto" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Power Platform</h4>
                    <p className="text-xs text-muted-foreground">Mobile Apps & Dashboards</p>
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <div className="bg-yellow-100 dark:bg-yellow-900/20 p-4 rounded-lg">
                    <Eye className="h-8 w-8 text-yellow-600 mx-auto" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">OpenCV</h4>
                    <p className="text-xs text-muted-foreground">Computer Vision</p>
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <div className="bg-red-100 dark:bg-red-900/20 p-4 rounded-lg">
                    <Brain className="h-8 w-8 text-red-600 mx-auto" />
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
function   VanttecProjectContent() {
  return (
    <div className="space-y-12">
      {/* About VANTTEC Section */}
      <FadeIn delay="delay-300">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Globe className="mr-3 h-6 w-6 text-primary" />
              About VANTTEC
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Innovation in Autonomous Vehicles</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Research group from Tec de Monterrey focused on developing autonomous aerial and marine systems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
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
                    <div className="bg-primary/10 p-3 rounded-lg">
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
                    <div className="bg-primary/10 p-3 rounded-lg">
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
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Our Vehicles</CardTitle>
            <p className="text-muted-foreground">Innovative autonomous systems competing globally</p>
          </CardHeader>
          <CardContent className="space-y-12">
            {/* Autonomous Boat */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative overflow-hidden rounded-lg shadow-lg aspect-video">
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
                <div className="grid grid-cols-2 gap-4">
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
                <div className="relative overflow-hidden rounded-lg shadow-lg aspect-video">
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
                <div className="grid grid-cols-2 gap-4">
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
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Trophy className="mr-3 h-6 w-6 text-yellow-500" />
              Competition Awards & Recognition
            </CardTitle>
            <p className="text-muted-foreground">
              Winning these international competitions was extremely challenging, competing against some of the world's most prestigious universities including MIT, Cornell, Caltech, Carnegie Mellon, and many others.
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Competition Difficulty Context */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-700">
              <div className="flex items-start space-x-4">
                <Globe className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-amber-800 dark:text-amber-200 mb-2">Global Competition</h3>
                  <p className="text-amber-700 dark:text-amber-300 text-sm mb-3">
                    These RoboNation competitions feature the world's most elite universities and research institutions, making our achievements particularly remarkable.
                  </p>
                  <div className="text-xs text-amber-600 dark:text-amber-400">
                    <strong>Competing institutions include:</strong> Massachusetts Institute of Technology (MIT), Cornell University, California Institute of Technology (Caltech), 
                    Carnegie Mellon University, University of Michigan, National University of Singapore, Istanbul Technical University, 
                    AGH University of Krakow, and many other top-tier institutions worldwide.
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* RoboBoat Awards */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-600/10 p-3 rounded-lg">
                      <Car className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200">RoboBoat Awards</h3>
                      <p className="text-sm text-blue-600 dark:text-blue-300">Autonomous Surface Vehicle Competition</p>
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <Image
                      src="/vanttec/roboboat-award.png"
                      alt="RoboBoat Competition Award"
                      width={200}
                      height={150}
                      className="rounded-lg shadow-md mx-auto"
                    />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">2021 Achievements:</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <Trophy className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">1st Place Skills Video Sensor Optimization</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Trophy className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">1st Place Skills Video Power Management</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Trophy className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">1st Place Optional Video</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Award className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">3rd Place Website</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Award className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">4th Place Technical Design Report</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Star className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">Special Award Advanced Techniques</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">2020 Achievements:</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <Trophy className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">1st Place 2020 Overall Standings</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Trophy className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">1st Place 2020 Technical Design Report</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Trophy className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">1st Place 2020 Website</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Trophy className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">1st Place 2020 Video</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Star className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">Special Award 2020 Evidence In Testing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* RoboSub Awards */}
              <Card className="bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-teal-900/20 dark:to-cyan-800/20 border-teal-200 dark:border-teal-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-teal-600/10 p-3 rounded-lg">
                      <Navigation className="h-8 w-8 text-teal-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200">RoboSub Awards</h3>
                      <p className="text-sm text-teal-600 dark:text-teal-300">Autonomous Underwater Vehicle Competition</p>
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <Image
                      src="/vanttec/robosub-award.png"
                      alt="RoboSub Competition Award"
                      width={200}
                      height={150}
                      className="rounded-lg shadow-md mx-auto"
                    />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-3">2020 Achievements:</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <Award className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">3rd Place 2020 Overall Standings</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Trophy className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">1st Place 2020 Video Submission</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Award className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">4th Place 2020 Website</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-teal-100/50 dark:bg-teal-800/20 p-4 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <Target className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium text-teal-800 dark:text-teal-200 mb-1">Outstanding Achievement</h5>
                          <p className="text-sm text-teal-700 dark:text-teal-300">
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
        <Card className="shadow-xl">
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
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Map className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Navigation</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2" />
                      <span>High-level state machine</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2" />
                      <span>Body-NED transforms for navigation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2" />
                      <span>ORBSLAM3 for underwater localization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Communication */}
              <Card className="bg-secondary/5 hover:bg-secondary/10 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Satellite className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Communication</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2" />
                      <span>XBee (RF) for vehicle-base communication</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2" />
                      <span>CAN protocols for vehicle control</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2" />
                      <span>Real-time telemetry</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Computer Vision */}
              <Card className="bg-secondary/5 hover:bg-secondary/10 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Eye className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Computer Vision</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2" />
                      <span>Stereo cameras for point clouds</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2" />
                      <span>YOLO Darknet for object detection</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2" />
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
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Achievements</CardTitle>
            <p className="text-muted-foreground">Recognition and awards</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* RoboNation Competitions */}
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">RoboNation Competitions</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary rounded-full h-4 w-4 flex items-center justify-center mt-1">
                        <div className="h-2 w-2 bg-white rounded-full" />
                      </div>
                      <div>
                        <h4 className="font-medium">1st place in RoboBoat</h4>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary rounded-full h-4 w-4 flex items-center justify-center mt-1">
                        <div className="h-2 w-2 bg-white rounded-full" />
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
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <Award className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">Other Recognition</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5" />
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
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">Social and Academic Impact</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-primary mb-2">International Collaborations</h4>
                      <div className="text-center mb-3">
                      <Image
                        src="/vanttec/swri.jpeg"
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
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-primary mb-2">Talent Formation</h4>
                    <div className="text-center mb-3">
                      <Image
                        src="/vanttec/vanttec-meeting.jpeg"
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
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-primary mb-2">Legacy</h4>
                    <div className="text-center mb-3">
                      <Image
                        src="/vanttec/vanttec-logo.jpeg"
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

// Map of slugs to their corresponding content components
const projectComponents: { [key: string]: React.ComponentType } = {
  'zf-autonomous-shuttle': ZFShuttleProjectContent,
  'airlab-stacking-challenge': AIRLabProjectContent,
  'smart-factory': SmartFactoryProjectContent,
  'robocup-competitions': RoboCupProjectContent,
  'zf-braking-systems': ZFBrakingProjectContent,
  'tokyo-iros-2022': TokyoIROSProjectContent,
  'chakri-ecommerce': ChakriProjectContent,
  'john-deere-go': JohnDeereProjectContent,
  'vanttec-roboboat-robosub': VanttecProjectContent,
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const ProjectContent = projectComponents[slug];

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <FadeIn>
        <Button variant="outline" asChild className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>
      </FadeIn>

      <FadeIn delay="delay-100">
        <article className="max-w-3xl mx-auto">
          <header className="mb-10">
            <Badge variant="outline" className="mb-3 text-primary border-primary bg-primary/10">{project.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
            <div className="flex items-center space-x-4 text-muted-foreground text-sm">
              <span className="flex items-center"><UserCircle className="mr-1.5 h-4 w-4" /> {project.author}</span>
              <span className="flex items-center"><Calendar className="mr-1.5 h-4 w-4" /> {project.date}</span>
            </div>
          </header>

          {project.imageUrl && (
            <div className="relative aspect-video rounded-lg overflow-hidden mb-10 shadow-lg">
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

            <div className="flex flex-wrap gap-4 mt-8">
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
            </div>
          </footer>
        </article>
      </FadeIn>
    </div>
  );
}
