import styled from "styled-components";
import { stateModalManage } from "../../../../../redux/store/modal";
import { useSelector, useDispatch } from "react-redux";
import ModalManage from "../modal";
import Header from "../../../../common/header";
import { useLocation } from "react-router-dom";
import Recruitment from "./recruitment";
import StatusManageComponent from "./status";
import NavProps from "../../../../common/nav";
import { TeacherData, CompanyData2 } from "../../../../../export/data";
const Applicant = () => {
  const modal = useSelector((state) => state.modal.state.modalmanage);
  const count = useSelector((count) => count.count.count.manageCount);
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);
  const content = location.state;
  const asdf = location.pathname.slice(0, 8);
  const qwer = asdf === "/company" ? CompanyData2 : TeacherData;
  const ShowModal = () => {
    dispatch(stateModalManage(true));
  };
  return (
    <>
      <Header title="모집의뢰 등록" description="모집공고를 등록해보세요" />
      <NavProps props={qwer} idx={1} />
      <Table>
        <Title>채용직무</Title>
        <Button onClick={() => ShowModal()}>선택</Button>
        <Recruitment data={content} count={count}></Recruitment>
      </Table>
      <BoxLocate>
        <Live>지원 현황</Live>
        <StatusManageComponent />
      </BoxLocate>
      {modal ? (
        <ModalManage Data={content.recruitmentBusinessResponse} />
      ) : (
        <></>
      )}
    </>
  );
};
export default Applicant;
const Table = styled.div`
  position: relative;
  width: 1190px;
  height: auto;
  left: 0;
  right: 0;
  margin: 75px auto;
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
const BoxLocate = styled.div`
  position: relative;
  width: 1190px;
  margin: 0 auto;
  height: auto;
  margin-bottom: 300px;
`;
const Live = styled.div`
  margin-left: 20px;
  margin-bottom: 20px;
  font: 800 normal 24px "NanumGothic";
  color: ${(props) => props.theme.colors.blue};
`;
