import React from "react";
import Nav, { NavProps } from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import Center from "./Center";

type HeaderProp = {
  props: NavProps;
  setUnit: React.Dispatch<React.SetStateAction<"C" | "F">>;
};

function Header({ props, setUnit }: HeaderProp) {
  function handleUnitChange() {
    if (sessionStorage.unit === "F") setUnit("C");
    else setUnit("F");
  }
  return (
    <Nav {...props}>
      <Nav.Item>
        <Nav.Link as={Link} to="/Weather/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Weather/timemachine">
          Time Machine
        </Nav.Link>
      </Nav.Item>
      <Nav.Item bsPrefix="ml-auto mr-3">
        <Center height="100%" colClass="col-auto">
          <BootstrapSwitchButton
            offlabel="°C"
            onlabel="°F"
            size="sm"
            onstyle="dark"
            offstyle="secondary"
            checked={true}
            onChange={handleUnitChange}
          />
        </Center>
      </Nav.Item>
    </Nav>
  );
}

export default Header;
