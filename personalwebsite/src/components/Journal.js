import React from "react"
import BackButton from "./BackButton"

function Journal(props) {
    return (
        <div>
            <BackButton/>
        
            <div className="journalContainer">
                
                <div className="journalText">
                    <h1>{props.title}</h1>
                    <hr className="lineBreak"/>
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    )
}
export default Journal