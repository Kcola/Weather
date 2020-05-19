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
};

function Day({ day, precipitation, high, icon, low }: DayProp) {
  let celsiusL = Math.round(celsius(low));
  let celsiusH = Math.round(celsius(high));
  let unit = "C" as "C" | "F";
  let style = { textAlign: "center", fontSize: "2rem" } as CSSProperties;
  let prefix = "col my-auto";
  return (
    <Row style={{ ...style, height: "13.3vh" }}>
      <Col bsPrefix={prefix}>{`${dateToDayOfWeek(day)}`}</Col>
      <Col bsPrefix={prefix}>{`${Math.round(precipitation * 100)}%`}</Col>
      <Col bsPrefix={prefix}>
        <Icon
          options={{
            color: "white",
            icon: icon,
            iconHeight: 100,
            iconWidth: 100,
            instance: day.getDay(),
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
