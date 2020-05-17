import React from "react";
import CSS from "csstype";
type TemperatureProp = {
  tempC: number;
  tempF: number;
  unit: "F" | "C";
  style?: CSS.Properties;
};
function Temperature({ style, tempC, tempF, unit }: TemperatureProp) {
  if (unit === "C")
    return (
      <div>
        <div style={style} className="temp-c">
          {tempC}
        </div>
      </div>
    );
  else
    return (
      <div>
        <div style={style} className="temp-f">
          {tempF}
        </div>
      </div>
    );
}
export default Temperature;
