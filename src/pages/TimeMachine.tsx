import React, { useEffect, useState } from "react";
import Center from "../componenets/Center";
import { IconInfo, WeatherInfo } from "../helpers/interfaces";
import { refreshTMWeather } from "../helpers/functions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Location from "../componenets/Location";
import Icon from "../componenets/Icon";
import Temperature from "../componenets/Temperature";
import Description from "../componenets/Description";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";

type TimeMachineProp = {
  loaded: boolean;
  unit: "C" | "F";
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  setWeather: React.Dispatch<React.SetStateAction<WeatherInfo & IconInfo>>;
};

function TimeMachine({ setLoaded, loaded }: TimeMachineProp) {
  const [weatherInfo, setTMWeather] = useState(
    JSON.parse(sessionStorage.TMWeather)
  );
  const [TMLoaded, setTMLoaded] = useState(false);
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    if (!TMLoaded)
      refreshTMWeather(setTMWeather, weatherInfo, setTMLoaded, time);
  }, [TMLoaded, time]);
  return (
    <div className="main">
      <Form>
        <ReactDatePicker
          selected={time}
          className="form-control"
          onChange={(date: Date) => {
            setTMLoaded(false);
            setTime(date);
          }}
        />
      </Form>
      <Center id="time-machine" colClass="col-xs-auto col-lg-6" height="100%">
        <Row style={{ margin: "40px 0 60px 0" }}>
          <Col>
            <Center colClass="col-auto" height="100%">
              <Location
                style={{ fontSize: "2.7em" }}
                location={weatherInfo.location}
              />
            </Center>
          </Col>
          <Col>
            <Center colClass="col-auto" height="100%">
              <Icon
                options={{
                  icon: weatherInfo.icon,
                  iconHeight: 150,
                  iconWidth: 150,
                  instance: 9,
                  color: "white",
                }}
              />
            </Center>
          </Col>
        </Row>
        <Row style={{ margin: "0 0 40px 0" }}>
          <Col>
            <Center colClass="col-auto" height="100%">
              <Temperature
                style={{ textAlign: "center", fontSize: "3rem" }}
                tempC={weatherInfo.tempC}
                tempF={weatherInfo.tempF}
                unit={sessionStorage.unit}
              />
              <Description
                style={{ fontSize: "1rem" }}
                description={weatherInfo.description}
              />
            </Center>
          </Col>
        </Row>
      </Center>
    </div>
  );
}

export default TimeMachine;
