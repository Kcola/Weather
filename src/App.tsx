import React from "react";
import "./App.css";
import Icon from "./componenets/Icon";
import { IconOptions } from "./types/interfaces";

function App() {
  let iconSettings = {
    instance: 1,
    color: "cyan",
    description: "cloudy",
    height: 200,
    width: 200,
  } as IconOptions;

  return (
    <div className="App">
      <Icon options={iconSettings} />
    </div>
  );
}

export default App;
