import React, { useState } from "react";
import "../styles/ProjectsSection.css";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        {/* You can include more detailed information here */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Project 1",
      description: "A brief description of Project 1.",
      technologies: ["JavaScript", "React"],
      demoLink: "https://example.com/project1-demo",
      codeLink: "https://github.com/yourusername/project1",
    },
    {
      name: "Project 2",
      description: "A brief description of Project 2.",
      technologies: ["JavaScript", "React"],
      demoLink: "https://example.com/project1-demo",
      codeLink: "https://github.com/yourusername/project1",
    },
    {
      name: "Project 3",
      description: "A brief description of Project 3.",
      technologies: ["JavaScript", "React"],
      demoLink: "https://example.com/project1-demo",
      codeLink: "https://github.com/yourusername/project1",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3 onClick={() => openModal(project)}>{project.name}</h3>
          <p>{project.description}</p>
          <div className="project-links">
            <a
              href={project.demoLink}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a
              href={project.codeLink}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>
      ))}
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </div>
  );
}

export default ProjectSection;
