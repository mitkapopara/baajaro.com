import React, { useState } from "react";
import "../styles/MyJourney.css"; // Ensure you update the CSS accordingly

const experiences = [
  {
    icon: "fas fa-university",
    title: "Bachelor's in Information Technology",
    location: "Silver Oak University",
    description:
      "Learned the fundamentals of information technology, focusing on software development, network architecture, and database management.",
    detailedInfo: "...",
  },
  {
    icon: "fas fa-graduation-cap",
    title: "Master's in Software Engineering",
    location: "University of West London, UK",
    description:
      "Advanced studies in software engineering principles, including software development methodologies, advanced programming concepts, and project management. While studying, worked part-time as a bartender, enhancing my communication skills and ability to work in fast-paced environments.",
    detailedInfo: "...",
  },
  {
    icon: "fas fa-briefcase",
    title: "Internship at Satva Softtech",
    location: "",
    description:
      "6-month internship where I was involved in developing and maintaining software solutions, contributing to team projects, and improving my coding skills in a professional setting.",
    detailedInfo: "...",
  },
];

function MyJourney() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleExpandClick = (index) => {
    if (selectedExperience === index) {
      setSelectedExperience(null); // Toggle close if it's already open
    } else {
      setSelectedExperience(index);
    }
  };

  return (
    <div className="my-journey">
      <h2>My Journey</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <i className={exp.icon}></i>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <p>{exp.location}</p>
              <p>{exp.description}</p>
              <button onClick={() => handleExpandClick(index)}>
                {selectedExperience === index ? "Less" : "More"}
              </button>
              {selectedExperience === index && (
                <div className="detailed-info">{exp.detailedInfo}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyJourney;
