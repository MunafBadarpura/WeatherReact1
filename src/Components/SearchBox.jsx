// MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// CSS
import './SearchBox.css'
import { useState } from 'react';


function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_UPL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "72f25468aede0982deb6080d1a0c7fde";
    let getWeatherInfo = async() => {
        try{
        let responce = await fetch(`${API_UPL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponce = await responce.json();
        // console.log(jsonResponce);
        let result = {
            city: city,
            temp: jsonResponce.main.temp,
            maxTemp: jsonResponce.main.temp_max,
            minTemp: jsonResponce.main.temp_min,
            humidity: jsonResponce.main.humidity,
            feelslike: jsonResponce.main.feels_like, 
            weather: jsonResponce.weather[0].description
        }
        console.log(result);
        return result;
        }
        catch(err){
            throw err;
        }
    }

    function handleCity(event){
        setCity(event.target.value);
    }

    let submitCity = async(event) =>{
       try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        setError(false);
       }
       catch{
        setError(true);
       }
    }

    return(
        <div className='SearchBox'>
        <form onSubmit={submitCity}>
            <TextField value={city} onChange={handleCity} id="city" label="City" variant="outlined" required/> <br/><br/>
            <Button variant="contained" type='submit'>Search</Button>

            {error && <p style={{color:"red", fontWeight:900}}>NO CITY FOUND!</p>}
        </form>
       </div>
    )
}

export default SearchBox