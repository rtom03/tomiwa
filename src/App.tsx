import { useState, useEffect } from "react";
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
import Footer from "./components/Footer";
import { experience, projects, skills } from "./constants";
import About from "./tabs/About";
import Projects from "./tabs/Projects";
import Contact from "./tabs/Contact";
import Home from "./tabs/Home";
import Header from "./components/Header";

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

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home setActiveTab={setActiveTab} />;

      case "about":
        return <About />;

      case "projects":
        return <Projects />;

      case "contact":
        return <Contact />;

      default:
        return null;
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-950 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Header */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-24 pb-12">
        {renderContent()}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
