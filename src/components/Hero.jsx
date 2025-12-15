import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import memoji from "../assets/memoji2.svg";

const Hero = () => {
  const memojiRef = useRef(null);

  useEffect(() => {
    gsap.to(memojiRef.current, {
      y: 20,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full p-2 px-20 flex justify-between items-center z-50">
        <div className="text-20px font-bold">Rachel.codes</div>
        <ul className="hidden md:flex space-x-8 text-20px font-medium">
          <li className="cursor-pointer hover:text-gray-300 transition-colors">
            About
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition-colors">
            Services
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition-colors">
            Projects
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition-colors">
            Contact
          </li>
        </ul>
      </nav>

      <div className="flex-grow flex flex-col justify-center items-center py-15 px-20">
        <h1 className="text-4xl md:text-[12rem] font-black mb-10 text-center tracking-tighter">
          HI, I'M RACHEL
        </h1>

        <div className="flex flex-row items-center justify-center gap-0">
          <p className="text-xl md:text-2xl text-white max-w-md text-center md:text-left leading-relaxed">
            I design and develop beautiful, intuitive, and high-performing web
            experiences by combining creativity with clean, scalable code.
          </p>

          <div className="flex-shrink-0 m-0 p-0">
            <img
              ref={memojiRef}
              src={memoji}
              alt="Rachel's Memoji"
              className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] object-contain"
            />
          </div>

          {/* CV Buttons - Files in the public folder are served from the root URL path.
              For example, /public/cv/Rachel_Zeleke_CV.pdf becomes accessible at /cv/Rachel_Zeleke_CV.pdf */}
          <div className="flex-shrink-0 flex gap-4">
            {/*         
            <a
              href="/cv/Rachel_Zeleke_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-200 transition-colors"
            >
              View CV
            </a> */}

            <a
              href="/cv/Rachel_Zeleke_CV.pdf"
              download="Rachel_Zeleke_CV.pdf"
              className="bg-white border-2 border-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-black transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
