import React from 'react'

import './Contact.css'

import linkedIn from '../../../Assets/imgs/linkedinicon.png'
import github from '../../../Assets/imgs/github.png'

import { ContactForm } from './ContactForm'



const Contact = () => {

    return (

        <div className="contact">
            {/* <h3>Contact</h3> */}
                <ContactForm />
                <div className="icons-section">
                <img className="linkedIn contact-icon" src={linkedIn} alt={'linkedin'} onClick={() => window.open("https://www.linkedin.com/in/caitrowland/")} />
                
                    <img className="gitHub contact-icon" src={github} alt={'github'} onClick={() => window.open("https://github.com/caitleigh")} />
                </div>
        </div>
    )
}

export default Contact;