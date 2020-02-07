import React from "react"
import HeaderElem from "./HeaderElem"
import HeaderLink from "./HeaderLink"



function Header() {

    
    return (
        
        <div className="header">
            
            <div className="headerelems">
                <HeaderElem
                    link="/about"
                    text="about"
                />
                <HeaderElem
                    link="/blog"
                    text="blog"
                />
                <HeaderElem
                    link="/resume"
                    text="resume"
                />
            </div>
            
            <h1>Daniel</h1>
            <div className="headerlinks">
                <HeaderLink/>
                <HeaderLink/>
                <HeaderLink/>
            </div>
        </div>
    )
}

export default Header