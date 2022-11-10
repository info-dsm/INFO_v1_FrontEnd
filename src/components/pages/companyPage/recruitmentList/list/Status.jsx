import styled from "styled-components";
import { WaitImg } from "../../../../../images";
import { SuccessImg } from "../../../../../images";
import { FailImg } from "../../../../../images";
import { useState } from "react";
const ImageProps = (status) => {
  const [state, setState] = useState(FailImg);
  if (status === "WAITING") {
    setState(WaitImg);
  } else if (status === "APPROVE") {
    setState(SuccessImg);
  }
  return (
    <>
      <Emoji src={state} alt="" />
    </>
  );
};
export default ImageProps;
const Emoji = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;
