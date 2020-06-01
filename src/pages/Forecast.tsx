import React from "react";
import Day from "../componenets/Day";
import { epochToDate } from "../helpers/functions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Hour from "../componenets/Hour";
import Center from "../componenets/Center";
type ForecastProp = {
  id: string;
  unit: "C" | "F";
  tm?: boolean;
};

function Forecast({ id, unit, tm }: ForecastProp) {
  let weather = JSON.parse(sessionStorage.weather);
  let week = weather.daily.data;
  if (sessionStorage.weather) {
    if (tm) {
      weather = JSON.parse(sessionStorage.TMWeather);
      week = weather.hourly.data;
    } else week.pop();
    return (
      <Row id={id} style={{ paddingTop: "5px" }}>
        <Col
          bsPrefix={`col col-xs-auto ${
            tm ? "col-lg-6" : "col-lg-6"
          } mr-auto ml-auto`}
        >
          {!tm
            ? week.map((day: any, idx: number) => (
                <Day
                  day={epochToDate(day.time)}
                  high={Math.round(day.temperatureHigh)}
                  icon={day.icon}
                  low={Math.round(day.temperatureLow)}
                  key={idx}
                  precipitation={day.precipProbability}
                  unit={unit}
                />
              ))
            : week.map((day: any, idx: number) => (
                <Center key={idx} height="60px" colClass="col-12">
                  <Hour
                    day={epochToDate(day.time)}
                    temp={Math.round(day.temperature)}
                    icon={day.icon}
                    precipitation={day.precipProbability}
                    unit={unit}
                    summary={day.summary}
                    appTemp={Math.round(day.apparentTemperature)}
                  />
                </Center>
              ))}
        </Col>
      </Row>
    );
  } else return <div></div>;
}

export default Forecast;
