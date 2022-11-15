import styled, { keyframes } from "styled-components";
import React from "react";

const Load = (props) => {
  const str = ["L", "O", "A", "D", "I", "N", "G"];
  const arr = Array.from({ length: str.length }, () => {
    return "•";
  });
  return (
    <>
      <DotContainer color={props.color}>
        {arr.map((str, i) => (
          <Dot delay={i * 0.4 - 2.7}>{str}</Dot>
        ))}
      </DotContainer>
      {str.map((item, i) => (
        <Text color={props.color} gap={i * 52} delay={i * 0.4 - 2.2}>
          <>{item}</>
        </Text>
      ))}
    </>
  );
};

export default Load;

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
  color: ${(props) => props.color || "#7243ff"};
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
  color: ${(props) => props.color || "#7243ff"};
`;
