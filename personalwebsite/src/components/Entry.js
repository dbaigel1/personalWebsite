import React from "react"
import { Link } from "react-router-dom"

function Entry(props) {
    return (
        <Link to={`/china/entry${props.num}`}
              style={{
                display: "block"
              }} 
              className="entryContainer">
            <div className="entry">
                <h3>
                    {props.title}
                </h3>
                <h4>
                    {props.date}
                </h4>
            </div>
        </Link>
    )
    
}

export default Entry