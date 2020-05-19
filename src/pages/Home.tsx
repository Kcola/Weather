import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Center from "../componenets/Center";
import Location from "../componenets/Location";
import Icon from "../componenets/Icon";
import Temperature from "../componenets/Temperature";
import Description from "../componenets/Description";
import React from "react";
import { WeatherInfo } from "../helpers/interfaces";

function Home(weatherInfo: any) {
  return (
    <Center colClass="col-xs-auto col-lg-6" id="home" height="93vh">
      <Row style={{ marginBottom: "50px" }}>
        <Col>
          <Center colClass="col-auto" height="100%">
            <Location
              style={{ fontSize: "2rem" }}
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
      <Row style={{ marginTop: "50px" }}>
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
  );
}

export default Home;
