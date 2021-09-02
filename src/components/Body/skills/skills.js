import Separator from '../../common/separator/separator';
import React from 'react'
import { SkillsData } from '../../data/SkillData';
import "./skills.css"
import SkillCard from './skillcard';



const Skills = () => {
    const data = SkillsData;
    return (
        <div className="skillls">
            <Separator />
            <label  className="section-title">Skills</label>
            <div className="skills-container">
                {data.map(item => (
                    <div className="skills-section">
                        <label className="skills-section-title">{item.type}</label>
                        <div className="skills-list">
                            {item.list.map( skill => (
                                <SkillCard skill={skill}/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;