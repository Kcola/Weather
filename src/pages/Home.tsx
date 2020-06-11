import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Center from "../componenets/Center";
import Location from "../componenets/Location";
import Icon from "../componenets/Icon";
import Temperature from "../componenets/Temperature";
import Description from "../componenets/Description";
import Footer from "../componenets/Footer";
import React, { useEffect } from "react";
import { Geo, IconInfo, WeatherInfo } from "../helpers/interfaces";
import Forecast from "./Forecast";
import {
  initWeather,
  refreshTMWeather,
  refreshWeather,
  truthy,
} from "../helpers/functions";

type HomeProp = {
  weatherInfo: WeatherInfo & IconInfo;
  loaded: boolean;
  unit: "C" | "F";
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  setWeather: React.Dispatch<React.SetStateAction<WeatherInfo & IconInfo>>;
};

function Home({ weatherInfo, loaded, setLoaded, setWeather, unit }: HomeProp) {
  useEffect(
    function () {
      refreshWeather(setWeather, weatherInfo, setLoaded);
      sessionStorage.setItem("unit", unit);
    },
    [loaded, unit]
  );

  return (
    <div className="main">
      <Center id="home" colClass="col-auto col-lg-6" height="100%">
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
              <Icon options={weatherInfo} />
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
      <Forecast id="forecast" unit={sessionStorage.unit} />
      <Footer style={{ position: "absolute" }} />
    </div>
  );
}

export default Home;
