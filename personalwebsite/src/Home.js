import React from "react"
import Scroll from "./components/Scroll"
import Project from "./components/Project"
import BlankSpace from "./components/BlankSpace"
import Footer from "./components/Footer"
import ReactGA from 'react-ga'

const trackingId = "UA-55899614-2"
ReactGA.initialize(trackingId)
ReactGA.pageview('/homepage')



function Home(){
    
    return (
       <div className="homeContainer">
          
            <h1 className="mainText">
                Welcome, I'm Daniel. An aspiring software developer, 
                avid traveler, and attempting to be a gym enthusiast.
            </h1>
            <h4 className="altText">
                After graduating from Tufts University in 2017 I worked as a data consultant
                in NYC. This last year I taught English to elementary school students in
                Shenzhen, China. It may seem like I'm all over the place, but I've gained
                valuable experience everywhere I've been. Now I'm ready to sink my teeth
                into a career as a software developer, problem solver, and team player.
            </h4>
            <Scroll />
            <BlankSpace />
            <BlankSpace />
            
            
            <div id="projects"></div> {/* landmark for scroll button */}
            
                <div className = "projectContainer">
                    
                    <Project title="TrustTracker" link="/trusttracker"/>
                    <Project title="Jumbocode" page="/jumbocode"/>
                </div>
           

                <BlankSpace />
                
                <div className = "projectContainer">
                    <Project title="Curtis" page="/curtis"/>
                    <Project title="MemeGenerator" link="/memegenerator"/>
                </div>
            

            <BlankSpace />

            <Footer/>

            
        </div>
    )
}

export default Home