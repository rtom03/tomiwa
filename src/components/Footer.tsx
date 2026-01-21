import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div>
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
};

export default Footer;
