import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import vector1 from "../assets/vector1.svg";
import vector2 from "../assets/vector2.svg";
import vector3 from "../assets/vector3.svg";
import vector4 from "../assets/vector4.svg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const v1Ref = useRef(null);
  const v2Ref = useRef(null);
  const v3Ref = useRef(null);
  const v4Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Move vectors inward
    // Start from slightly outside/corner (negative values) and move inward (positive values)
    // This ensures they start "at the very corner" and move slowly towards center
    const startOffset = -50;
    const endOffset = 50;

    tl.fromTo(
      v1Ref.current,
      { x: startOffset, y: startOffset },
      { x: endOffset, y: endOffset },
      0
    )
      .fromTo(
        v2Ref.current,
        { x: -startOffset, y: startOffset },
        { x: -endOffset, y: endOffset },
        0
      )
      .fromTo(
        v3Ref.current,
        { x: startOffset, y: -startOffset },
        { x: endOffset, y: -endOffset },
        0
      )
      .fromTo(
        v4Ref.current,
        { x: -startOffset, y: -startOffset },
        { x: -endOffset, y: -endOffset },
        0
      );

    // Animate Title from Stroke to Solid (matching Services/SectionHeader style)
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
    <section
      ref={containerRef}
      className="relative py-20 md:py-32 min-h-screen flex flex-col justify-center bg-black text-white overflow-hidden"
    >
      {/* Decorative Vectors - Responsive sizing */}
      <img
        ref={v1Ref}
        src={vector1}
        alt=""
        className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 lg:w-96"
      />
      <img
        ref={v2Ref}
        src={vector2}
        alt=""
        className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 lg:w-96"
      />
      <img
        ref={v3Ref}
        src={vector3}
        alt=""
        className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 lg:w-96"
      />
      <img
        ref={v4Ref}
        src={vector4}
        alt=""
        className="absolute bottom-0 right-0 w-32 sm:w-48 md:w-64 lg:w-96"
      />

      <div className="flex flex-col justify-center items-center container mx-auto px-4 md:px-8 relative z-10">
        <h2
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 md:mb-12 text-center tracking-tighter"
        >
          ABOUT ME
        </h2>

        <div className="max-w-3xl mx-auto text-center">
          <p
            ref={textRef}
            className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white"
          >
            I'm a frontend developer and UI/UX designer passionate about
            creating seamless digital experiences. I bridge the gap between
            design and development by turning user-focused designs into
            responsive, scalable, and pixel-perfect interfaces.
          </p>
        </div>
        {/* Contact Me Button - Opens default email client */}
        <div className="flex-shrink-0">
          <a
            href="mailto:rahelrzele@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-3 md:px-10 md:py-4 rounded-full text-lg md:text-xl font-bold hover:bg-gray-200 transition-colors mt-8 md:mt-12"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
