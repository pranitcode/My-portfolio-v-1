import React from 'react'
import "./web.css"
import { Link } from 'react-router-dom'

const Web = () => {
    return (
        <div className="web">
          
            <div className="web-option">
            <Link to="/">Home</Link>
           </div>
           <div className="web-option">
           <Link to="/project">Projects</Link>
           </div>
           <div className="web-option">
           <Link to="/blog">Blog</Link>
           </div>
           <div className="web-option">
                <a href="#contact">Contact</a>
           </div>
           
        </div>
    )
}

export default Web
