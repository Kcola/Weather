import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componenets/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Forecast from "./pages/Forecast";
import TimeMachine from "./pages/TimeMachine";

function App() {
  return (
    <Router>
      <Header variant="tabs" defaultActiveKey="/home" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/forecast" component={Forecast} />
        <Route exact path="/timemachine" component={TimeMachine} />
      </Switch>
    </Router>
  );
}

export default App;
