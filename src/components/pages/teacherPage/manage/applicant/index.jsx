import styled from "styled-components";
import Recruitment from "./recruitment";
import { stateModalManage } from "../../../../../redux/store/modal";
import { useSelector, useDispatch } from "react-redux";
import { TitleData } from "../../../../../export/data";
import ModalManage from "../modal";
import Header from "../../../../common/header";
const Applicant = () => {
  const Data = useSelector((stack) => stack.selectValue.value);
  const modal = useSelector((state) => state.modal.state.modalmanage);
  const count = useSelector((count) => count.count.count.manageCount);
  const dispatch = useDispatch();
  const ShowModal = () => {
    dispatch(stateModalManage(true));
  };
  return (
    <>
      <Header title="모집의뢰 등록" description="모집공고를 등록해보세요" />
      <Table>
        <Title>채용직무</Title>
        <Button onClick={() => ShowModal()}>선택</Button>
        <Recruitment
          TitleData={TitleData}
          Data={Data}
          count={count}
        ></Recruitment>
        {modal ? <ModalManage Data={Data} /> : <></>}
      </Table>
    </>
  );
};
export default Applicant;
const Table = styled.div`
  position: relative;
  width: 1136px;
  height: auto;
  top: 100px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;
const Title = styled.h1`
  position: relative;
  width: 200px;
  height: 46px;
  left: 0px;
  margin-top: 100px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: ${(props) => props.theme.colors.black};
`;
const Button = styled.button`
  position: relative;
  width: 100px;
  height: 40px;
  top: -60px;
  left: 220px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.blue};
  border-radius: 100px;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.colors.blue};
`;
