import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import commenterImage from "../assets/Rahel photo .jpg";

gsap.registerPlugin(ScrollTrigger);

/* -------------------- DATA -------------------- */
const testimonials = [
  {
    name: "Alice Johnson",
    role: "Product Manager at TechStart Inc.",
    comment:
      "Rachel is an amazing developer! She delivered the project on time and exceeded our expectations.",
  },
  {
    name: "Bob Smith",
    role: "Founder at Creative Studio",
    comment:
      "The design was exactly what we wanted. Clean, modern, and user-friendly.",
  },
  {
    name: "Charlie Brown",
    role: "CTO at Innovation Labs",
    comment: "Great communication and technical skills. Highly recommended!",
  },
  {
    name: "Diana Prince",
    role: "Marketing Director at Wonder Corp",
    comment:
      "She transformed our vision into reality. The website is beautiful and fast.",
  },
  {
    name: "Ethan Hunt",
    role: "Lead Designer at Mission Creative",
    comment:
      "Professional, creative, and detail-oriented. A pleasure to work with.",
  },
];

/* -------------------- CARD -------------------- */
const TestimonialCard = ({ data }) => {
  return (
    <div
      className="
        border-2 border-white
        p-4 sm:p-6 md:p-8
        rounded-xl md:rounded-2xl
        w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px]
        flex-shrink-0
        bg-black
      "
    >
      <div className="flex items-start gap-4 md:gap-6">
        {/* Smaller Image */}
        <img
          src={commenterImage}
          alt={data.name}
          className="
            w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
            rounded-full
            object-cover
            border-2 border-white
            flex-shrink-0
          "
        />

        {/* Text */}
        <div className="flex flex-col gap-1 md:gap-2">
          <div>
            <h4 className="font-bold text-lg sm:text-xl md:text-2xl text-white">
              {data.name}
            </h4>
            <p className="text-sm sm:text-base text-gray-400">{data.role}</p>
          </div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            {data.comment}
          </p>
        </div>
      </div>
    </div>
  );
};

/* -------------------- ROW -------------------- */
const TestimonialRow = ({ items, direction = "left", duration = 30 }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    const totalWidth = el.scrollWidth / 2;

    gsap.set(el, {
      x: direction === "left" ? 0 : -totalWidth,
    });

    gsap.to(el, {
      x: direction === "left" ? -totalWidth : 0,
      duration,
      ease: "none",
      repeat: -1,
    });

    return () => {
      gsap.killTweensOf(el);
    };
  }, [direction, duration]);

  return (
    <div className="overflow-hidden">
      <div ref={contentRef} className="flex w-max gap-6">
        {[...items, ...items].map((item, index) => (
          <TestimonialCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

/* -------------------- SECTION -------------------- */
const Testimonials = () => {
  const titleRef = useRef(null);

  useEffect(() => {
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
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-20 bg-black overflow-hidden">
      {/* Section Title */}
      <div className="container mx-auto px-4 pb-20">
        <h2
          ref={titleRef}
          className="text-5xl md:text-8xl font-black text-center tracking-tighter"
        >
          WHAT CLIENTS ARE SAYING
        </h2>
      </div>

      {/* Single Row of Testimonials */}
      <div className="space-y-10">
        <TestimonialRow items={testimonials} direction="left" duration={35} />
      </div>
    </section>
  );
};

export default Testimonials;
