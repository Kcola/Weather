import React from "react";

type FooterProp = {
  style: React.CSSProperties;
};
function Footer({ style }: FooterProp) {
  return (
    <div className="footer" style={style}>
      Copyright © 2020. Developed by Kolawole Campbell.
    </div>
  );
}

export default Footer;
