import React from "react";
type TemperatureProp = {
  tempC: number;
  tempF: number;
  unit: "F" | "C";
};
function Temperature({ tempC, tempF, unit }: TemperatureProp) {
  if (unit === "C")
    return (
      <div>
        <div className="temp-c">{tempC}</div>
      </div>
    );
  else
    return (
      <div>
        <div className="temp-f">{tempF}</div>
      </div>
    );
}
export default Temperature;
