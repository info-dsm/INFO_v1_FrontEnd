import styled from "styled-components";
import Header from "../../../../common/header"

const SignUp = () => {
  const data = [
    {
      title: "이메일",
      additionalElm: "인증번호 전송",
      placeholder: "이메일을 입력해주세요..",
    },
    {
      title: "인증번호",
      additionalElm: "인증번호 확인",
      placeholder: "인증번호를 입력해주세요..",
    },
    {
      title: "이름",
      additionalElm: "",
      placeholder: "이름을 입력해주세요..",
    },
    {
      title: "학번",
      additionalElm: "학번 중복 확인",
      placeholder: "학번을 입력해주세요..",
    },
    {
      title: "비밀번호",
      additionalElm: "",
      placeholder: "비밀번호를 입력해주세요..",
    },
    {
      title: "비밀번호 확인",
      additionalElm: "",
      placeholder: "비밀번호를 입력해주세요..",
    },
  ];
  return (
    <>
      <Header
        title={"아직 회원이 아니신가요?"}
        description={"간단한 이메일 인증으로 쉽게 가입해보세요."}
      />
      <AdminDiv>
        <h2>선생님이신가요?</h2>
        <a>관리자 회원가입 {">"}</a>
      </AdminDiv>
      <MainDiv>
        <h2>학생 회원가입</h2>
        {data.map((elm, i) => (
          <InputDiv style={{ marginBottom: `${20 + (i % 2) * 40}px` }}>
            <span>{elm.title}</span>
            <span>
              {elm.additionalElm === "" ? "" : `${elm.additionalElm} >`}
            </span>
            <input
              type={elm.title.slice(0, 4) === "비밀번호" ? "password" : "text"}
              placeholder={elm.placeholder}
            />
          </InputDiv>
        ))}
        <SubmitBtn>회원가입</SubmitBtn>
      </MainDiv>
    </>
  );
};

export default SignUp;

const AdminDiv = styled.div`
  margin-top: 69px;
  margin-left: 384px;
  h2 {
    margin: 0;
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 20px;
  }
  a {
    font-size: 16px;
    color: #4000ff;
    font-weight: 400;
  }
`;

const MainDiv = styled.div`
  width: 99vw;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-weight: 700;
`;
