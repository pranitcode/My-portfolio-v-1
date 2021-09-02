import React from 'react';
import "./BlogCard.css";
// import { Link } from "react-router-dom";

const BlogCard = ({ blogcard }) => {
    return (
        <div className="BlogCSS">
            <div className="Blog-card">
                <div className="blog-right-side">
                   <a rel="noopener noreferrer"  target="_blank" href={blogcard.url}> <h4>{blogcard.BlogName}<span> <i class="fas fa-external-link-alt iconblog"></i></span></h4></a>
                 
                    <p>{blogcard.AboutBlog}</p>
                </div>
                <div className="blog-left-side">
                
                    <h4>{blogcard.Date}</h4>
                </div>
            </div>
        </div>
    );
};


export default BlogCard;
