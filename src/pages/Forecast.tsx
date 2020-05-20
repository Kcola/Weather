import React from "react";
import Day from "../componenets/Day";
import { epochToDate } from "../helpers/functions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type ForecastProp = {
  id: string;
};

function Forecast({ id }: ForecastProp) {
  const weather = JSON.parse(sessionStorage.weather);
  const week = weather.daily.data;
  week.pop();
  return (
    <Row id={id} style={{ padding: "15px" }}>
      <Col bsPrefix="col col-xs-auto col-lg-6 mr-auto ml-auto">
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
      </Col>
    </Row>
  );
}

export default Forecast;
