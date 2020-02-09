import React, { useState, useEffect} from "react"

function Weather() {
    const [data, setData] = useState("")
    const [location, setLocation] = useState("")
    const [gotLocation, setGotLocation] = useState(false)
    
    useEffect(()=>{
        getLocation()
    }, [])

    useEffect(() => { 
        if (gotLocation) {
            console.log("calling api")
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&units=imperial&APPID=ad3fa995d613cd69122cfffc24bc1222`)
            .then(response => response.json())
            .then(data => setData(data))
        }
          
    }, [location, gotLocation])


    function getLocation() {
        function success(position) {
          const latitude  = position.coords.latitude
          const longitude = position.coords.longitude
      
          console.log(latitude, longitude)
          setLocation([latitude, longitude])
          setGotLocation(true)
        }
      
        function error() {
          console.log('Unable to retrieve your location')
        }
      
        if (!navigator.geolocation) {
          console.log("Geolocation is not supported by your browser")
        } else {
          console.log('Locating…')
          navigator.geolocation.getCurrentPosition(success, error)
        }
        
      }

    return (
        data ?
        <div className="weather">
                    <div>
                        <h4>{data.name}</h4>
                        <h3>{data.weather[0].main}</h3>
                        <h2>{Math.round(data.main.temp)}</h2>
                        <h5>Min: {Math.round(data.main.temp_min)}  Max: {Math.round(data.main.temp_max)}</h5>
                    </div>
                
        </div> : null
    )
}


export default Weather