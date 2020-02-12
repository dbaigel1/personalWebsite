import React from "react"

function HeaderLink(props){
    return (
        <div>
            <a  href={props.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="link"
            > 
                {props.text} 
            </a>
        </div>
    )
}

export default HeaderLink