import React from 'react';
import "./Body.css";

import About from './about/about';
import Contact from './contact/contact';
import Work from './work/work';
import Project from './projects/project';
import Skills from './skills/skills';
import Footer from '../Footer/Footer';
import Blog from './Blog/Blog';



const body = () => {
    return (
        <div className="body">
            <section id="about">
                <About />
            </section>
            <section id="project">
                <Project />
            </section>
            <section id="skills">
                <Skills />
            </section>

            <section id="Blogs">
                <Blog />
            </section>

            <section id="work">
                <Work />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <section id="footer">
                <Footer />
            </section>
        </div>
    );
}

export default body
