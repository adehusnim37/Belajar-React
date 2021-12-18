import React from 'react';
import "../style/about.css"

import AboutImage from "../assets/about.jpg"

const About = () => {
    return (
        <div className={"about"}>
            <div className={"aboutTop"} style={{backgroundImage: `url(${AboutImage})`}}>

            </div>
            <div className={"aboutBottom"}>
                <p>We develop, create, build and everything in your live</p>
            </div>
        </div>
    );
};

export default About;