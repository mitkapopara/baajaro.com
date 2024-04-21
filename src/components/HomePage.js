import React from "react";
import SkillsSection from "./SkillsSection";
import ProjectSection from "./ProjectsSection";
import HeroSection from "./HeroSection";
import MyJourney from "./MyJourney";

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
      <MyJourney />
    </div>
  );
}

export default HomePage;
