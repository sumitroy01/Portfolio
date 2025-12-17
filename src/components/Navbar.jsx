import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LEFT — LOGO + NAME */}
        <div className="flex items-center gap-3 select-none">
          <div className="h-9 w-9 flex items-center justify-center bg-indigo-600 text-white font-bold rounded-md shadow">SR</div>
          <span className="text-xl font-bold text-white tracking-wide">
            Sumit Roy
          </span>
        </div>

        {/* RIGHT — LINKS */}
        <nav className="flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
        </nav>

      </div>
    </header>
  );
}
