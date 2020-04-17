import React from "react"
import BackButton from "./BackButton"
import Footer from "./Footer"
import BlankSpace from "./BlankSpace"

function Journal(props) {
    return (
        <div>
            <BackButton/>
            <p className="imageNotice">If you are viewing on mobile or tablet images from my trip won't appear. Please use a desktop device for the full experience.</p>
        
            <div className="journalContainer">
                <div className="journalText">
                <h1 className="journalTitle">{props.title}</h1>
                <hr className="lineBreak"/>
                <div className="journalContent">{props.content}</div>
                </div>
                
            </div>
            <BlankSpace/>
            <Footer/>
        </div>
    )
}
export default Journal