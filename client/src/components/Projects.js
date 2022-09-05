import React, { useState, useEffect} from "react";
import { motion } from 'framer-motion';
import '../Styles/Projects.css';
import {MotionWrap } from './wrapper'
import axios from "axios"

function Projects() {
    const [projects, setProjects] = useState([
        {
            name: "",
            description: "",
            techStack: "",
            githubRepo: "",
            liveLink: "",
            imgLink: ""
          }
      ])
    
      useEffect(() => {
        axios
        .get("/projects")
        .then((res) => {
            
            setProjects(res.data)
        })
        .catch((err) => console.log(err));
      }, [])


    return(
        <div className="app_projects-container app__padding" id="projects">
            <h2 className="app_projects-header head-text">Projects</h2>
            <div className="app_projects-map app__flex">
                <motion.div className="app_project-list app__flex">
                    {projects.map(project => {
                        return(
                            <motion.div
                            whileInView={{opacity: [0, 1]}}
                            transition={{duration: 0.5}}
                            className="app_project-item app__flex"
                            key={project.name}
                            >
                                <div className="container app__flex">
                                    <h2>{project.name}</h2>
                                    <div className="project-container app__flex">    
                                        <div className="project-img">
                                            <img src={project.imgLink} key={project.name} name={project.name} alt={project.name} />
                                        </div>
                                        <div className="project-text app__flex">
                                            <div className="project-description app__flex">
                                                <div className="project-title">Summary</div>
                                                <div className="description">{project.description}</div>
                                            </div>
                                            <div className="project-tech app__flex">
                                                <div className="tech-title">Technologies</div>
                                                <div className="tech">{project.techStack}</div>
                                            </div>
                                            <div className="project-links app__flex">
                                                <a href={project.githubRepo} target={'_blank'} rel="noreferrer">
                                                    <i className="fa-brands fa-github"></i>
                                                </a>
                                                <a href={project.liveLink} target={'_blank'} rel="noreferrer">
                                                    <i className="fa-solid fa-link"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
            
        </div>
    )
}

export default 
    MotionWrap(Projects, 'app_projects')
