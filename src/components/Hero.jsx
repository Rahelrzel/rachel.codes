import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import memoji from "../assets/memoji2.svg";

const Hero = () => {
  const memojiRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <nav className="absolute top-0 left-0 w-full p-4 md:p-6 px-4 md:px-8 lg:px-20 flex justify-between items-center z-50">
        <div className="text-lg md:text-xl font-bold">Rachel.codes</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-base lg:text-lg font-medium">
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

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800 transition-all duration-300 ${
            mobileMenuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col space-y-4 p-6 text-lg font-medium">
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
        </div>
      </nav>

      <div className="flex-grow flex flex-col justify-center items-center py-20 md:py-24 px-4 md:px-8 lg:px-20">
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black mb-8 md:mb-10 text-center tracking-tighter">
          HI, I'M RACHEL
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-0 w-full max-w-7xl">
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-md text-center lg:text-left leading-relaxed order-2 lg:order-1">
            I design and develop beautiful, intuitive, and high-performing web
            experiences by combining creativity with clean, scalable code.
          </p>

          <div className="flex-shrink-0 m-0 p-0 order-1 lg:order-2">
            <img
              ref={memojiRef}
              src={memoji}
              alt="Rachel's Memoji"
              className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-contain"
            />
          </div>

          {/* CV Buttons - Files in the public folder are served from the root URL path.
              For example, /public/cv/Rachel_Zeleke_CV.pdf becomes accessible at /cv/Rachel_Zeleke_CV.pdf */}
          <div className="flex-shrink-0 flex gap-4 order-3">
            <a
              href="/cv/Rachel_Zeleke_CV.pdf"
              download="Rachel_Zeleke_CV.pdf"
              className="bg-white border-2 border-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-bold hover:bg-gray-200 transition-colors"
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
