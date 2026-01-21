import { Github, Linkedin, Mail, MessageCircleDashed } from "lucide-react";
import React from "react";

const Contact = () => {
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
          href="https://wa.me/2349016672162"
          className="flex items-center gap-4 p-6 bg-gray-800/50 dark:bg-gray-900/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
        >
          <div className="p-3 bg-blue-500/10 rounded-lg">
            <MessageCircleDashed className="text-blue-400" size={24} />
          </div>
          <div>
            <p className="text-gray-400 text-sm">WhatsApp</p>
            <p className="text-white font-semibold">
              Message me directly on whatsapp
            </p>
          </div>
        </a>

        <a
          href="https://github.com/rtom03"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-6 bg-gray-800/50 dark:bg-gray-900/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
        >
          <div className="p-3 bg-blue-500/10 rounded-lg">
            <Github className="text-blue-400" size={24} />
          </div>
          <div>
            <p className="text-gray-400 text-sm">GitHub</p>
            <p className="text-white font-semibold">github.com/rtom03</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/tomiwa-raheem-98b19a398/"
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
              linkedin.com/in/tomiwa.raheem
            </p>
          </div>
        </a>
      </div>

      <div className="bg-gray-800/50 dark:bg-gray-900/50 p-8 rounded-xl border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-white">Mail me directly</h2>
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
};

export default Contact;
