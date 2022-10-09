import styled from "styled-components";
import { useDispatch } from "react-redux";
import { stateModal } from "../../../../../redux/store/modal";
const SelectModal = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Box>
        <Head>
          <ExitButton onClick={() => dispatch(stateModal(false))}>X</ExitButton>
        </Head>
        <Table></Table>
      </Box>
    </>
  );
};
export default SelectModal;
const Box = styled.div`
  height: 2818px;
  width: calc(1136px - 360px);
  top: 400px;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 999999px;
  border-radius: 20px;
`;
const ExitButton = styled.div`
  position: absolute;
  width: 21px;
  height: 38px;
  left: 1015px;
  top: 44px;
  cursor: pointer;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;

  color: ${(props) => props.theme.colors.white};
  :hover {
    color: ${(props) => props.theme.colors.gray};
  }
`;
const Head = styled.div`
  border-radius: 20px;
  width: calc(1136px - 360px);
  height: 176px;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.navy} 0%,
    ${(props) => props.theme.colors.purple} 100%
  );
`;
const Table = styled.div`
  position: absolute;
  border-radius: 20px;
  top: 120px;
  width: calc(1136px - 360px);
  height: 2698px;
  background-color: ${(props) => props.theme.colors.white};
`;
