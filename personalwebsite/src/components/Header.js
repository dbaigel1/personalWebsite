import React from "react"
import HeaderLink from "./HeaderLink"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import About from "../About"
import Blog from "../Blog"
import Home from "../Home"
import Jumbocode from "../Jumbocode"
import Curtis from "../Curtis"
import China from "../China"
import Poems from "../Poems"



function Header() {
    
    return (
        <Router>
            <div className="header">
                <div className="headerelems">
                
                    
                    <Link to="/" className="link">home</Link>
                    
                    <Link to="/about" className="link">about</Link>
                    
                    <Link to="/blog" className="link">blog</Link>
                    
                    <Link to="/Resume2020.pdf" target="_blank" rel="noopener noreferrer" className="link">resume</Link>
                    
                
                </div>
                 

                <h1 className="title">Daniel</h1>

                <div className="headerlinks">
                    <HeaderLink 
                        //source="linkedin.png" 
                        link="https://www.linkedin.com/in/daniel-baigel-98723588/"
                        text="Linkedin"
                        
                    />
                    <HeaderLink
                        //source="linkedin.png"
                        link="https://github.com/dbaigel1"
                        text="Github"
                        
                    />
                    <HeaderLink
                        //source="linkedin.png"
                        link="mailto: dbaigel1@gmail.com"
                        text="Email"
                        
                    />
                </div>
            </div>
            <Switch>
                <Route path="/about" exact>
                    
                    <About />
                </Route>
                <Route path="/blog" exact>
                    
                    <Blog />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/jumbocode" exact>
                    <Jumbocode />
                </Route>
                <Route path="/curtis" exact>
                    <Curtis />
                </Route>
                <Route path="/china" exact>
                    <China />
                </Route>
                <Route path="/poems" exact>
                    <Poems />
                </Route>
                
            </Switch> 
            </Router>
        
    )
}

export default Header