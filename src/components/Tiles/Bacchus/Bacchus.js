import React, { useState } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

import './Bacchus.css'


//Images for carosel 
import HomeBefore from '../../../Assets/imgs/bacchus-screenshots/home-before.png';
import HomeAfter from '../../../Assets/imgs/bacchus-screenshots/home-after.png';
import MenuAfter from '../../../Assets/imgs/bacchus-screenshots/menu-after.png'
import InfluencersBefore from '../../../Assets/imgs/bacchus-screenshots/influencers-before.png'
import InfluencersAfter from '../../../Assets/imgs/bacchus-screenshots/influencers-after.png'
import SignUpBefore from '../../../Assets/imgs/bacchus-screenshots/sign-up-before.png'
import SignUpAfter from '../../../Assets/imgs/bacchus-screenshots/sign-up-after.png'
import LoginBefore from '../../../Assets/imgs/bacchus-screenshots/login-before.png'
import LoginAfter from '../../../Assets/imgs/bacchus-screenshots/login-before.png'



const items = [
    {
        src: HomeBefore,
        altText: 'Home Page Before',
        header: "Before",
        caption: '',
        key: 1
    },
    {
        src: HomeAfter,
        altText: 'Home Page After',
        header: "After",
        caption: '',
                key: 2

    },
    {
        src: MenuAfter,
        altText: 'Menu After',
        header: "After",
        caption: '',
        key: 3
    },

    {
        src: InfluencersBefore,
        altText: 'Influencers Page Before',
        header: "Before",
        caption: '',
        key: 4
    },
    {
        src: InfluencersAfter,
        altText: 'Influencers Page After',
        header: "After",
        caption: '',
        key: 5
    },
    {
        src: SignUpBefore,
        altText: 'Sign Up Page Before',
        header: "Before",
        caption: '',
        key: 6
    },
    {
        src: SignUpAfter,
        altText: 'Sign Up Page After',
        header: "After",
        caption: '',
        key: 7
    },
    {
        src: LoginBefore,
        altText: 'Login Page Before',
        header: "Before",
        caption: '',
        key: 8
    },
    {
        src: LoginAfter,
        altText: 'Login Page After',
        header: "After",
        caption: '',
        key: 9
    }
];


const Bacchus = (props) => {



    //preview

    if (props.active === "preview") {
        return (
            //     //PREVIEW
            <div className={`prev-container ${props.addClassName}`}
            onClick={() => {
                props.viewFunction("full-view")
                props.toggleClass("hide")

            }}>
                <h4>Bacchus Influencer Platform</h4>
                <button className="view-button">Learn More</button>
            </div>
        )
    }



    //FULL VIEW

    if (props.active === "full-view") {
        return (
            //FULL VIEW
            <div className={`full-container ${props.addClassName}`}>
                <button className="view-button"
                    onClick={() => {
                        props.viewFunction("preview", "")
                        props.toggleClass("show")
                    }}
                > Return to Home</button>
                <h3>Bacchus Influencer Platform</h3>
                {/* CAROSLE OF BEFORE/AFTER PHOTOS */}
                <UncontrolledCarousel className="carousel" items={items} />
                {/* AN ABOUT THE PROJECT BLURB */}
            </div >
        )
    }


}

export default Bacchus;