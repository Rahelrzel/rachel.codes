import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/Rahelrzel" },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/rachel-zeleke/",
    },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/rachel_zeleke" },
  ];

  return (
    <footer className="bg-black text-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Brand & Description */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold tracking-tighter italic">
              RACHEL
            </h3>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              Crafting premium digital experiences through purposeful design and
              clean code. Based in Addis Ababa, Ethiopia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">
              Navigation
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-lg hover:text-gray-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-white group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Info */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-xl hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="pt-4">
              <p className="text-gray-500 text-sm">Have a question?</p>
              <a
                href="mailto:rahelrzele@gmail.com"
                className="text-lg hover:underline"
              >
                rahelrzele@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Big Reveal Text */}
        <div className="relative mt-20 select-none group flex justify-center">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
          <h2 className="text-[10vw] md:text-[13vw] font-black tracking-tighter leading-none text-center opacity-10 transition-all duration-700 group-hover:opacity-100 group-hover:scale-[1.02] cursor-default whitespace-nowrap">
            RACHEL ZELEKE
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-900 gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Rachel Zeleke. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-2">
            Built with <span className="text-red-500 text-xs">💜</span> in Addis
            Ababa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
