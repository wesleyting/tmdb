import React from 'react';
import TMDBLogo from '../images/tmdb-logo.svg';

const About = () => (
    <main>
        <h1 className="about-h1">Welcome to Reel Talk!</h1>
        <div className="about-content">
            <div className="about-info">
                <h2>About the Project</h2>
                <p>Reel Talk is a dynamic movie database website that allows users to discover movies based on different categories, as well as allowing users to saving their favourite ones. Reel Talk credits The Movie Datbase (TMDB) as the source for its data.</p>
                <div className="tmdb-img"><img src= {TMDBLogo} /></div>
            </div>
            <div className="about-info">
                <h2>About the Team</h2>
                <p><a href="http://asham.bcitwebdeveloper.ca/">Aaron Sham</a>, <a href="http://ckang.bcitwebdeveloper.ca/">Cassidy Kang</a>, and <a href="http://wting.bcitwebdeveloper.ca/">Wesley Ting</a> are the team behind Reel Talk. Currently, each member is enrolled in BCIT's Technical Web Designer program, where they are studying to become web designers/developers. Reel Talk is a collaborative project demonstrating the team's practical knowledge of React.js and accessing data from API keys.</p>
            </div>
        </div>
    </main>
);

export default About;