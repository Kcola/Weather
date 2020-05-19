import React from "react";
import Day from "../componenets/Day";
import { epochToDate } from "../helpers/functions";

function Forecast() {
  const weather = JSON.parse(sessionStorage.weather);
  const week = weather.daily.data;
  week.pop();
  return (
    <div id="forecast">
      {week.map((day: any, idx: number) => (
        <Day
          day={epochToDate(day.time)}
          high={Math.round(day.temperatureHigh)}
          icon={day.icon}
          low={Math.round(day.temperatureLow)}
          precipitation={day.precipProbability}
          key={idx}
        />
      ))}
    </div>
  );
}

export default Forecast;
