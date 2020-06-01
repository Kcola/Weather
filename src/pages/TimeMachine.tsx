import React, { useEffect, useState } from "react";
import Center from "../componenets/Center";
import { IconInfo, WeatherInfo } from "../helpers/interfaces";
import { refreshTMWeather } from "../helpers/functions";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import Loading from "../componenets/Loading";
import Forecast from "./Forecast";

type TimeMachineProp = {
  loaded: boolean;
  unit: "C" | "F";
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  setWeather: React.Dispatch<React.SetStateAction<WeatherInfo & IconInfo>>;
};

function TimeMachine({ unit }: TimeMachineProp) {
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
        <Forecast id="time-machine" unit={unit} tm={true} />
      </div>
    );
  else
    return <Loading name="rotating-plane" color="white" />;
}

export default TimeMachine;
