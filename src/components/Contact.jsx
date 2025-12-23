import React from "react";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <SectionHeader title="Let's Get In Touch" className="text-center" />

        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>

        <a
          href="mailto:hello@rachel.com"
          className="inline-block bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-xl font-bold hover:bg-gray-800 transition-colors"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
