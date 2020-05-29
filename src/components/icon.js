import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Img = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
  `;
  return <Img  src="weather.png" alt="Weather Icon" />;
};

export default Icon;
