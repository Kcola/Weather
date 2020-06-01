import { Geo, WeatherInfo } from "./interfaces";
import React from "react";
import { DayOfWeek } from "./types";

async function weather() {
    return await getWeather(JSON.parse(sessionStorage.position));
}


async function TMWeather(time: number) {
    return await getTMWeather(JSON.parse(sessionStorage.position), time);
}

async function getWeather(position: Geo) {
    let url = `https://cors-anywhere.herokuapp.com/
     https://api.darksky.net/forecast/9ab479cdd941d8bb66332fa8f81551b9/
     ${position.lat},${position.long}`.replace(/\s/g, '');
    let response = await fetch(url, {
    });
    let data = await response.json();
    return data;
}

async function getTMWeather(position: Geo, time: number) {
    let url = `https://cors-anywhere.herokuapp.com/
     https://api.darksky.net/forecast/9ab479cdd941d8bb66332fa8f81551b9/
     ${position.lat},${position.long},${time}`.replace(/\s/g, '');
    let response = await fetch(url, {
    });
    let data = await response.json();
    return data;
}

export function initWeather(
    position: Geo,
    weatherInfo: WeatherInfo,
    setLoaded: React.Dispatch<React.SetStateAction<boolean>>,
    setBlocked: React.Dispatch<React.SetStateAction<boolean>>
) {
    function success(location: any) {
        console.log("init")
        position.long = location.coords.longitude;
        position.lat = location.coords.latitude;
        sessionStorage.setItem("position", JSON.stringify(position))
        weather().then(weather => {
            weatherInfo.location = weather.timezone.split("/")[1].replace("_", " ");
            weatherInfo.tempF = Math.round(weather.currently.temperature);
            weatherInfo.tempC = Math.round(celsius(weather.currently.temperature));
            weatherInfo.icon = weather.currently.icon;
            weatherInfo.description = weather.currently.summary;
            sessionStorage.setItem("weather", JSON.stringify(weather));
            sessionStorage.setItem("TMWeather", JSON.stringify(weather));
            setLoaded(true);
            console.log("StateChanged");
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

export function refreshWeather(
    setWeather: React.Dispatch<React.SetStateAction<WeatherInfo>>,
    weatherInfo: WeatherInfo, setLoaded: React.Dispatch<React.SetStateAction<boolean>>
) {
    weather().then(weather => {
        weatherInfo.location = weather.timezone.split("/")[1].replace("_", " ");
        weatherInfo.tempF = Math.round(weather.currently.temperature);
        weatherInfo.tempC = Math.round(celsius(weather.currently.temperature));
        weatherInfo.icon = weather.currently.icon;
        weatherInfo.description = weather.currently.summary;
        sessionStorage.setItem("weather", JSON.stringify(weather));
        setLoaded(true);
    });
}


export function refreshTMWeather(
    setWeather: React.Dispatch<React.SetStateAction<WeatherInfo>>,
    weatherInfo: WeatherInfo, setTMLoaded: React.Dispatch<React.SetStateAction<boolean>>,
    time: Date
) {
    TMWeather(Math.round(time.getTime() / 1000)).then(weather => {
        console.log("TMWeather")
        weatherInfo.location = weather.timezone.split("/")[1].replace("_", " ");
        weatherInfo.tempF = Math.round(weather.daily.data[0].temperatureHigh);
        weatherInfo.tempC = Math.round(celsius(weather.daily.data[0].temperatureHigh));
        weatherInfo.icon = weather.currently.icon;
        weatherInfo.description = weather.daily.data[0].summary;
        sessionStorage.setItem("TMWeather", JSON.stringify(weather));
        setTMLoaded(true);
    });
}
export function celsius(fahrenheit: number) {
    return (fahrenheit - 32) * 5 / 9;
}

export function truthy(val: any) {
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
