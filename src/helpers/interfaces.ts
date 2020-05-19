import {IconKey} from "skycons-ts";
export interface WeatherInfo {
    location:string,
    instance:number,
    color: string,
    icon: IconKey,
    iconWidth?: number,
    tempC: number,
    tempF: number,
    iconHeight?: number,
    description:string
}

export interface Geo
{
    long:number,
    lat:number
}