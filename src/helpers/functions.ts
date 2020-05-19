import {Geo, WeatherInfo} from "./interfaces";
import React from "react";
import {weather} from "../App";
import {DayOfWeek} from "./types";

export function initWeather(position: Geo, setWeather :React.Dispatch<React.SetStateAction<WeatherInfo>>, setLoaded :React.Dispatch<React.SetStateAction<boolean>>){
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
                newOptions.icon = weather.currently.icon;
                newOptions.description = weather.currently.summary;
                setLoaded(true);
                return newOptions;
            })
            console.log("State Changed");
            console.log(weather);
            sessionStorage.setItem("weather", JSON.stringify(weather));
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

export function refreshWeather(setWeather :React.Dispatch<React.SetStateAction<WeatherInfo>>, setLoaded :React.Dispatch<React.SetStateAction<boolean>>){
    weather().then(weather=> {
        setWeather((options)=>{
            let newOptions = Object.assign({}, options);
            newOptions.location = weather.timezone.split("/")[1].replace("_", " ");
            newOptions.tempF =Math.round( weather.currently.temperature);
            newOptions.tempC =Math.round(  celsius( weather.currently.temperature));
            newOptions.icon = weather.currently.icon;
            newOptions.description = weather.currently.summary;
            setLoaded(true);
            return newOptions;
        });
        console.log("State Changed")
        sessionStorage.setItem("weather", JSON.stringify(weather));
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
