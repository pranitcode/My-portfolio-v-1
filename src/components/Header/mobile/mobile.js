import React from 'react';
import "./mobile.css";


const Mobile = ({ isOpen, setIsOpen }) => {
    
    return (
        <div className="mobile">

            <div className="close-icon">
            <i className="fas fa-times" onClick={()=> {setIsOpen(!isOpen)}} ></i>


            </div>
        <div className="mobile-options">
            <div className="mobile-option">
                <a href="#projects">projects</a>
           </div>
           <div className="mobile-option">
                <a href="#skill">skills</a>
           </div>
           <div className="mobile-option">
                <a href="#work">work</a>
           </div>
           <div className="mobile-option">
                <a href="#contact">contact</a>
           </div>
            </div>
        </div>
    )
}

export default Mobile
