import React, { useState } from "react";
import '../Styles/Header.css'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

function Header() {
    const [toggle, setToggle] = useState(false);
    return(
                <nav className="app_navbar">
                   

                    <ul className="app_navbar-links">
                        {['home', 'projects', 'skills', 'about', 'contact'].map((item) => (                            
                            <li className="app_flex p-text" key={`link-${item}`}>
                                <a href={`#${item}`}>{item}</a>
                            </li>
                        ))}
                    </ul>
                    <div className='app__social'>
                        <div>
                            <a href='https://www.linkedin.com/in/henry-arlt/' target={'_blank'} alt='LinkedIn' rel="noreferrer">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                        <div>
                            <a href='https://github.com/Henry3646' target={'_blank'} alt='GitHub' rel="noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>

                    <div className="app_navbar-menu">
                        <HiMenuAlt4 onClick={() => setToggle(true) }/>

                        {toggle && (
                            <motion.div
                                whileInView={{x: [300,0] }}
                                transition={{duration: 0.85, ease: 'easeOut'}}
                            >
                                <HiX onClick={() => setToggle(false)}/>
                                <ul>
                                    {['home', 'projects', 'skills', 'about', 'contact'].map((item) => (                            
                                        <li key={item}>
                                            <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </div>
                </nav>
    )
}

export default Header