import React from "react";

import "./Resume.css"

const Resume = () => {
    return (
        <div className="resume">
            <h3>Resume</h3>

            <div className="resume-intro">
                <p>JavaScript developer with a background in finance, sales, and marketing. Passionate about learning and collaborating with others to develop creative and effective solutions to bring designs to life and deliver a seamless user experience.</p>
            </div>

            <div className="">
                <h4>Technical Skills</h4>
                <ul>
                    <li>
                        <span className="bold">Languages: </span> JavaScript, HTML, CSS, SQL
          </li>

                    <li>
                        <span className="bold">Tools & FrameWorks: </span> React, Node, jQuery, SASS, Git, GitHub, NPM, Yarn, Redux, JSON,
            MongoDB, Express, Superagent, AJAX, APIs, Mongoose, Postman, REST,
            Google Firebase, Heroku, Visual Studio Code
          </li>

                    <li>
                        <span className="bold">Additonal:</span> Photoshop, Illustrator, Sketch, SEO
          </li>
                </ul>
            </div>

            <div className="">
                <h4>Education</h4>
                <ul>
                    <li>
                        <span className="bold">Code Fellows</span>, Seattle, WA, April 2020
            <ul>
                            <li>
                                Certificate - Advanced Software Development in Full-Stack
                                JavaScript
              </li>
                        </ul>
                    </li>
                    <li>
                        <span className="bold">University of Idaho</span>, Moscow, ID, May
            2014
            <ul>
                            <li>B.S. General Studies</li>
                            <li>Minor in Advertising</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="">
                <h4>Expereince</h4>
                <ul>
                    <li>
                        <span className="bold">Influencer Performance Marketing,</span> June
            2020 - Dec 2020 |{" "}
                        <span className="italic">Front End Developer - Freelance</span>
                        <ul>
                            <li className="bulleted-li">
                                Designed and implemented updated mobile-responsive frontend
                                website for improved user interface
              </li>
                            <li className="bulleted-li">
                                Utilize HTML, CSS, Javascript with an existing Python code base
              </li>
                        </ul>
                    </li>

                    <li>
                        <span className="bold">Code Fellows,</span> June 2020 - Dec 2020 |{" "}
                        <span className="italic">Teaching Assistant</span>
                        <ul>
                            <li className="bulleted-li">
                                Provide technical assistance to software development students in
                                web development using Javascript, CSS, HTML, and Git workflows
              </li>
                        </ul>
                    </li>

                    <li>
                        <span className="bold">Lightning Law,</span> June 2020 - Dec 2020 |{" "}
                        <span className="italic">Front End Developer - Freelance</span>
                        <ul>
                            <li className="bulleted-li">
                                Coded design mockups for mobile-responsive marketing website
              </li>
                            <li className="bulleted-li">Utilized HTML, CSS, JavaScript, jQuery</li>
                        </ul>
                    </li>

                    <li>
                        <span className="bold">Guild Mortgage Company,</span> August 2016 -
            December 2019 |{" "}
                        <span className="italic">Loan Officer Assistant</span>
                        <ul>
                            <li className="bulleted-li">
                                Acted as the primary point of contact for customers throughout
                                their loan process
              </li>
                            <li className="bulleted-li">
                                Collected, reviewed, and analyzed documentation to find
                                solutions that would fit customer goals
              </li>
                            <li className="bulleted-li">
                                Discussed product features with customers to create and
                                customize actionable solutions
              </li>
                        </ul>
                    </li>

                    <li>
                        <span className="bold">Guild Mortgage Company,</span> August 2015 -
            August 2016 |{" "}
                        <span className="italic">Front End Developer - Freelance</span>
                        <ul>
                            <li className="bulleted-li">
                                Coordinated and executed monthly networking events with referral partners
              </li>
                            <li className="bulleted-li">Created and implemented marketing collateral</li>
                            <li className="bulleted-li">
                                Built and maintained an online presence through SEO workflows
              </li>
                        </ul>
                    </li>

                    <li>
                        <span className="bold">Porch.com,</span> March 2015 - July 2015 |{" "}
                        <span className="italic">Local Market Specialist</span>
                        <ul>
                            <li className="bulleted-li">
                                Contacted home improvement professions in efforts to communicate the opportunity to be featured as a contractor
              </li>
                            <li className="bulleted-li">
                                Consulted and listened to the needs of customers to match Porch products that would help to meet their needs and objectives
              </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="">
                <h4>Projects</h4>
                <ul>
                    <li><span className="bold">Coders Living Instant Journal</span>, April 2020
                  <ul>
                            <li> <span className="outside-link" onClick={() => window.open("https://cli-journal.web.app/")}>Deployed Website</span> | <span className="outside-link" onClick={() => window.open("https://github.com/Coders-Living-Instant-Work-Journal?language=javascript")}>GitHub Repository</span> </li>
                            <li className="bulleted-li">Full-stack note taking app including a terminal client, backend API, frontend web app and email scheduling</li>
                            <li className="bulleted-li">JavaScript, Sass, React, Redux, Inquirer, Superagent, Google Firebase</li>
                        </ul>
                    </li>

                    <li><span className="bold">Lunchbox,</span>, January 2020
                  <ul>
                            <li> <span className="outside-link" onClick={() => window.open("https://codefellows-lunchbox.herokuapp.com/")}>Deployed Website</span> | <span className="outside-link" onClick={() => window.open("github.com/Codefellows-Team-GET/lunchbox")}>GitHub Repository</span> </li>
                            <li className="bulleted-li">Web app geared towards locating and rating lunch options in the area</li>
                            <li className="bulleted-li">JavaScript, CSS, SQL, EJS, Express, Heroku, Yelp API, Mapbox API</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <button className="gdrive-button" onClick={() => window.open("https://docs.google.com/document/d/1tNZG_X6guDh-A93qtJHV6ly-nMWcNVVc4-d86V_ARMw/edit?usp=sharing")}>Click to view full resume</button>

            </div>

        </div>
    );
};

export default Resume;
