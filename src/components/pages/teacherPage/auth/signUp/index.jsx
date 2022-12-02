import styled from "styled-components";
import Header from "../../../../common/header";
import checkImg from "../../../../../images/checked.png";
import failImg from "../../../../../images/failed.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../../../../../export/base";
import { Alert } from "../../../../common/alert";
import { Notice } from "../../../../common/notice";

const TeacherSignUp = () => {
  const str = [
    {
      name: "이메일",
      additionalElm: "인증번호 전송",
      placeholder: "선생님 전용 이메일을 입력해주세요",
      check: "certifiedSend",
      func: () => {
        certified();
      },
      key: "email",
    },
    {
      name: "인증번호",
      additionalElm: "인증번호 확인",
      placeholder: "인증번호를 입력해주세요",
      check: "certifiedCheck",
      func: () => {
        certifiedCheck();
      },
      key: "emailCheckCode",
    },
    {
      name: "이름",
      additionalElm: "",
      placeholder: "이름을 입력해주세요",
      check: "",
      func: () => {},
      key: "name",
    },
    {
      name: "선생님 인증번호",
      additionalElm: "",
      placeholder: "선생님 인증번호를 입력해주세요",
      check: "",
      func: () => {},
      key: "teacherCheckCode",
    },
    {
      name: "비밀번호",
      additionalElm: "",
      placeholder: "비밀번호를 입력해주세요",
      check: "",
      func: () => {},
      key: "password",
    },
  ];

  const [data, setData] = useState({
    email: "",
    emailCheckCode: "",
    password: "",
    teacherCheckCode: "",
    name: "",
  });

  const [success, setSuccess] = useState({
    certifiedSend: "",
    certifiedCheck: "",
  });

  function changeInput(e, props) {
    setData({ ...data, [props]: e.target.value });
  }

  const submit = () => {
    const { email, emailCheckCode, password, teacherCheckCode, name } = data;
    console.log(data);
    if (Object.values(success).includes(true)) {
      if (!Object.values(data).includes("")) {
        axios({
          url: BaseUrl + "/auth/signup/teacher",
          method: "post",
          data: {
            email: email,
            password: password,
            name: name,
          },
          params: {
            emailCode: emailCheckCode,
            teacherCode: teacherCheckCode,
          },
        })
          .then((res) => {
            Alert({
              state: "success",
              message: "계정이 성공적으로 생성되었습니다.",
            }).then(() => {
              window.location.href = "/teacher/login";
            });
          })
          .catch(() => {
            Alert({
              state: "error",
              message: "계정이 생성되지 못 했습니다.",
            });
          });
      } else
        Notice({
          state: "error",
          message: "내용을 모두 입력해주세요.",
        });
    } else
      Notice({
        state: "error",
        message: "인증번호나 학번 중복 확인을 해주세요.",
      });
  };

  const certified = () => {
    if (data.email !== "") {
      axios({
        url: BaseUrl + "/auth/code",
        method: "PUT",
        params: {
          email: data.email,
        },
      })
        .then((res) => {
          setSuccess({ ...success, certifiedSend: true });
          Notice({
            state: "success",
            message: "인증번호 발송!",
          });
        })
        .catch((err) => {
          console.log(err);
          setSuccess({ ...success, certifiedSend: false });
          Notice({
            state: "error",
            message: "존재하지 않거나 이미 가입된 이메일입니다.",
          });
        });
    } else {
      Notice({
        state: "error",
        message: "이메일을 입력해주세요.",
      });
    }
  };

  const certifiedCheck = () => {
    if (data.emailCheckCode !== "") {
      axios({
        url: BaseUrl + "/auth/code",
        method: "post",
        data: {
          email: data.email,
          data: data.emailCheckCode,
          type: "SIGNUP_EMAIL",
        },
      })
        .then((res) => {
          setSuccess({ ...success, certifiedCheck: true });
          Notice({
            state: "success",
            message: "인증번호가 성공적으로 확인되었습니다.",
          });
        })
        .catch((err) => {
          setSuccess({ ...success, certifiedCheck: false });
          Notice({
            state: "error",
            message: "인증번호가 올바르지 않습니다.",
          });
        });
    } else {
      Notice({
        state: "error",
        message: "인증번호를 입력해주세요.",
      });
      //푸시 알림
    }
  };

  return (
    <>
      <MainDiv>
        <Container>
          <Banner>
            <Title>
              <TitleText size={40} weight={700}>
                선생님 회원가입
              </TitleText>
              <TitleText size={24} weight={600}>
                자신의 계정을 <br /> 만들어보세요!
              </TitleText>
            </Title>
          </Banner>
          <Auth>
            <>
              {str.map((item) => (
                <Input>
                  {typeof success[item.check] === "boolean" ? (
                    <Success
                      src={success[item.check] ? checkImg : failImg}
                      alt=""
                    />
                  ) : (
                    <></>
                  )}
                  <span>
                    {item.name}{" "}
                    <AdditionalElm onClick={() => item.func()}>
                      {item.additionalElm}
                    </AdditionalElm>
                  </span>
                  <input
                    placeholder={item.placeholder}
                    onChange={(e) => changeInput(e, item.key)}
                    type={item.key === "password" ? "password" : "text"}
                  />
                  <hr />
                </Input>
              ))}
            </>
            <Submit>
              <button onClick={() => submit()}>SignUp</button>
              <HighlightText cursor={"auto"} color={"#9B9EA0"}>
                or
              </HighlightText>
              <HighlightText cursor={"pointer"} color={"#7243FF"}>
                <Link to={"/teacher/login"}>
                  <a>Login</a>
                </Link>
              </HighlightText>
            </Submit>
          </Auth>
        </Container>
      </MainDiv>
    </>
  );
};

