import React from 'react';
import Separator from '../../common/separator/separator';
import { ProjectData } from '../../data/projectdata';
import ProjectCard from './project-card';
import "./project.css";
import {Link} from  "react-router-dom"





const Project = () => {
    const data = ProjectData;

    const projdata = data.filter(proj => proj.show === true );


    return (
    <div>
        <div className="projects">
            <Separator/>
            <label className="section-title">Projects</label>
            <div className="projectGrid" >
                {projdata.map((project) => {
                    return <ProjectCard project={project}/>
                })}
            </div>
           
        </div>
            <br />
            <br />
            <center><div className="moreproject"><Link to="/project">see more</Link> </div></center>
            <br />
            <br />
     </div>
    )
}

export default Project

