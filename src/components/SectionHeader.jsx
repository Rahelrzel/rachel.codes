import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SectionHeader = ({ title, className = "" }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    
    gsap.fromTo(el, 
      { 
        color: 'transparent',
        webkitTextStroke: '1px black', // Adjust color as needed
      },
      {
        color: 'black', // Fill color
        webkitTextStroke: '0px transparent',
        duration: 1.5,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <h2 ref={headerRef} className={`text-4xl md:text-6xl font-bold mb-8 ${className}`}>
      {title}
    </h2>
  );
};

export default SectionHeader;