export default TeacherSignUp;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  margin-top: -3px;
  background-image: url("data:image/svg+xml,%3Csvg width='1920' height='1080' viewBox='0 0 1920 1080' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_2086_9)'%3E%3Crect width='1920' height='1080' fill='white'/%3E%3Crect width='1920' height='1080' fill='white'/%3E%3Cmask id='path-2-inside-1_2086_9' fill='white'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1174.6 0H1911.89C1916.31 0 1919.89 3.58172 1919.89 8V1088.78L575 1237L1174.6 0Z'/%3E%3C/mask%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1174.6 0H1911.89C1916.31 0 1919.89 3.58172 1919.89 8V1088.78L575 1237L1174.6 0Z' fill='%23AB91F8'/%3E%3Cpath d='M1174.6 0V-2H1173.35L1172.8 -0.872366L1174.6 0ZM1919.89 1088.78L1920.11 1090.77L1921.89 1090.57V1088.78H1919.89ZM575 1237L573.2 1236.13L571.622 1239.38L575.219 1238.99L575 1237ZM1174.6 2H1911.89V-2H1174.6V2ZM1911.89 2C1915.21 2 1917.89 4.6863 1917.89 8H1921.89C1921.89 2.47714 1917.42 -2 1911.89 -2V2ZM1917.89 8V1088.78H1921.89V8H1917.89ZM1919.68 1086.79L574.781 1235.01L575.219 1238.99L1920.11 1090.77L1919.68 1086.79ZM576.8 1237.87L1176.4 0.872366L1172.8 -0.872366L573.2 1236.13L576.8 1237.87Z' fill='white' mask='url(%23path-2-inside-1_2086_9)'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_2086_9'%3E%3Crect width='1920' height='1080' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
`;

const Container = styled.div`
  width: 964px;
  height: 655px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fdfdfd;
  display: flex;
`;

const Banner = styled.div`
  width: 392px;
  height: 655px;
  background-image: url("data:image/svg+xml,%3Csvg width='392' height='655' viewBox='0 0 392 655' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 8.00002C0 3.58174 3.58172 0 8 0H384C388.418 0 392 3.58172 392 8V647C392 651.418 388.418 655 384 655H8C3.58172 655 0 651.418 0 647V8.00002Z' fill='url(%23paint0_linear_45_381)'/%3E%3Cmask id='path-2-inside-1_45_381' fill='white'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M284.445 0H383.895C388.313 0 391.895 3.58172 391.895 8V129.55L198 147.187L284.445 0Z'/%3E%3C/mask%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M284.445 0H383.895C388.313 0 391.895 3.58172 391.895 8V129.55L198 147.187L284.445 0Z' fill='black'/%3E%3Cpath d='M284.445 0V-2H283.301L282.721 -1.01287L284.445 0ZM391.895 129.55L392.076 131.542L393.895 131.377V129.55H391.895ZM198 147.187L196.275 146.174L194.304 149.531L198.181 149.178L198 147.187ZM284.445 2H383.895V-2H284.445V2ZM383.895 2C387.208 2 389.895 4.68629 389.895 8H393.895C393.895 2.47715 389.418 -2 383.895 -2V2ZM389.895 8V129.55H393.895V8H389.895ZM391.714 127.559L197.819 145.195L198.181 149.178L392.076 131.542L391.714 127.559ZM199.725 148.199L286.17 1.01287L282.721 -1.01287L196.275 146.174L199.725 148.199Z' fill='white' mask='url(%23path-2-inside-1_45_381)'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M294.626 0H292.205L390.054 172.429L124.755 196.559L240.198 0H238.019L122.453 196.769L121.217 198.872L123.52 198.663L391.129 174.322L392 174.243V171.591L294.626 0Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 269.75L44.5041 263.525L46.7912 263.205L45.3706 261.384L0 203.234V206.485L43.0835 261.704L0 267.73V269.75Z' fill='white'/%3E%3Cpath d='M276.864 515.142L337.523 550.775L280.734 592.299L276.864 515.142Z' stroke='white' stroke-width='2'/%3E%3Cmask id='path-7-inside-2_45_381' fill='white'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M47.1973 655H8C3.58172 655 0 651.419 0 647V524L137 591.982L47.1973 655Z'/%3E%3C/mask%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M47.1973 655H8C3.58172 655 0 651.419 0 647V524L137 591.982L47.1973 655Z' fill='black'/%3E%3Cpath d='M47.1973 655V657H47.829L48.3461 656.637L47.1973 655ZM0 524L0.889003 522.208L-2 520.775V524H0ZM137 591.982L138.149 593.619L140.903 591.686L137.889 590.19L137 591.982ZM47.1973 653H8V657H47.1973V653ZM8 653C4.68629 653 2 650.314 2 647H-2C-2 652.523 2.47715 657 8 657V653ZM2 647V524H-2V647H2ZM-0.889003 525.792L136.111 593.774L137.889 590.19L0.889003 522.208L-0.889003 525.792ZM135.851 590.345L46.0484 653.363L48.3461 656.637L138.149 593.619L135.851 590.345Z' fill='white' mask='url(%23path-7-inside-2_45_381)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_45_381' x1='196' y1='0' x2='196' y2='466' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%237243FF'/%3E%3Cstop offset='1' stop-color='%23AB91F8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");
  padding-top: 127px;
  box-sizing: border-box;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 53px;
`;

const TitleText = styled.div`
  text-align: center;
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  color: #fdfdfd;
`;

const Auth = styled.div`
  margin-top: 61px;
  padding-left: 114px;
  padding-right: 70px;
  width: 572px;
  display: flex;
  flex-direction: column;
`;

const AdditionalElm = styled.span`
  cursor: pointer;
  color: #7243ff;
  font-size: 12px;
  font-weight: 600;
  margin-top: 10px;
  margin-left: 10px;
`;

const Input = styled.div`
  position: relative;
  width: 393px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  justify-content: center;
  span {
    color: #9b9ea0;
    font-size: 14px;
    margin-bottom: 5px;
    margin-left: 5px;
    span {
      color: #7243ff;
      font-size: 12px;
    }
  }
  input {
    font-size: 17px;
    margin-bottom: 5px;
    padding-left: 5px;
    border: none;
  }
  hr {
    width: 100%;
    height: 1px;
    background-color: #9b9ea0;
    border: none;
    margin: 0;
  }
`;

const HighlightText = styled.span`
  color: ${(props) => props.color};
  font-size: 18px;
  cursor: ${(props) => props.cursor};
  margin-left: 10px;

  a {
    text-decoration: none;
    color: #7243ff;
  }
  
`;

const Submit = styled.div`
  margin-top: 50px;
  font-size: 18px;
  font-weight: 500;
  button {
    border: none;
    background-color: #ab91f8;
    color: #fdfdfd;
    font-size: 18px;
    font-weight: 500;
    width: 153px;
    height: 42px;
    border-radius: 6px;
    cursor: pointer;
  }
`;
const Success = styled.img`
  width: 14px;
  height: 14.1px;
  object-fit: cover;
  position: absolute;
  top: 2px;
  left: -15px;
`;
