import { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Research & Publications",
  description: "Explore our research work, publications, and presentations in robotics, education, and industry 4.0.",
};

export default function ResearchPage() {
  return (
    <FadeIn>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">List of Publications & Presentations</h1>
        
        {/* Publications Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Publications</h2>
          <div className="space-y-6">
            <div className="prose max-w-none">
              <p className="mb-4">
                Altamirano-Avila, E., Ahmad, R., & Rodriguez-Padilla, C. (2022). A Digital Twin Implementation for Mobile and Collaborative Robot Scenarios for Teaching Robotics Based on Robot Operating System. IEEE EDUCON, 1-6.{" "}
                <a href="https://doi.org/10.1109/EDUCON52537.2022.9766583" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  [View Publication]
                </a>
              </p>
              <p className="mb-4">
                Rodriguez-Padilla, C., Ahmad, R., & Altamirano-Avila, E. (2023). Visual Navigation Algorithms for Mobile Manipulators in Service Shops. In International Conference on Robotics and Automation, 1-8.{" "}
                <a href="https://doi.org/10.1007/978-3-031-47640-2_19" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  [View Publication]
                </a>
              </p>
              <p className="mb-4">
                Vázquez-Hurtado, C., Altamirano-Avila, E., & Ahmad, R. (2023). Towards a Mixed Virtual Reality Environment Implementation to Enable Industrial Robot Programming Competencies within a Cyber-Physical Factory. IEEE EDUCON, 1-6.{" "}
                <a href="https://doi.org/10.1109/EDUCON54358.2023.10125175" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  [View Publication]
                </a>
              </p>
              <p className="mb-4">
                Vázquez-Hurtado, C., Altamirano-Avila, E., Rodriguez-Padilla, C., Ahmad, R., Quiñones, J. I. G., Rodriguez-Delgado, J. M., & Flores-Ramírez, A. (2024). Virtual Twin for the Smart Factory as a Tool to Enable Robotics Skills Acquisition. In International Conference on Learning Factories, 113-120.{" "}
                <a href="https://doi.org/10.1007/978-3-031-65411-4_14" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  [View Publication]
                </a>
              </p>
              <p className="mb-4">
                VANTTEC Team. (2022). RoboSub 2022, 2021 and 2020: Comprehensive Papers on the Development, Challenges, and Innovations in Autonomous Submarine Design and Operation. RoboNation Technical Design Report.{" "}
                <a href="https://robonation.org/app/uploads/sites/4/2022/07/RS2022_VantTec_ITESM_TDR.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  [View Publication]
                </a>
              </p>
              <p className="mb-4">
                VANTTEC Team. (2022). RoboBoat 2022, 2021, 2020 and 2019: Detailed Papers on the Engineering, Design, and Performance of Autonomous Surface Vehicles. RoboNation Technical Design Report.{" "}
                <a href="https://robonation.org/app/uploads/sites/3/2022/05/RB_2022_Vanttec_TecDeMonterrey_TDR.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  [View Publication]
                </a>
              </p>
              <p className="mb-4">
                Altamirano-Avila, E., Ahmad, R., & Rodriguez-Padilla, C. (2022). Work in Progress: Implementation of a Digital Twin as Technology to Support Discrete Event Control Teaching. IEEE EDUNINE, 1-6.{" "}
                <a href="https://doi.org/10.1109/EDUNINE53672.2022.9782154" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  [View Publication]
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Presentations Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Presentations</h2>
            {/* 2025 Presentations */}
            <div className="mb-8">
            <h3 className="text-2xl font-medium mb-4">2025</h3>
            <div className="prose max-w-none">
            <p className="mb-4">
                Intensive 20-hour Course on Robotics and Autonomous Vehicles - Teaching 30 professors from various Tecnológico de Monterrey campuses on ROS1/ROS2, control systems, advanced perception algorithms, and ADAS simulations with Gazebo and CARLA{" "}
                <a href="https://www.linkedin.com/posts/edison-altamirano-avila-55a0341a3_robotics-autonomousvehicles-innovation-activity-7296053708478435329-iOwt" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  [View Post]
                </a>
              </p>
            </div>
          </div>
          {/* 2024 Presentations */}
          <div className="mb-8">
            <h3 className="text-2xl font-medium mb-4">2024</h3>
            <div className="prose max-w-none">
        
              <p className="mb-4">
                5th anniversary of the SMART FACTORY in Tec De Monterrey - "Roadmap the the SmartFactory: paving the way for intelligent manufacturing and advanced robotics"{" "}
                <a href="https://www.linkedin.com/posts/edison-altamirano-avila-55a0341a3_innovation-smartfactory-industry4-activity-7245875486931697664-V3Lk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  [View Presentation Recording]
                </a>
              </p>
              <p className="mb-4">
                IALF (International Association of Learning Factories) in University of Twente, The Netherlands - "Virtual Twin for the Smart Factory as a Tool to Enable Robotics Skills Acquisition"{" "}
                <a href="https://ialf-online.net/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  [View Conference Website]
                </a>
              </p>
              <p className="mb-4">
                Cyber-Physical Learning Alliance Summit (CPLAS 2024) - "Towards a Mixed Virtual Reality Environment Implementation to Enable Industrial Robot Programming Competencies within a Cyber-Physical Factory"{" "}
                <a href="https://ciie.itesm.mx/en/cplas-2024/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  [View Conference Website]
                </a>
              </p>
            </div>
          </div>

          {/* 2023 Presentations */}
          <div className="mb-8">
            <h3 className="text-2xl font-medium mb-4">2023</h3>
            <div className="prose max-w-none">
              <p className="mb-4">
                VANTEC Self-Driving Car Showcase Event (September 2023) - First official demonstration presentation of fully autonomous capabilities of VANTTEC's SDV to company executives, academics, and school directives{" "}
                <a href="https://drive.google.com/file/d/1tOrO6Brp6VLg6hqPitjMkOtYIW-htkGg/view" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  [View Presentation Recording]
                </a>
              </p>
            </div>
          </div>

          {/* 2022 Presentations */}
          <div>
            <h3 className="text-2xl font-medium mb-4">2022</h3>
            <div className="prose max-w-none">
            <p className="mb-4">
                AVEVA OSIsoft Training - Teaching 11+ professors on industrial data management using AVEVA PI System, covering real-time data collection, visualization, and analysis for industrial operations{" "}
                <a href="/smartfactory/cadi.png" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  [View Training Image]
                </a>
              </p>
              <p className="mb-4">
                RoboSub 2022 - "Presentation of VANTTEC UUV-IV Prototype"{" "}
              </p>
            </div>
          </div>
        </section>
      </div>
    </FadeIn>
  );
}
