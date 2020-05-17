import React from "react";
import CSS from "csstype";
type DescriptionProp = {
  description: string;
  style?: CSS.Properties;
};
function Description({ style, description }: DescriptionProp) {
  return (
    <div style={style} className="description">
      {description}
    </div>
  );
}

export default Description;
