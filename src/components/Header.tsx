import { Menu, Moon, Sun, X } from "lucide-react";
import type { HeaderType } from "../constants/_index";

const Header = ({
  setActiveTab,
  activeTab,
  darkMode,
  setDarkMode,
  mobileMenuOpen,
  setMobileMenuOpen,
}: HeaderType) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            TR
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {["home", "about", "projects", "contact", "artifacts"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`capitalize font-medium transition-colors relative cursor-pointer ${
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
              ),
            )}
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
            {["home", "about", "projects", "contact", "artifacts"].map(
              (tab) => (
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
              ),
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
