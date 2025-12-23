import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import commenterImage from "../assets/Rahel photo .jpg";

gsap.registerPlugin(ScrollTrigger);

/* -------------------- DATA -------------------- */
const testimonials = [
  {
    name: "Alice Johnson",
    comment:
      "Rachel is an amazing developer! She delivered the project on time and exceeded our expectations.",
  },
  {
    name: "Bob Smith",
    comment:
      "The design was exactly what we wanted. Clean, modern, and user-friendly.",
  },
  {
    name: "Charlie Brown",
    comment: "Great communication and technical skills. Highly recommended!",
  },
  {
    name: "Diana Prince",
    comment:
      "She transformed our vision into reality. The website is beautiful and fast.",
  },
  {
    name: "Ethan Hunt",
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
        p-8
        rounded-2xl
        w-[420px] md:w-[500px]
        flex-shrink-0
        bg-black
      "
    >
      <div className="flex items-start gap-6">
        {/* Image */}
        <img
          src={commenterImage}
          alt={data.name}
          className="
            w-20 h-20 md:w-24 md:h-24
            rounded-full
            object-cover
            border-2 border-white
            flex-shrink-0
          "
        />

        {/* Text */}
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-xl md:text-2xl text-white">
            {data.name}
          </h4>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
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

    // Set starting position
    gsap.set(el, {
      x: direction === "left" ? 0 : -totalWidth,
    });

    // Always animate in ONE direction
    gsap.to(el, {
      x: direction === "left" ? -totalWidth : 0,
      duration,
      ease: "none",
      repeat: -1,
    });
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

      <div className="space-y-10">
        <TestimonialRow items={testimonials} direction="left" duration={35} />
        <TestimonialRow items={testimonials} direction="right" duration={40} />
        <TestimonialRow items={testimonials} direction="left" duration={45} />
      </div>
    </section>
  );
};

export default Testimonials;
