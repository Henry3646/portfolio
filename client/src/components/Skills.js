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
        axios.get("/")
        .then(res => res.json())
        .then(jsonRes => setSkills(jsonRes))
        .catch((err) => console.log(err));
      }, [])
    
      useEffect(() => {
        console.log(skills)
      }, [skills])

    return(
        <div className="app_skills app__padding" id="skills">
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
    )
}

export default AppWrap(
    MotionWrap(Skills, 'app_skills'))