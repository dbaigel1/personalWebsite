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
import Journal from "./Journal"
import BlogText from "./BlogText"



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

                <Route path="/china/entry1" exact>
                    <Journal content={BlogText(1)}/>
                </Route>
                <Route path="/china/entry2" exact>
                    <Journal content={BlogText(2)}/>
                </Route>
                <Route path="/china/entry3" exact>
                    <Journal content={BlogText(3)}/>
                </Route>
                <Route path="/china/entry4" exact>
                    <Journal content={BlogText(4)}/>
                </Route>
                <Route path="/china/entry5" exact>
                    <Journal content={BlogText(5)}/>
                </Route>
                <Route path="/china/entry6" exact>
                    <Journal content={BlogText(6)}/>
                </Route>
                <Route path="/china/entry7" exact>
                    <Journal content={BlogText(7)}/>
                </Route>
                <Route path="/china/entry8" exact>
                    <Journal content={BlogText(8)}/>
                </Route>
                <Route path="/china/entry9" exact>
                    <Journal content={BlogText(9)}/>
                </Route>
                <Route path="/china/entry10" exact>
                    <Journal content={BlogText(10)}/>
                </Route>
                
            </Switch> 
            </Router>
        
    )
}

export default Header