import React, { useEffect } from "react";
import { Skycons } from "skycons-ts";
import { WeatherInfo } from "../helpers/interfaces";
type IconProp = {
  options: WeatherInfo;
};

function Icon({ options }: IconProp) {
  useEffect(function () {
    let icons = new Skycons({ color: options.color });
    icons.add(`icon${options.instance}`, options.icon);
    icons.play();
  });
  return (
    <canvas
      id={`icon${options.instance}`}
      width={options.iconWidth}
      height={options.iconHeight}
    />
  );
}

export default Icon;
