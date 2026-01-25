import { useState } from "react";
import { Code2, ExternalLink, X } from "lucide-react";
import { projects } from "../constants";
import type { ProjectProps } from "../constants/_index";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>();

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
        Projects
      </h1>
      <p className="text-gray-400 mb-12 text-lg">
        A collection of my recent work and personal projects
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-800/50 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
          >
            <div className="flex justify-between items-start mb-4">
              <Code2 className="text-blue-400" size={32} />
              <button
                onClick={() => setSelectedProject(project)}
                className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                aria-label="View project details"
              >
                <ExternalLink size={20} />
              </button>
            </div>
            <h3
              className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors bg-gray-800 rounded-full p-2"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Project Image */}
            <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                {selectedProject.title}
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {selectedProject.fullDescription}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
                  >
                    <ExternalLink size={20} />
                    View Live Project
                  </a>
                )}
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium border border-gray-600"
                  >
                    <Code2 size={20} />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
