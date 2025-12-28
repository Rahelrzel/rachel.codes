import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { projects } from "../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const projectId = parseInt(id) - 1;
  const project = projects[projectId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="text-white text-center mt-20">Project not found.</div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-20 font-sans">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 group"
      >
        <IoArrowBack className="group-hover:-translate-x-1 transition-transform" />{" "}
        Back to Home
      </Link>

      <h1 className="text-4xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
        {project.title}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="rounded-3xl overflow-hidden mb-10 shadow-2xl border border-white/10">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">
              About the Project
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg text-justify">
              {project.longDesc}
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">
              Goal
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {project.goal}
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">
              Problem & Solution
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {project.problems}
            </p>
          </div>
        </div>

        <div className="space-y-10">
          <div className="bg-gray-900/40 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 rounded-full text-sm sm:text-base text-gray-200 border border-white/10 hover:bg-white/10 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/40 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4">
              Key Features
            </h3>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="text-purple-400 mt-1">●</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {project.images.slice(1).map((img, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden border border-white/10 h-48"
              >
                <img
                  src={img}
                  alt="Detail"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
