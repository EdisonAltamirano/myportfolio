
"use client";

import { Briefcase, CalendarDays, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/FadeIn";

interface TimelineItemProps {
  title: string;
  period: string;
  description: string;
  details?: string;
  isLeft?: boolean;
  icon?: React.ElementType;
}

const experienceData: Omit<TimelineItemProps, 'isLeft'>[] = [
  {
    title: "Robotics Beginnings",
    period: "2015-2017",
    description: "Joined robotics team \"LIONS\" and won regional Robocup competition. Developed skills in computer vision and electronics for maze-solving robots.",
    details: "Also served as teaching assistant for mobile app programming courses.",
    icon: Zap,
  },
  {
    title: "Smart Factory",
    period: "2017-2019",
    description: "Developed AGV line-following robots and integrated them with PLCs. Created visual interfaces for robot monitoring. Taught ROS to professors.",
    details: "This work led to my first job as Robotics Assistant.",
    icon: Briefcase, // Placeholder, consider more specific icon
  },
  {
    title: "VANTTEC",
    period: "2019-2021",
    description: "Led software development for autonomous boats and submarines. Implemented state machines, computer vision, and radio communication systems.",
    details: "Won 1st place in RoboBoat and 3rd in RoboSub competitions.",
    icon: Zap, // Placeholder
  },
  {
    title: "Autonomous Car Project",
    period: "2021-2022",
    description: "Led software development for Mexico's first student-built autonomous car sponsored by ZF. Developed CAN bus control systems and visual SLAM.",
    details: "Presented to Tesla executives before their Gigafactory announcement.",
    icon: Briefcase, // Placeholder
  },
  {
    title: "Current Work - Next-Gen Axle Modulators",
    period: "2022-Present",
    description: "Developing next-gen axle modulators for braking systems. Working on mathematical modeling, embedded software, and reverse engineering commercial systems.",
    details: "Project valued at millions of dollars based on financial projections.",
    icon: Zap, // Placeholder
  },
];

function TimelineItem({ title, period, description, details, isLeft, icon: Icon }: TimelineItemProps) {
  return (
    <div className={`relative flex md:w-full ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} items-start mb-8 md:mb-16`}>
      {/* Content Card */}
      <FadeIn className="w-full md:w-5/12" delay={isLeft ? "delay-200" : "delay-100"}>
        <Card className="shadow-xl bg-card hover:shadow-2xl transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center mb-2">
              {Icon && <Icon className="h-6 w-6 text-primary mr-3" />}
              <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
            </div>
            <p className="text-sm text-primary font-medium flex items-center">
              <CalendarDays className="h-4 w-4 mr-1.5" />
              {period}
            </p>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2 text-sm">{description}</p>
            {details && <p className="text-xs text-muted-foreground/80 italic">{details}</p>}
          </CardContent>
        </Card>
      </FadeIn>

      {/* Timeline Dot - Desktop */}
      <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent border-4 border-background shadow-lg"
           style={isLeft ? { right: 'calc(50% - 20px)' } : { left: 'calc(50% - 20px)' }}>
        {Icon && <Icon className="h-5 w-5 text-primary-foreground" />}
      </div>
      
      {/* Spacer for desktop layout */}
      <div className="hidden md:block md:w-1/12"></div>
      <div className="hidden md:block md:w-5/12"></div>
    </div>
  );
}


export function ExperienceTimeline() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            My Professional Journey
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Central Timeline Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 transform -translate-x-1/2"></div>
          
          {/* Timeline Line - Mobile (left aligned) */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50"></div>


          {experienceData.map((item, index) => (
            <div key={index} className="relative md:block">
              {/* Mobile timeline dot */}
              <div className="md:hidden absolute left-[16px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background mt-1"></div>
              <div className="md:hidden pl-12 pb-8">
                 <FadeIn className="w-full" delay={`delay-${index * 100}`}>
                    <Card className="shadow-lg bg-card">
                      <CardHeader>
                        <div className="flex items-center mb-1">
                          {item.icon && <item.icon className="h-5 w-5 text-primary mr-2" />}
                          <CardTitle className="text-lg font-semibold text-foreground">{item.title}</CardTitle>
                        </div>
                        <p className="text-xs text-primary font-medium flex items-center">
                          <CalendarDays className="h-3 w-3 mr-1" />
                          {item.period}
                        </p>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground text-sm mb-1">{item.description}</p>
                        {item.details && <p className="text-xs text-muted-foreground/80 italic">{item.details}</p>}
                      </CardContent>
                    </Card>
                  </FadeIn>
              </div>
              {/* Desktop timeline item */}
              <div className="hidden md:block">
                <TimelineItem {...item} isLeft={index % 2 !== 0} icon={item.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
