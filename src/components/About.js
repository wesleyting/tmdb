import React from 'react';
import TMDBLogo from '../images/tmdb-logo.svg';
import {  motion } from 'framer-motion';

const About = () => (
    <motion.main
    exit={{ opacity: 0 }} 
    animate={{ opacity:1 }} 
    initial={{ opacity:0 }}>
        <div className="about">
            <div className="about-image">
            <div className="header-text">
                    <h1>What is Reel Talk? </h1>
                    <p>Learn more about the website and the team behind it.</p>
                </div>
            </div>
            <div className="about-content">
                <div className="about-info">
                    <h2>About the Project</h2>
                    <p>Reel Talk is a dynamic movie database website that lets users discover movies based on different categories, as well as allowing them to save their favourite ones. Reel Talk credits The Movie Database (TMDB) as the source for its data.</p>
                    <a href="https://www.themoviedb.org/"><div className="tmdb-img"><img src= {TMDBLogo} alt="TMDB Logo" /></div></a>
                    <p className="tmdb-img-attr">This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
                </div>
                <div className="about-info">
                    <h2>About the Team</h2>
                    <p><a href="http://asham.bcitwebdeveloper.ca/">Aaron Sham</a>, <a href="http://ckang.bcitwebdeveloper.ca/">Cassidy Kang</a>, and <a href="http://wting.bcitwebdeveloper.ca/">Wesley Ting</a> are the team behind Reel Talk. Currently, each member is enrolled in BCIT's Technical Web Designer program, where they are studying to become web designers/developers. Reel Talk is a collaborative project demonstrating the team's practical knowledge of React.js and accessing data from API keys.</p>
                </div>
            </div>
        </div>
    </motion.main>
);

export default About;