import React from "react";
type LocationProp = {
  location: string;
};

function Location({ location }: LocationProp) {
  return <div className={"location"}>{location}</div>;
}

export default Location;
