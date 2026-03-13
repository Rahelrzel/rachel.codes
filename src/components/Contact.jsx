import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiEnvelope, HiPhone, HiMapPin } from "react-icons/hi2";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "", // Matches your {{name}} in template
    email: "", // Used for your records
    message: "", // Matches your {{message}} in template
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("sending");

    // Prepare the data to match your EmailJS template placeholders
    const templateParams = {
      name: formData.name,
      message: formData.message,
      time: new Date().toLocaleString(), // Fills your {{time}} placeholder
      reply_to: formData.email, // Optional: allows you to hit 'reply' in your email app
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
        },
      );
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white text-black">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader title="GET IN TOUCH" className="text-center mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-md">
                Have a project in mind or just want to say hi? Feel free to
                reach out through the form or using the details below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <HiEnvelope className="text-xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                    Email
                  </p>
                  <a
                    href="mailto:rahelrzele@gmail.com"
                    className="text-lg font-medium hover:underline"
                  >
                    rahelrzele@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <HiPhone className="text-xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                    Phone
                  </p>
                  <a
                    href="tel:+251900000000"
                    className="text-lg font-medium hover:underline"
                  >
                    +251 946733964
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <HiMapPin className="text-xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                    Location
                  </p>
                  <p className="text-lg font-medium">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-6">
                Social Media
              </h4>
              <div className="flex gap-4">
                {[
                  { icon: <FaGithub />, link: "https://github.com/Rahelrzel" },
                  {
                    icon: <FaLinkedin />,
                    link: "https://www.linkedin.com/in/rachel-zeleke/",
                  },
                  { icon: <FaTwitter />, link: "#" },
                  {
                    icon: <FaInstagram />,
                    link: "https://www.instagram.com/rachel_zeleke",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-xl hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 md:p-10 rounded-2xl shadow-sm">
            <form onSubmit={sendEmail} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-bold uppercase tracking-wider text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full bg-white border ${errors.name ? "border-red-500" : "border-gray-200"} rounded-lg px-4 py-3 outline-none focus:border-black transition-colors`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-bold uppercase tracking-wider text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`w-full bg-white border ${errors.email ? "border-red-500" : "border-gray-200"} rounded-lg px-4 py-3 outline-none focus:border-black transition-colors`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold uppercase tracking-wider text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  className={`w-full bg-white border ${errors.message ? "border-red-500" : "border-gray-200"} rounded-lg px-4 py-3 outline-none focus:border-black transition-colors resize-none`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                  status === "sending"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <div className="p-4 bg-green-100 border border-green-200 text-green-700 rounded-lg text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="p-4 bg-red-100 border border-red-200 text-red-700 rounded-lg text-center">
                  Something went wrong. Please check your credentials.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
