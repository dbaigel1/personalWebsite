import React from "react"
import BlankSpace from "./components/BlankSpace"
import Footer from "./components/Footer"

function Curtis(){
    return (
        <div className="homeContainer">
            <div className="curtisImageContainer">
                <figure>
                    <img 
                        src={"./images/albumcover.jpg"} 
                        alt="album cover"
                        className="curtisImage"
                    />
                    <figcaption className="imageCaption">
                        This is our album cover.
                    </figcaption>
                </figure>
                <figure>
                    <img 
                        src={"./images/producers.jpeg"}
                        alt="producers"
                        className="curtisImage"
                    /> 
                    <figcaption className="imageCaption">
                        My friend Will and me, the producers.
                    </figcaption>
                </figure>
            </div>
            
            <BlankSpace/>

            <p className="curtisText"> 
                My senior year of college (2017) I finally realized a dream of mine
                which was to write, produce, and release a music album. My friend Will and I
                took our final semester of school and approached the venture like a senior capstone 
                project. We researched different DAWs (Digital Audio Workstation) and 
                settled on using Ableton Live. Since neither of us are singers, we decided
                on featuring some of our friends and fellow Tufts Jumbos on our tracks.
                The artist name 'Curtis' comes from Curtis Street, the street that we lived together
                on during our final year of college, and our album name "This Could Not Work At All"
                comes from the fact that we had no idea what we were doing at the beginning of the process,
                and were unsure if we would succeed. (I am well aware that "this could not work..."
                is not grammatically correct, but used the phrasing for uniqueness and thus better SEO). 
            </p>

            <BlankSpace/>

            <a href="https://open.spotify.com/playlist/2rQhExeQMyAMEBKnzbzr6a?hipster=" target="_blank" rel="noopener noreferrer">
                <button className="spotifyButton"> 
                    Show me the tunes
                </button>
            </a>
            
            <BlankSpace/>
            <Footer/>

        </div>
    )
}


export default Curtis