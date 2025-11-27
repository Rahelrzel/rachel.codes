import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">Rachel</h3>
          <p className="text-gray-400">Frontend Developer & UI/UX Designer</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-300 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-gray-300 transition-colors">GitHub</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Twitter</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Instagram</a>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} Rachel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
