import React from "react";
import { skills } from "../constants";

const Home = ({ setActiveTab }) => {
  return (
    <div className="space-y-16">
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mb-6 border border-blue-500/20">
            <span className="text-blue-400 font-medium">
              Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-6xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Tomiwa Raheem
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 dark:text-gray-400 mb-8">
            Fullstack Developer
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-12 max-w-2xl leading-relaxed">
            Crafting elegant solutions to complex problems — but only after
            TypeScript approves. I build scalable web apps with strong opinions,
            strict types, and zero tolerance for `any` (because `any` is not a
            lifestyle choice). Passionate about clean code, predictable bugs,
            and user experiences that compile on the first try.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => setActiveTab("projects")}
              className="px-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
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

      <section className="">
        <h2 className="text-2xl font-bold mb-12 text-center">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="bg-gray-800/50 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <h3 className="text-md font-bold mb-4 text-blue-400">
                {skillGroup.category}
              </h3>
              <div className="space-y-2">
                {skillGroup.items.map((skill, i) => (
                  <div
                    key={i}
                    className="text-gray-300 dark:text-gray-400 flex items-center"
                  >
                    <span className="w-2 h-2 text-sm bg-blue-500 rounded-full mr-3"></span>
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
};

export default Home;
