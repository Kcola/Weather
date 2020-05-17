import React from "react";
import Nav, { NavProps } from "react-bootstrap/Nav";

function Header(props: NavProps) {
  return (
    <Nav {...props}>
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/forecast">Forecast</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/timeMachine">Time Machine</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;
