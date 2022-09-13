import React from "react";
import '../Styles/About.css'
import { MotionWrap} from './wrapper'

function About() {
    return (
        <div id="about">
        <div className="app_about app__flex app__padding">
            <h2 className="head-text">About Me</h2>
            <div className="app_about-container">
                <div className="app_about-text">
                    <p>Hi, I'm Henry. I'm a Computer Science student at the University of St. Thomas.
                    Recently, I switched majors from Computer Engineering to Computer Science in order to pursue my true passion for programming.
                    When I'm not in school, I love to learn new skills, languages, and technologies. 
                    I then put those skills to use and implement them into my personal projects.
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MotionWrap(About, 'app__about')