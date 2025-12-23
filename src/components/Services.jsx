import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "./SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Web Design",
    desc: "Creating visually stunning and user-centric designs that leave a lasting impression.",
  },
  {
    id: "02",
    title: "Web Development",
    desc: "Building robust, scalable, and high-performance websites using modern technologies.",
  },
  {
    id: "03",
    title: "UI/UX Design",
    desc: "Designing intuitive interfaces and seamless user experiences that drive engagement.",
  },
  {
    id: "04",
    title: "SEO Optimization",
    desc: "Optimizing your website to rank higher on search engines and attract more traffic.",
  },
];

const Services = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current.querySelectorAll(".service-item");

    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });

    // Animate Title from Stroke to Solid (matching About Me style)
    gsap.fromTo(
      titleRef.current,
      {
        color: "transparent",
        webkitTextStroke: "1px black",
      },
      {
        color: "black",
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
    <section ref={containerRef} className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-center mb-12 md:mb-16 tracking-tighter"
        >
          SERVICES
        </h2>

        <div className="mt-8 md:mt-12 space-y-8 md:space-y-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-item flex flex-col md:flex-row items-start border-b border-gray-200 pb-6 md:pb-8"
            >
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-black md:mr-8 mb-3 md:mb-0">
                {service.id}
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
