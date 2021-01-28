import React, { useState } from 'react'
import './Portfolio.css'

//Tiles
import About from '../Tiles/About/About'
import TBD from '../Tiles/TBD/TBD'

import Contact from '../Tiles/Contact/Contact'



const Portfolio = (props) => {

    let [activeTile, setActive] = useState('preview')
    
    console.log(activeTile)

    let [addClassName, setClassName] = useState('')

    let [tileName, setTileName] = useState('')

    function setView(tile) {
        console.log(tile)
        setActive(tile)
        if (activeTile === tile) {
            setClassName('hide')
        }
    }

    function setTile(tileName) {
        setTileName(tileName)
    }

    console.log(tileName)
    console.log(addClassName)
    


    //TO DO: 
        //1: Build About Me Tile (on click goes from preview to full view)
        //2: Import to this page and make sure on click works properly  
        //3: Do same for projects

    return (
        <div className="homePage">
            <div className="tiles"> 
                <About
                    active={activeTile}
                    tileName={setTile}
                    viewFunction={setView}
                    // className={addClassName}
                />
                <TBD
                    className={addClassName}

                />
            </div>
                <Contact />
            </div>

    )
}

export default Portfolio;