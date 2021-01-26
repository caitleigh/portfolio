import React, { useState } from 'react'
import './Portfolio.css'

//Tiles
import About from '../Tiles/About/About'



const Portfolio = () => {
    

    //TO DO: 
        //1: Build About Me Tile (on click goes from preview to full view)
        //2: Import to this page and make sure on click works properly  
        //3: Do same for projects

    return (
        <div className="homePage">
            <div className="tiles"> 
            <About/>
            </div>
            </div>

    )

}

export default Portfolio;