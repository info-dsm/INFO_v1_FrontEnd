import React from "react";
import Header from "../../../common/header";
import styled from "styled-components";
import ResistrationList from "./list";
const RecruitmentList = () => {
  return (
    <>
      <Header
        title={"모집의뢰 목록"}
        description={"모집의뢰서등을 관리해보세요"}
      />
      <MainDiv>
        <List>
          <AddBtn>
            <button>+</button>
          </AddBtn>
          <ResistrationList />
        </List>
      </MainDiv>
    </>
  );
};

const MainDiv = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const AddBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  button {
    width: 120px;
    height: 40px;
    font-size: 30px;
    border-radius: 24px;
    background-color: #f3eefe;
    border: none;
  }
`;
const List = styled.div`
  width: 1136px;
  margin-bottom: 300px;
`;

export default RecruitmentList;
