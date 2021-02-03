import React, { useState } from 'react'
import './Portfolio.css'

//Tiles
import About from '../Tiles/About/About'
import TBD from '../Tiles/TBD/TBD'

import Contact from '../Tiles/Contact/Contact'



const Portfolio = (props) => {

    let [activeView, setActive] = useState('preview')
    
    let [activeTile, setActiveTile] = useState('')

    let [addClassName, setClassName] = useState('')


    function setView(tile) {
        setActive(tile);
    }

    function setTile(tileName) {
        setActiveTile(tileName)
    }

    function toggleClass(viewName) {
        setClassName(viewName)
    }


    console.log('className 33', addClassName)
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
                    // onClick={setTile}
                    addClassName={addClassName}
                    toggleClass={toggleClass}
                />
                <TBD
                    addClassName={addClassName}
                />
            </div>
                <Contact />
            </div>

    )
}

export default Portfolio;