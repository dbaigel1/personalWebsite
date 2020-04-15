import React from "react"

function HeaderLink(props){
    return (
        <div onClick = {props.click}>
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