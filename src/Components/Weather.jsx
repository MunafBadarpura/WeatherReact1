import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

function Weather(){
    let [weatherData, setWeatherData] = useState({
        city: "City",
        feelslike: 0,
        humidity: 0,
        maxTemp: 0,
        minTemp: 0,
        temp: 0,
        weather: ""
    })

    let updateInfo = (newInfo) => {
        setWeatherData(newInfo);
    }

    return(
        <div>
            <h2 style={{textAlign: "center"}}>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherData}/>
        </div>
    )
}

export default Weather