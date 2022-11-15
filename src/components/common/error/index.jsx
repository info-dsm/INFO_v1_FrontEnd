import React from "react";
import styled, { keyframes } from "styled-components";
import Error from "./error";

const ErrorPage = () => {
  return (
    <MainDiv>
      <Error color={"#fff"} />
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
