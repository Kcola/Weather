import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Center from "../componenets/Center";
import Location from "../componenets/Location";
import Icon from "../componenets/Icon";
import Temperature from "../componenets/Temperature";
import Description from "../componenets/Description";
import React from "react";
import { IconInfo, WeatherInfo } from "../helpers/interfaces";
import Forecast from "./Forecast";

function Home(weatherInfo: WeatherInfo & IconInfo) {
  return (
    <div className="main">
      <Center id="home" colClass="col-xs-auto col-lg-6" height="100%">
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
        <Row style={{ margin: "0 0 60px 0" }}>
          <Col>
            <Center colClass="col-auto" height="100%">
              <Temperature
                style={{ textAlign: "center", fontSize: "3rem" }}
                tempC={weatherInfo.tempC}
                tempF={weatherInfo.tempF}
                unit={"F"}
              />
              <Description
                style={{ fontSize: "1rem" }}
                description={weatherInfo.description}
              />
            </Center>
          </Col>
        </Row>
      </Center>
      <Forecast id="forecast" />
    </div>
  );
}

export default Home;
