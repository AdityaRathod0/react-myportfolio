import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";


const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <>
      <Navbar />

      <Suspense fallback={<h2 style={{ padding: 40 }}>Loading...</h2>}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </Suspense>
    </>
  );
}

export default App;
