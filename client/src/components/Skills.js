import React, { useState, useEffect} from "react";
import { motion } from 'framer-motion';
import '../Styles/Skills.css';
import { AppWrap,MotionWrap } from './wrapper'
import axios from "axios"


function Skills() {
    const [skills, setSkills] = useState([
        {
            name: "",
            url: ""
          }
      ])
    
      useEffect(() => {
        axios
        .get("/skills")
        .then((res) => {
            
            setSkills(res.data)
        })
        .catch((err) => console.log(err));
      }, [])

    return(
        <div id="skills">
        <div className="app_skills app__padding" >
            <h2 className="app_skills-header head-text">Skills & Technologies</h2>
            <div className="app_skills-container">
                <motion.div className="app_skills-list">
                    {skills.map(skill => {
                        return(
                            <motion.div
                            whileInView={{opacity: [0, 1]}}
                            transition={{duration: 0.5}}
                            className="app_skills-item app__flex"
                            key={skill.name}
                            >
                                <div className="app__flex">
                                    <img key={skill.name} src={skill.url} alt={skill.name} name={skill.name} />
                                </div>
                                <p className="p-text">{skill.name}</p>
                            </motion.div>
                        )
                 })}
                        
                </motion.div>
            </div>
        </div>
        </div>
    )
}

export default AppWrap(
    MotionWrap(Skills, 'app_skills'))