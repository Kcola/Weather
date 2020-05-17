import React, { ReactNode } from "react";
import Row from "react-bootstrap/Row";

type Center = {
  children?: ReactNode;
  height: string;
  id?: string;
  colClass: number | string;
};
function Center({ id, children, height, colClass }: Center) {
  return (
    <Row id={id} style={{ height: height }}>
      <div className={`col ${colClass} ml-auto mr-auto my-auto`}>
        {children}
      </div>
    </Row>
  );
}

export default Center;
