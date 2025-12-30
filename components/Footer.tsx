import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 text-center border-t border-gray-100 dark:border-gray-800 mt-auto bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm">
      <p className="text-gray-400 dark:text-gray-500 text-sm font-serif italic">
        Designed with elegance. Built with precision.
      </p>

      <p className="mt-2 text-xs text-gray-300 dark:text-gray-700">
        © {new Date().getFullYear()} Aniket Singh. All rights reserved.
      </p>
    </footer>
  );
};
