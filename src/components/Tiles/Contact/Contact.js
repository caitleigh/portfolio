import React from 'react'

import './Contact.css'

import linkedIn from '../../../Assets/imgs/linkedinicon.png'
import github from '../../../Assets/imgs/github.png'

import { ContactForm } from './ContactForm'



const Contact = (props) => {

    let classNameOptions = [props.addClassName, "contact", "icons-section", "linkedIn", "contact-icon", "gitHub"];

    let iconDivClass = ''

    let newClassName = ''

    let linkedInClass = ''
    
    let gitHubClass = ''

    let h3Class = ''

    if (props.addClassName === "hide") {
         newClassName = classNameOptions.join[0]
        iconDivClass = classNameOptions.join[0]
        linkedInClass = classNameOptions[0]
        gitHubClass = classNameOptions[0]
        h3Class = classNameOptions[0]

    } else {
        newClassName = classNameOptions[1]
        iconDivClass = classNameOptions[2]
        linkedInClass = [classNameOptions[3], classNameOptions[4]].join().replace(',', ' ')
        gitHubClass = [classNameOptions[5], classNameOptions[4]].join().replace(',', ' ')
    }

    return (

        <div className={ newClassName }>
            <h3 className={h3Class}>Contact</h3>
            <ContactForm hideClassName={classNameOptions[0]}/>
            <div className={iconDivClass} >
                <img className={linkedInClass} src={linkedIn} alt={'linkedin'} onClick={() => window.open("https://www.linkedin.com/in/caitrowland/")} />
                
                <img className={gitHubClass} src={github} alt={'github'} onClick={() => window.open("https://github.com/caitleigh")} />
                </div>
        </div>
    )
}

export default Contact;