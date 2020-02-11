import React from "react"
import Scroll from "./components/Scroll"
import Project from "./components/Project"
import BlankSpace from "./components/BlankSpace"
import Footer from "./components/Footer"

function Home(){
    return (
       
       <div className="homeContainer">
           <BlankSpace />
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
                <Project title="TrustTracker"/>
                <Project title="Jumbocode" />
            </div>

            <BlankSpace />
            
            <div className = "projectContainer">
                <Project title="Curtis"/>
                <Project title="MemeGenerator"/>
            </div>
            
            <BlankSpace />

            <Footer/>

            
        </div>
    )
}

export default Home