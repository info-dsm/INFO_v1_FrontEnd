import { useEffect, useState } from "react";
import Header from "../../../../common/header";
import axios from "axios";
import { BaseUrl } from "../../../../../export/base";
import { Notice } from "../../../../common/notice";
import { Alert } from "../../../../common/alert";
import NavProps from "../../../../common/nav";
import { useRef } from "react";
import BusinessAreaList from "./businessAreaList";
import CompanyAddress from "./address";
import CompanyAuth from "./companyAuth";
import InputCompany from "./input";
import * as S from "./styles";
import { contactorArr, companyArr } from "./data";
import CompanyFormData from "./formdata";
const CompanySignUp = () => {
  const [business, setBusiness] = useState("");
  const form = useRef(null);
  const [showFile, setShowFile] = useState({
    businessRegisteredCertificate: [],
    companyIntroductionFile: [],
    companyLogo: [],
    companyPhotoList: [],
  });

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

  useEffect(() => {
    axios({
      url: BaseUrl + "/company/business-area",
      method: "GET",
    }).then((res) => {
      setBusinessAreaList(
        Array.from({ length: res.data.length }, (t, i) => {
          return {
            name: res.data[i].id,
            checked: false,
          };
        })
      );
    });
  }, []);

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
      companyNumber: companyNumber,
      companyNameRequest: {
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
        representativeName: representative,
        establishedAt: parseInt(establishedAt),
        workerCount: parseInt(workerCount),
        annualSales: parseInt(annualSales),
        companyPhone: phoneNumber,
      },
      companyContact: {
        contactorName: contactorName,
        contactorRank: contactorRank,
        contactorPhone: contactorPhone,
        email: email,
        password: password,
        passwordHint: passwordHint,
      },
      businessAreaList: businessAreaList
        .map((item) => (item.checked ? item.name : undefined))
        .filter((element) => element !== undefined),
      introduction: introduction,
    };

    console.log(
      businessAreaList
        .map((item) => (item.checked ? item.name : undefined))
        .filter((element) => element !== undefined)
    );

    let len = 1;
    for (let i in Object.values(showFile)) {
      len *= Object.values(showFile)[i].length;
    }

    console.log(body);

    if (
      success.checkSuccess &&
      success.passwordSuccess &&
      len >= 1 &&
      !Object.values(companyInfomation).includes("")
    ) {
      const formData = new FormData(form.current);
      formData.set(
        "request",
        new Blob([JSON.stringify(body)], {
          type: "application/json",
        })
      );

      for (let key of formData.keys()) {
        console.log(key, ":", formData.get(key));
      }
      axios({
        url: BaseUrl + "/company/signup",
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

  const onChangeState = (props, e) => {
    if (props.length)
      setCompanyInfomation({ ...companyInfomation, [props]: e.target.value });
    else setPasswordCheck(e.target.value);
  };

  return (
    <>
      <Header
        title={"기업 등록"}
        description={"채용 의뢰 전, 회사를 등록해주세요!"}
      />

      {/* <NavProps props={CompanyData} idx={0} /> */}
      <S.MainDiv>
        <S.ContainerDiv>
          <S.Title>
            <h2>회사 명</h2>
            <S.CheckInput
              type="checkbox"
              checked={companyInfomation.isLeading}
              onChange={(e) => {
                setCompanyInfomation({
                  ...companyInfomation,
                  isLeading: e.target.checked,
                });
              }}
            ></S.CheckInput>
            <span>선도 기업</span>
          </S.Title>
          <S.ContentDiv>
            <S.GridDiv width={800} column={4}>
              <InputCompany arr={companyArr} onChangeState={onChangeState} />
            </S.GridDiv>
            <CompanyAddress
              info={companyInfomation}
              setInfo={setCompanyInfomation}
            />
            <form ref={form}>
              <CompanyFormData state={showFile} setState={setShowFile} />
            </form>
          </S.ContentDiv>
          <hr />
        </S.ContainerDiv>
        <S.ContainerDiv>
          <S.Title>
            <h2>상세 설명</h2>
          </S.Title>
          <S.ContentDiv />
          <S.Description onChange={(e) => onChangeState("introduction", e)} />
          <hr />
        </S.ContainerDiv>
        <S.ContainerDiv>
          <S.Title>
            <h2>사업 분야</h2>
          </S.Title>
          <S.ContentDiv>
            <S.GridDiv width={1000} column={8}>
              <BusinessAreaList
                state={businessAreaList}
                setState={setBusinessAreaList}
              />
            </S.GridDiv>

            <S.PlusButton>
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
            </S.PlusButton>
          </S.ContentDiv>
          <hr />
        </S.ContainerDiv>
        <S.ContainerDiv>
          <S.Title>
            <h2>Contact</h2>
          </S.Title>
          <S.ContentDiv>
            <S.GridDiv width={800} column={4}>
              <InputCompany arr={contactorArr} onChangeState={onChangeState} />
            </S.GridDiv>
            <CompanyAuth
              success={success}
              info={companyInfomation}
              setSuccess={setSuccess}
              onChangeState={onChangeState}
            />
          </S.ContentDiv>
        </S.ContainerDiv>
        <S.SubmitBtn onClick={() => onSignUp()}>기업 등록</S.SubmitBtn>
      </S.MainDiv>
    </>
  );
};

export default CompanySignUp;
