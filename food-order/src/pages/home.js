import React from 'react';
import banner from "../assets/background.jpg"
import {Button} from "@mui/material";
import {Link} from "react-router-dom"
import "../style/home.css"

const Home = () => {
    return (
        <div className={"home"} style={{backgroundImage: `url(${banner})`}}>
            <div className={"headerContainer"}>
                <h1>CIH</h1>
                <p>Indonesian Software At Click</p>
                <Link>
                    <Button>Buy Now</Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;