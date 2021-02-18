import React, { useState } from 'react'
import './Portfolio.css'

//Tiles
import About from '../Tiles/About/About'
import Bacchus from '../Tiles/Bacchus/Bacchus'
import TBD from '../Tiles/TBD/TBD'

import Contact from '../Tiles/Contact/Contact'



const Portfolio = (props) => {

    let [activeView, setActive] = useState('preview')

    function setView(tile) {
        setActive(tile);
    }


    let [aboutView, setAboutView] = useState('')

    function aboutActive(viewName) {
        console.log(viewName)
        setTBDView(viewName)
        setBacchusView(viewName)
        setContactView(viewName)

    }

    let [tbdView, setTBDView] = useState('')


    // function hideTBD(viewName) {
    //     setTBDView(viewName)
    //     setAboutView(viewName)
    // }

    let [baccusView, setBacchusView] = useState('')


    function activeBacchus(viewName) {
        setTBDView(viewName)
        setAboutView(viewName)
        setContactView(viewName)
    }
    
    let [contactView, setContactView] = useState('')






    //TO DO: 
        //1: Build About Me Tile (on click goes from preview to full view)
        //2: Import to this page and make sure on click works properly  
        //3: Do same for projects

    return (
        <div className="homePage">
            <div className="tiles"> 
                <About
                    active={activeView}
                    // tileName={setTile}
                    viewFunction={setView}
                    addClassName={aboutView}
                    toggleClass={aboutActive}
                />
                <Bacchus
                    active={activeView}
                    viewFunction={setView}
                    addClassName={baccusView}
                    toggleClass={activeBacchus}
                />
                
                <TBD
                    addClassName={tbdView}
                />

            </div>
            <Contact
                addClassName={contactView}
            />
            </div>

    )
}

export default Portfolio;