import React from "react"

function Journal(props) {
    console.log(`props are ${props.content}`)
    return (
        <div className="journalContainer">
            <div className="journalText">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
        </div>
    )
}
export default Journal