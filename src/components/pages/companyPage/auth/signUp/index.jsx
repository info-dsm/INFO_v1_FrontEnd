import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../../../common/header";
import checkImg from "../../../../../images/checked.png";
import failImg from "../../../../../images/failed.png";
import axios from "axios";
import { BaseUrl } from "../../../../../export/base";
import { Notice } from "../../../../common/notice";
import { Alert } from "../../../../common/alert";
import NavProps from "../../../../common/nav";
import { open } from "../../../../common/addresshook";
const CompanySignUp = () => {
  const [business, setBusiness] = useState("");
  const formData = new FormData();
  const [showFile, setShowFile] = useState({
    businessRegisteredCertificate: [],
    companyIntroductionFile: [],
    companyLogo: [],
    companyPhotoList: [],
  });
  const fileName = [
    { name: "businessRegisteredCertificate", kr: "사업자 등록증" },
    { name: "companyIntroductionFile", kr: "회사 소개 파일" },
    { name: "companyLogo", kr: "회사 로고" },
    { name: "companyPhotoList", kr: "회사 사진 목록" },
  ];

  const [companyInfomation, setCompanyInfomation] = useState({
    companyNumber: "",
    companyName: "",
    homeFullAddress: "",
    homeAddressNumber: 0,
    agentFullAddress: "",
    agentAddressNumber: 0,
    representative: "",
    establishedAt: 0,
    workerCount: 0,
    annualSales: 0,
    contactorName: "",
    contactorRank: "",
    phoneNumber: "",
    contactorPhone: "",
    email: "",
    emailCheckCode: "",
    introduction: "",
    password: "",
    passwordHint: "",
    isLeading: false,
  });

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

  const [passwordCheck, setPasswordCheck] = useState("");

  const [success, setSuccess] = useState({
    sendEmail: "",
    checkSuccess: "",
    passwordSuccess: "",
  });

  const [businessAreaList, setBusinessAreaList] = useState([
    { name: "사업체수", checked: false },
    { name: "전기‧가스/수도/건설업", checked: false },
    { name: "운수 및 창고업", checked: false },
    { name: "정보통신업", checked: false },
    { name: "금융 및 보험업", checked: false },
    { name: "부동산업", checked: false },
    { name: "전문과학 기술 서비스업", checked: false },
    { name: "사업시설 관리, 사업지원 및 임대 서비스업", checked: false },
  ]);

  useEffect(() => {
    if (
      companyInfomation.password === passwordCheck &&
      companyInfomation.password.length !== 0
    ) {
      setSuccess({ ...success, passwordSuccess: true });
    } else setSuccess({ ...success, passwordSuccess: false });
  }, [passwordCheck, companyInfomation.password]);

  const AddFileProps = (e, props) => {
    let arr = [];
    for (let i = 0; i < e.target.files.length; i++) {
      if (e.target.files[i].size <= 1000000) {
        settingFormData(props, e.target.files[i]);
        arr.push(e.target.files[i].name);
      } else {
        Notice({
          state: "error",
          message: "파일 크기가 너무 큽니다.",
        });
        arr = [];
        break;
      }
    }
    setShowFile({ ...showFile, [props]: arr });
  };

  const onSignUp = () => {
    const {
      companyNumber,
      companyName,
      homeFullAddress,
      homeAddressNumber,
      agentFullAddress,
      agentAddressNumber,
      representative,
      establishedAt,
      workerCount,
      annualSales,
      contactorName,
      contactorRank,
      phoneNumber,
      contactorPhone,
      email,
      introduction,
      password,
      isLeading,
      emailCheckCode,
      passwordHint,
    } = companyInfomation;
    const body = {
      companyNameRequest: {
        companyNumber: companyNumber,
        companyName: companyName,
      },
      companyInformation: {
        homeAddress: {
          fullAddress: homeFullAddress,
          addressNumber: parseInt(homeAddressNumber),
        },
        agentAddress: {
          fullAddress: agentFullAddress,
          addressNumber: parseInt(agentAddressNumber),
        },
        representative: representative,
        establishedAt: parseInt(establishedAt),
        workerCount: parseInt(workerCount),
        annualSales: parseInt(annualSales),
      },
      companyContact: {
        contactorName: contactorName,
        contactorRank: contactorRank,
        phoneNumber: phoneNumber,
        contactorPhone: contactorPhone,
        email: email,
      },
      businessAreaList: businessAreaList
        .map((item) => (item.checked ? item.name : undefined))
        .filter((element) => element !== undefined),
      introduction: introduction,
      password: password,
      isLeading: isLeading,
      passwordHint: passwordHint,
    };

    let len = 1;
    for (let i in Object.values(showFile)) {
      len *= Object.values(showFile)[i].length;
    }

    if (
      success.checkSuccess &&
      success.passwordSuccess &&
      len >= 1 &&
      !Object.values(companyInfomation).includes("")
    ) {
      settingFormData("request", body);
      axios({
        url: BaseUrl + "/company",
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        data: formData,
        params: {
          emailCheckCode: emailCheckCode,
        },
      })
        .then((res) => {
          Alert({
            state: "success",
            message: "계정이 성공적으로 생성되었습니다.",
          }).then((result) => {
            window.location.href = "/company/login";
          });
        })
        .catch((err) => {
          Alert({
            state: "error",
            message: "계정 생성이 원활하게 되지 않았습니다..",
          });
        });
    } else {
      Notice({
        state: "error",
        message: "내용을 모두 입력해주세요..",
      });
    }
  };

  const settingFormData = (props, body) => {
    if (body.constructor === File) {
      if (props === "companyPhotoList") {
        formData.append(props, body);
      } else {
        formData.set(props, body);
      }
    }
    if (body.constructor === Object) {
      formData.set(
        props,
        new Blob([JSON.stringify(body)], {
          type: "application/json",
        })
      );
    }
  };

  const onChangeState = (props, e) => {
    if (props.length)
      setCompanyInfomation({ ...companyInfomation, [props]: e.target.value });
    else setPasswordCheck(e.target.value);
  };

  const onCheck = (str) => {
    if (str === "인증번호 전송" && companyInfomation.email !== "") {
      axios({
        url: BaseUrl + "/company/email",
        method: "POST",
        params: {
          email: companyInfomation.email,
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
          setSuccess({ ...success, sendEmail: false });
          Notice({
            state: "error",
            message: "존재하지 않거나 이미 가입된 이메일입니다.",
          });
        });
    } else if (
      str === "인증번호 확인" &&
      companyInfomation.emailCheckCode !== ""
    ) {
      axios({
        url: BaseUrl + "/company/email/code/check",
        method: "GET",
        params: {
          email: companyInfomation.email,
          code: companyInfomation.emailCheckCode,
        },
      })
        .then((res) => {
          setSuccess({ ...success, checkSuccess: true });
          Notice({
            state: "error",
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
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setCompanyInfomation({
      ...companyInfomation,
      homeFullAddress: fullAddress,
      homeAddressNumber: data.zonecode,
    });
    document.body.removeChild(document.getElementById("daum_postcode_script"));
  };
  const subhandleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setCompanyInfomation({
      ...companyInfomation,
      agentFullAddress: fullAddress,
      agentAddressNumber: data.zonecode,
    });
    document.body.removeChild(document.getElementById("daum_postcode_script"));
  };
  return (
    <>
      <Header
        title={"기업 등록"}
        description={"채용 의뢰 전, 회사를 등록해주세요!"}
      />

      {/* <NavProps props={CompanyData} idx={0} /> */}
      <MainDiv>
        <ContainerDiv>
          <Title>
            <h2>회사 명</h2>
            <CheckInput
              type="checkbox"
              checked={companyInfomation.isLeading}
              onChange={(e) => {
                setCompanyInfomation({
                  ...companyInfomation,
                  isLeading: e.target.checked,
                });
              }}
            ></CheckInput>
            <span>선도 기업</span>
          </Title>
          <ContentDiv>
            <GridDiv width={800} column={4}>
              <Category>회사 명</Category>
              <InputForm
                onChange={(e) => onChangeState("companyName", e)}
                placeholder="회사 명을 입력해주세요"
              />
              <Category>
                사업자
                <br />
                등록번호
              </Category>
              <InputForm
                onChange={(e) => onChangeState("companyNumber", e)}
                placeholder="ex) 000-00-00000"
              />
              <Category>대표자</Category>
              <InputForm
                onChange={(e) => onChangeState("representative", e)}
                placeholder="대표자를 입력해주세요"
              />
              <Category>근로자 수</Category>
              <InputForm
                type={"number"}
                onChange={(e) => onChangeState("workerCount", e)}
                placeholder="근로자 수를 입력해주세요"
              />
              <Category>설립연도</Category>
              <InputForm
                type={"number"}
                onChange={(e) => onChangeState("establishedAt", e)}
                placeholder="설립연도를 입력해주세요"
              />
              <Category>연매출액</Category>
              <InputForm
                type={"number"}
                onChange={(e) => onChangeState("annualSales", e)}
                placeholder="연매출액을 입력해주세요"
              />
            </GridDiv>
            <Address>
              <Category>주소</Category>
              <div>
                <div>
                  <span>본사</span>
                  <InputForm
                    value={companyInfomation.homeFullAddress}
                    onClick={() =>
                      open({
                        onComplete: handleComplete,
                        width: 700,
                        height: 700,
                        left: 200,
                        animation: true,
                      })
                    }
                    placeholder="ex) 대전광역시 유성구 가정북로 76"
                  />
                  <InputForm
                    type={"text"}
                    value={companyInfomation.homeAddressNumber}
                    onClick={() =>
                      open({
                        onComplete: handleComplete,
                        width: 700,
                        height: 700,
                        left: 200,
                        animation: true,
                      })
                    }
                    style={{ width: "100px" }}
                    placeholder="ex) 34111"
                  />
                </div>
                <div>
                  <span>연구소/지점</span>
                  <InputForm
                    value={companyInfomation.agentFullAddress}
                    onClick={() =>
                      open({
                        onComplete: subhandleComplete,
                        width: 700,
                        height: 700,
                        left: 200,
                        animation: true,
                      })
                    }
                    placeholder="ex) 대전광역시 유성구 가정북로 76"
                  />
                  <InputForm
                    type={"number"}
                    value={companyInfomation.agentAddressNumber}
                    onClick={() =>
                      open({
                        onComplete: subhandleComplete,
                        width: 700,
                        height: 700,
                        left: 200,
                        animation: true,
                      })
                    }
                    style={{ width: "100px" }}
                    placeholder="ex) 34111"
                  />
                </div>
              </div>
            </Address>
            <UlSubmitted>
              {fileName.map((item, i) => (
                <>
                  <LiProps>
                    <LabelFile for={`${item.name}`}>{item.kr}</LabelFile>
                    <FileHidden
                      type="file"
                      id={`${item.name}`}
                      multiple={
                        item.name.substring(item.name.length - 4) === "List"
                          ? "multiple"
                          : ""
                      }
                      accept={
                        i < 2
                          ? ".pdf, .doc, .docx, .hwp"
                          : "image/jpeg, image/png"
                      }
                      onChange={(e) => AddFileProps(e, item.name)}
                    ></FileHidden>

                    {showFile[item.name].map((files) => (
                      <>
                        <UlTable>
                          <FileTextDiv>{files}</FileTextDiv>
                        </UlTable>
                      </>
                    ))}
                  </LiProps>
                </>
              ))}
            </UlSubmitted>
          </ContentDiv>
          <hr />
        </ContainerDiv>
        <ContainerDiv>
          <Title>
            <h2>상세 설명</h2>
          </Title>
          <ContentDiv />
          <Description onChange={(e) => onChangeState("introduction", e)} />
          <hr />
        </ContainerDiv>
        <ContainerDiv>
          <Title>
            <h2>사업 분야</h2>
          </Title>
          <ContentDiv>
            <GridDiv width={1000} column={8}>
              {businessAreaList.map((item) => (
                <>
                  <CheckInput
                    type="checkbox"
                    checked={item.checked}
                    onChange={(e) => {
                      setBusinessAreaList(
                        businessAreaList.map((business) =>
                          business.name === item.name
                            ? { ...business, checked: e.target.checked }
                            : business
                        )
                      );
                    }}
                  ></CheckInput>
                  <span>{item.name}</span>
                </>
              ))}
            </GridDiv>

            <PlusButton>
              <input
                placeholder="사업 분야를 적어주세요."
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
              />
              <div
                onClick={() => {
                  if (business.length !== 0) {
                    setBusinessAreaList([
                      ...businessAreaList,
                      {
                        name: business,
                        checked: true,
                      },
                    ]);
                    setBusiness("");
                  } else
                    Notice({
                      state: "error",
                      message: "사업 분야를 적어주세요.",
                    });
                }}
              >
                +
              </div>
            </PlusButton>
          </ContentDiv>
          <hr />
        </ContainerDiv>
        <ContainerDiv>
          <Title>
            <h2>Contact</h2>
          </Title>
          <ContentDiv>
            <GridDiv width={800} column={4}>
              <Category>대표자</Category>
              <InputForm
                onChange={(e) => onChangeState("contactorName", e)}
                placeholder="대표자를 입력해주세요"
              />
              <Category>소속 부서</Category>
              <InputForm
                onChange={(e) => onChangeState("contactorRank", e)}
                placeholder="소속 부서를 입력해주세요"
              />
              <Category>전화번호</Category>
              <InputForm
                onChange={(e) => onChangeState("phoneNumber", e)}
                placeholder="ex) 02 or 0xx-xxxx-xxxx"
              />
              <Category>휴대전화</Category>
              <InputForm
                onChange={(e) => onChangeState("contactorPhone", e)}
                placeholder="ex) 02 or 0xx-xxxx-xxxx"
              />
            </GridDiv>

            <AuthDiv>
              {data.map((elm, i) => (
                <InputDiv style={{ marginBottom: `${20 + (i % 2) * 40}px` }}>
                  <div>
                    <span>{elm.title}</span>

                    {elm.key === "email" && success.sendEmail !== "" ? (
                      <Success
                        src={success.sendEmail ? checkImg : failImg}
                        alt=""
                      />
                    ) : (
                      <></>
                    )}
                    {elm.key === "emailCheckCode" &&
                    success.checkSuccess !== "" ? (
                      <Success
                        src={success.checkSuccess ? checkImg : failImg}
                        alt=""
                      />
                    ) : (
                      <></>
                    )}
                    {elm.title === "비밀번호 확인" &&
                    success.passwordSuccess !== "" &&
                    companyInfomation.password !== "" ? (
                      <Success
                        src={success.passwordSuccess ? checkImg : failImg}
                        alt=""
                      />
                    ) : (
                      <></>
                    )}
                    <Check onClick={() => onCheck(elm.additionalElm)}>
                      {elm.additionalElm === "" ? "" : `${elm.additionalElm} >`}
                    </Check>
                  </div>
                  <InputForm
                    type={
                      elm.title.slice(0, 4) === "비밀번호" ? "password" : "text"
                    }
                    placeholder={elm.placeholder}
                    onChange={(e) => onChangeState(elm.key, e)}
                  />
                </InputDiv>
              ))}
            </AuthDiv>
          </ContentDiv>
        </ContainerDiv>
        <SubmitBtn onClick={() => onSignUp()}>기업 등록</SubmitBtn>
      </MainDiv>
    </>
  );
};

export default CompanySignUp;

const PlusButton = styled.div`
  display: inline-flex;
  align-items: center;
  width: 88%;
  gap: 10px;

  input {
    font-size: 16px;
    background-color: #f0f0f0;
    outline: none;
    border: none;
    padding: 10px 10px 10px 20px;
    border-radius: 12px;
    left: -45px;
    width: 250px;
  }
  div {
    cursor: pointer;
    font-size: 18px;
    right: 0;

    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.mediumGray};
    border-radius: 50%;
  }
`;

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
  justify-content: flex-end;
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
  font-size: 20px;
  padding: 20px;
  font-weight: 700;
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

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 60px;
  h2 {
    margin-right: 53px;
    font-size: 40px;
    font-weight: 700;
  }
  span {
    font-size: 24px;
  }
`;

const InputForm = styled.input`
  border: none;
  width: 220px;
  height: 50px;
  border-radius: 18px;
  background-color: #f0f0f0;
  font-size: 17px;
  margin-right: 30px;
  padding-left: 24px;
  font-weight: 700;
  &::placeholder {
    font-size: 13px;
  }
`;

const Category = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #4000ff;
  margin-right: 20px;
`;

const GridDiv = styled.div`
  width: ${(props) => props.width}px;
  display: grid;
  grid-template-columns: repeat(${(props) => props.column}, 1fr);
  margin-right: 80px;
  grid-row-gap: 43px;
  place-items: center end;
  margin-bottom: 86px;

  div {
    font-size: 20px;
  }

  span {
    word-break: break-all;
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
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: 20px;
      span {
        width: 120px;
        display: flex;
        justify-content: flex-end;
        margin-right: 22px;
      }
    }
  }

  input {
    width: 389px;
    height: 40px;
    border-radius: 18px;

    background-color: #f3eeff;
    border: none;
    padding-left: 24px;
    margin-right: 20px;
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

const SubmitBtn = styled.button`
  width: 600px;
  height: 50px;
  border-radius: 24px;
  margin: 150px;
  background: linear-gradient(to right, #ab91f8, #7243ff);
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  font-weight: 700;
`;
export const CheckInput = styled.input`
  margin-top: 5px;
  margin-right: 15px;
  cursor: pointer;
  appearance: none;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.mediumGray};
  :checked {
    border: 5px solid ${(props) => props.theme.colors.mediumGray};
    background-color: ${(props) => props.theme.colors.blue};
  }
`;

export const UlSubmitted = styled.ul`
  width: 850px;
  margin: 50px 0;
  display: flex;
  height: auto;
  top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 30px;
`;
export const LabelFile = styled.label`
  display: inline-block;
  padding: 10px 30px;
  background-color: ${(props) => props.theme.colors.blue};
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  border-radius: 20px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  margin-bottom: 10px;
`;
export const FileHidden = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
`;
export const RemoveBtn = styled.button`
  margin-left: 15px;
  width: 30px;
  height: 30px;
  font-family: "NanumGothic", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  background: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 50%;
  padding-bottom: 6px;
  padding-right: 6.5px;
`;

export const FileTextDiv = styled.div`
  margin-left: -20px;
  width: 130px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 24px;
  font-family: "NanumGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.blue};
`;
export const UlTable = styled.ul`
  position: relative;
  top: 5px;
  width: auto;
  height: 40px;
  display: flex;
`;

export const LiProps = styled.div`
  position: relative;
  list-style: none;
  height: 100%;
`;
