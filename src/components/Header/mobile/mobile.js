import React from 'react';
import "./mobile.css";
import { Link } from 'react-router-dom';


const Mobile = ({ isOpen, setIsOpen }) => {
    
    return (
        <div className="mobile">

            <div className="close-icon">
            <i className="fas fa-times" onClick={()=> {setIsOpen(!isOpen)}} ></i>
            </div>

            <div className="mobile-options">
                
            <div className="mobile-option">
                <a href="#about"><Link to="/">Home</Link></a>
            </div>
                
                <div className="mobile-option">
                <a href="#projects"><Link to="/project">projects</Link></a>
               
           </div>
                <div className="mobile-option">
                <a href="#blog"><Link to="/blog">Blog</Link></a>
                
           </div>
    
           <div className="mobile-option">
                <a href="#contact">contact</a>
           </div>
            </div>
        </div>
    )
}

export default Mobile
