import React, { useState, useEffect } from "react"

import {
    Link
} from "react-router-dom"


function Project(props) {
    const [hovering, setHovering] = useState(false)
    const [external, setExternal] = useState(false)
    const [target, setTarget] = useState("")

    useEffect(()=>{
        props.page ? setExternal(false) : setExternal(true)     
    },[])

    useEffect(() => {
        external ? setTarget("_blank") : setTarget("")
    }, [external])

    function mouseEnter() {
        setHovering(true)
    }

    function mouseLeave() {
        setHovering(false)
    }
    return (
        <Link 
            to={external ? props.link : props.page}
            style={{
                display: "block"
            }} 
            className =  {`project${props.title}`} 
            target={target}

        >
            <div 
            className= "projectContent"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            >
                { hovering ?
                    
                    <h1 className="projectTitle">
                        {props.title}
                    </h1>
                    
                :
                    null
                }
                
            </div>
        </Link>
    )
}

export default Project