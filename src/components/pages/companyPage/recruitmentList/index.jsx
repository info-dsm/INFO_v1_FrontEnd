import React from "react";
import Header from "../../../common/header";
import styled from "styled-components";
import success from "../../../../images/checked.png";

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
          <Recruitment>
            <div>
              <Emoji src={success} alt="" />
              <Number>17</Number>
              <Category>
                <div>대분류</div>
                <div>웹프론트엔드</div>
              </Category>
              <Category>
                <div>소분류</div>
                <div>풀스택</div>
              </Category>
              <Category>
                <div>채용인원</div>
                <div>2명</div>
              </Category>
            </div>
            <ApplicantList>
              <div>2022-10-03</div>
              <button>신청자 리스트</button>
            </ApplicantList>
          </Recruitment>
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

const Recruitment = styled.div`
  width: 100%;
  height: 83px;
  border-radius: 24px;
  background-color: #f0f0f0;
  border: none;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 31px;
  display: flex;
  justify-content: space-between;
  > div {
    height: 83px;
    display: flex;
    align-items: center;
  }
`;

const ApplicantList = styled.div`
  div {
    font-size: 16px;
    margin-right: 17px;
  }
  button {
    width: 120px;
    height: 40px;
    color: #fff;
    border: none;
    border-radius: 24px;
    background-color: #4000ff;
    font-size: 14px;
    font-weight: 700;
  }
`;

const Emoji = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;

const Number = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #4000ff;
  margin-left: 20px;
  margin-right: 31px;
`;

const Category = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 20px;
  margin-right: 61px;
  div {
    font-size: 24px;
    font-weight: 700;
    color: #4000ff;
    + div {
      color: #000;
      font-weight: 400;
      font-size: 20px;
    }
  }
`;
export default RecruitmentList;
