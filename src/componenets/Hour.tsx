import React, { CSSProperties } from "react";
import { IconKey } from "skycons-ts";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icon from "./Icon";
import { celsius, dateToDayOfWeek } from "../helpers/functions";
import Temperature from "./Temperature";

type HourProp = {
  day: Date;
  precipitation: number;
  icon: IconKey;
  temp: number;
  unit: "C" | "F";
  summary: string;
  appTemp: number;
};

function Hour({
  day,
  precipitation,
  icon,
  temp,
  unit,
  appTemp,
  summary,
}: HourProp) {
  let celsiusT = Math.round(celsius(temp));
  let appCelsius = Math.round(celsius(appTemp));
  let style = {
    textAlign: "left",
    margin: "0.2vw",
    width: "100%",
  } as CSSProperties;
  let prefix = "col col-auto my-auto ml-auto mr-auto";

  return (
    <Row
      style={{
        ...style,
        borderTop: "1px solid white",
        borderBottom: "1px solid white",
      }}
    >
      <Col
        bsPrefix={"col col-1 my-auto ml-auto mr-auto"}
      >{`${day.getHours()}:00`}</Col>
      <Col bsPrefix={"col col-2 my-auto ml-auto mr-auto"}>{`${summary}`}</Col>
      <Col bsPrefix={"col col-auto my-auto ml-auto mr-auto d-none d-sm-block"}>
        <Icon
          options={{
            top: "3px",
            color: "white",
            icon: icon,
            iconHeight: 30,
            iconWidth: 30,
            instance: day.getHours() + 10,
          }}
        />
      </Col>
      <Col
        style={{ lineHeight: "2rem" }}
        bsPrefix={`col col-auto my-auto ml-auto mr-auto precipitation`}
      >{`${Math.round(precipitation * 100)}%`}</Col>
      <Col bsPrefix={prefix}>
        <Temperature style={style} tempC={celsiusT} tempF={temp} unit={unit} />
      </Col>
      <Col bsPrefix={prefix}>
        <Temperature
          style={style}
          tempC={appCelsius}
          tempF={appTemp}
          unit={unit}
        />
      </Col>
    </Row>
  );
}

export default Hour;
