import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingPage = () => {
  const str = ["L", "O", "A", "D", "I", "N", "G"];
  const arr = Array.from({ length: str.length }, () => {
    return "•";
  });
  return (
    <MainDiv>
      <DotContainer>
        {arr.map((str, i) => (
          <Dot delay={i * 0.4 - 2.7}>{str}</Dot>
        ))}
      </DotContainer>
      {str.map((item, i) => (
        <Text gap={i * 52} delay={i * 0.4 - 2.2}>
          <>{item}</>
        </Text>
      ))}
    </MainDiv>
  );
};
export default LoadingPage;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: linear-gradient(#7243ff, #ab91f8);
  color: #fff;
  font-weight: 600;
`;

const MoveText = keyframes`
    0% {
        transform: translateY(6px);
    }

    8% {
        transform: translateY(0px);
    }
`;

const Text = styled.div`
  position: absolute;
  width: calc(100% - 286px);
  left: calc(${(props) => props.gap}px);
  /* transform: translateX(calc(-10% - ${(props) => props.gap}px)); */
  font-size: 40px;
  letter-spacing: 27px;

  display: flex;
  justify-content: center;
  bottom: 45.2%;
  animation: ${MoveText} 2.7s ease-in-out infinite;
  animation-direction: alternate-reverse;
  animation-delay: ${(props) => props.delay}s;
`;

const MoveDot = keyframes`
    0% {
        transform: translateY(-30px);
    }

    14% {
        transform: translateY(0px);
    }
`;

const Dot = styled.div`
  font-size: 115px;
  animation: ${MoveDot} 2.7s ease-in infinite;
  animation-direction: alternate-reverse;
  animation-delay: ${(props) => props.delay}s;
`;

const DotContainer = styled.div`
  display: inline-flex;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 52.2%;
  height: 100px;
  gap: 4px;
`;
