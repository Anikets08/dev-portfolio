import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      <div className="relative z-10 mb-24 animate-fade-in">
        <h1 className="font-serif text-5xl md:text-6xl text-gray-900 dark:text-white mb-8 tracking-tight">Selected Work</h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
          A curated selection of products, tools, and experiments I've built across web, AI, and mobile.
        </p>
      </div>

      <div className="relative z-10 flex flex-col">
        {PROJECTS.map((project, idx) => (
          <a
            key={project.id}
            href={project.link}
            className="group relative border-t border-gray-100 dark:border-gray-800 py-12 md:py-16 first:border-t-0 transition-colors hover:bg-gray-50/30 dark:hover:bg-white/5 -mx-6 px-6 rounded-2xl animate-fade-in"
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
              {/* Tags / Meta Column */}
              <div className="md:w-48 flex-shrink-0 pt-1">
                <span className="font-mono text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.tags.join(' • ')}
                </span>
              </div>

              {/* Content Column */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center justify-between group-hover:translate-x-1 transition-transform duration-300 ease-out">
                  <h3 className="text-2xl md:text-3xl font-serif text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.link && project.link !== '#' && (
                    <ArrowUpRight
                      className="text-gray-300 dark:text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                      size={20}
                    />
                  )}
                </div>

                <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-light max-w-2xl">
                  {project.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};