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
  import Resume from "../Resume"
  import Home from "../Home"



function Header() {
    
    return (
        <Router>
            <div className="header">
                
                <div className="headerelems">
                    <Link to="/" className="link">home</Link>
                    
                    <Link to="/about" className="link">about</Link>
                    
                    <Link to="/blog" className="link">blog</Link>
                    
                    <Link to="/resume" className="link">resume</Link>
                   
                </div>
                 

                <h1>Daniel</h1>
                <div className="headerlinks">
                    <HeaderLink/>
                    <HeaderLink/>
                    <HeaderLink/>
                </div>
            </div>
            <Switch>
                <Route path="/about">
                    
                    <About />
                </Route>
                <Route path="/blog">
                    
                    <Blog />
                </Route>
                <Route path="/resume">
                    
                    <Resume />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                
            </Switch> 
            </Router>
        
    )
}

export default Header