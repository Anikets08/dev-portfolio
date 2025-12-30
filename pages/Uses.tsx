import React from 'react';
import { USES } from '../constants';

export const Uses: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      <div className="relative z-10 mb-24 animate-fade-in">
        <h1 className="font-serif text-5xl md:text-6xl text-gray-900 dark:text-white mb-8 tracking-tight">Uses</h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
           A curated collection of the hardware, software, and tools that power my daily workflow.
        </p>
      </div>

      <div className="relative z-10 space-y-24 pb-20">
        {USES.map((category, idx) => (
          <div 
            key={category.title} 
            className="animate-fade-in" 
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-10 pl-1">
              {category.title}
            </h2>
            
            <div className="flex flex-col">
              {category.items.map((item) => (
                <div 
                  key={item.name}
                  className="group relative flex flex-col md:flex-row md:items-center justify-between py-6 border-t border-gray-100 dark:border-gray-800 last:border-b cursor-default transition-all hover:bg-gray-50/50 dark:hover:bg-white/5 hover:px-6 hover:-mx-6 rounded-xl"
                >
                  <div className="flex flex-col gap-1">
                      <span className="text-2xl md:text-3xl font-serif text-gray-900 dark:text-gray-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                        {item.name}
                      </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};