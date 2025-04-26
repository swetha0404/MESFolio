import React from "react";

import dropoutforecaster from '../assets/images/projects/dropoutThumbnail.png';
import dcmwebsite from '../assets/images/projects/dcmwebsite.png';
import hacksprint from '../assets/images/projects/hacksprint.png';
import aiml4se from '../assets/images/projects/aiml4se.png';
import wplwebsite from '../assets/images/projects/wpl-website.png';


import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project"> {/*1*/}
                <div> <img src={aiml4se} className="zoom" alt="thumbnail" width="100%" /> </div>
                <div> <h2>Repo-level Bug Detection Pipeline</h2> </div>
                <p> During my research assistantship at AI/ML4SE Lab @UTD, I developed a Multimodal LLM powered pipeline augmented with automated creation of code visualizations such as call graphs, control flow graphs, and dataflow graphs. This pipeline can be used to detect and fix bugs in code repositories. <i>This project is confidential.</i></p>
            </div>
            {/* <div className="project"> 
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>High Speed Chase</h2></a>
                <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
            </div> */}
            {/* <div className="project"> 
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Astro Raiders</h2></a>
                <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
            </div> */}
            {/* <div className="project"> 
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div> */}
            <div className="project"> {/*5*/}
                <a href="https://github.com/swetha0404/grocerystore" target="_blank" rel="noreferrer"><img src={wplwebsite} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/swetha0404/grocerystore" target="_blank" rel="noreferrer"><h2>Grocery Store</h2></a>
                <p>This web application was built with very old tech stack - HTML, CSS, PHP, Javascript and MySQL. This project helped me understand the basics of web development and how to create a website from scratch.</p>
            </div>
            <div className="project"> {/*6*/}
                <a href="https://github.com/swetha0404/DCM-website" target="_blank" rel="noreferrer"><img src={dcmwebsite} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/swetha0404/DCM-website" target="_blank" rel="noreferrer"><h2>React.js Web App</h2></a>
                <p>Recreated work done during Software Development internship at DCM Datalabs. This project is hosted on Render and code is available on Github.</p>
            </div>
            {/* <div className="project"> 
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div> */}
            <div className="project"> {/*8*/}
                <a href="https://github.com/swetha0404/Hacksprint_Webscraping/" target="_blank" rel="noreferrer"><img src={hacksprint} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/swetha0404/Hacksprint_Webscraping/" target="_blank" rel="noreferrer"><h2>Webscraping project for Hackathon</h2></a>
                <p>Designed and developed an automated pipeline for web scraping using Python and Selenium. It has an interactive GUI that allows user to select particular date and scrape data from multiple given websites accordingly. Certificate is available in My Documents section.</p>
            </div>
            <div className="project"> {/*9*/}
                <a href="https://github.com/swetha0404/Dropout-Forecaster" target="_blank" rel="noreferrer"><img src={dropoutforecaster} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/swetha0404/Dropout-Forecaster" target="_blank" rel="noreferrer"><h2>Student Dropout Forecaster</h2></a>
                <p>Created a forecasting model with XGBoost to predict student dropping out. Several visualization were created to understand the data and make data driven decisions for efficient results.</p>
            </div>
            {/* <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Fall Detection and Prediction</h2></a>
                <p>Created ensembled model for fall detection and prediction using Inertial Measurement Unit data. Papers were published for both components which are provided below in the Documents section.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;