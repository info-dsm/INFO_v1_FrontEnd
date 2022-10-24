import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../../../common/header";
import checkImg from "../../../../../images/checked.png";

const CompanySignUp = () => {
  const optionData = [
    "ㄴㅇㅁㄹ",
    "ㄴㅇㅁㄹ",
    "ㄴㅇㅁㄹ",
    "ㄴㅇㅁㄹ",
    "ㄴㅇㅁㄹ",
    "ㄴㅇㅁㄹ",
    "ㄴㅇㅁㄹ",
  ];
  const [selectData, setSelectData] = useState("");

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
      key: "",
    },
  ];

  const [state, setState] = useState({
    email: "",
    emailCheckCode: "",
    password: "",
    teacherCheckCode: "",
    name: "",
  });

  const [passwordCheck, setPasswordCheck] = useState("");

  const [success, setSuccess] = useState({
    checkSuccess: false,
    passwordSuccess: false,
  });

  function changeInput(e, props) {
    if (props.length) setState({ ...state, [props]: e.target.value });
    else setPasswordCheck(e.target.value);
  }

  useEffect(() => {
    if (state.password === passwordCheck && state.password.length !== 0) {
      setSuccess({ ...success, passwordSuccess: true });
    } else setSuccess({ ...success, passwordSuccess: false });
  }, [passwordCheck, state.password]);

  return (
    <>
      <Header
        title={"기업 가입"}
        description={"채용 의뢰 전, 회사를 등록해주세요!"}
      />
      <Nav>
        <button>기업정보</button>
        <button>모집의뢰정보</button>
      </Nav>
      <MainDiv>
        <ContainerDiv>
          <Title>
            <h2>회사 명</h2>
            <input type={"radio"} />
            <span>선도 기업</span>
          </Title>
          <ContentDiv>
            <Registration>
              <Category>사업자등록번호</Category>
              <div>000-00-00000</div>
            </Registration>
            <GridDiv>
              <Category>대표자</Category>
              <div>안진우</div>
              <Category>대표자</Category>
              <div>안진우</div>
              <Category>대표자</Category>
              <div>안진우</div>
              <Category>대표자</Category>
              <div>안진우</div>
            </GridDiv>
            <Address>
              <Category>주소</Category>
              <div>
                <div>
                  <span>본사</span>
                  <div>
                    경상남도 함안군 가야읍 도항2길 -55 (동신아파트 102동 1305호)
                  </div>
                </div>
                <div>
                  <span>연구소/지점</span>
                  <div>
                    경상남도 함안군 가야읍 도항2길 -55 (동신아파트 102동 1305호)
                  </div>
                </div>
              </div>
            </Address>
          </ContentDiv>
          <hr />
        </ContainerDiv>
        <ContainerDiv>
          <Title>
            <h2>Contect</h2>
          </Title>
          <ContentDiv>
            <div></div>
            <GridDiv>
              <Category>대표자</Category>
              <input />
              <Category>소속 부서</Category>
              <input />
              <Category>전화번호</Category>
              <input />
              <Category>휴대전화</Category>
              <input />
            </GridDiv>
          </ContentDiv>
          <hr />
        </ContainerDiv>
        <ContainerDiv>
          <Title>
            <h2>사업 분야</h2>
          </Title>
          <SelectDiv>
            <Pinned>
              <span>핀테크</span>
              <span>▼</span>
            </Pinned>
            <Option>
              {optionData.map((str) => (
                <span>{str}</span>
              ))}
              <input placeholder="+" />
            </Option>
          </SelectDiv>
          <hr />
        </ContainerDiv>
        <ContainerDiv>
          <Title>
            <h2>Contect</h2>
          </Title>
          <ContentDiv />
          <Description />
        </ContainerDiv>
      </MainDiv>
      <AuthDiv>
        {data.map((elm, i) => (
          <InputDiv style={{ marginBottom: `${20 + (i % 2) * 40}px` }}>
            <div>
              <span>{elm.title}</span>
              {elm.key === "emailCheckCode" && success.checkSuccess ? (
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
      </AuthDiv>
    </>
  );
};

export default CompanySignUp;

const AuthDiv = styled.div`
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

const Nav = styled.div`
  width: 100vw;
  height: 100px;
  background-color: #000;
  padding-left: 350px;
  gap: 40px;
  display: inline-flex;
  align-items: center;

  button {
    padding: 0px 30px;
    border: none;
    height: 50px;
    border-radius: 24px;
    font-size: 24px;
  }
`;

const MainDiv = styled.div`
  margin-top: 242px;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1136px;
`;

const Description = styled.textarea`
  width: 1136px;
  height: 257px;
  background-color: #f0f0f0;
  border: none;
  resize: none;
  border-radius: 12px;
`;

const ContainerDiv = styled.div`
  width: 1100px;

  h2 {
    margin: 0;
  }

  hr {
    width: 1236px;
    height: 4px;
    border-radius: 4px;
    border: none;
    margin: 146px 0 65px -70px;
    background-color: #f0f0f0;
  }

  > span {
    font-weight: 400;
    font-size: 20px;
  }
`;

const SelectDiv = styled.div`
  width: 356px;
  height: 50px;
  border-radius: 24px;
  background-color: #f0f0f0;
`;

const Pinned = styled.div`
  width: 264px;
  height: 50px;
  border-radius: 24px;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background-color: #f9f9f9;
  z-index: 1;
  border-radius: 24px 24px 0 0;

  box-shadow: 0px -2px 5px 1px rgba(0, 0, 0, 0.15);
`;

const Option = styled.div`
  width: 264px;
  height: 120px;
  overflow: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 24px 24px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.15);
  padding-right: 11px;
  z-index: -1;
  background-color: #fff;
  span,
  input {
    border: none;
    color: #bdbdbd;
    font-size: 24px;
    padding-left: 24px;
    &::placeholder {
      color: #bdbdbd;
    }
  }
  span:hover {
    background-color: #f9f9f9;
    cursor: pointer;
  }
  ::-webkit-scrollbar {
    width: 22px;
  }
  ::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border: 8px solid transparent;
    background-color: #4000ff;
    border-radius: 24px;
  }
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 60px;
  h2 {
    margin-right: 53px;
    font-size: 40px;
    font-weight: 700;
  }
  input {
    margin-right: 20px;
  }
  span {
    font-size: 24px;
  }
`;

const Category = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #4000ff;
`;

const GridDiv = styled.div`
  width: 700px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-right: 80px;
  grid-row-gap: 43px;
  place-items: center end;
  margin-bottom: 86px;

  input {
    border: none;
    width: 200px;
    height: 50px;
    border-radius: 24px;
    background-color: #f0f0f0;
    font-size: 20px;
    margin-right: 30px;
    padding-left: 24px;
    font-weight: 700;
  }
  div {
    font-size: 20px;
  }
`;

const Address = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  > div {
    margin-left: 35px;
    > div {
      width: 630px;
      display: flex;
      align-items: center;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 20px;
      span {
        width: 120px;
        display: flex;
        justify-content: flex-end;
        margin-right: 22px;
      }
      div {
        width: 509px;
        height: 40px;
        border-radius: 24px;
        background-color: #f3eeff;
        border: none;
        text-align: center;
        padding: 10px 0;
      }
    }
  }
`;

const Registration = styled.div`
  width: 200px;
  flex-wrap: wrap;
  display: flex;
  justify-content: flex-start;
  height: 80px;
  div {
    font-size: 20px;
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
