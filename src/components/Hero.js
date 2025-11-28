import React from "react";
import hero from "../assets/hero.jpg";



function Hero() {
  return (
    <section className="hero">
      <div className="text">
        <h1>Hello, I'm Aditya</h1>
        <p>Frontend Developer</p>
      </div>

      <img src={hero} alt="Hero" className="hero-img" loading="lazy" />
    </section>
  );
}

export default Hero;
