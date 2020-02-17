import React from 'react'
import AboutText from "./components/AboutText"
import BlankSpace from "./components/BlankSpace"
import Footer from "./components/Footer"

function About() {
  return (
   <div>
   <div className="aboutContainer">
      <AboutText />
      
       <figure className="aboutFigure"> 
          <img className="aboutImage" src={"./images/daniel2.jpg"} alt="A pic of me should be here..."/>
          <figcaption>
            A few years ago, before my hairline began to recede.
          </figcaption>
      </figure> 

    </div>
    <BlankSpace/>
    <Footer/>
    </div>
    
  )
}

export default About
