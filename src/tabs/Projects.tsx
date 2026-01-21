import { projects } from "../constants";
import { Code2, ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <div className="py-12">
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
              <a
                href={project.link}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
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
    </div>
  );
};

export default Projects;
