import React from "react"
import BackButton from "./BackButton"

function Journal(props) {
    return (
        <div>
            <BackButton/>
        
            <div className="journalContainer">
                 {/* TODO EDIT THIS FOR SIZING JOURNAL TEXT AND LEFT ALIGN IT*/}
                <div className="journalText">
                <h1 className="journalTitle">{props.title}</h1>
                <hr className="lineBreak"/>
                <p className="journalContent">{props.content}</p>
                </div>
                
            </div>
        </div>
    )
}
export default Journal