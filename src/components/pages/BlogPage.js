
import React from 'react'
import "./BlogPage.css";
import Header from '../Header/Header';
import { Blogdata } from '../data/BlogData';
import BlogCard from './BlogCard';
import Contact from '../Body/contact/contact';


const BlogPage = () => {
 
    const data = Blogdata;


    return (
        <div className="blogPage">
        <Header/>
            <div className="blogCSS">
                <h1>Blog</h1>
              <p>I write about things I learn in Web Development and also stuff that I find interesting.</p>  
            </div>
        {data.map((blogcard) => {
                    return <BlogCard blogcard={blogcard}/>
        })}
            <Contact />
        </div>
    )
}

export default BlogPage
