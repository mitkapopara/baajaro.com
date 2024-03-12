import React from "react";
import "../styles/HomePage.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Hello, I'm Meet</h1>
        <p>I'm a Professional. Welcome to my portfolio!</p>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
    </div>
  );
}

export default HomePage;
