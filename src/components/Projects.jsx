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
            Things I've Built
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
            Full-stack and DevOps-focused projects built with scalability,
            automation, and production-grade architecture in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ================= DONATION APP ================= */}
          <div className="rounded-2xl bg-gray-900/60 border border-gray-800 p-6 shadow-md">
            <h3 className="text-xl font-semibold text-white mb-2">
              Donation Platform — MERN Stack
            </h3>

            <p className="text-sm text-gray-400 mb-4">
              A full-featured donation platform enabling users to register, browse
              causes, and donate securely. Built with scalable backend architecture,
              role-based access, and payment integration.
            </p>

            <div className="text-xs text-gray-300 mb-4 flex flex-wrap gap-2">
              {[
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "JWT Authentication",
                "Razorpay",
              ].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 text-xs text-gray-500 space-y-1">
              <p>✔ Designed normalized MongoDB schemas (Users, Donations, Campaigns)</p>
              <p>✔ Secure auth with JWT, protected routes & role-based access</p>
              <p>✔ Integrated payment verification & webhook handling</p>
              <p>✔ Dockerized backend & frontend services</p>
              <p>✔ Kubernetes deployment with persistent volumes for MongoDB</p>
            </div>

            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://donate-v2.onrender.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm"
              >
                <FiExternalLink /> Live Demo
              </a>

              <a
                href="https://github.com/sumitroy01/Donate-v2"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-gray-300 hover:text-white text-sm"
              >
                <FiGithub /> GitHub
              </a>

              <a
                href="https://hub.docker.com/r/sumitroy161/donate-app"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-gray-300 hover:text-white text-sm"
              >
                <FiExternalLink /> Docker Hub
              </a>
            </div>
          </div>

          {/* ================= CHAT APP ================= */}
          <div className="rounded-2xl bg-gray-900/60 border border-gray-800 p-6 shadow-md">
            <h3 className="text-xl font-semibold text-white mb-2">
              Real-Time Chat Application
            </h3>

            <p className="text-sm text-gray-400 mb-4">
              A real-time messaging platform supporting private chats, authentication,
              and live message delivery using WebSockets.
            </p>

            <div className="text-xs text-gray-300 mb-4 flex flex-wrap gap-2">
              {[
                "React",
                "Node.js",
                "Socket.io",
                "MongoDB",
                "JWT Auth",
                "REST APIs",
              ].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 text-xs text-gray-500 space-y-1">
              <p>✔ Designed real-time message flow using Socket.IO</p>
              <p>✔ Optimized MongoDB schema for chat & message indexing</p>
              <p>✔ Secure authentication & session handling</p>
              <p>✔ Dockerized services for local & cloud deployment</p>
            </div>

            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://testzone-ob6b.onrender.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm"
              >
                <FiExternalLink /> Live Demo
              </a>

              <a
                href="https://github.com/sumitroy01/chatapp-v2"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-gray-300 hover:text-white text-sm"
              >
                <FiGithub /> GitHub
              </a>

              <a
                href="https://hub.docker.com/r/sumitroy161/chat-app"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-gray-300 hover:text-white text-sm"
              >
                <FiExternalLink /> Docker Hub
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-gray-900/60 border border-gray-800 p-6 shadow-md lg:col-span-2">
          

            <h3 className="text-xl font-semibold text-white mt-2 mb-2">
              CI/CD Pipeline with Docker & Kubernetes
            </h3>

            <p className="text-sm text-gray-400 mb-4">
              End-to-end DevOps workflow implementing automated build, test, and deployment
              pipelines using Jenkins, Docker, and Kubernetes for multiple microservices.
            </p>

            <div className="text-xs text-gray-300 mb-4 flex flex-wrap gap-2">
              {[
                "Docker",
                "Docker Compose",
                "Kubernetes (Kind)",
                "Jenkins",
                "GitHub Webhooks",
                "CI/CD Automation",
                "Microservices Architecture",
              ].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 text-xs text-gray-500 space-y-1">
              <p>✔ Git push triggers Jenkins pipeline automatically</p>
              <p>✔ Docker images built, tagged, and pushed to Docker Hub</p>
              <p>✔ Kubernetes manifests manage deployments, services & volumes</p>
              <p>✔ Rolling updates with zero downtime deployments</p>
              <p>✔ Environment isolation using ConfigMaps & Secrets</p>
            </div>

            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://hub.docker.com/r/sumitroy161"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm"
              >
                <FiExternalLink /> Docker Hub
              </a>

              <a
                href="https://github.com/sumitroy01/Devops-Kubernetes"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-gray-300 hover:text-white text-sm"
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
