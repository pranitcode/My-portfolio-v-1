import React from 'react'
import Contact from '../Body/contact/contact';
import ProjectCard from '../Body/projects/project-card';
import { ProjectData } from '../data/projectdata'
import Header from '../Header/Header';



import "./ProjectPage.css";



const ProjectPage = () => {

    const data  = ProjectData
    return (


        <div className="projectPage">
            <Header />
            <div className="blogCSS">
                <h4>Projects</h4>
              <p>Collection of my Projects.</p>  
            </div>
        <div className="gridContainer">
        {data.map((project) => {
                    return <ProjectCard project={project}/>
        })}
                

            </div>
            <Contact />
    
        </div>
    )
}

export default ProjectPage;
