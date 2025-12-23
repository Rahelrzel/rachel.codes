import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 md:py-10">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold">Rachel</h3>
          <p className="text-gray-400 text-sm md:text-base">
            Frontend Developer & UI/UX Designer
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a
            href="#"
            className="hover:text-gray-300 transition-colors text-sm md:text-base"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition-colors text-sm md:text-base"
          >
            GitHub
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition-colors text-sm md:text-base"
          >
            Twitter
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition-colors text-sm md:text-base"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="text-center mt-6 md:mt-8 text-gray-500 text-xs md:text-sm px-4">
        © {new Date().getFullYear()} Rachel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
