import React from "react";
import SkillsSection from "./SkillsSection";
import ProjectSection from "./ProjectSection";
import RecommendationSection from "./RecommendationSection";
import Title from "./Title";
import About from "./About";

function HomePage() {
  return (
    <div>
      <Title name="Harsha Kumari" leadText="I am freelancer from India" />
      <RecommendationSection />
      <SkillsSection />
      <ProjectSection />
      <About />
    </div>
  );
}

export default HomePage;
