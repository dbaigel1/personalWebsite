import React from "react"
import BlankSpace from "./components/BlankSpace"
import Project from "./components/Project"

function Blog(){
    return (
        <div className="homeContainer">
            <BlankSpace />
            <h1 className="mainText">
                Welcome to my thoughts and writings.
            </h1>

            <div className = "projectContainer">    
                <Project title="China" page="/china"/>
                <Project title="Poems" page="/poems"/>
            </div>
            <BlankSpace />

        </div>
    )
}

export default Blog