import React from "react";
import styled from '@emotion/styled';

import Location from "./location.js";



const WeatherCard = (props) => {
  const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(to top, red, pink);
    width: 200px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
  `
  return (
      <Card>
         <Location/>
          <img className="icon" src="weather.png"alt="Weather Icon"/>
          <h1 className="temp"> 20 °C</h1>
          <h3 className="condition">Clouds</h3>
      </Card>
  )
};
export default WeatherCard