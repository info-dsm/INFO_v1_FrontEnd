import styled from "styled-components";
import { useDispatch } from "react-redux";
import { stateModal } from "../../../../redux/store/modal";
import { useSelector } from "react-redux";
import SelectModal from "./modal";
import { data } from "./data";
const RequstResistration = () => {
  const modal = useSelector((state) => state.modal.state);
  const dispatch = useDispatch();
  return (
    <>
      <Table>
        <Title>채용직무</Title>
        <Button onClick={() => dispatch(stateModal(true))}>선택</Button>
      </Table>
      {modal ? <SelectModal /> : <></>}
    </>
  );
};
export default RequstResistration;
const Table = styled.div`
  width: 1136px;
  height: 3000px;
  background-color: red;
  left: 0;
  right: 0;
  margin: 0 auto;
`;
const Title = styled.div`
  position: relative;
  width: 200px;
  height: 46px;
  left: 0px;
  top: 125px;

  font-family: "NanumGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;

  color: ${(props) => props.theme.colors.black};
`;
const Button = styled.button`
  position: relative;
  width: 100px;
  height: 40px;
  left: 183px;
  top: 80px;
  font-family: "NanumGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  border: none;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.blue};
  border-radius: 100px;
  cursor: pointer;
`;
