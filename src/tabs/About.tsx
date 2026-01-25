import { experience } from "../constants";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-5xl font-bold mb-8 bg-linear-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
        About Me
      </h1>
      <div className="space-y-8">
        <div className="bg-gray-800/50 dark:bg-gray-900/50 p-8 rounded-xl border border-gray-700">
          <p className="text-lg text-gray-300 dark:text-gray-400 leading-relaxed mb-6">
            Hello 🖐️ — welcome to my little corner of the internet. Consider
            this a friendly console.log("Nice to meet you! 😊").
          </p>
          <p className="text-lg text-gray-300 dark:text-gray-400 leading-relaxed mb-6">
            I’m a software engineer who enjoys turning coffee ☕ into well-typed
            solutions. My stack includes HTML, CSS, JavaScript, TypeScript
            (because any is not a lifestyle choice), Node.js, Python, C#,
            ASP.NET, and both collection databases (MongoDB) and relational
            databases (SQL / NoSQL / PostgreSQL). I use Git religiously—small
            commits, meaningful messages, and no force-pushes to main (The
            Pragmatic Programmer would approve).
          </p>
          <p className="text-lg text-gray-300 dark:text-gray-400 leading-relaxed">
            I strongly believe in a few pragmatic truths:
          </p>
          <br />
          <p className="text-lg text-gray-300 dark:text-gray-400 leading-relaxed">
            DRY: If I see the same logic twice, I refactor before it multiplies.
          </p>
          <br />
          <p className="text-lg text-gray-300 dark:text-gray-400 leading-relaxed">
            Tracer bullets: I build working slices early, because running code
            beats perfect diagrams.
          </p>
          <br />
          <p className="text-lg text-gray-300 dark:text-gray-400 leading-relaxed">
            Broken windows: I fix small issues before they turn into “legacy
            code” by Friday.
          </p>
          <br />
          <p className="text-lg text-gray-300 dark:text-gray-400 leading-relaxed">
            I enjoy solving complex problems efficiently—breaking them down,
            typing them safely (thanks, TypeScript), and shipping maintainable
            solutions instead of clever nightmares. From product development and
            distribution to long-term maintenance, I aim to leave every codebase
            cleaner than I found it.
          </p>
          <br />
          <p className="text-lg text-gray-300 dark:text-gray-400 leading-relaxed">
            I’m open and available to start immediately, with flexibility for
            full-time, hybrid, or part-time work across time zones. If you’re
            looking for someone who values clean code, practical solutions, and
            a bit of humor in pull-request comments—you’ll be satisfied with the
            results.
          </p>
          <br />
          <p className="text-lg text-gray-300 dark:text-gray-400 leading-relaxed">
            Looking forward to connecting and building something fun (and
            production-ready) together 🚀 Thank you.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Experience</h2>
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
                  <span className="text-gray-500 text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
