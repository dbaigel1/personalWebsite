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
import ScrollToTop from "./ScrollToTop"

const uncheck = () => {
    let toggle = document.getElementById('toggle')
    toggle.checked = !toggle.checked
}

function Header() {

    return (
        <Router>
            <ScrollToTop />
            <div className="header">
                <div className="smallView">
                    <label id ="toggleLabel" htmlFor="toggle">&#9776;</label>
                    <input id="toggle" type="checkbox"></input>
                    <div className="menu">
                    <Link to="/" onClick={uncheck} className="link">home</Link>
                    
                    <Link to="/about" onClick={uncheck} className="link">about</Link>
                    
                    <Link to="/blog" onClick={uncheck} className="link">blog</Link>
                    
                    <Link to="/Resume2020.pdf" target="_blank" rel="noopener noreferrer" onClick={uncheck} className="link">resume</Link>
                    
                    <HeaderLink 
                        link="https://www.linkedin.com/in/daniel-baigel-98723588/"
                        text="linkedin"
                        click={uncheck}
                        
                    />
                    <HeaderLink
                        link="https://github.com/dbaigel1"
                        text="github"
                        click={uncheck}
                        
                    />
                    <HeaderLink
                        link="mailto: dbaigel1@gmail.com"
                        text="email"
                        click={uncheck}
                        
                    />

                </div>
                    <h1 id="smallTitle">Daniel</h1>
                </div>
                
                <div className="headerTitle">
                    
                    <div className="headerItems">
                    <div className="group1">
                    <div className="headerelems">
                
                    
                    <Link to="/" className="link">home</Link>
                    
                    <Link to="/about" className="link">about</Link>
                    
                    <Link to="/blog" className="link">blog</Link>
                    
                    <Link to="/Resume2020.pdf" target="_blank" rel="noopener noreferrer" className="link">resume</Link>
                    
                
                </div>
                </div>
                 
                <div className="group2">
                <h1 className="title">Daniel</h1>
                </div>

                <div className="group3">
                <div className="headerlinks">
                    <HeaderLink 
                        //source="linkedin.png" 
                        link="https://www.linkedin.com/in/daniel-baigel-98723588/"
                        text="linkedin"
                        
                    />
                    <HeaderLink
                        //source="linkedin.png"
                        link="https://github.com/dbaigel1"
                        text="github"
                        
                    />
                    <HeaderLink
                        //source="linkedin.png"
                        link="mailto: dbaigel1@gmail.com"
                        text="email"
                        
                    />
                </div>
                </div>
                </div>
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
                <Route path="/trusttracker" component={() => { 
                    window.location.href = 'https://trusttracker.now.sh'; 
                    return null
                }}
                >
                </Route>
                <Route path="/memegenerator" component={() => {
                    window.location.href = "https://github.com/dbaigel1/ReactMemeGenerator"
                    return null
                }}
                >

                </Route>
        
                <Route path="/china/entry1" exact>
                    <Journal title="Arrival" content={BlogText(1)}/>
                </Route>
                <Route path="/china/entry2" exact>
                    <Journal title="Yunnan" content={BlogText(2)}/>
                </Route>
                <Route path="/china/entry3" exact>
                    <Journal title="To be a Teacher" content={BlogText(3)}/>
                </Route>
                <Route path="/china/entry4" exact>
                    <Journal title="Vietnam" content={BlogText(4)}/>
                </Route>
                <Route path="/china/entry5" exact>
                    <Journal title="First Visitors" content={BlogText(5)}/>
                </Route>
                <Route path="/china/entry6" exact>
                    <Journal title="Winter Travels" content={BlogText(6)}/>
                </Route>
                <Route path="/china/entry7" exact>
                    <Journal title="More Visitors and Camping" content={BlogText(7)}/>
                </Route>
                <Route path="/china/entry8" exact>
                    <Journal title="Activities Around Shenzhen" content={BlogText(8)}/>
                </Route>
                <Route path="/china/entry9" exact>
                    <Journal title="Final Days in China" content={BlogText(9)}/>
                </Route>
                <Route path="/china/entry10" exact>
                    <Journal title="Japan" content={BlogText(10)}/>
                </Route>
                
            </Switch> 
            </Router>
        
    )
}

export default Header