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
                    <p>Hi, I'm Henry. I'm a Computer Engineering and Computer Science student at the University of St. Thomas.
                    Originally, I was only studying Computer Engineering. It was only when I took an Object-Oriented Programming course I discovered a
                    new passion for Development and Software Engineering. Since then, I have been taking every chance I can get to expand
                    my knowledge and skills in both fields. Whether it's taking summer courses through my University, learning web development with The Odin Project, or taking self-paced courses 
                    online. If I get to learn something new and exciting, I'm in!</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MotionWrap(About, 'app__about')