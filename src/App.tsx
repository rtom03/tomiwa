import React, { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Briefcase,
  User,
  Phone,
} from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management System",
      description:
        "Real-time collaborative task manager with WebSocket integration",
      tech: ["TypeScript", "Express", "MongoDB", "Socket.io"],
      link: "#",
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content creation tool with modern UI/UX",
      tech: ["Next.js", "OpenAI API", "Tailwind", "Vercel"],
      link: "#",
    },
    {
      title: "Healthcare Dashboard",
      description: "Patient management system with analytics and reporting",
      tech: ["React", "Django", "PostgreSQL", "Chart.js"],
      link: "#",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Django", "FastAPI", "PostgreSQL"],
    },
    { category: "Tools", items: ["Git", "Docker", "AWS", "CI/CD", "MongoDB"] },
    {
      category: "Other",
      items: ["REST API", "GraphQL", "WebSockets", "Redis", "Nginx"],
    },
  ];

  const experience = [
    {
      title: "Senior Fullstack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Led development of multiple enterprise applications, mentored junior developers, and implemented CI/CD pipelines.",
    },
    {
      title: "Fullstack Developer",
      company: "Digital Innovations",
      period: "2020 - 2022",
      description:
        "Built scalable web applications using React and Node.js, collaborated with cross-functional teams.",
    },
    {
      title: "Frontend Developer",
      company: "Creative Studios",
      period: "2018 - 2020",
      description:
        "Developed responsive user interfaces and improved application performance by 40%.",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="space-y-16">
            <section className="min-h-[80vh] flex items-center">
              <div className="max-w-4xl">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mb-6 border border-blue-500/20">
                  <span className="text-blue-400 font-medium">
                    Welcome to my portfolio
                  </span>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  Tomiwa Raheem
                </h1>
                <p className="text-2xl md:text-3xl text-gray-300 dark:text-gray-400 mb-8">
                  Fullstack Developer
                </p>
                <p className="text-lg text-gray-400 dark:text-gray-500 mb-12 max-w-2xl leading-relaxed">
                  Crafting elegant solutions to complex problems. Specialized in
                  building scalable web applications with modern technologies.
                  Passionate about clean code and exceptional user experiences.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <button
                    onClick={() => setActiveTab("projects")}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    View Projects
                  </button>
                  <button
                    onClick={() => setActiveTab("contact")}
                    className="px-8 py-4 border border-gray-600 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </section>

            <section className="py-16">
              <h2 className="text-4xl font-bold mb-12 text-center">
                Skills & Technologies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skillGroup, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-800/50 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <h3 className="text-xl font-bold mb-4 text-blue-400">
                      {skillGroup.category}
                    </h3>
                    <div className="space-y-2">
                      {skillGroup.items.map((skill, i) => (
                        <div
                          key={i}
                          className="text-gray-300 dark:text-gray-400 flex items-center"
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case "about":
        return (
          <div className="max-w-4xl mx-auto py-12">
            <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              About Me
            </h1>
            <div className="space-y-8">
              <div className="bg-gray-800/50 dark:bg-gray-900/50 p-8 rounded-xl border border-gray-700">
                <p className="text-lg text-gray-300 dark:text-gray-400 leading-relaxed mb-6">
                  I'm a passionate fullstack developer with over 5 years of
                  experience building modern web applications. My journey in
                  software development started with a curiosity about how things
                  work on the web, and it has evolved into a career focused on
                  creating impactful digital solutions.
                </p>
                <p className="text-lg text-gray-300 dark:text-gray-400 leading-relaxed mb-6">
                  I specialize in the entire web development stack, from
                  crafting intuitive user interfaces with React and TypeScript
                  to building robust backend systems with Node.js and Python. I
                  believe in writing clean, maintainable code and following best
                  practices to deliver high-quality software.
                </p>
                <p className="text-lg text-gray-300 dark:text-gray-400 leading-relaxed">
                  When I'm not coding, you can find me contributing to
                  open-source projects, learning new technologies, or sharing
                  knowledge with the developer community through blog posts and
                  mentoring.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-400">
                  Experience
                </h2>
                <div className="space-y-6">
                  {experience.map((exp, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-800/50 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {exp.title}
                          </h3>
                          <p className="text-blue-400">{exp.company}</p>
                        </div>
                        <span className="text-gray-500 text-sm">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-400">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "projects":
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

      case "contact":
        return (
          <div className="max-w-2xl mx-auto py-12">
            <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Get in Touch
            </h1>
            <p className="text-gray-400 mb-12 text-lg">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-6 mb-12">
              <a
                href="mailto:tomiwa.raheem@example.com"
                className="flex items-center gap-4 p-6 bg-gray-800/50 dark:bg-gray-900/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold">
                    tomiwa.raheem@example.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-gray-800/50 dark:bg-gray-900/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Github className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <p className="text-white font-semibold">
                    github.com/tomiwaraheem
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-gray-800/50 dark:bg-gray-900/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Linkedin className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <p className="text-white font-semibold">
                    linkedin.com/in/tomiwaraheem
                  </p>
                </div>
              </a>
            </div>

            <div className="bg-gray-800/50 dark:bg-gray-900/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Send a Message
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none text-white"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  onClick={() => alert("Message sent! (This is a demo)")}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-950 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              TR
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {["home", "about", "projects", "contact"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`capitalize font-medium transition-colors relative ${
                    activeTab === tab
                      ? "text-blue-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"></span>
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {["home", "about", "projects", "contact"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg capitalize ${
                    activeTab === tab
                      ? "bg-blue-500 text-white"
                      : "text-gray-400 hover:bg-gray-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-24 pb-12">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2026 Tomiwa Raheem. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:tomiwa.raheem@example.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
