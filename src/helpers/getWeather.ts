import {Geo} from "./interfaces";

export async function getWeather(position: Geo){
    let response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9ab479cdd941d8bb66332fa8f81551b9/${position.lat},${position.long}`,{
    });
    let data = await response.json();
    return data;
}