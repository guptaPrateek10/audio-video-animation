import React from "react";
import styled from "styled-components";

import image from "./assets/BG1.jpg";
import imagegif from "./assets/leavesbg.gif";
import textimage from "./assets/Untitled.svg";
import logo from "./assets/Robotilt.gif";
import logostand from "./assets/Robostand.gif";

// imgUrl = require("../src/assets/leavesbg.gif").default;
const Container = styled.div`
  background-image: url(${image});
  width: 100%;
  height: 1024px;
  background-repeat: repeat;
  @media (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column;

    height: 750px;
    background-image: url(${imagegif});
    background-repeat: repeat;
  }
`;

const Top = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  transform: scale(1);

  @media (max-width: 480px) {
    width: 100%;
    height: 250px;
  }
`;
const TextLogo = styled.img`
  position: absolute;
  transform: scale(1.3);
  left: 35%;
  @media (max-width: 480px) {
    transform: scale(0.9);
    left: -5%;
    top: 0%;
  }
`;
const Logo = styled.img`
  max-height: 250px;
  max-width: 250px;
  transform: scaleX(-1);

  position: absolute;
  left: 32%;
  top: 25%;
  @media (max-width: 480px) {
    left: 5%;
    top: 55%;
    max-height: 180px;
    max-width: 180px;
  }
`;

const Bottom = styled.div`
  width: 90%;
  height: 225px;
  border: 1.5px solid white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 5%;

  @media (max-width: 560px) {
    width: 90%;
    height: 120px;
    margin-top: 45px;
    border: 1px solid white;
    border-radius: 15px;
  }
`;
const Text = styled.h2`
  color: #dca315;
  position: absolute;
  left: 5%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 32px;
  font-weight: 350;
  margin-left: 10%;
  @media (max-width: 480px) {
    font-size: 16px;
    left: 0;
  }
`;
const LogoBottom = styled.img`
  position: absolute;
  left: 35%;
  transform: scale(1.3x);

  @media (max-width: 480px) {
    width: 350px;
    height: 200px;
    transform: scale(1.3);
    left: 15%;
  }
`;
const Home = () => {
  return (
    <Container>
      <Top>
        <TextLogo src={textimage} />
        <Logo src={logo} />
      </Top>
      <Bottom>
        <Text>
          DESIGNS THAT MAKE
          <br /> A DIFFERENCE
        </Text>
        <LogoBottom src={logostand}></LogoBottom>
      </Bottom>
    </Container>
  );
};

export default Home;
