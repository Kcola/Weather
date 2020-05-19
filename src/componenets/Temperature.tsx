import React, { CSSProperties } from "react";
type TemperatureProp = {
  tempC: number;
  tempF: number;
  unit: "F" | "C";
  style?: CSSProperties;
};
function Temperature({ style, tempC, tempF, unit }: TemperatureProp) {
  if (unit === "C")
    return (
      <div style={style} className="temp-c">
        {tempC}
      </div>
    );
  else
    return (
      <div style={style} className="temp-f">
        {tempF}
      </div>
    );
}
export default Temperature;
