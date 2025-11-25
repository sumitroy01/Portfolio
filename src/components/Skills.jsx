// src/components/Skills.jsx
import React from "react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 border-t border-gray-800/60"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="mb-10 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-400 mb-2">
            Skills
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
            Technologies & concepts I work with
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
            I focus on practical software engineering with strong fundamentals in
            systems, along with experience across web development and DevOps.
          </p>
        </div>

        {/* GRID OF CATEGORIES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Theory / CS Fundamentals */}
          <div className="rounded-2xl bg-gray-900/60 border border-gray-800 p-5 shadow-md">
            <h3 className="text-sm font-semibold text-gray-200 mb-2">
              CS Fundamentals
            </h3>
            <p className="text-xs text-gray-400 mb-3">
              Strong theoretical base useful for system design and interviews.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                "Data Structures & Algorithms",
                "System Design (basics)",
                "Operating Systems",
                "Computer Networks",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Languages & Core */}
          <div className="rounded-2xl bg-gray-900/60 border border-gray-800 p-5 shadow-md">
            <h3 className="text-sm font-semibold text-gray-200 mb-2">
              Languages & Core Programming
            </h3>
            <p className="text-xs text-gray-400 mb-3">
              Comfortable writing clean, maintainable code.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {["Java", "JavaScript", "DSA in Java"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="rounded-2xl bg-gray-900/60 border border-gray-800 p-5 shadow-md">
            <h3 className="text-sm font-semibold text-gray-200 mb-2">
              Frontend / UI
            </h3>
            <p className="text-xs text-gray-400 mb-3">
              Building responsive, modern web interfaces.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                "React",
                "HTML",
                "CSS",
                "JavaScript",
                "Tailwind CSS",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Backend & Database */}
          <div className="rounded-2xl bg-gray-900/60 border border-gray-800 p-5 shadow-md">
            <h3 className="text-sm font-semibold text-gray-200 mb-2">
              Backend & Database
            </h3>
            <p className="text-xs text-gray-400 mb-3">
              Comfortable with building and testing backend APIs.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {["Node.js", "MongoDB", "Postman"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* DevOps & Cloud */}
          <div className="rounded-2xl bg-gray-900/60 border border-gray-800 p-5 shadow-md">
            <h3 className="text-sm font-semibold text-gray-200 mb-2">
              DevOps & Cloud
            </h3>
            <p className="text-xs text-gray-400 mb-3">
              Experience with containerization, CI/CD and cloud basics.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                "Docker",
                "Kubernetes",
                "Jenkins",
                "AWS",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Workflow */}
          <div className="rounded-2xl bg-gray-900/60 border border-gray-800 p-5 shadow-md">
            <h3 className="text-sm font-semibold text-gray-200 mb-2">
              Tools & Workflow
            </h3>
            <p className="text-xs text-gray-400 mb-3">
              Day-to-day tools I use for development and collaboration.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {["Linux", "Git", "GitHub"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
