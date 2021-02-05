import React, { useState } from "react";

// import activeTile from '../../../Hooks/activeTile'

import "../../Tiles/Tiles.css"
import "./About.css";

import Resume from './Resume/Resume'

//Build Preview

//Build Full View

//Add on Click Functionality



const About = (props) => {

    if (props.active === "preview") {
        return (
            //     //PREVIEW
            <div className={`prev-container ${props.addClassName}`
            }onClick={() => {
                props.tileName('about')
                props.viewFunction("full-view")
                props.toggleClass("hide")

            }}>
                <h4>About Cait</h4>
                <div className="headshot" />
                <button className="view-button">Learn More</button>
            </div>
        )
    }
    if (props.active === "full-view") {
        return (
            //FULL VIEW
            <div className={`full-container ${props.addClassName}`}>
                <button className="view-button"
                    onClick={() => {
                        props.viewFunction("preview", "")
                        props.toggleClass("show")
                        props.tileName('about')

                    }}
                > Return to Home</button>
                <h3>About Cait</h3>
                <div className="full-view-left">
                    <div className="headshot" />
                </div>
                <div className="full-view-right">
                    <p>
                        Cait was raised in the Seattle Washington area and attended the University of Idaho where she earned her bachelor's degree. During her time at Idaho, she competed as a Division I Track and Field athlete and was a member of Pi Beta Phi. </p>
                    <p>
                        For a little over 4 years, Cait worked in the mortgage industry in both a marketing capacity and as a loan officer assistant. Over the years, she was able to improve upon her analytical and problem solving skills while anticipating customer needs and providing a high level of customer service. After some time, she took a step back to look at her growth opportunites and reevaluated waht she wanted to do.</p>

                    <p> 
                        In October of 2019, Cait began attending Code Fellows to develope the skills needed to become a software developer. During her time there, she was able to improve upon her problem solving skills while bringing in her creative side. She completed her certificate for Advanced Software Development in Full-Stack JavaScript in April 2020.</p>
                    <p>
                        What draws Cait to this industry and what sparks her passion is the endless learning possibilities. No matter how much you already know, there is more to learn, skills to improve on and new ways to challenge yourself and to be a part of an industry that is changing the world is really exciting.</p>
                </div>

                <div className="resume-container">
                    <Resume />
                </div>
            </div >
        )
    }
};



export default About;
