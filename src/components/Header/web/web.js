import React from 'react'
import "./web.css"
import { Link } from 'react-router-dom'

const Web = () => {
    return (
        <div className="web">
          
            <div className="web-option">
            <a href="#about"><Link to="/">Home</Link></a>
           </div>
           <div className="web-option">
           <a href="#projects"><Link to="/project">projects</Link></a>
           </div>
           <div className="web-option">
           <a href="#blog"><Link to="/blog">Blog</Link></a>
           </div>
           <div className="web-option">
                <a href="#contact">contact</a>
           </div>
           
        </div>
    )
}

export default Web
