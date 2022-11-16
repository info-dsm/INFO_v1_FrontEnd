import Wait from "./wait";
import styled from "styled-components";
import Header from "../../../common/header";
import NavProps from "../../../common/nav";
import { TeacherData } from "../../../../export/data";
const TeacherList = () => {
  return (
    <>
      <Header
        title="모집의뢰 관리"
        description="회사들이 등록한 모집 의뢰서를 관리합니다."
      />
      <NavProps props={TeacherData} idx={1} />
      <Title top={100}>대기중인 모집 공고</Title>
      <Wait path="/notice/waiting-notice/list" />
      <Title top={0}>승인된 모집 공고</Title>
      <Wait path="/notice/list" />
    </>
  );
};
export default TeacherList;
const Title = styled.div`
  position: relative;
  width: 1100px;
  margin: 0 auto;
  margin-top: ${(props) => props.top}px;
  text-align: left;
  font: 700 normal 30px "NanumGothic";
  color: ${(props) => props.theme.colors.black};
`;
