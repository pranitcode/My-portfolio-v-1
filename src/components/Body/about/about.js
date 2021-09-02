import React from 'react';
import SocialContact from '../../common/social-contact/SocialContact';
import "./about.css";


const About = () => {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">

                    <h1>👋Hay I'am Pranit.</h1>
                  
                    <p className="about-para" >I am an Engineering Student and I have a keen interest in software development.
                        I'm a self-taught ReactJS front-end Developer.
                        I enjoy learning new languages and skills from online courses.Other than coding,
                        I love to do music and  traveling
                    </p>

                  </div>
                <div className="about-photo">
                    <img src={require("../../../assets/mypic3.png").default} className="picture" alt="" />
                </div>
            </div>
            <div className="abouut-bottom">
              <SocialContact/>
            </div>
            
        </div>
    )
}

export default About
