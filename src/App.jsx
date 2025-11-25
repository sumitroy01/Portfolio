import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./index.css";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100">
      <Navbar />
      <main className="pt-16">
        <Home />
        <Skills />
      <Projects/>
      </main>
    </div>
  );
}

export default App;
