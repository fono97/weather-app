import React from "react";
import styled from "@emotion/styled";

import Location from "./location";
import Icon from "./icon";
import Condition from "./condition";

const WeatherCard = (props) => {
  let highColor = (1 - (props.temp - 12) / 28) * 255;
  let lowColor = highColor - 150;
  const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(
      to top, 
      rgb(255, ${highColor}, 0),
      rgb(255,${lowColor}, 0));
    width: 200px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
  `;
  return (
    <Card>
      <Location />
      <Icon />
      <Condition />
    </Card>
  );
};
export default WeatherCard;
