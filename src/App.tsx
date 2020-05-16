import React from "react";
import "./App.scss";
import Icon from "./componenets/Icon";
import { IconOptions } from "./types/interfaces";
import Temperature from "./componenets/Temperature";

function App() {
  let iconSettings = {
    instance: 1,
    color: "cyan",
    description: "cloudy",
    height: 200,
    width: 200,
  } as IconOptions;

  return (
    <div className="App" style={{display:"flex"}}>
      <Icon options={iconSettings} />
      <Temperature tempC={20} tempF={50} unit={"C"}/>
    </div>
  );
}

export default App;
