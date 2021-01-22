import React from "react";

import "./About.css";

//Build Preview

//Build Full View

//Add on Click Functionality

const About = () => {
  // return (

  //     //PREVIEW
  //     <div className="about-prev-container">
  //         <h4>About Cait</h4>
  //         <div className="headshot" />
  //         <p>Learn More</p>
  //     </div>
  // )

  return (
    //FULL VIEW
    <div className="about-full-container">
      <h3>About Cait</h3>
      <div className="full-view-left">
        <div className="headshot" />
      </div>
      <div className="full-view-right">
        <p>
          I come from a background in finance, sales and marketing. For a little
          over 4 years I worked in the mortgage industry in both a marketing
          capacity as well as a loan officer assistant, which helped me improve
          on my analytical and problem solving skills as well as anticipating
          customer needs. After awhile, things started to get stagnant and there
          were limited growth opportunities for me outside of becoming a loan
          officer so I took a step back to reevaluate what I wanted to do and
          what I wanted my future to look like.
        </p>

        <p>
          I’ve always been kind of techy so I decided to take a crash course in
          coding and was immediately hooked. I love that it helps me improve
          upon my problem solvings skills and that I can also bring in my
          creative side with front-end development while collaborating with
          others on new ideas and challenging myself on a daily basis.
        </p>

        <p>
          What really drew me to this industry and what sparked that passion in
          me again is the endless learning possibilities. No matter how much you
          already know, there is more to learn, skills to improve on and new
          ways to challenge yourself and to be a part of an industry that is
          changing the world is really exciting.
        </p>
      </div>
    </div>
  );
};

export default About;
