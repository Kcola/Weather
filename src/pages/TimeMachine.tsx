import React, { useEffect, useState } from "react";
import Center from "../componenets/Center";
import { IconInfo, WeatherInfo } from "../helpers/interfaces";
import { refreshTMWeather } from "../helpers/functions";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import Loading from "../componenets/Loading";
import Forecast from "./Forecast";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { withRouter } from "react-router-dom";
import Footer from "../componenets/Footer";
import { relative } from "path";

type TimeMachineProp = {
  loaded: boolean;
  unit: "C" | "F";
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  setWeather: React.Dispatch<React.SetStateAction<WeatherInfo & IconInfo>>;
};

function TimeMachine({ unit }: TimeMachineProp) {
  let prefix = "col col-auto my-auto ml-auto mr-auto";
  const [weatherInfo, setTMWeather] = useState(
    JSON.parse(sessionStorage.TMWeather)
  );
  const [TMLoaded, setTMLoaded] = useState(false);
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    if (!TMLoaded)
      refreshTMWeather(setTMWeather, weatherInfo, setTMLoaded, time);
  }, [TMLoaded, time]);
  if (TMLoaded)
    return (
      <div className="main">
        <Center height="25vh" colClass="col-auto">
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
        </Center>
        <Center height="100%" colClass="col col-lg-6">
          <Row
            style={{
              textAlign: "left",
              color: "white",
              margin: "0.2vw",
              width: "100%",
              borderTop: "1px solid white",
              borderBottom: "1px solid white",
              height: "40px",
              fontWeight: "bold",
            }}
          >
            <Col bsPrefix={"col col-1 my-auto ml-auto mr-auto"}>{"Time"}</Col>
            <Col bsPrefix={"col col-2 my-auto ml-auto mr-auto"}>{"Desc"}</Col>
            <Col
              bsPrefix={
                "col col-auto my-auto ml-auto mr-auto d-none d-sm-block"
              }
            >
              {"Skycon"}
            </Col>
            <Col bsPrefix={prefix}>{"Rain %"}</Col>
            <Col bsPrefix={prefix}>{"Temp"}</Col>
            <Col bsPrefix={prefix}>{"Feels"}</Col>
          </Row>
        </Center>
        <Forecast id="time-machine" unit={unit} tm={true} />
        <Footer style={{ position: "relative" }} />
      </div>
    );
  else return <Loading name="rotating-plane" color="white" />;
}

export default TimeMachine;
