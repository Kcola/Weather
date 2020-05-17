import React, { ReactNode } from "react";
import Row from "react-bootstrap/Row";

type Center = {
  children?: ReactNode;
  height: string;
};
function Center({ children, height }: Center) {
  return (
    <Row style={{ height: height }}>
      <div className={`col col-auto ml-auto mr-auto my-auto`}>{children}</div>
    </Row>
  );
}

export default Center;
