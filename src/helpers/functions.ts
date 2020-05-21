import {Geo, WeatherInfo} from "./interfaces";
import React from "react";
import {DayOfWeek} from "./types";

 async function weather() {
    return await getWeather(JSON.parse(sessionStorage.position));
}

 async function getWeather(position: Geo){
    let response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9ab479cdd941d8bb66332fa8f81551b9/${position.lat},${position.long}`,{
    });
    let data = await response.json();
    return data;
}

export function initWeather(position: Geo, weatherInfo: WeatherInfo, setLoaded :React.Dispatch<React.SetStateAction<boolean>>, setBlocked :React.Dispatch<React.SetStateAction<boolean>>){
    function success(location: any) {
        position.long = location.coords.longitude;
        position.lat = location.coords.latitude;
        sessionStorage.setItem("position", JSON.stringify(position))
        weather().then(weather=> {
                weatherInfo.location = weather.timezone.split("/")[1].replace("_", " ");
                weatherInfo.tempF =Math.round( weather.currently.temperature);
                weatherInfo.tempC =Math.round(  celsius( weather.currently.temperature));
                weatherInfo.icon = weather.currently.icon;
                weatherInfo.description = weather.currently.summary;
                sessionStorage.setItem("weather", JSON.stringify(weather));
                setLoaded(true);
            })
    }
    function fail() {
        setBlocked(true);
    }
    if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(success, fail);
    } else {
        alert("Sorry, your browser does not support geolocation services.");
    }
};

export function refreshWeather(setWeather :React.Dispatch<React.SetStateAction<WeatherInfo>>, setLoaded :React.Dispatch<React.SetStateAction<boolean>>){
    weather().then(weather=> {
        setWeather((options)=>{
            let newOptions = Object.assign({}, options);
            newOptions.location = weather.timezone.split("/")[1].replace("_", " ");
            newOptions.tempF =Math.round( weather.currently.temperature);
            newOptions.tempC =Math.round(  celsius( weather.currently.temperature));
            newOptions.icon = weather.currently.icon;
            newOptions.description = weather.currently.summary;
            sessionStorage.setItem("weather", JSON.stringify(weather));
            setLoaded(true);
            return newOptions;
        });
    });
}

export function celsius(fahrenheit: number){
return (fahrenheit - 32) * 5 / 9;
}

export function truthy (val:any) {
    if (val) {
        return true;
    } else {
        return false;
    }
}

export function epochToDate(epoch: number) {
    let date = new Date(0);
    date.setUTCSeconds(epoch);
    return date;
}

export function dateToDayOfWeek(date: Date): DayOfWeek {
    let dayLookup: Array<DayOfWeek>;
    dayLookup = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayLookup[date.getDay()];
}
