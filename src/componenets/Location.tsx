import React from "react";
import CSS from "csstype";
type LocationProp = {
  location: string;
  style?: CSS.Properties;
};

function Location({ style, location }: LocationProp) {
  return (
    <div style={style} className={"location"}>
      {location}
    </div>
  );
}

export default Location;
