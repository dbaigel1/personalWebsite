import React from "react"
import Joke from "./Joke"

function AboutText() {
    return (
        <div className="abouttext">
            <h1>Welcome!</h1>
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
            </p>
            <p>
                I then spent a year working as an English teacher in Shenzhen, China. I had spent my entire life living on the east coast and wanted to get out of my comfort zone and try something new while I was still young and able to do so.(Make sure 
                to check out my <a href="/china" className="pageLink">blog</a> about my experience there!)
            </p>
            
            <p>
                In my free time I like learning new languages (Hola, 你好，
                こんにちは), playing, writing, and producing music, and doing improv comedy! I often try to convince myself I enjoy working out, but that's been a losing battle throughout my life.
            </p>

            <p>
                Currently I am pursuing a career in software development as a front-end or full-stack engineer in the New York and San Francisco areas. If you're part of a company that is hiring, don't hesitate to shoot me an email!
            </p>

            <Joke />
        </div>
    )
}

export default AboutText