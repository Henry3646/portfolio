import React, { useState } from "react";
import  { MotionWrap, AppWrap } from './wrapper'
import '../Styles/ContactMe.css'
import axios from "axios"

function ContactMe() {

    const [input, setInput] = useState({
        name: '',
        email: '',
        content: ''
    })

    const [formsubmitted, setFormsubmitted] = useState(false)
    function handleChange(e) {
        const {name, value} = e.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(e) {
        e.preventDefault();

        const newContact = {
            name: input.name,
            email: input.email,
            content: input.content
        }
        axios.post('/create', newContact)
        setFormsubmitted(true)
    }

    return(
        <div id="contact">
            <div className="app_footer app__flex app__padding">
            <h2 className="head-text">Wanna chat? Send me a message</h2>
            <div className="app_footer-cards app__flex">
                <div className="app_footer-card">
                    <img src={require('./images/email.png')} alt='email'></img>
                    <a href="mailto:arlthenry54@gmail.com" className="p-text" target={'_blank'} rel="noreferrer">arlthenry54@gmail.com</a>
                </div>
                <div className="app_footer-card">
                    <img src={require('./images/phone.png')} alt='phone'></img>
                    <a href="tel: +1 (763) 354-4331" className="p-text" target={'_blank'} rel="noreferrer">+1 (763) 354-4331</a>
                </div>
                {!formsubmitted ? 
                <div className="app_footer-form app__flex">
                <form className="app__flex">
                    <div className="app__flex">
                        <input onChange={handleChange} name="name" className="p-text" placeholder="Your Name" value={input.name}></input>
                    </div>
                    <div className="app__flex">
                        <input onChange={handleChange} name="email" className="p-text" placeholder="Your Email" value={input.email}></input>
                    </div>
                    <div className="app__flex">
                        <textarea onChange={handleChange} name="content" className="p-text" placeholder="Your Message" value={input.content}></textarea>
                    </div>
                    <button onClick={handleClick} className="p-text">Send Message</button>
                    </form>
                    </div>
                    : 
                    <div className="app__flex head-text formsubmitted">
                        Thank you for sending me a message! 
                      </div>
                    }

                
               
            </div>
        </div>
        </div>
    )
}

export default AppWrap(MotionWrap(ContactMe, 'app_ContactMe'))