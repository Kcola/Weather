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
function App() {
  let iconSettings = {
    instance: 1,
    color: "cyan",
    description: "cloudy",
    height: 200,
    width: 200,
  } as IconOptions;

  return (
    <div>
      <div className="App">
        <Header variant="tabs" defaultActiveKey="/home" />
        <Center height="100vh">
          <Location location="Los Angeles" />
          <Icon options={iconSettings} />
          <Temperature tempC={20} tempF={50} unit={"C"} />
          <Description description={iconSettings.description} />
        </Center>
      </div>
    </div>
  );
}

export default App;
