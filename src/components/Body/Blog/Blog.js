import React from 'react';
import Separator from '../../common/separator/separator';
import { Blogdata } from '../../data/BlogData';
import BlogCard from '../../pages/BlogCard';
import {Link} from 'react-router-dom'
import "./Blog.css";


const Blog = () => {
    const data = Blogdata;

    const projdata = data.filter(proj => proj.show === true );


    return (
    <div>
        <div className="projects">
            <Separator/>
            <label className="section-title">Blog</label>
            <div className="GridBlog">
                {projdata.map((blogcard ) => {
                    return <BlogCard blogcard ={blogcard} />
                    

                })}
            </div>
           
        </div>
            <br />
            <br />
            <center><div className="moreproject"><a href="#blog"><Link to='/blog'>see more</Link></a></div></center>
            <br />
            <br />
     </div>
    )
}

export default Blog

