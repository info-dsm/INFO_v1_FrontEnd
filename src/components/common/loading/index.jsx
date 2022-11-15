import React from "react";
import styled from "styled-components";
import Load from "./load";

const LoadingPage = () => {
  return (
    <MainDiv>
      <Load color={"#fff"} />
    </MainDiv>
  );
};
export default LoadingPage;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  font-weight: 600;
  background: linear-gradient(#7243ff, #ab91f8);
`;
