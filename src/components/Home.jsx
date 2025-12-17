import { useState } from "react";

export default function Home() {
  const email = "sumitfop@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy email");
    }
  };

  return (
    <section id="home" className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* LEFT – PHOTO + NAME */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="relative w-32 h-32 md:w-36 md:h-36">
              <div className="absolute inset-0 rounded-full bg-indigo-500/40 blur-2xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-indigo-400 shadow-xl">
                <img
                  src="/assets/OIP.jpg"
                  alt="Sumit Roy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="text-lg font-semibold">Sumit Roy</p>
              <p className="text-sm text-gray-400">Software Engineer</p>
              <p className="text-xs text-gray-500">
                B.Tech CSE &bull; Anurag University (2021–2025)
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className="w-full md:w-2/3">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-indigo-400 mb-3">
            Software Engineer &bull; MERN Developer &bull; DevOps
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Hi, I&apos;m <span className="text-indigo-400">Sumit Roy</span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3">
            I&apos;m a B.Tech CSE graduate from Anurag University, focused on
            building clean and reliable software. I enjoy working with Java,
            JavaScript and modern web technologies.
          </p>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
            I&apos;ve built projects like a real-time chatting app and a donation
            app. I&apos;m comfortable working as a Software Engineer, MERN
            developer, or DevOps-focused engineer using tools like Docker,
            Kubernetes, Linux, AWS, Git, Postman and Jenkins, with strong DSA
            skills in Java.
          </p>

          {/* FOCUS AREAS */}
          <div className="mb-7">
            <h2 className="text-xs font-semibold tracking-wide text-gray-400 uppercase mb-3">
              Focus areas
            </h2>
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
              {[
                "Java & DSA",
                "MERN Stack",
                "DevOps (Docker & Kubernetes)",
                "Linux & AWS",
                "Git & CI/CD",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <a
              href="/Sumit_Roy_Resume.pdf"
              download
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white shadow-lg shadow-indigo-500/30 transition"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg border border-gray-600 text-gray-200 hover:border-indigo-400 hover:text-indigo-300 transition"
            >
              View Projects
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <a
              href="https://github.com/sumitroy01"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-300 transition"
            >
              GitHub
            </a>

            <span className="opacity-40">•</span>

            <a
              href="https://www.linkedin.com/in/sumitroyfop"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-300 transition"
            >
              LinkedIn
            </a>

            <span className="opacity-40">•</span>

            {/* EMAIL + COPY */}
            <div className="group inline-flex items-center gap-2">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-300 transition"
              >
                {email}
              </a>

              <button
                onClick={copyEmail}
                className="opacity-0 group-hover:opacity-100 transition text-xs px-2 py-1 rounded bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
