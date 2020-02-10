import React from "react"
import Joke from "./Joke"

function AboutText() {
    return (
        <div className="abouttext">
            <h1>Welcome</h1>
            <p>
                Hey there, my name is Daniel Baigel, an ex-consultant ex-teacher aspiring
                software developer based in New York.
            </p>
            <p>
                After graduating from Tufts University in 2017, I worked as a data consultant 
                at <a href="https://www.keyrus.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="pageLink">
                          Keyrus 
                    </a>&nbsp;building data visualizations for clients using Tableau.
            <p>
                I then spent a year working as an English teacher in Shenzhen, China. (Make sure 
                to check out my <a href="/blog" className="pageLink">blog</a> about my experience there!)
            </p>
            </p>
            <p>
                More stuff about me. pls hire me...
            </p>

            <Joke />
        </div>
    )
}

export default AboutText