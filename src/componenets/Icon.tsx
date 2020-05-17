import React, { useEffect } from "react";
import { Skycons } from "skycons-ts";
import { IconOptions } from "../types/interfaces";
type IconProp = {
  options: IconOptions;
};

function Icon({ options }: IconProp) {
  useEffect(function () {
    let icons = new Skycons({ color: options.color });
    icons.add(`icon${options.instance}`, options.description);
    icons.play();
  });
  return (
    <canvas
      id={`icon${options.instance}`}
      width={options.width}
      height={options.height}
    />
  );
}

export default Icon;
