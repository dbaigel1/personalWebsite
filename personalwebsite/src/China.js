import React from "react"
import BlankSpace from "./components/BlankSpace"
import Entry from "./components/Entry"

function China() {
    return (
        <div>
            <div className="homeContainer">
                <BlankSpace/>
                <h1 className="mainText">
                    In July of 2018 I quit my job and flew to Shenzhen, China where I lived
                    and worked as an English teacher for a year. 
                </h1>
                <h1 className="altText">
                    While I lived there I
                    wrote a lengthy email once every month or so detailing my adventures
                    and thoughts. The following entries are those emails that I sent to family
                    and friends back home.
                </h1>
                
                <BlankSpace/>
                <BlankSpace/>
            </div>

            <div className="blogContainer">

                <Entry title="Arrival" date="July 2018" num="1"/>

                <Entry title="Yunnan" date="August 2018" num="2"/>

                <Entry title="To be a Teacher" date="September 2018" num="3"/>

                <Entry title="Vietnam" date="October 2018" num="4"/>

                <Entry title="First Visitors" date="December 2018" num="5"/>

                <Entry title="Winter Travels" date="February 2019" num="6"/>

                <Entry title="More Friends and Camping" date="April 2019" num="7"/>

                <Entry title="Activities Around Shenzhen" date="June 2019" num="8"/>

                <Entry title="Final Days in China" date="July 2019" num="9"/>

                <Entry title="Japan" date="August 2019" num="10"/>
            </div>

        </div>
    )
}

export default China