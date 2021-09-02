
import React from 'react'
import "./BlogPage.css";
import Header from '../Header/Header';
import { Blogdata } from '../data/BlogData';
import BlogCard from './BlogCard';
import Contact from '../Body/contact/contact';


const BlogPage = () => {
 
    const data = Blogdata;


    return (
        <div id="blog">
             <div className="blogPage">
        <Header/>
            <div className="blogCSS">
                <h4>Blog</h4>
              <p>I write about things I learn in Web Development </p>  
            </div>
        {data.map((blogcard) => {
                    return <BlogCard blogcard={blogcard}/>
        })}
            <Contact />
        </div>
        </div>
    )
}

export default BlogPage
