import * as React from "react";
import { useEffect } from "react";
import { IconKey, Skycons } from "skycons-ts";
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
    <div>
      <canvas
        id={`icon${options.instance}`}
        width={options.width}
        height={options.height}
      ></canvas>
    </div>
  );
}
export default Icon;
