import React, { useState } from "react"


function Project(props) {
    const [hovering, setHovering] = useState(false)

  
    
    function handleClick() {
        /* check props.title and
           navigate to new page */
           console.log("clicked!")

    }

    function mouseEnter() {
        setHovering(true)
    }

    function mouseLeave() {
        setHovering(false)
    }
    return (
        
        <div 
        className={`project${props.title}`} 
        onClick={handleClick} 
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        >
            { hovering ? 
              <a href={props.link} className="projectText" target="_blank" rel="noopener noreferrer">
              <h1>{props.title}</h1>
              </a>
              : 
              null
            }
        </div>
    )
}

export default Project