import styled from "styled-components";
import { WaitImg } from "../../../../../images";
import { SuccessImg } from "../../../../../images";
import { useEffect, useState } from "react";
const ImageProps = ({ status }) => {
  const [state, setState] = useState(WaitImg);
  useEffect(() => {
    console.log(status);
    if (status === "APPROVE") {
      setState(SuccessImg);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Emoji src={state} alt="아이콘" />
    </>
  );
};
export default ImageProps;
const Emoji = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;
