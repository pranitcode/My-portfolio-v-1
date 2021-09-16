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
                <Link to="/">Home</Link>
            </div>
                
                <div className="mobile-option">
                <Link to="/project">projects</Link>
               
           </div>
                <div className="mobile-option">
                <Link to="/blog">Blog</Link>
                
           </div>
    
           <div className="mobile-option">
                <a href="#contact">contact</a>
           </div>
            </div>
        </div>
    )
}

export default Mobile
