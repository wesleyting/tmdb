import React from 'react';

const d = new Date();
const y = d.getFullYear();

const Footer = () => (
    <footer>
        <p>&copy; {y} | Reel Talk</p>
        <p>Created by <a href="http://asham.bcitwebdeveloper.ca/">Aaron Sham</a>, <a href="http://ckang.bcitwebdeveloper.ca/">Cassidy Kang</a>, <a href="http://wting.bcitwebdeveloper.ca/">Wesley Ting</a></p>
    </footer>
);

export default Footer;