import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { SelectImg } from "../../../images";
const SelectComplete = ({ Data, func, write, num }) => {
  const [state, setState] = useState(false);
  const AddValuePropsFunc = (props) => {
    func(props, num);
    setState(false);
  };
  useEffect(() => {
    document.addEventListener(
      "click",
      () => {
        setState(false);
      },
      [state, setState]
    );
  }, [state]);
  return (
    <>
      <InputProps
        width={200}
        id={write}
        state={state}
        onClick={(e) => {
          e.stopPropagation();
          setState(!state);
        }}
      >
        {write}
        <ImgSelected src={SelectImg} state={state} />
      </InputProps>
      <DataList state={state}>
        <ul>
          {Data.map((user) => (
            <li onMouseDown={() => AddValuePropsFunc(user.skill)}>
              {user.skill}
            </li>
          ))}
        </ul>
      </DataList>
    </>
  );
};
export default SelectComplete;
const Spin = (x, y) => keyframes`
 0% {
    transform: rotate(${x}deg);
 }
 100% {
  transform: rotate(${y}deg);
 }
`;
const DataList = styled.div`
  position: relative;
  width: 200px;
  height: 150px;
  padding: 9px 0px 14px 0px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 20px 20px;
  z-index: 2;
  visibility: ${(props) => (props.state ? "visible" : "hidden")};
  ul {
    width: 195px;
    height: 127px;
    list-style-type: none;

    overflow-y: scroll;
    scroll-padding-top: 20px;
    scroll-snap-points-y: none;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      width: 5px;
      height: 127px;
      border-radius: 20px;

      background-color: ${(props) => props.theme.colors.mediumGray};
    }

    &::-webkit-scrollbar-thumb {
      padding-top: 9px;
      height: 28px;
      border-radius: 20px;
      background: ${(props) => props.theme.colors.blue};
    }
    overflow-x: hidden;
    margin-top: -3.5px;
  }
  li {
    position: relative;
    padding-left: 16px;
    width: 200px;
    height: 30px;
    color: #000;
    font-size: 18px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.lightGray};
    margin-left: -40px;
  }

  li:hover {
    background-color: ${(props) => props.theme.colors.lightGray};
    color: ${(props) => props.theme.colors.white};
  }
`;
const InputProps = styled.div`
  padding-top: 11px;
  padding-right: 15px;
  width: ${(props) => props.width}px;
  height: 50px;
  border-radius: 20px 20px ${(props) => (props.state ? 0 : 20)}px
    ${(props) => (props.state ? 0 : 20)}px;
  font: 700 normal 22px "NanumGothic", sans-serif;
  color: ${(props) => props.theme.colors.black};
  text-align: center;
  border: none;
  background-color: ${(props) => props.theme.colors.semiWhite};
`;
const ImgSelected = styled.img`
  top: 17px;
  left: 170px;
  position: absolute;
  width: 15px;
  height: 15px;
  animation: ${(props) => (props.state ? Spin(60, 0) : Spin(0, 60))} 0.25s
    ease-in-out 0s alternate forwards;
`;
