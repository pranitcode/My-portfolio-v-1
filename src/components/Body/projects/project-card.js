import React from "react";
import "./project-card.css";


function ProjectCard({ project }) {

  // console.log(project.id);



  return (
    <div  className="project-card">
      <div className="project-content">
        <div className="right-side">
  
    
          <div className="projIMG">
          
            <img src={project.Image} alt="" />
         
          
            
            
          </div>
         
         <div className="project-links">
            <div className="projTwoLinks">

            {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
              <i className="fas fa-external-link-alt"></i>
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
            <div className="projNUM">
              {project.project}
            </div>
          </div>
          

        </div>



      </div>
    </div>
  );
}

export default ProjectCard;

