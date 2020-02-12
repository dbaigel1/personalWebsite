import React from "react"

function Journal(props) {
    console.log(`props are ${props}`)
    return (
        <div>
            {props.content ? props.content :
            "this will be a journal"}
        </div>
    )
}
export default Journal