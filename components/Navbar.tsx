import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { GitMerge } from "lucide-react";

const NavItem: React.FC<{ to: string; label: string; isActive: boolean }> = ({
  to,
  label,
  isActive,
}) => (
  <Link
    to={to}
    className={`text-sm font-medium transition-colors duration-300 ${
      isActive
        ? "text-black dark:text-white"
        : "text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
    }`}
  >
    {label}
  </Link>
);

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100/50 dark:border-gray-800/50 transition-colors duration-300">
        <div className="flex items-center gap-2">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="text-xl font-serif font-semibold tracking-tight text-gray-900 dark:text-gray-100 relative z-50"
          >
            <GitMerge />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 bg-gray-50/50 dark:bg-gray-900/50 px-6 py-2 rounded-full border border-gray-100 dark:border-gray-800">
          <NavItem to="/" label="Home" isActive={location.pathname === "/"} />
          <NavItem
            to="/projects"
            label="Projects"
            isActive={location.pathname === "/projects"}
          />
          <NavItem
            to="/work"
            label="Work"
            isActive={location.pathname === "/work"}
          />
          <NavItem
            to="/uses"
            label="Uses"
            isActive={location.pathname === "/uses"}
          />
          <NavItem
            to="/gallery"
            label="Gallery"
            isActive={location.pathname === "/gallery"}
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 relative z-50"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="mailto:31aniket.singh@gmail.com"
              className="bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg shadow-gray-200 dark:shadow-none"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white p-2 relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-950 md:hidden flex flex-col items-center justify-center animate-fade-in">
          <div className="flex flex-col space-y-8 text-center">
            <Link
              to="/"
              className={`text-3xl font-serif ${
                location.pathname === "/"
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-500"
              }`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`text-3xl font-serif ${
                location.pathname === "/projects"
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-500"
              }`}
            >
              Projects
            </Link>
            <Link
              to="/work"
              className={`text-3xl font-serif ${
                location.pathname === "/work"
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-500"
              }`}
            >
              Work
            </Link>
            <Link
              to="/uses"
              className={`text-3xl font-serif ${
                location.pathname === "/uses"
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-500"
              }`}
            >
              Uses
            </Link>
            <Link
              to="/gallery"
              className={`text-3xl font-serif ${
                location.pathname === "/gallery"
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-500"
              }`}
            >
              Gallery
            </Link>

            <div className="pt-8">
              <a
                href="mailto:31aniket.singh@gmail.com"
                className="inline-block bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-8 py-3 rounded-full text-lg font-medium shadow-xl"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
