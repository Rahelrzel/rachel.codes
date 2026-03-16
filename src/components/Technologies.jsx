import React, { useEffect, useRef, useMemo } from "react";
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
import project1 from "../assets/project1.webp";
import project12 from "../assets/project2.webp";
import project13 from "../assets/project3.webp";
import project2 from "../assets/project11.webp";
import project22 from "../assets/project12.webp";
import project23 from "../assets/project13.webp";
import project3 from "../assets/project21.webp";
import project32 from "../assets/project22.webp";
import project33 from "../assets/project23.webp";

gsap.registerPlugin(ScrollTrigger);

const techs = [
  { icon: FaFigma },
  { icon: FaHtml5 },
  { icon: FaCss3Alt },
  { icon: FaJs },
  { icon: FaNodeJs },
  { icon: FaReact },
  { icon: SiNextdotjs },
  { icon: SiCanva },
  { icon: SiTailwindcss },
  { icon: SiExpress },
  { icon: SiMongodb },
  { icon: SiMongoose },
  { icon: FaTrello },
];

const images = [
  { image: project1 },
  { image: project12 },
  { image: project13 },
  { image: project2 },
  { image: project22 },
  { image: project23 },
  { image: project3 },
  { image: project32 },
  { image: project33 },
];

// Optimized TechLoop component with logos only
const TechLoop = ({
  items,
  direction = "left",
  speed = 1,
  isLarge = false,
}) => {
  const containerRef = useRef(null);
  const rowRef = useRef(null);
  const animationRef = useRef(null);

  // Memoize item classes to prevent recalculation
  const itemClasses = useMemo(() => {
    const baseClasses =
      "flex flex-col items-center justify-center mx-3 will-change-transform";
    if (items[0]?.image) {
      return `${baseClasses} w-48 h-32 sm:w-60 sm:h-40 md:w-80 md:h-50 flex-shrink-0`;
    }
    return `${baseClasses} ${isLarge ? "w-20 sm:w-24 md:w-32" : "w-14 sm:w-16 md:w-20"} flex-shrink-0`;
  }, [items, isLarge]);

  // Optimized animation
  useEffect(() => {
    const container = containerRef.current;
    const row = rowRef.current;
    if (!container || !row) return;

    // Clear existing content
    row.innerHTML = "";

    // Create content efficiently
    const createContent = () => {
      const fragment = document.createDocumentFragment();

      items.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = itemClasses;

        if (item.image) {
          // For project images
          const imgContainer = document.createElement("div");
          imgContainer.className =
            "w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg";

          const img = document.createElement("img");
          img.src = item.image;
          img.alt = `Project ${index}`;
          img.className = "w-full h-full object-cover";
          img.loading = "lazy";
          img.decoding = "async";

          imgContainer.appendChild(img);
          div.appendChild(imgContainer);
        } else {
          // For technology icons - only logo, no text
          const iconContainer = document.createElement("div");
          iconContainer.className = `${
            isLarge
              ? "text-4xl sm:text-5xl md:text-6xl"
              : "text-2xl sm:text-3xl md:text-4xl"
          } text-white hover:text-gray-300 transition-colors duration-300`;

          // We'll use a data attribute to identify which icon to render
          iconContainer.setAttribute("data-icon", index);
          iconContainer.setAttribute("data-icon-type", "tech");

          div.appendChild(iconContainer);
        }

        fragment.appendChild(div);
      });

      return fragment;
    };

    // Add initial content
    const initialContent = createContent();
    row.appendChild(initialContent);

    // Clone content twice for seamless loop
    const clone1 = initialContent.cloneNode(true);
    const clone2 = initialContent.cloneNode(true);
    row.appendChild(clone1);
    row.appendChild(clone2);

    // Calculate width
    const firstItem = row.firstChild;
    const itemWidth = firstItem?.offsetWidth || 0;
    const totalWidth = itemWidth * items.length;

    // Cancel any existing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    // Use GSAP for smooth animation with GPU acceleration
    gsap.set(row, {
      x: direction === "left" ? 0 : -totalWidth,
      force3D: true,
      transformStyle: "preserve-3d",
      backfaceVisibility: "hidden",
    });

    animationRef.current = gsap.to(row, {
      x: direction === "left" ? -totalWidth : 0,
      duration: totalWidth / 120 / speed, // Adjusted speed for smoother animation
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x, target) => {
          const position = parseFloat(x);
          if (direction === "left") {
            if (position <= -totalWidth * 2) {
              gsap.set(target, { x: -totalWidth });
              return -totalWidth;
            }
          } else {
            if (position >= 0) {
              gsap.set(target, { x: -totalWidth });
              return -totalWidth;
            }
          }
          return x;
        },
      },
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      gsap.killTweensOf(row);
    };
  }, [items, direction, speed, isLarge, itemClasses]);

  // Render icons using React after DOM is ready
  useEffect(() => {
    if (!rowRef.current) return;

    const iconContainers = rowRef.current.querySelectorAll(
      '[data-icon-type="tech"]',
    );

    iconContainers.forEach((container, index) => {
      const actualIndex = index % items.length;
      const item = items[actualIndex];
      if (item && item.icon) {
        const IconComponent = item.icon;
        // Clear container and render React component
        container.innerHTML = "";

        // Create a wrapper div that will be replaced by React rendering
        const renderIcon = () => {
          const iconElement = document.createElement("div");
          iconElement.className =
            "w-full h-full flex items-center justify-center";
          container.appendChild(iconElement);

          // This is a workaround - in a real app, you might want to use a different approach
          // or consider using CSS backgrounds for icons instead
        };

        renderIcon();
      }
    });
  }, [items]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden whitespace-nowrap py-4 md:py-6"
      style={{
        contain: "content",
        willChange: "transform",
      }}
    >
      <div
        ref={rowRef}
        className="inline-flex"
        style={{
          willChange: "transform",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
      />
    </div>
  );
};

// Alternative approach using pure React with proper icon rendering
const TechnologiesWithReactIcons = () => {
  return (
    <section className="py-12 md:py-20 bg-black text-white overflow-hidden">
      <div className="mb-4 md:mb-8">
        <div className="overflow-hidden">
          <div className="animate-scroll-left inline-flex gap-4 md:gap-6">
            {[...techs, ...techs, ...techs].map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32"
              >
                <tech.icon className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white hover:text-gray-300 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="overflow-hidden">
          <div className="animate-scroll-right inline-flex gap-4 md:gap-6">
            {[...images, ...images, ...images].map((item, index) => (
              <div
                key={index}
                className="w-48 h-32 sm:w-60 sm:h-40 md:w-80 md:h-50 flex-shrink-0 rounded-xl md:rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={item.image}
                  alt={`Project ${index % images.length}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
          will-change: transform;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
          will-change: transform;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TechnologiesWithReactIcons;
