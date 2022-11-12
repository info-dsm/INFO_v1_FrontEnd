import React from "react";
import Header from "../../../common/header";
import styled from "styled-components";
import ResistrationList from "./list";
import LoadingPage from "../../../common/loading";
import ErrorPage from "../../../common/error";
import { getMyList } from "../../../api/company/requesrResistration";
const RecruitmentList = () => {
  const { status, data } = getMyList();
  return (
    <>
      {status === "loading" ? (
        <LoadingPage />
      ) : status === "error" ? (
        <ErrorPage />
      ) : (
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
              <ResistrationList data={data} />
            </List>
          </MainDiv>
        </>
      )}
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
  width: 1176px;
  margin-bottom: 300px;
  padding: 0;
`;

export default RecruitmentList;
