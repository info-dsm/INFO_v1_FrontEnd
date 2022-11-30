import axios from "axios";
import styled from "styled-components";
import { BaseUrl } from "../../../../../export/base";
import { Notice } from "../../../../common/notice";
import CompanySuccessCheck from "./check";
import { InputForm } from "./styles";

const CompanyAuth = ({ success, info, setSuccess, onChangeState }) => {
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
      title: "비밀번호 힌트",
      additionalElm: "",
      placeholder: "비밀번호 힌트를 입력해주세요..",
      key: "passwordHint",
    },
  ];
  const onCheck = (str) => {
    if (str === "인증번호 전송" && info.email !== "") {
      axios({
        url: BaseUrl + "/auth/code",
        method: "PUT",
        params: {
          email: info.email,
        },
      })
        .then((res) => {
          setSuccess({ ...success, sendEmail: true });
          Notice({
            state: "success",
            message: "인증번호 발송!",
          });
        })
        .catch((err) => {
          console.log(err);
          setSuccess({ ...success, sendEmail: false });
          Notice({
            state: "error",
            message: "존재하지 않거나 이미 가입된 이메일입니다.",
          });
        });
    } else if (str === "인증번호 확인" && info.emailCheckCode !== "") {
      axios({
        url: BaseUrl + "/auth/code",
        method: "post",
        data: {
          email: info.email,
          data: info.emailCheckCode,
          type: "SIGNUP_EMAIL",
        },
      })
        .then((res) => {
          setSuccess({ ...success, checkSuccess: true });
          Notice({
            state: "success",
            message: "인증번호가 성공적으로 확인되었습니다.",
          });
        })
        .catch((err) => {
          setSuccess({ ...success, checkSuccess: false });
          Notice({
            state: "error",
            message: "인증번호가 올바르지 않습니다.",
          });
        });
    }
  };

  return (
    <>
      <AuthDiv>
        {data.map((elm, i) => (
          <InputDiv style={{ marginBottom: `${20 + (i % 2) * 40}px` }}>
            <div>
              <span>{elm.title}</span>
              <CompanySuccessCheck elm={elm} success={success} info={info} />
              <Check onClick={() => onCheck(elm.additionalElm)}>
                {elm.additionalElm === "" ? "" : `${elm.additionalElm} >`}
              </Check>
            </div>
            <InputForm
              type={elm.title.slice(0, 4) === "비밀번호" ? "password" : "text"}
              placeholder={elm.placeholder}
              onChange={(e) => onChangeState(elm.key, e)}
            />
          </InputDiv>
        ))}
      </AuthDiv>
    </>
  );
};

export default CompanyAuth;

const AuthDiv = styled.div`
  width: 99vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 0;
    font-size: 32px;
    margin-bottom: 104px;
    font-weight: 700;
  }
`;

const Check = styled.div`
  color: #4000ff;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
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
