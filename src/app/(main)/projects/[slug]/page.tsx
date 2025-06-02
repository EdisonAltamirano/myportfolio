import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Layers, Calendar, Tag, Trophy, Globe, Eye, Cpu, Satellite, Map, Award, Star, Target, Bot, Monitor, Route, Hand, Zap, FileText, CheckCircle, Car, Cog, Shield, Play, Users, Building, Factory, Settings, Brain, Network, Wrench, BookOpen, Presentation, Home, Gamepad2, Volume2, Navigation, Cloud, Headphones, ShoppingCart, Truck, DollarSign, Smartphone, ChefHat, MapPin, Bell, Server } from 'lucide-react';
import { allProjects, Project } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FadeIn } from '@/components/animations/FadeIn';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = allProjects.find((p) => p.id === params.slug);
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: `${project.title} - Edison's Lab`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.id,
  }));
}

// ZF Autonomous Shuttle-specific content component
function ZFShuttleProjectContent() {
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
function AIRLabProjectContent() {
  return (
    <div className="space-y-12">
      {/* About the Challenge Section */}
      <FadeIn delay="delay-300">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Target className="mr-3 h-6 w-6 text-primary" />
              About the Challenge
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Autonomous Product Stacking</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Organized by Ahold Delhaize's AI for Retail Lab (AIRLab) and YES!Delft, with technical support from PAL Robotics and TU Delft
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Challenge Goal</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Develop algorithms capable of autonomously stacking products in a simulated environment, deploying them on PAL Robotics' TIAGo robot.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Bot className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Robotic Platform</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    TIAGo robot by PAL Robotics with modular open-source software based on ROS.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Monitor className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="ml-3 text-lg font-medium">Simulation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Virtual environments (SIGVerse/Gazebo) to iterate stacking algorithms before hardware deployment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Solution Section */}
      <FadeIn delay="delay-400">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Our Solution</CardTitle>
            <p className="text-muted-foreground">Vision + Manipulation Approach</p>
          </CardHeader>
          <CardContent className="space-y-12">
            {/* Video Demonstration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative overflow-hidden rounded-lg shadow-lg aspect-video">
                <Image
                  src="/images/airlab-demo.jpg"
                  alt="Autonomous Stacking System Demo"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Autonomous Stacking System</h3>
                <p className="text-muted-foreground mb-6">
                  Our solution combines computer vision for object detection with advanced manipulation algorithms to reliably stack products in a retail environment.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <Eye className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">2D Image Processing</p>
                      <p className="text-sm text-muted-foreground">Can detection & localization</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Layers className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Point Cloud Generation</p>
                      <p className="text-sm text-muted-foreground">Validating grasp positions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Route className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">MoveIt! Integration</p>
                      <p className="text-sm text-muted-foreground">Arm trajectory planning</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Hand className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Grasping Algorithms</p>
                      <p className="text-sm text-muted-foreground">Force closure analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Technical Approach */}
            <div>
              <h3 className="text-xl font-bold text-center mb-8">Technical Approach</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="ml-3 text-xl font-bold">State Machine Architecture</h4>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Orchestrated the complete stacking sequence: detect → plan grasp → execute trajectory → release. The state machine ensured robust error handling and recovery procedures.
                    </p>
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src="/images/state-machine-diagram.jpg"
                        alt="State machine diagram"
                        width={400}
                        height={250}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-secondary/20 p-3 rounded-lg">
                        <Bot className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <h4 className="ml-3 text-xl font-bold">Sim-to-Real Pipeline</h4>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Developed in simulation first using Gazebo, then incrementally deployed to the physical TIAGo robot. This approach allowed rapid iteration and validation.
                    </p>
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src="/images/tiago-robot.jpg"
                        alt="TIAGo robot"
                        width={400}
                        height={250}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
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
    </div>
  );
}

// Smart Factory-specific content component
function SmartFactoryProjectContent() {
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
                    src="/images/smart-factory-plc.jpg"
                    alt="PLC Control System"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/smart-factory-hmi.jpg"
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
                    src="/images/smart-factory-agv.jpg"
                    alt="AGV Line Following Robot"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/smart-factory-ur-robot.jpg"
                    alt="UR Robot Integration"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/smart-factory-abb-yumi.jpg"
                    alt="ABB Yumi Robot"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/smart-factory-mobile-robots.jpg"
                    alt="Mobile Robot Fleet"
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
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/images/smart-factory-vision.jpg"
                    alt="Industrial Vision System"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/smart-factory-digital-twin.jpg"
                    alt="Digital Twin Interface"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/smart-factory-vr.jpg"
                    alt="Virtual Reality System"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/smart-factory-simulation.jpg"
                    alt="Simulation Environment"
                    width={300}
                    height={200}
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/images/smart-factory-cps.jpg"
                    alt="Cyber-Physical Systems"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/smart-factory-infrastructure.jpg"
                    alt="CPS Infrastructure"
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
                    <Image
                      src="/images/smart-factory-industry-presentation.jpg"
                      alt="Industry Presentation 2021"
                      width={400}
                      height={250}
                      className="object-cover w-full h-full"
                    />
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
                        alt="Southwest Research Institute (SwRI) Collaboration"
                        width={120}
                        height={60}
                        className="rounded-md mx-auto object-contain"
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
                  src="/images/smart-factory-anniversary.jpg"
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
                      src="/images/smart-factory-team.jpg"
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
                      src="/images/smart-factory-training.jpg"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                      src="/images/smart-factory-network.jpg"
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
                      src="/images/smart-factory-students.jpg"
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
                      src="/images/smart-factory-mit-collaboration.jpg"
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
                      src="/images/smart-factory-reference-lab.jpg"
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
function RoboCupProjectContent() {
  return (
    <div className="space-y-12">
      {/* Project Overview Section */}
      <FadeIn delay="delay-300">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Home className="mr-3 h-6 w-6 text-primary" />
              RoboCup Home Simulation @ Veracruz
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Domestic Service Robots in Virtual Reality</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Team Roborregos from Tecnológico de Monterrey Campus Monterrey competing in the Home Simulation category - simulated domestic service robots in virtual reality environments.
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
                    <h4 className="ml-3 text-lg font-medium">Category</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Home Simulation - domestic service robots simulated in virtual reality environments for household tasks.
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
                    3rd place in Home Simulation Challenge @ Veracruz with recognition for mission logic robustness.
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
            <p className="text-muted-foreground">Comprehensive domestic robotics implementation</p>
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
                      <h4 className="font-bold mb-3">Sequence Orchestration</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Task detection through voice commands</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Action plan generation and validation</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Task execution with real-time monitoring</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Return to standby state for next command</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/images/robocup-state-machine.jpg"
                    alt="State Machine Architecture"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/robocup-mission-logic.jpg"
                    alt="Mission Logic Flow"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Manipulation Planning */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Hand className="mr-3 h-6 w-6 text-primary" />
                Manipulation Planning
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/images/robocup-moveit.jpg"
                    alt="MoveIt! Trajectory Planning"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/robocup-grasping.jpg"
                    alt="Grasping Algorithms"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/robocup-objects.jpg"
                    alt="Household Objects"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/robocup-collision-avoidance.jpg"
                    alt="Collision Avoidance"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <Card className="bg-gradient-to-r from-secondary/5 to-secondary/10">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Advanced Manipulation</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>MoveIt! for arm trajectory generation</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Dynamic environment collision avoidance</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Quality-based grasping algorithms</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Household object manipulation (apples, utensils)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
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
                <div className="space-y-6">
                  <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Perception Systems</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Simulated stereo cameras for 3D point clouds</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>2D image processing for object identification</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Interaction zone detection and mapping</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Real-time scene understanding</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/images/robocup-stereo-vision.jpg"
                    alt="Stereo Vision System"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/robocup-point-cloud.jpg"
                    alt="3D Point Cloud Processing"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/robocup-object-detection.jpg"
                    alt="Object Detection"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/robocup-scene-understanding.jpg"
                    alt="Scene Understanding"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Simulation Environment */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Gamepad2 className="mr-3 h-6 w-6 text-primary" />
                Simulation Environment
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/images/robocup-sigverse.jpg"
                    alt="SIGVerse Environment"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/robocup-gazebo.jpg"
                    alt="Gazebo Simulation"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/robocup-human-robot.jpg"
                    alt="Human-Robot Interaction"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/robocup-domestic-scenario.jpg"
                    alt="Domestic Scenarios"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <Card className="bg-gradient-to-r from-green-50 to-green-100">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Virtual Reality Integration</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>SIGVerse + Gazebo simulation platforms</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Human-robot interaction validation</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Voice recognition and processing</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Avatar animation and interaction</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Domestic scenario simulation</span>
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
            <p className="text-muted-foreground">Competition achievements and jury recognition</p>
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
                    <h3 className="ml-3 text-xl font-bold">3rd Place @ Veracruz</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Achieved 3rd place in the Home Simulation Challenge at RoboCup @ Veracruz, competing against international teams.
                  </p>
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/robocup-award-ceremony.jpg"
                      alt="RoboCup Award Ceremony"
                      width={400}
                      height={250}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Jury Recognition */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-200 p-3 rounded-lg">
                      <Award className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">Jury Recognition</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Brain className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Mission Logic Robustness</h4>
                        <p className="text-sm text-muted-foreground">Recognized for exceptional state machine design and task orchestration</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Hand className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Grasping Precision</h4>
                        <p className="text-sm text-muted-foreground">Outstanding manipulation accuracy for household objects</p>
                      </div>
                    </div>
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
                  <h3 className="ml-3 text-xl font-bold">Competition Highlights</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Star className="h-5 w-5 text-yellow-500 mt-0.5" />
                        <span>International competition representing Mexico</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Volume2 className="h-5 w-5 text-primary mt-0.5" />
                        <span>Advanced voice command recognition and processing</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Home className="h-5 w-5 text-primary mt-0.5" />
                        <span>Complex domestic task execution in virtual environments</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/robocup-competition.jpg"
                      alt="RoboCup Competition"
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
            <p className="text-muted-foreground">Technical leadership and team coordination</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Navigation Leader */}
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Navigation className="h-6 w-6 text-purple-600 mr-3" />
                    <h4 className="font-medium text-purple-800">Principal Navigation Leader</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Designed and implemented trajectory planning strategies, obstacle recovery, and real-time localization ensuring safe and efficient robot navigation.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/images/robocup-navigation.jpg"
                      alt="Navigation System"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Technical Coordinator */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Cog className="h-6 w-6 text-green-600 mr-3" />
                    <h4 className="font-medium text-green-800">Technical Coordinator</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Guided the team in SIGVerse environment configuration and Gazebo validations, assigning tasks by specialty (vision, control, simulation).
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/images/robocup-team-coordination.jpg"
                      alt="Team Coordination"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Internal Mentor */}
            <Card className="mt-8 bg-gradient-to-r from-blue-50 to-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-200 p-3 rounded-lg">
                    <BookOpen className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">Internal Mentor</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">ROS Training</h4>
                    <p className="text-sm text-muted-foreground">
                      Conducted comprehensive training sessions on ROS architecture, node communication, and best practices.
                    </p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">MoveIt! Expertise</h4>
                    <p className="text-sm text-muted-foreground">
                      Taught advanced manipulation planning, trajectory optimization, and collision avoidance techniques.
                    </p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Simulation Best Practices</h4>
                    <p className="text-sm text-muted-foreground">
                      Shared expertise in simulation environments, debugging techniques, and performance optimization.
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
            <p className="text-muted-foreground">Long-term influence and educational legacy</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Trophy className="h-6 w-6 text-purple-600 mr-3" />
                    <h4 className="font-medium text-purple-800">Team Profile Elevation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Elevated Roborregos' profile as a reference in service robotics in Mexico, establishing national recognition.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/images/robocup-team-profile.jpg"
                      alt="Team Profile"
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
                    <BookOpen className="h-6 w-6 text-green-600 mr-3" />
                    <h4 className="font-medium text-green-800">Reusable Educational Material</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Navigation scripts and tutorials were incorporated into robotics courses across multiple campuses.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/images/robocup-educational-material.jpg"
                      alt="Educational Materials"
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
                    <h4 className="font-medium text-blue-800">Local Inspiration</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Motivated new students to participate in RoboCup and explore domestic robotics applications.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/images/robocup-student-inspiration.jpg"
                      alt="Student Inspiration"
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

// Tokyo IROS 2022-specific content component
function TokyoIROSProjectContent() {
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
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/images/iros-state-machine.jpg"
                    alt="IROS State Machine Architecture"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/iros-voice-commands.jpg"
                    alt="Voice Command Processing"
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
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/images/iros-navigation-stack.jpg"
                    alt="ROS Navigation Stack"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/iros-sigverse-nav.jpg"
                    alt="SIGVerse Navigation"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/iros-path-planning.jpg"
                    alt="Path Planning Algorithms"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/iros-obstacle-avoidance.jpg"
                    alt="Obstacle Avoidance"
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
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/images/iros-moveit-integration.jpg"
                    alt="MoveIt! SIGVerse Integration"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/iros-grasping-algorithms.jpg"
                    alt="Grasping Algorithms"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/iros-collision-detection.jpg"
                    alt="Collision Detection"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/iros-object-manipulation.jpg"
                    alt="Object Manipulation"
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
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/images/iros-stereo-cameras.jpg"
                    alt="Simulated Stereo Cameras"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/iros-point-clouds.jpg"
                    alt="3D Point Cloud Generation"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/iros-object-recognition.jpg"
                    alt="Object Recognition"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/iros-yolo-detection.jpg"
                    alt="YOLO-based Detection"
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

            {/* Deployment Infrastructure */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Cloud className="mr-3 h-6 w-6 text-primary" />
                Deployment Infrastructure
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <Card className="bg-gradient-to-r from-purple-50 to-purple-100">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Cloud Integration</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Code deployed on AWS for continuous integration</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Cloud-based logs and performance metrics</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Automated testing and validation pipelines</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Real-time monitoring and debugging</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/images/iros-aws-deployment.jpg"
                    alt="AWS Deployment"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/iros-cloud-metrics.jpg"
                    alt="Cloud Performance Metrics"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
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
                      src="/images/iros-handyman-award.jpg"
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
                      src="/images/iros-2022-kyoto.jpg"
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
                      src="/images/iros-navigation-leader.jpg"
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
                      src="/images/iros-integration-architect.jpg"
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
                      src="/images/iros-international-recognition.jpg"
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
                      src="/images/iros-reusable-resources.jpg"
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
                      src="/images/iros-research-inspiration.jpg"
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
function ChakriProjectContent() {
  return (
    <div className="space-y-12">
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
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/images/chakri-microservices.jpg"
                    alt="Microservices Architecture"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/chakri-cloud-infrastructure.jpg"
                    alt="Cloud Infrastructure"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/chakri-routing-algorithms.jpg"
                    alt="Intelligent Routing"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/chakri-zone-optimization.jpg"
                    alt="Zone Optimization"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Client App */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Smartphone className="mr-3 h-6 w-6 text-primary" />
                Client App
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/images/chakri-client-catalog.jpg"
                    alt="Interactive Catalog"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/chakri-recipe-plugin.jpg"
                    alt="Recipe Plugin Integration"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/chakri-order-tracking.jpg"
                    alt="Real-time Order Tracking"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/chakri-payment-gateway.jpg"
                    alt="Secure Payment Gateway"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <Card className="bg-gradient-to-r from-secondary/5 to-secondary/10">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Customer Experience</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Interactive catalog with price, supplier, and recipe filters</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Chakri Recipes plugin integration</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Influencer recipes with automatic purchase links</span>
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
                </div>
              </div>
            </div>

            <Separator />

            {/* Vendor App */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Building className="mr-3 h-6 w-6 text-primary" />
                Vendor App
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Chakri Vendor Management</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Virtual store management (inventory, dynamic pricing)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Real-time sales analytics and monitoring</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Supplier registration and evaluation</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Quality standards and authenticity guarantee</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/images/chakri-vendor-dashboard.jpg"
                    alt="Vendor Dashboard"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/chakri-inventory-management.jpg"
                    alt="Inventory Management"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/chakri-sales-analytics.jpg"
                    alt="Sales Analytics"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/chakri-supplier-evaluation.jpg"
                    alt="Supplier Evaluation"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Delivery App */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Truck className="mr-3 h-6 w-6 text-primary" />
                Delivery App
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/images/chakri-delivery-panel.jpg"
                    alt="Mobile Delivery Panel"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/chakri-geolocation.jpg"
                    alt="Real-time Geolocation"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/chakri-optimized-routes.jpg"
                    alt="Optimized Routes"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <Image
                    src="/images/chakri-delivery-management.jpg"
                    alt="Delivery State Management"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <Card className="bg-gradient-to-r from-green-50 to-green-100">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Delivery Operations</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Mobile panel for delivery drivers</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Real-time geolocation tracking</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Optimized routes and automatic zone-based pricing</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Delivery state management and incident reporting</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Direct app-based incident management</span>
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

      {/* Achievements and Recognition Section */}
      <FadeIn delay="delay-500">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Achievements & Recognition</CardTitle>
            <p className="text-muted-foreground">Business success and market traction</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Product Valuation */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-200 p-3 rounded-lg">
                      <DollarSign className="h-6 w-6 text-green-700" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">Product Valuation</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Technology app valued at approximately $20,000 USD after the first seed investment round.
                  </p>
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/chakri-investment-round.jpg"
                      alt="Seed Investment Round"
                      width={400}
                      height={250}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Initial Traction */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-200 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">Initial Traction</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">300+ Active Users</h4>
                        <p className="text-sm text-muted-foreground">Growing user base on iOS and Android platforms</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ShoppingCart className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">6,000 Products in Catalog</h4>
                        <p className="text-sm text-muted-foreground">Comprehensive product offering across categories</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Revenue Model */}
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-200 p-3 rounded-lg">
                      <Trophy className="h-6 w-6 text-purple-700" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold">Revenue Model</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <DollarSign className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">15% Service Commission</h4>
                        <p className="text-sm text-muted-foreground">Plus dynamic transport fees</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">$60,000 USD Monthly Projection</h4>
                        <p className="text-sm text-muted-foreground">At large scale operations</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Leadership Roles Section */}
      <FadeIn delay="delay-600">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Leadership Roles</CardTitle>
            <p className="text-muted-foreground">Executive leadership and strategic direction</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CTO and Co-founder */}
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Cpu className="h-6 w-6 text-purple-600 mr-3" />
                    <h4 className="font-medium text-purple-800">CTO & Co-founder of ALTAVI S.A.S</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Led technical architecture definition and coordinated a multidisciplinary team for platform development and scaling.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/images/chakri-cto-leadership.jpg"
                      alt="CTO Leadership"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Product Direction */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-green-600 mr-3" />
                    <h4 className="font-medium text-green-800">Product Direction</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Established roadmap, prioritized features for client, vendor, and delivery apps, and managed continuous integration processes.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/images/chakri-product-roadmap.jpg"
                      alt="Product Roadmap"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Strategic Partnerships */}
            <Card className="mt-8 bg-gradient-to-r from-blue-50 to-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-200 p-3 rounded-lg">
                    <Network className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold">Strategic Partnerships</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Producer Partnerships</h4>
                    <p className="text-sm text-muted-foreground">
                      Negotiated with producers to ensure direct supply chain connections and fair pricing models.
                    </p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Supermarket Alliances</h4>
                    <p className="text-sm text-muted-foreground">
                      Established partnerships with supermarkets to drive adoption and success of fair trade model.
                    </p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Influencer Collaborations</h4>
                    <p className="text-sm text-muted-foreground">
                      Negotiated with influencers for recipe content creation and platform promotion strategies.
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
                  <div className="mt-4">
                    <Image
                      src="/images/chakri-producer-empowerment.jpg"
                      alt="Producer Empowerment"
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
                    <Award className="h-6 w-6 text-blue-600 mr-3" />
                    <h4 className="font-medium text-blue-800">Fair Trade Promotion</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Promotes clean competition and product freshness, improving supermarket perception as community ally.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/images/chakri-fair-trade.jpg"
                      alt="Fair Trade Impact"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-6 w-6 text-purple-600 mr-3" />
                    <h4 className="font-medium text-purple-800">Creator Revenue</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Recipe plugin has enabled influencers to generate up to $1,000 USD monthly from shared content.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/images/chakri-creator-revenue.jpg"
                      alt="Creator Revenue"
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
                    <Truck className="h-6 w-6 text-orange-600 mr-3" />
                    <h4 className="font-medium text-orange-800">Logistics Optimization</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Routing algorithms reduced delivery times and operational costs, strengthening last-mile efficiency.
                  </p>
                  <div className="mt-4">
                    <Image
                      src="/images/chakri-logistics-optimization.jpg"
                      alt="Logistics Optimization"
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

// John Deere GO-specific content component
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
                      <span>Real-time inventory sync via custom SAP ABAP function modules keeps stock levels current</span>
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
function VanttecProjectContent() {
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

export default function ProjectDetailsPage({ params }: Props) {
  const project = allProjects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  const isVanttecProject = project.id === 'vanttec-roboboat-robosub';
  const isAIRLabProject = project.id === 'airlab-stacking-challenge';
  const isZFShuttleProject = project.id === 'zf-autonomous-shuttle';
  const isSmartFactoryProject = project.id === 'smart-factory';
  const isRoboCupProject = project.id === 'robocup-competitions';
  const isTokyoIROSProject = project.id === 'tokyo-iros-2022';
  const isChakriProject = project.id === 'chakri-ecommerce';
  const isJohnDeereProject = project.id === 'john-deere-go';

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
        <article>
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">{project.title}</h1>
            <div className="flex items-center space-x-4 text-muted-foreground text-sm">
              <span className="flex items-center"><Layers className="mr-1.5 h-4 w-4" /> {project.category}</span>
              <span className="flex items-center"><Calendar className="mr-1.5 h-4 w-4" /> {project.company}</span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden shadow-xl mb-8">
                <div className="aspect-video relative">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    data-ai-hint={project.imageHint}
                    width={1200}
                    height={675}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
              
              {isVanttecProject ? (
                <VanttecProjectContent />
              ) : isAIRLabProject ? (
                <AIRLabProjectContent />
              ) : isZFShuttleProject ? (
                <ZFShuttleProjectContent />
              ) : isSmartFactoryProject ? (
                <SmartFactoryProjectContent />
              ) : isRoboCupProject ? (
                <RoboCupProjectContent />
              ) : isTokyoIROSProject ? (
                <TokyoIROSProjectContent />
              ) : isChakriProject ? (
                <ChakriProjectContent />
              ) : isJohnDeereProject ? (
                <JohnDeereProjectContent />
              ) : (
                <FadeIn delay="delay-300">
                  <Card className="shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-2xl text-foreground">Project Highlights</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-lg dark:prose-invert max-w-none">
                      {/* Placeholder content for other projects */}
                      <p>Detailed information about the project, its challenges, my role, and outcomes would go here. This could include:</p>
                      <ul>
                        <li>Specific technologies used beyond the tags.</li>
                        <li>Key features and functionalities implemented.</li>
                        <li>Problems solved and innovative solutions developed.</li>
                        <li>Impact of the project.</li>
                      </ul>
                      <p>For the <strong>{project.title}</strong>, a significant aspect was {project.tags.length > 0 ? `its focus on ${project.tags[0].toLowerCase()}` : 'its innovative approach'}. The work done at {project.company} was crucial for its success.</p>
                    </CardContent>
                  </Card>
                </FadeIn>
              )}

            </div>

            <aside className="lg:col-span-1 space-y-6">
              <FadeIn delay="delay-200">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Project Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium text-muted-foreground">Category:</span>
                      <span className="text-foreground">{project.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-muted-foreground">Organization:</span>
                      <span className="text-foreground">{project.company}</span>
                    </div>
                    {/* Add more relevant info like date, client, etc. */}
                  </CardContent>
                </Card>
              </FadeIn>
              <FadeIn delay="delay-300">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center"><Tag className="mr-2 h-5 w-5 text-primary"/> Technologies</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/10 text-secondary-foreground hover:bg-secondary/20">{tag}</Badge>
                    ))}
                  </CardContent>
                </Card>
              </FadeIn>
            </aside>
          </div>
        </article>
      </FadeIn>
    </div>
  );
}
