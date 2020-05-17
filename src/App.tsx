import React from "react";
import "./App.scss";
import Icon from "./componenets/Icon";
import { IconOptions } from "./types/interfaces";
import Temperature from "./componenets/Temperature";
import Location from "./componenets/Location";
import "bootstrap/dist/css/bootstrap.min.css";
import Description from "./componenets/Description";
import Center from "./componenets/Center";
import Header from "./componenets/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
  let iconSettings = {
    instance: 1,
    color: "white",
    description: "cloudy",
    height: 150,
    width: 150,
  } as IconOptions;

  return (
    <div>
      <div className="App">
        <Header variant="tabs" defaultActiveKey="/home" />
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
      </div>
    </div>
  );
}

export default App;
