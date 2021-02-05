import React, { useState } from 'react'
import './Portfolio.css'

//Tiles
import About from '../Tiles/About/About'
import Bacchus from '../Tiles/Bacchus/Bacchus'
import TBD from '../Tiles/TBD/TBD'

import Contact from '../Tiles/Contact/Contact'



const Portfolio = (props) => {

    let [activeView, setActive] = useState('preview')
    
    let [activeTile, setActiveTile] = useState('')

    // let [addClassName, setClassName] = useState('')


    function setView(tile) {
        setActive(tile);
    }

    function setTile(tileName) {
        setActiveTile(tileName)
    }

    let [aboutView, setAboutView] = useState('')

    function aboutActive(viewName) {
        setTBDView(viewName)
        setBacchusView(viewName)

    }

    let [tbdView, setTBDView] = useState('')


    function hideTBD(viewName) {
        setTBDView(viewName)
        setAboutView(viewName)
    }

    let [baccusView, setBacchusView] = useState('')


    function activeBacchus(viewName) {
        setTBDView(viewName)
        setAboutView(viewName)    }


    console.log('activeTile', activeTile)


    //TO DO: 
        //1: Build About Me Tile (on click goes from preview to full view)
        //2: Import to this page and make sure on click works properly  
        //3: Do same for projects

    return (
        <div className="homePage">
            <div className="tiles"> 
                <About
                    active={activeView}
                    tileName={setTile}
                    viewFunction={setView}
                    onClick={setTile}
                    addClassName={aboutView}
                    toggleClass={aboutActive}
                />
                <Bacchus
                    active={activeView}
                    tileName={setTile}
                    viewFunction={setView}
                    addClassName={baccusView}
                    toggleClass={activeBacchus}
                />
                
                <TBD
                    addClassName={tbdView}
                    // className={tbdView}
                />

            </div>
                <Contact />
            </div>

    )
}

export default Portfolio;