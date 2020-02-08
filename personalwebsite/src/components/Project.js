import React from "react"

function Project(props) {
    function handleClick() {
        /* check props.title and
           navigate to new page */
    }
    
    return (
        <div className="project" onClick={handleClick}>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Project