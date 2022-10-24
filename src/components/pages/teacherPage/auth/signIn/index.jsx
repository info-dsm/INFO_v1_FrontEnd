import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../../../common/header";

const TeacherSignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const changeInput = (e, props) => {
    setState({ ...state, [props]: e.target.value });
  };

  return (
    <>
      <Header
        title={"손쉽게 로그인 해보세요!"}
        description={"이메일과 비밀번호만 입력됩니다."}
      />
      <MainDiv>
        <h2>선생님 로그인</h2>
        <InputDiv>
          <span>이메일</span>
          <span>인증번호 전송{">"}</span>
          <input
            value={state.email}
            onChange={(e) => changeInput(e, "email")}
            placeholder="이메일을 입력해주세요.."
          />
        </InputDiv>
        <InputDiv>
          <span>비밀번호</span>
          <input
            value={state.password}
            onChange={(e) => changeInput(e, "password")}
            type="password"
            placeholder="비밀번호를 입력해주세요.."
          />
        </InputDiv>
        <SubmitBtn>로그인</SubmitBtn>
      </MainDiv>
    </>
  );
};

export default TeacherSignIn;

const MainDiv = styled.div`
  width: 99vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 109px;
  margin-bottom: 150px;
  h2 {
    margin: 0;
    font-size: 32px;
    margin-bottom: 104px;
    font-weight: 700;
  }
`;

const InputDiv = styled.div`
  width: 600px;
  margin-bottom: 30px;
  span {
    margin-left: 25px;
    font-size: 20px;
    font-weight: 700;

    + span {
      color: #4000ff;
      font-size: 16px;
      font-weight: 400;
    }
  }
  input {
    margin-top: 13px;
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 24px;
    background-color: #f0f0f0;
    padding-left: 24px;
    color: #000;
    font-size: 20px;
    font-weight: 700;
  }
`;

const SubmitBtn = styled.button`
  width: 600px;
  height: 50px;
  border-radius: 24px;
  margin-top: 33px;
  background: linear-gradient(to right, #ab91f8, #7243ff);
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  font-weight: 700;
`;
