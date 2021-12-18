import React from 'react';

import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import "../style/footer.css"

const Footer = () => {
    return (
        <div className={"footer"}>
            <div className={"socialMedia"}>
                <InstagramIcon />
                <FacebookIcon />
                <TwitterIcon />
                <LinkedInIcon />
            </div>
            <p>
                &copy; Copyright CIH
            </p>
        </div>
    );
};

export default Footer;