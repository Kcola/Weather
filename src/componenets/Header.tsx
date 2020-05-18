import React from "react";
import Nav, { NavProps } from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Header(props: NavProps) {
  return (
    <Nav {...props}>
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/forecast">
          Forecast
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/timemachine">
          Time Machine
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;
