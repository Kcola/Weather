import React from "react";

type DescriptionProp = {
  description: string;
};
function Description({ description }: DescriptionProp) {
  return <div className="description">{description}</div>;
}

export default Description;
