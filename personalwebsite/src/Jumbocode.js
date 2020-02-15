import React from "react"
import BlankSpace from "./components/BlankSpace"
import Footer from "./components/Footer"

function Jumbocode(){
    return (
        <div className="homeContainer">
            
            <BlankSpace/>

            <p className="jcText"> 
                Jumbocode is a Tufts organization that I founded with a group
                of my friends that bridges the gap between computer science
                students looking for out-of-the-classroom experience, and Boston-based nonprofits
                in need of digital solutions.
            </p>

            <BlankSpace/>
            <div className="jcContainer">
                <div className = "jcColumn">
                    <h3>
                        Why?
                    </h3>
                    <p style={{
                        textAlign: "left"
                    }}>
                        A group of us started Jumbocode because we saw a lack of philanthropy in 
                        the computer science department, as well as the need for students to 
                        have out-of-the-classroom experience in order to bolster their 
                        educations and get internships/jobs.
                    </p>
                </div>
                <div className = "jcColumn">
                    <h3>
                        How?
                    </h3>
                    <p style={{
                        textAlign: "left"
                    }}>
                        Jumbocode runs through the academic school year. From September until May,
                        students work in teams of around 10 people on a given project. Projects are
                        determined over the Summer, as the Jumbocode executive board gauges non-profit
                        needs. After the academic year, finished products are delivered to the non-profits.
                    </p>
                </div>
            </div>

            <BlankSpace/>

            <a href="https://jumbocode.org" target="_blank" rel="noopener noreferrer">
                <button className="spotifyButton"> 
                    I want to learn more!
                </button>
            </a>
            
            <BlankSpace/>
            <Footer/>

        </div>
    )
}


export default Jumbocode