import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import project images
import p1_1 from "../assets/project1.png";
import p1_2 from "../assets/project1.2.png";
import p1_3 from "../assets/project1.3.png";
import p2_1 from "../assets/project2.png";
import p2_2 from "../assets/project2.2.png";
import p2_3 from "../assets/project2.3.png";
import p3_1 from "../assets/project3.png";
import p3_2 from "../assets/project3.2.png";
import p3_3 from "../assets/project3.3.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "CLIENT",
    desc: "Beautiful.gym Creations",
    images: [p1_1, p1_2, p1_3],
  },
  {
    id: "02",
    title: "CLIENT",
    desc: "",
    images: [p2_1, p2_2, p2_3],
  },
  {
    id: "03",
    title: "CLIENT",
    desc: "Beautiful.gym Creations",
    images: [p3_1, p3_2, p3_3],
  },
];

const ProjectCard = ({ project, index, cardRef }) => {
  const headerHeight = 140; // Height to show for stacked headers - increased for full visibility

  return (
    <div
      ref={cardRef}
      className="project-card sticky w-full"
      style={{
        top: `${headerHeight * index}px`, // Stack with header height offset
        zIndex: index + 1, // Later cards have higher z-index, so they appear on top
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-6 mb-8">
        {/* Unified Card - Header + Body together */}
        <div className="bg-black border-2 border-white rounded-3xl overflow-hidden">
          {/* Header Section */}
          <div
            className="p-8 md:p-10 border-b-2 border-white"
            style={{ minHeight: `${headerHeight}px` }}
          >
            <div className="flex items-center justify-between">
              {/* Left: Project Number + Info */}
              <div className="flex items-center gap-6">
                <span className="text-5xl md:text-7xl font-extrabold text-white">
                  {project.id}
                </span>
                <div className="flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  {project.desc && (
                    <p className="text-sm md:text-base text-gray-400">
                      {project.desc}
                    </p>
                  )}
                </div>
              </div>

              {/* Right: Live Project Button */}
              <button className="px-6 py-3 border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-black transition-all duration-300">
                LIVE PROJECT
              </button>
            </div>
          </div>

          {/* Bento Image Layout */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Large Image - Left */}
              <div className="md:col-span-2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={`${project.title} Main`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Two Small Images - Right Column */}
              <div className="flex flex-col gap-4">
                <div className="h-[145px] md:h-[192px] rounded-2xl overflow-hidden">
                  <img
                    src={project.images[1]}
                    alt={`${project.title} Detail 1`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="h-[145px] md:h-[192px] rounded-2xl overflow-hidden">
                  <img
                    src={project.images[2]}
                    alt={`${project.title} Detail 2`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Animate Title from Stroke to Solid
    gsap.fromTo(
      titleRef.current,
      {
        color: "transparent",
        webkitTextStroke: "1px white",
      },
      {
        color: "white",
        webkitTextStroke: "0px transparent",
        duration: 1.5,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="relative bg-black text-white py-20">
      {/* Section Title */}
      <div className="container mx-auto px-4 pb-20">
        <h2
          ref={titleRef}
          className="text-5xl md:text-8xl font-black text-center tracking-tighter"
        >
          PROJECTS
        </h2>
      </div>

      {/* Stacking Cards Container */}
      <div className="relative">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            cardRef={(el) => (cardRefs.current[index] = el)}
          />
        ))}
      </div>

      {/* Spacer for scroll */}
      <div className="h-[50vh]"></div>
    </section>
  );
};

export default Projects;
