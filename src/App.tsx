import React, { useEffect, useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componenets/Header";
import Center from "./componenets/Center";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TimeMachine from "./pages/TimeMachine";
import { Geo, WeatherInfo } from "./helpers/interfaces";
import Loading from "./componenets/Loading";
import { initWeather } from "./helpers/functions";

function App() {
  let options = {
    color: "white",
  } as WeatherInfo;

  const [weather, setWeather] = useState(options);
  const [loaded, setLoaded] = useState(false);
  const [unit, setUnit] = useState("F" as "C" | "F");
  const [blocked, setBlocked] = useState(false);
  sessionStorage.setItem("unit", unit);

  useEffect(function () {
    let position = {} as Geo;
    initWeather(position, options, setLoaded, setBlocked);
  }, []);
  if (loaded)
    return (
      <Router>
        <Header
          setUnit={setUnit}
          props={{ variant: "tabs", defaultActiveKey: "/home" }}
        />
        <Switch>
          <Route
            exact
            path="/Weather/"
            component={() => (
              <Home
                {...{
                  unit: unit,
                  weatherInfo: weather,
                  setWeather: setWeather,
                  blocked: blocked,
                  setBlocked: setBlocked,
                  loaded: loaded,
                  setLoaded: setLoaded,
                }}
              />
            )}
          />
          <Route
            exact
            path="/Weather/timemachine"
            component={() => (
              <TimeMachine
                {...{
                  unit: unit,
                  weatherInfo: weather,
                  setWeather: setWeather,
                  blocked: blocked,
                  setBlocked: setBlocked,
                  loaded: loaded,
                  setLoaded: setLoaded,
                }}
              />
            )}
          />
        </Switch>
      </Router>
    );
  else if (blocked)
    return (
      <Center colClass="col col-auto" height="93vh">
        <div className="blocked">
          Location service blocked, cannot retrieve weather.
        </div>
      </Center>
    );
  else return <Loading name="rotating-plane" color="white" />;
}

export default App;
