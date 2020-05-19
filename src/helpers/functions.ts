import {Geo, WeatherInfo} from "./interfaces";
import React from "react";
import {weather} from "../App";

export function initWeather(position: Geo, setWeather :React.Dispatch<React.SetStateAction<WeatherInfo>>){
    function success(location: any) {
        position.long = location.coords.longitude;
        position.lat = location.coords.latitude;
        sessionStorage.setItem("position", JSON.stringify(position))
        weather().then(weather=> {
            setWeather((options)=>{
                let newOptions = Object.assign({}, options);
                newOptions.location = weather.timezone.split("/")[1].replace("_", " ");
                newOptions.tempF =Math.round( weather.currently.temperature);
                newOptions.tempC =Math.round(  celsius( weather.currently.temperature));
                newOptions.description = weather.currently.icon
                newOptions.loaded = true;
                console.log("State Changed")
                console.log(newOptions)
                return newOptions;
            })
        })
    }
    function fail() {
        alert("Error getting location");
    }
    if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(success, fail);
    } else {
        alert("Sorry, your browser does not support geolocation services.");
    }
};

function celsius(fahrenheit: number){
return (fahrenheit - 32) * 5 / 9;
}

