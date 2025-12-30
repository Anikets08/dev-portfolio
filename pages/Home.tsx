import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  BookOpen,
  Twitter,
} from "lucide-react";
import { SOCIALS } from "../constants";

export const Home: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 px-4 sm:px-6 bg-paper dark:bg-darkPaper">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      {/* Main Content */}
      <div className="z-10 w-full max-w-6xl px-2 sm:px-6 animate-fade-in relative">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src="/aniket.jpeg"
                alt="Aniket"
                className="hidden md:block md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-3xl object-cover shadow-2xl border-4 border-gray-200 dark:border-gray-700"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-transparent to-gray-900/10 dark:to-white/10 pointer-events-none" />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="text-center lg:text-left flex-1">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-gray-900 dark:text-gray-50 tracking-tight leading-[1.1] mb-8">
              Shipping full-stack softwares <br />
              <span className="italic font-light text-gray-500 dark:text-gray-400">
                from prototype to production.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto lg:mx-0 leading-relaxed mb-10">
              I'm{" "}
              <span className="text-gray-900 dark:text-white font-medium font-mono">
                Aniket
              </span>
              , a full-stack engineer who ships end-to-end products. Worked with
              startups across Bengaluru, Boston, Lisbon, Copenhagen, Dublin and
              Paris . I focus on reliability, performance, and fast iteration
              from first prototype to production launch.
            </p>
            {/* Buttons and Social Links */}
            <div className="mt-12">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                <Link
                  to="/projects"
                  className="group relative inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full text-base font-medium overflow-hidden transition-all hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-105 w-full lg:w-auto justify-center"
                >
                  <span>View Projects</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                <a
                  href="/aniket-resume.pdf"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-900 transition-all hover:border-gray-300 dark:hover:border-gray-600 w-full lg:w-auto justify-center"
                >
                  <Download size={18} />
                  <span>Resume</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center mb-4">
                {SOCIALS.map((social) => {
                  const icon =
                    social.icon === "github"
                      ? Github
                      : social.icon === "linkedin"
                      ? Linkedin
                      : social.icon === "x"
                      ? Twitter
                      : BookOpen;

                  const IconComp = icon;

                  return (
                    <a
                      key={social.url}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <IconComp
                        size={18}
                        className="group-hover:scale-110 transition-transform"
                      />
                      <span className="text-sm font-medium">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
