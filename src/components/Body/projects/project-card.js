import React from "react";
import "./project-card.css";
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-content">
        <div className="right-side">
          <h4>{ project.project}</h4>
          <p>{ project.about}</p>
          <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
              <i class="fas fa-external-link-alt"></i>
              Demo
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="link-button">
              <i class="fab fa-github"></i>github
              </div>
            </a>
          )}
        </div>
        </div>
        <div className="left-side">
          <h4>{ project.date}</h4>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

