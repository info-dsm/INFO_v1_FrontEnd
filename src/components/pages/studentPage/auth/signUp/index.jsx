import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../../../common/header";
import checkImg from "../../../../../images/checked.png";

const StudentSignUp = () => {
  const data = [
    {
      title: "이메일",
      additionalElm: "인증번호 전송",
      placeholder: "이메일을 입력해주세요..",
      key: "email",
    },
    {
      title: "인증번호",
      additionalElm: "인증번호 확인",
      placeholder: "인증번호를 입력해주세요..",
      key: "emailCheckCode",
    },
    {
      title: "이름",
      additionalElm: "",
      placeholder: "이름을 입력해주세요..",
      key: "name",
    },
    {
      title: "학번",
      additionalElm: "학번 중복 확인",
      placeholder: "학번을 입력해주세요..",
      key: "studentKey",
    },
    {
      title: "비밀번호",
      additionalElm: "",
      placeholder: "비밀번호를 입력해주세요..",
      key: "password",
    },
    {
      title: "비밀번호 확인",
      additionalElm: "",
      placeholder: "비밀번호를 입력해주세요..",
      key: "",
    },
    {
      title: "깃허브 주소",
      additionalElm: "",
      placeholder: "깃허브 주소를 입력해주세요..",
      key: "githubLink",
    },
  ];

  const [state, setState] = useState({
    studentKey: "",
    email: "",
    emailCheckCode: "",
    password: "",
    name: "",
    githubLink: "",
  });

  const [passwordCheck, setPasswordCheck] = useState("");

  const [success, setSuccess] = useState({
    checkSuccess: false,
    passwordSuccess: false,
    studentKeySuccess: false,
  });

  function changeInput(e, props) {
    if (props.length) setState({ ...state, [props]: e.target.value });
    else setPasswordCheck(e.target.value);

    console.log(state);
  }

  useEffect(() => {
    if (state.password === passwordCheck && state.password.length !== 0) {
      setSuccess({ ...success, passwordSuccess: true });
    } else setSuccess({ ...success, passwordSuccess: false });
  }, [passwordCheck, state.password]);

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
            <div>
              <span>{elm.title}</span>
              {elm.key === "emailCheckCode" && success.checkSuccess ? (
                <Success src={checkImg} alt="" />
              ) : (
                <></>
              )}
              {elm.key === "studentKey" && success.studentKeySuccess ? (
                <Success src={checkImg} alt="" />
              ) : (
                <></>
              )}
              {elm.title === "비밀번호 확인" && success.passwordSuccess ? (
                <Success src={checkImg} alt="" />
              ) : (
                <></>
              )}
              <Check>
                {elm.additionalElm === "" ? "" : `${elm.additionalElm} >`}
              </Check>
            </div>
            <input
              type={elm.title.slice(0, 4) === "비밀번호" ? "password" : "text"}
              placeholder={elm.placeholder}
              onChange={(e) => changeInput(e, elm.key)}
            />
          </InputDiv>
        ))}
        <SubmitBtn>회원가입</SubmitBtn>
      </MainDiv>
    </>
  );
};

export default StudentSignUp;

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
  margin-top: 139px;

  h2 {
    margin: 0;
    font-size: 32px;
    margin-bottom: 104px;
    font-weight: 700;
  }
`;

const Success = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;

const Check = styled.div`
  color: #4000ff;
  font-size: 16px;
  font-weight: 400;
`;

const InputDiv = styled.div`
  width: 600px;
  margin-bottom: 30px;
  span {
    margin-left: 25px;
    font-size: 20px;
    font-weight: 700;
  }

  div {
    display: inline-flex;
    align-items: center;
    gap: 10px;
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
