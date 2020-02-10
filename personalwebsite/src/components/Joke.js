import React, { useState} from "react"

function Joke() {
    const [jokeText, setJokeText] = useState("")

    
    function handleClick() {
        fetch("https://joke3.p.rapidapi.com/v1/joke?nsfw=false", {
	    "method": "GET",
	    "headers": {
		"x-rapidapi-host": "joke3.p.rapidapi.com",
		"x-rapidapi-key": "9b7336de23mshfeb753099744defp17c5a1jsn09621b05aa94"
    }
})
.then(response => response.json())
.then(data => setJokeText(data))
.catch(err => {
	console.log(err);
});
    }
    
    return (
        <div>
            <button className="jokebutton" onClick ={handleClick}>Care for a joke?</button>
            {jokeText ? <div className="joketext">{jokeText.content}</div> : null}
        </div>
    )
}

export default Joke