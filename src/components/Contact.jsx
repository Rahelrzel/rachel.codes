import React from 'react';
import SectionHeader from './SectionHeader';

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <SectionHeader title="Let's Get In Touch" className="text-center" />
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
        
        <a href="mailto:hello@rachel.com" className="inline-block bg-black text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-800 transition-colors">
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
