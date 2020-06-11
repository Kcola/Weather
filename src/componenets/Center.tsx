import React, { ReactNode } from "react";
import Row from "react-bootstrap/Row";

type Center = {
  children?: ReactNode;
  height?: string;
  minHeight?: string;
  id?: string;
  backgroundColor?: string;
  colClass: number | string;
};
function Center({
  id,
  children,
  height,
  colClass,
  backgroundColor,
  minHeight,
}: Center) {
  return (
    <Row
      id={id}
      style={{
        height: height,
        backgroundColor: backgroundColor,
        minHeight: minHeight,
      }}
    >
      <div className={`col ${colClass} ml-auto mr-auto my-auto`}>
        {children}
      </div>
    </Row>
  );
}

export default Center;
