import React, { useEffect, useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componenets/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Forecast from "./pages/Forecast";
import TimeMachine from "./pages/TimeMachine";
import { initWeather } from "./helpers/functions";
import { getWeather } from "./helpers/getWeather";
import { Geo, WeatherInfo } from "./helpers/interfaces";

export async function weather() {
  return await getWeather(JSON.parse(sessionStorage.position));
}
function App() {
  let options = {
    color: "white",
  } as WeatherInfo;

  const [weather, setWeather] = useState(options);

  useEffect(function () {
    let position = {} as Geo;
    if (!weather.loaded) initWeather(position, setWeather);
  });
  if (weather.loaded)
    return (
      <Router>
        <Header variant="tabs" defaultActiveKey="/home" />
        <Switch>
          <Route
            exact
            path="/"
            component={(props: any) => <Home {...props} {...weather} />}
          />
          <Route exact path="/forecast" component={Forecast} />
          <Route exact path="/timemachine" component={TimeMachine} />
        </Switch>
      </Router>
    );
  else return <div>loading</div>;
}

export default App;
