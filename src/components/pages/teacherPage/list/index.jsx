import Wait from "./wait";
import styled from "styled-components";
import Header from "../../../common/header";
const TeacherList = () => {
  return (
    <>
      <Header
        title="모집의뢰 관리"
        description="회사들이 등록한 모집 의뢰서를 관리합니다."
      />
      <Title>대기중인 모집 공고</Title>
      <Wait path="/notice/waiting-notice/list" />
      <Title>모집 공고</Title>
      <Wait path="/notice/list" />
    </>
  );
};
export default TeacherList;
const Title = styled.div`
  position: relative;
  width: 1100px;
  margin: 0 auto;
  text-align: left;
  font: 700 normal 40px "NanumGothic";
  color: ${(props) => props.theme.colors.black};
`;
