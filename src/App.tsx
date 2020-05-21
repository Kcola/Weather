import React, { useEffect, useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componenets/Header";
import Center from "./componenets/Center"
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TimeMachine from "./pages/TimeMachine";
import { initWeather, refreshWeather, truthy } from "./helpers/functions";
import { Geo, WeatherInfo } from "./helpers/interfaces";
import Loading from "./componenets/Loading";

function App() {
  let options = {
    color: "white",
    iconHeight: 128,
    iconWidth: 128,
    instance: 1,
    description: "rain",
  } as WeatherInfo;

  const [weather, setWeather] = useState(options);
  let [loaded, setLoaded] = useState(false);
  let [unit, setUnit] = useState("F" as "C" | "F");
  let [blocked, setBlocked] = useState(false);
  sessionStorage.setItem("unit", unit);
  useEffect(
    function () {
      let position = {} as Geo;
      if (!loaded) {
        if (!truthy(sessionStorage.positon))
          initWeather(position, options, setLoaded, setBlocked);
        else refreshWeather(setWeather, setLoaded);
      }
    },
    [loaded, unit, options, blocked]
  );
  if (loaded)
    return (
      <Router>
        <Header
          setUnit={setUnit}
          props={{ variant: "tabs", defaultActiveKey: "/home" }}
        />
        <Switch>
          <Route exact path="/" component={() => <Home {...weather} />} />
          <Route exact path="/timemachine" component={TimeMachine} />
        </Switch>
      </Router>
    );
  else if(blocked) return <Center colClass="col col-auto" height="93vh"><div className="blocked">Location service blocked, cannnot retrieve weather.</div></Center>
  else return <Loading name="rotating-plane" color="white" />;
}

export default App;
