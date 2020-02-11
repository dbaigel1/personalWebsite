import React, { useState, useEffect } from "react"

import {

    Link

} from "react-router-dom"


    


function Project(props) {
    const [hovering, setHovering] = useState(false)
    const [external, setExternal] = useState(false)

    useEffect(()=>{
        props.page ? setExternal(false) : setExternal(true)     
    },[])

    function mouseEnter() {
        setHovering(true)
    }

    function mouseLeave() {
        setHovering(false)
    }
    return (
        
        <div 
        className={`project${props.title}`}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        >
            { hovering ?
                external ?
                    <a href={props.link} className="projectText" target="_blank" rel="noopener noreferrer">
                        <h1>{props.title}</h1>
                    </a>
                :
                    <Link to={props.page} className="projectText">
                        <h1>{props.title}</h1>
                    </Link> 
              :
                null
            }
            
        </div>
    )
}

export default Project