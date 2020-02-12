import React from "react"

function Poem(props) {
    return (
        <div className="poemContainer">
            <h2 style={{
                color: "#EAE7DC"
            }}>{props.location} {props.date}</h2>
            <p className="poemText">
                {props.line1}<br></br>
                {props.line2}<br></br>
                {props.line3}
            </p>
            
        </div>
    )
}

export default Poem