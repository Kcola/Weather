import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Center from "../componenets/Center";
import Location from "../componenets/Location";
import Icon from "../componenets/Icon";
import Temperature from "../componenets/Temperature";
import Description from "../componenets/Description";
import React from "react";
import { IconOptions } from "../types/interfaces";

function Home() {
  let iconSettings = {
    instance: 1,
    color: "white",
    description: "cloudy",
    height: 150,
    width: 150,
  } as IconOptions;

  return (
    <Center colClass="col-xs-auto col-lg-6" id="home" height="93vh">
      <Row style={{ padding: "50px", marginBottom: "50px" }}>
        <Col>
          <Center colClass="col-auto" height="100%">
            <Location style={{ fontSize: "2rem" }} location="Los Angeles" />
          </Center>
        </Col>
        <Col>
          <Center colClass="col-auto" height="100%">
            <Icon options={iconSettings} />
          </Center>
        </Col>
      </Row>
      <Row style={{ padding: "50px", marginTop: "50px" }}>
        <Col>
          <Center colClass="col-auto" height="100%">
            <Temperature
              style={{ fontSize: "3rem" }}
              tempC={20}
              tempF={50}
              unit={"C"}
            />
            <Description
              style={{ fontSize: "1rem" }}
              description={iconSettings.description}
            />
          </Center>
        </Col>
      </Row>
    </Center>
  );
}

export default Home;
