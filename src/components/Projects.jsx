// src/components/Projects.jsx
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* HEADER */}
        <div className="mb-10 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-400 mb-2">
            Projects
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
            Things I've built
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
            A collection of my most meaningful MERN stack and DevOps projects.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* -------------------- Donation App -------------------- */}
          <div className="rounded-2xl bg-gray-900/60 border border-gray-800 p-6 shadow-md">
            <h3 className="text-xl font-semibold text-white mb-2">
              Donation App (MERN + Razorpay)
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              A full-stack donation system where users can register, browse donation 
              requests, and donate securely using Razorpay (test mode). Created with 
              authentication, dashboards, and a modern UI.
            </p>

            <div className="text-xs text-gray-300 mb-4 flex flex-wrap gap-2">
              {["React", "Node.js", "MongoDB", "Express", "Razorpay", "JWT Auth"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://donate-v2.onrender.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm transition"
              >
                <FiExternalLink /> Live Demo
              </a>

              <a
                href="https://github.com/sumitroy01/Donate-v2"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-gray-300 hover:text-white text-sm transition"
              >
                <FiGithub /> GitHub
              </a>

              <a
                href="https://hub.docker.com/r/sumitroy161/donate-app"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-gray-300 hover:text-white text-sm transition"
              >
                <FiExternalLink /> Docker Hub
              </a>
            </div>

            <div className="mt-5 text-xs text-gray-500">
              <p>Kubernetes deployment applied</p>
              <p>Jenkins CI/CD pipeline integrated</p>
            </div>
          </div>

          {/* -------------------- Chatting App -------------------- */}
          <div className="rounded-2xl bg-gray-900/60 border border-gray-800 p-6 shadow-md">
            <h3 className="text-xl font-semibold text-white mb-2">
              Real-time Chatting App (Sockets)
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              A real-time chat application where users can log in, see all registered
              users, chat one-on-one, and share images. Built with WebSockets for 
              real-time message updates.
            </p>

            <div className="text-xs text-gray-300 mb-4 flex flex-wrap gap-2">
              {["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT Auth"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://testzone-ob6b.onrender.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm transition"
              >
                <FiExternalLink /> Live Demo
              </a>

              <a
                href="https://github.com/sumitroy01/chatapp-v2"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-gray-300 hover:text-white text-sm transition"
              >
                <FiGithub /> GitHub
              </a>

               <a
                href="https://hub.docker.com/r/sumitroy161/chat-app"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-gray-300 hover:text-white text-sm transition"
              >
                <FiExternalLink /> Docker Hub
              </a>

            </div>
          </div>

          {/* -------------------- DevOps Case Study -------------------- */}
          <div className="rounded-2xl bg-gray-900/60 border border-gray-800 p-6 shadow-md lg:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-2">
              DevOps Pipeline & Deployment Case Study
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Implemented a full CI/CD pipeline using Jenkins and deployed the Donation 
              App using Kubernetes on a containerized architecture. Automated builds, 
              Docker image creation, and rolling updates.
            </p>

            <div className="text-xs text-gray-300 mb-4 flex flex-wrap gap-2">
              {[
                "Docker",
                "Kubernetes",
                "Jenkins",
                "AWS EC2",
                "Docker Hub",
                "CI/CD Automation",
              ].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://hub.docker.com/your-dockerhub"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm transition"
              >
                <FiExternalLink /> Docker Hub
              </a>

              <a
                href="https://github.com/sumitroy01/Devops-Kubernetes"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-gray-300 hover:text-white text-sm transition"
              >
                <FiGithub /> GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
