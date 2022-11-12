import { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import "./style.css";
export const Notice = ({ props }) => {
  const state = {
    color1:
      props.state === "success"
        ? "#d0f398"
        : props.state === "error"
        ? "#ff9baf"
        : "#5C5D58",
    color2:
      props.state === "success"
        ? "#61bf61"
        : props.state === "error"
        ? "#f00000"
        : "#5C5D58",
    barColor:
      props.state === "success"
        ? "#89d275"
        : props.state === "error"
        ? "#F63A42"
        : "#5C5D58",
    icon:
      props.state === "success"
        ? "polygon(36% 60%, 83% 9%, 100% 26%, 36% 89%, 0 57%, 14% 41%)"
        : "polygon(30% 8%,9% 28%,30% 50%,9% 72%,28% 92%,50% 70%,72% 91%,91% 72%,70% 50%,91% 28%,70% 8%,50% 30%)",
  };
  let asdf = document.createElement("div");
  asdf.innerHTML = `
  <div class="MainDiv">
  <span class="Logo"><div class="Icon"></div></span>
  <div class="Message"><div class="Bar"></div></div>
  </div>
  `;
  let esd = document.getElementsByClassName("Bar");
  esd.style.backgroundColor = state.barColor;
  let Icon = document.getElementsByClassName("Icon");
  Icon.style.clipPath = state.icon;
  let MainDiv = document.getElementsByClassName("MainDiv");
  MainDiv.style.backgroundImage = `linear-gradient(#fff, #fff),
    linear-gradient(
      to right,
      ${state.color1} 0%,
      ${state.color2} 100%
    )`;
  // const MoveNotice = [
  //   {
  //     transform: "translateX(150%)",
  //   },
  //   {
  //     transform: "translateX(0)",
  //   },
  //   {
  //     transform: "translateX(0)",
  //   },
  //   {
  //     transform: "translateX(150%)",
  //   },
  // ];
  // asdf.animate(MoveNotice, {
  //   duration: 3900,
  //   fillMode: "forwards",
  //   timeFunction: "ease-in-out",
  // });
  // return (
  //   <>
  //     <MainDiv color1={state.color1} color2={state.color2}>
  //       <Logo>
  //         <Icon path={state.icon} />
  //       </Logo>
  //       <Message>{props.message}</Message>
  //       <Bar color={state.barColor} />
  //     </MainDiv>
  //   </>
  // );
};

const MoveNotice = keyframes`
    0% {
        transform: translateX(150%);
    }
    25%, 75% {

        transform: translateX(0);
    }
    100% {
        transform: translateX(150%);
    }
`;

const MainDiv = styled.div`
  position: relative;
  position: fixed;
  width: 450px;
  height: 64px;
  right: 20px;
  z-index: 99;
  top: 20px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
  border-radius: 4px;
  border: 3px solid transparent;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(
      to right,
      ${(props) => props.color1} 0%,
      ${(props) => props.color2} 100%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: inline-flex;
  align-items: center;
  animation: ${MoveNotice} 3.9s ease-in-out forwards;

  span {
    background-image: linear-gradient(
      to right,
      ${(props) => props.color1} 0%,
      ${(props) => props.color2} 100%
    );
  }
`;

const Logo = styled.span`
  width: 87px;
  height: 100%;
  clip-path: polygon(0% 0%, 65% 0, 65% 34%, 80% 50%, 65% 64%, 65% 100%, 0 100%);
  border: 5px solid transparent;
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  /* clip-path: polygon(36% 60%, 83% 9%, 100% 26%, 36% 89%, 0 57%, 14% 41%); */
  clip-path: ${(props) => props.path};
  background-color: #fff;
  margin-left: 11px;
`;

const Message = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-left: -6px;
  margin-bottom: 5px;
`;

const Count = keyframes`
    0% {
        width: 380px;
    }
    100% {
        width: 0px;
    }
`;

const Bar = styled.div`
  width: 380px;
  height: 5px;
  position: absolute;
  bottom: 5px;
  left: 56px;
  background-color: ${(props) => props.color};
  border-radius: 0 4px 4px 0;
  animation: ${Count} 2s ease-out forwards;
  animation-delay: 0.9s;
`;
