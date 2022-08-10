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
            <div className="projcss">
                <span>HTMl & CSS Projects.</span> 
                <span>15 Projects</span>
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
