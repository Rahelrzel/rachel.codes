import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaUserCircle } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { name: 'Alice Johnson', comment: 'Rachel is an amazing developer! She delivered the project on time and exceeded our expectations.' },
  { name: 'Bob Smith', comment: 'The design was exactly what we wanted. Clean, modern, and user-friendly.' },
  { name: 'Charlie Brown', comment: 'Great communication and technical skills. Highly recommended!' },
  { name: 'Diana Prince', comment: 'She transformed our vision into reality. The website is beautiful and fast.' },
  { name: 'Ethan Hunt', comment: 'Professional, creative, and detail-oriented. A pleasure to work with.' },
];

const TestimonialCard = ({ data }) => (
  <div className="bg-gray-100 p-6 rounded-xl w-80 md:w-96 flex-shrink-0 mx-4">
    <div className="flex items-center mb-4">
      <FaUserCircle className="text-4xl text-gray-400 mr-4" />
      <div>
        <h4 className="font-bold">{data.name}</h4>
      </div>
    </div>
    <p className="text-gray-600">{data.comment}</p>
  </div>
);

const TestimonialRow = ({ items, direction = 'left', speed = 1 }) => {
  const rowRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const el = rowRef.current;
    const content = el.querySelector('.testi-content');
    
    // Clone content for seamless loop
    const clone = content.cloneNode(true);
    el.appendChild(clone);

    const width = content.offsetWidth;
    
    // Initial setup
    gsap.set(el, { x: 0 });

    // Create the loop animation
    tlRef.current = gsap.to(el, {
      x: direction === 'left' ? -width : width,
      duration: 30 / speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % width)
      }
    });

    // ScrollTrigger to reverse direction
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (self.direction === -1) {
          gsap.to(tlRef.current, { timeScale: -1 * (direction === 'left' ? 1 : -1), overwrite: true });
        } else {
          gsap.to(tlRef.current, { timeScale: 1 * (direction === 'left' ? 1 : -1), overwrite: true });
        }
      }
    });

    return () => {
      if (tlRef.current) tlRef.current.kill();
    };
  }, [direction, speed]);

  return (
    <div className="overflow-hidden whitespace-nowrap py-4" ref={rowRef}>
      <div className="testi-content inline-flex">
        {items.map((item, index) => (
          <TestimonialCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <SectionHeader title="What Clients Are Saying" />
      </div>
      
      <div className="space-y-8">
        <TestimonialRow items={testimonials} direction="left" speed={1} />
        <TestimonialRow items={testimonials} direction="right" speed={1} />
        <TestimonialRow items={testimonials} direction="left" speed={1} />
      </div>
    </section>
  );
};

export default Testimonials;
