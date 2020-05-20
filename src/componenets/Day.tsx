import React, { CSSProperties } from "react";
import { IconKey } from "skycons-ts";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icon from "./Icon";
import { celsius, dateToDayOfWeek } from "../helpers/functions";
import Temperature from "./Temperature";

type DayProp = {
  day: Date;
  precipitation: number;
  icon: IconKey;
  low: number;
  high: number;
  unit: "C" | "F";
};

function Day({ day, precipitation, high, icon, low, unit }: DayProp) {
  let celsiusL = Math.round(celsius(low));
  let celsiusH = Math.round(celsius(high));
  let style = {
    textAlign: "left",
    margin: "0.2vw",
  } as CSSProperties;
  let prefix = "col my-auto";
  return (
    <Row style={{ ...style }}>
      <Col bsPrefix="col col-3 my-auto">{`${dateToDayOfWeek(day)}`}</Col>
      <Col
        style={{ paddingRight: "0px" }}
        bsPrefix={`col col-3 my-auto precipitation`}
      >{`${Math.round(precipitation * 100)}%`}</Col>
      <Col style={{ paddingLeft: "0px" }} bsPrefix={prefix}>
        <Icon
          options={{
            color: "white",
            icon: icon,
            iconHeight: 40,
            iconWidth: 40,
            instance: day.getDay() + 2,
          }}
        />
      </Col>
      <Col bsPrefix={prefix}>
        <Temperature style={style} tempC={celsiusL} tempF={low} unit={unit} />
      </Col>
      <Col bsPrefix={prefix}>
        <Temperature style={style} tempC={celsiusH} tempF={high} unit={unit} />
      </Col>
    </Row>
  );
}

export default Day;
