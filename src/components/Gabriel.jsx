import React from "react";
import github_icon from "../assets/github_icon_no_background.svg";
import linkedIn_icon from "../assets/linkedin-icon.svg";
import './Gabriel.css';

function Gabriel(){
    return(
        <div className="profile">
            <div className="title">
            <h1 className="main-title">Gabriel Lisboa</h1>
            <h4 className="sub-title">Back-end developer</h4>

            <div className="social">
                <a href="http://github.com/Ga5000" target="_blank"><img src={github_icon} alt="github"/></a>
                <a href="https://www.linkedin.com/in/gabriel-lisboa05/" target="_blank"><img src={linkedIn_icon} alt="linkedIn" /></a>
            </div>
            </div>
        </div>
    )
}

export default Gabriel