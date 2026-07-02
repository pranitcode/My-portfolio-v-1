import React from 'react';
import SocialContact from '../../common/social-contact/SocialContact';
import "./about.css";


const About = () => {
    return (
        <div id="about">
              <div  className="about">
            <div className="about-top">
                <div className="about-info">

                    <h1>👋Hay I'am Pranit.</h1>
                  
              <p className="about-para" >
I am a full-stack developer ⚡ and a passionate learner 💡 who is always eager to learn and work across different technologies and domains.
I love exploring new technologies. 🔍 </p>

                  </div>
                <div className="about-photo">
                    <img src={require("../../../assets/mypic5.png").default} className="picture" alt="" />
                </div>
            </div>
            <div className="abouut-bottom">
              <SocialContact/>
            </div>
            
        </div>
      </div>
    )
}

export default About
