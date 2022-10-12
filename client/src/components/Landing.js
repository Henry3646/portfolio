import React from "react";
import '../Styles/Landing.css';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from './wrapper'
function Landing() {

    return(
        
        <div className="app_landing-contianer" id="home">
            <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 1.5}}
            >
            <div className="app_landing-intro">
                <div className="app-landing-intro-text">Hi, I'm Henry!<br />
                    I'm a <span className="colored-text">Full-Stack Developer</span> 
                    <br />and <span className="colored-text">Computer Science Student</span>.
                </div>
                
                <div className="app_landing-buttons">
                <div className="app_landing-hireme">
                    <a href={`#contact`} >Hire Me</a>
                </div>
                <div>
                <a className="app_landing-hireme" href='https://storage.googleapis.com/henry-portfolio-bucket/HenryArlt_Resume.pdf' target={'_blank'} alt='Resume' rel="noreferrer">
                    Resume
                </a>
                </div>
        </div>
                
            </div>

            <div className="app_landing-memoji">
                <img src={require('./images/memoji.png')} alt="MeMoji"></img>
            </div>
            </motion.div>
        </div>
    )
}

export default AppWrap(
    MotionWrap(Landing, 'app__landing'))