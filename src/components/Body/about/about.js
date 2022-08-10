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
                I am a Full-Stack Developer⚡. I am passionate learner 💡 who's always willing to learn and work across technologies and domains .
                I love to explore new technologies 🔍  and leverage them to solve real-life problems. ✨ Apart from that i love to 🌏 traval and sing songs. 💻 </p>

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
