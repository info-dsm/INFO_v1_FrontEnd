import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const ErrorPage = () => {
  const arr = Array.from({ length: 3 }, () => {
    return "404";
  });

  return (
    <MainDiv>
      <Title>
        {arr.map((t, i) => (
          <Text index={i}>{t}</Text>
        ))}
      </Title>
      <Description>PAGE NOT FOUND</Description>
      <Link to={"/"}>
        <Button>GO BACK HOME</Button>
      </Link>
    </MainDiv>
  );
};
export default ErrorPage;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: linear-gradient(#7243ff, #ab91f8);
  color: #fff;
  font-weight: 600;
`;

const glitch = keyframes`
  0% {
    opacity: 0;
    font-family: Arial;
  };
  60% {
    opacity: 0.5;
    font-style: oblique;
  }
  80% {
    transform: none;
    opacity: 0.7;
  }
  100% {
    opacity: 0.8;
    text-shadow: none;
  }`;

const Title = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Text = styled.span`
  position: absolute;
  top: 223px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
  font-size: 200px;
  opacity: 0;
  animation: ${glitch} .8s calc(${(props) => props.index} * 150ms + 0.5s)
    forwards;
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Description = styled.div`
  font-size: 40px;
  position: absolute;
  top: 479px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  animation: ${FadeIn} 0.8s forwards linear;
  animation-delay: 1.8s;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: #fff;
  border: none;
  width: 400px;
  height: 63px;
  color: #ab91f8;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 700;
  position: absolute;
  top: 606px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  animation: ${FadeIn} 0.8s forwards linear;
  animation-delay: 2.3s;
`;
