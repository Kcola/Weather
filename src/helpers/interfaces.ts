import {IconKey} from "skycons-ts";
export interface WeatherInfo {
    loaded: boolean,
    location:string,
    instance:number,
    color: string,
    description: IconKey,
    width: number,
    tempC: number,
    tempF: number,
    height: number
}

export interface Geo
{
    long:number,
    lat:number
}