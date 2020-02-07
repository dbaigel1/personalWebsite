import React from "react"

function HeaderElem(props){
    return (
        <div>
            <a href={props.link}>{props.text}</a>
        </div>
    )
}

export default HeaderElem