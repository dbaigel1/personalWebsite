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
            {hovering ? <h1 className="projectText">{props.title}</h1> : null}
        </div>
    )
}

export default Project