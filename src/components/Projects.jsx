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
    title: "E-Commerce Platform",
    desc: "A full-featured online store with seamless checkout.",
    images: [p1_1, p1_2, p1_3],
  },
  {
    id: "02",
    title: "Portfolio Website",
    desc: "A creative portfolio showcasing design and development skills.",
    images: [p2_1, p2_2, p2_3],
  },
  {
    id: "03",
    title: "SaaS Dashboard",
    desc: "An intuitive dashboard for managing business analytics.",
    images: [p3_1, p3_2, p3_3],
  },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    // Pin the card when it reaches its designated position
    ScrollTrigger.create({
      trigger: card,
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
    });
  }, []);

  // Calculate the top position for this card's sticky header
  // Each header is approximately 160px tall (adjust based on content)
  const headerHeight = 160;
  const topPosition = index * headerHeight;

  return (
    <div
      ref={cardRef}
      className="project-card relative"
      style={{
        minHeight: "100vh",
        paddingTop: topPosition > 0 ? `${topPosition}px` : "0",
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Header - Sticky positioned to stack */}
        <div
          className="bg-black border-2 border-white rounded-t-3xl p-6 md:p-8 sticky z-50"
          style={{
            top: `${topPosition}px`,
            zIndex: 100 - index,
          }}
        >
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left: Project Number */}
            <div className="flex-shrink-0">
              <span className="text-5xl md:text-6xl font-extrabold text-white">
                {project.id}
              </span>
            </div>

            {/* Right: Title + Description */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-base md:text-lg text-gray-300">
                {project.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Bento Image Layout - Scrolls under next card */}
        <div className="bg-black border-2 border-white border-t-0 rounded-b-3xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Large Image - Left (Fixed size) */}
            <div className="md:col-span-2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
              <img
                src={project.images[0]}
                alt={`${project.title} Main`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Two Small Images - Right Column (Fixed sizes) */}
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
  );
};

const Projects = () => {
  const titleRef = useRef(null);

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
    <section className="relative bg-black text-white">
      {/* Section Title */}
      <div className="container mx-auto px-4 py-20">
        <h2
          ref={titleRef}
          className="text-5xl md:text-8xl font-black text-center mb-16 tracking-tighter"
        >
          PROJECTS
        </h2>
      </div>

      {/* Stacking Cards */}
      <div className="relative">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Spacer at the end */}
      <div className="h-screen bg-black"></div>
    </section>
  );
};

export default Projects;
