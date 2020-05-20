import React from "react";
import Spinner from "react-spinkit";
import Center from "./Center";
type LoadingProp = {
  name:
    | "three-bounce"
    | "double-bounce"
    | "rotating-plane"
    | "folding-cube"
    | "wave"
    | "wandering-cubes"
    | "pulse"
    | "chasing-dots"
    | "circle"
    | "cube-grid"
    | "wordpress"
    | "ball-grid-beat"
    | "ball-grid-pulse"
    | "line-spin-fade-loader"
    | "ball-spin-fade-loader"
    | "ball-pulse-rise"
    | "line-scale"
    | "line-scale-pulse-out"
    | "line-scale-pulse-out-rapid"
    | "line-scale-party"
    | "ball-triangle-path"
    | "ball-scale-ripple-multiple"
    | "ball-pulse-sync"
    | "ball-beat"
    | "ball-scale-multiple"
    | "ball-zig-zag"
    | "ball-zig-zag-deflect"
    | "ball-clip-rotate"
    | "ball-clip-rotate-pulse"
    | "ball-clip-rotate-multiple"
    | "ball-scale-ripple"
    | "triangle-skew-spin"
    | "pacman";
  color: string;
};
function Loading({ name, color }: LoadingProp) {
  return (
    <Center
      backgroundColor="rgb(36,36,36)"
      height="100vh"
      colClass="col-auto loading"
    >
      <Spinner name={name} color={color} />
    </Center>
  );
}

export default Loading;
