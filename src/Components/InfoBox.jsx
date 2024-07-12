import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css"

// IMAGE URLS
let IMG_URL = "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
let COLD_URL = "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
let HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
let RAIN_URL = "https://images.unsplash.com/photo-1599806112354-67f8b5425a06?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


function InfoBox({info}){
    // set default img and icon 
    let weatherIcon = <AcUnitIcon />; 
    let weatherImg = COLD_URL;

    if(info.city == "City") weatherIcon = "";
    if (info.humidity > 70) {                // condition seted from chatgpt
        weatherIcon = <ThunderstormIcon />;
        weatherImg = RAIN_URL;
    } else if (info.temp > 25) {
        weatherIcon = <WbSunnyIcon />;
        weatherImg = HOT_URL;
    }

    return(
        <div className="container">
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 190 }}

        image = {weatherImg}

        title="Weather"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city } &nbsp; 
          {weatherIcon}
          

        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temprature : <b> {info.temp}&deg;C </b></p>
            <p>Humidity :<b> {info.humidity}</b></p>
            <p>Max Temprature :<b> {info.maxTemp} </b> </p>
            <p>Min Temprature :<b> {info.minTemp}</b></p>
            <p>Weather can be describes as <b>{info.weather} </b>and feels like <b> {info.feelslike}&deg;C </b></p>
            <p style={{marginBottom: "-10px"}}> <b>©Munaf</b> using REACT</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
    )
}

export default InfoBox