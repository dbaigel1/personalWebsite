import React from "react"

function HeaderLink(props){
    return (
        <div>
            <a href={props.link}> {props.text} </a>
        </div>
    )
}

export default HeaderLink