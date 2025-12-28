import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project, index, cardRef }) => {
  const headerHeight = 140;
  const mobileHeaderHeight = 100;

  return (
    <div
      ref={cardRef}
      className="project-card sticky w-full will-change-transform"
      style={{
        top: `${
          window.innerWidth < 768
            ? mobileHeaderHeight * index
            : headerHeight * index
        }px`,
        zIndex: index + 1,
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 mb-6 md:mb-8">
        <div className="bg-black border border-white/20 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl hover:border-white/40 transition-colors duration-500">
          {/* Header Link to Details */}
          <Link to={`/project/${index + 1}`} className="block">
            <div
              className="p-4 md:p-8 lg:p-10 border-b border-white/10 glass-effect bg-black/50 backdrop-blur-md"
              style={{
                minHeight: `${
                  window.innerWidth < 768 ? mobileHeaderHeight : headerHeight
                }px`,
              }}
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3 md:gap-6">
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white/90">
                    {project.id}
                  </span>
                  <div className="flex flex-col">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.shortDesc && (
                      <p className="text-xs sm:text-sm md:text-base text-gray-400">
                        {project.shortDesc}
                      </p>
                    )}
                  </div>
                </div>

                <div className="px-4 py-2 md:px-6 md:py-3 border border-white/30 rounded-full text-white text-sm md:text-base font-semibold hover:bg-white hover:text-black transition-all duration-300">
                  VIEW DETAILS
                </div>
              </div>
            </div>
          </Link>

          {/* Bento Image Layout */}
          <div className="p-4 md:p-6 lg:p-8 bg-black">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              <div className="md:col-span-2 h-[250px] sm:h-[300px] md:h-[400px] rounded-xl md:rounded-2xl overflow-hidden relative group">
                <img
                  src={project.images[0]}
                  alt={`${project.title} Main`}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="flex flex-row md:flex-col gap-3 md:gap-4">
                <div className="flex-1 h-[120px] sm:h-[145px] md:h-[192px] rounded-xl md:rounded-2xl overflow-hidden relative group">
                  <img
                    src={project.images[1]}
                    alt={`${project.title} Detail 1`}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="flex-1 h-[120px] sm:h-[145px] md:h-[192px] rounded-xl md:rounded-2xl overflow-hidden relative group">
                  <img
                    src={project.images[2]}
                    alt={`${project.title} Detail 2`}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
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
    // Animate Title
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
      <div className="container mx-auto px-4 pb-20">
        <h2
          ref={titleRef}
          className="text-5xl md:text-8xl font-black text-center tracking-tighter"
        >
          PROJECTS
        </h2>
      </div>

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

      <div className="h-[20vh]"></div>
    </section>
  );
};

export default Projects;
