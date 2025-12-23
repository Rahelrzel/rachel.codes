import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaTrello,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiCanva,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMongoose,
} from "react-icons/si";
import SectionHeader from "./SectionHeader";
import project1 from "../assets/project1.png";
import project1_2 from "../assets/project1.2.png";
import project1_3 from "../assets/project1.3.png";
import project2 from "../assets/project2.png";
import project2_2 from "../assets/project2.2.png";
import project2_3 from "../assets/project2.3.png";
import project3 from "../assets/project3.png";
import project3_2 from "../assets/project3.2.png";
import project3_3 from "../assets/project3.3.png";

gsap.registerPlugin(ScrollTrigger);

const techs = [
  { name: "Figma", icon: FaFigma },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Canva", icon: SiCanva },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Mongoose", icon: SiMongoose },
  { name: "Trello", icon: FaTrello },
];

const images = [
  { image: project1 },
  { image: project1_2 },
  { image: project1_3 },
  { image: project2 },
  { image: project2_2 },
  { image: project2_3 },
  { image: project3 },
  { image: project3_2 },
  { image: project3_3 },
];

const TechLoop = ({
  items,
  direction = "left",
  speed = 1,
  isLarge = false,
}) => {
  const rowRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const el = rowRef.current;
    const content = el.querySelector(".tech-content");

    // Clear existing clones if any, before adding new ones
    while (el.children.length > 1) {
      el.removeChild(el.lastChild);
    }

    // Clone content twice for seamless loop (3 sets total)
    const clone1 = content.cloneNode(true);
    const clone2 = content.cloneNode(true);
    el.appendChild(clone1);
    el.appendChild(clone2);

    const width = content.offsetWidth;

    // Kill previous instance
    if (tlRef.current) tlRef.current.kill();

    // Create the loop animation using fromTo for robustness
    // Left: 0 -> -width
    // Right: -width -> 0
    if (direction === "left") {
      tlRef.current = gsap.fromTo(
        el,
        { x: 0 },
        {
          x: -width,
          duration: 20 / speed,
          ease: "none",
          repeat: -1,
        }
      );
    } else {
      tlRef.current = gsap.fromTo(
        el,
        { x: -width },
        {
          x: 0,
          duration: 20 / speed,
          ease: "none",
          repeat: -1,
        }
      );
    }

    return () => {
      if (tlRef.current) tlRef.current.kill();
      // Clean up clones on unmount
      while (el.children.length > 1) {
        el.removeChild(el.lastChild);
      }
    };
  }, [direction, speed]);

  return (
    <div className="overflow-hidden whitespace-nowrap py-2 md:py-4">
      <div ref={rowRef} className="inline-block">
        <div className="tech-content inline-flex items-center">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center mx-1 ${
                item.image
                  ? "w-48 h-32 sm:w-60 sm:h-40 md:w-80 md:h-50"
                  : isLarge
                  ? "w-40 sm:w-60 md:w-80"
                  : "w-16 sm:w-20 md:w-24"
              }`}
            >
              {item.image ? (
                <div className="w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={item.image}
                    alt={`Project ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <>
                  <item.icon
                    className={`${
                      isLarge
                        ? "text-4xl sm:text-6xl md:text-8xl"
                        : "text-2xl sm:text-3xl md:text-4xl"
                    } mb-1 md:mb-2`}
                  />
                  <span
                    className={`${
                      isLarge
                        ? "text-sm sm:text-lg md:text-2xl"
                        : "text-xs sm:text-sm"
                    } font-medium`}
                  >
                    {item.name}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Technologies = () => {
  return (
    <section className="py-12 md:py-20 bg-black text-white overflow-hidden">
      <div className="mb-4 md:mb-8">
        <TechLoop items={techs} direction="left" speed={1} isLarge={true} />
      </div>
      <div>
        <TechLoop items={images} direction="right" speed={1} />
      </div>
    </section>
  );
};

export default Technologies;
