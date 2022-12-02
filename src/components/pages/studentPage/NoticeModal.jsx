import styled from "styled-components";
import CompanyImage from "../../../images/CompanyImg.jpg";
import FileImage from "../../../images/file 2.png";
import axios from "axios";
// import {useAsync} from 'react-async';
import { useQuery } from "@tanstack/react-query";
import { BaseUrl } from "../../../export/base";
import { useEffect } from "react";
import { initialNoticeDetail } from "../../../export/data";
import { useState } from "react";

const PrtCategory = ({ Title }) => {
  return (
    <CategoryBar>
      <CategoryBox>
        <Category>{Title}</Category>
      </CategoryBox>
      <Hr></Hr>
    </CategoryBar>
  );
};

const NoticeModal = ({ datum, setNoticeID }) => {
  // const { isLoading, error, data, isRefetching } = useQuery(
  //   ["CompanyInfo"],
  //   () => getUsers()
  // );

  const [data, setData] = useState(initialNoticeDetail);

  useEffect(() => {
    axios({
      url: BaseUrl + `/notice/${datum.id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.data.message === "프레임워크 내부적인 오류가 발생했습니다.") {
          setData(initialNoticeDetail);
        } else setData(res.data);
      })
      .catch(() => {
        setData(initialNoticeDetail);
      });
  }, []);

  // if (isLoading) return <div>로딩중..</div>;
  // if (error) return <div>에러가 발생했습니다</div>;
  // if (!data) return <button>불러오기</button>;
  // console.log(data.company.businessAreaResponseList);

  const companyInfo = [
    { title: "사업자 번호", list: datum.company.companyNumber },
    {
      title: "대표",
      list: datum.company.companyInformation.representativeName,
    },
    {
      title: "설립 일자",
      list: datum.company.companyInformation.establishedAt,
    },
    { title: "E-mail", list: datum.company.contactor.email },
    {
      title: "근로자 수",
      list: datum.company.companyInformation.workerCount,
    },
    {
      title: "연 매출액",
      list: datum.company.companyInformation.annualSales,
    },
    { title: "사업 분야", list: datum.company.businessTagged },
    {
      title: "본사 주소",
      list: datum.company.companyInformation.homeAddressInfo.fullAddress,
    },
    {
      title: "지점 주소",
      list: datum.company.companyInformation.agentAddress.fullAddress,
    },
  ];

  const employmentInfo = [
    {
      title: "대분류",
      list: data.classificationResponse[0].bigClassification.bigClassification,
    },
    { title: "소분류", list: data.classificationResponse[0].name },
    { title: "채용인원", list: data.numberOfEmployee },
  ];

  const mealSupport = [
    { title: "breakfast", str: "조식 제공" },
    { title: "lunch", str: "중식 제공" },
    { title: "dinner", str: "석식 제공" },
  ];

  const welfare = [
    { title: "dormitorySupport", str: "기숙사 지원" },
    { title: "selfDevelopmentPay", str: "자기개발비" },
    { title: "equipmentSupport", str: "장비지원" },
    { title: "youthTomorrowChaeumDeduction", str: "청년내일채움공제" },
    { title: "alternativeMilitaryPla", str: "병역특례" },
  ];

  return (
    <Background
      onClick={(e) => {
        if (e.target.id === "background") {
          document.querySelector("html").classList.remove("scrollban");
          setNoticeID({ id: "", company: "" });
        }
      }}
    >
      <Blur id="background">
        <Notice>
          <DelBtn
            onClick={() => {
              document.querySelector("html").classList.remove("scrollban");
              setNoticeID({ id: "", company: "" });
            }}
          >
            ×
          </DelBtn>
          <SlideBox>
            {/* <LeftSlide>{"<"}</LeftSlide>
            <RightSlide>{">"}</RightSlide> */}
            <ImageList>
              <CompanyImg
                src={
                  datum.company.companyIntroductionResponse.companyLogo !==
                    {} &&
                  datum.company.companyIntroductionResponse.companyLogo !==
                    null &&
                  datum.company.companyIntroductionResponse.companyLogo !==
                    undefined
                    ? datum.company.companyIntroductionResponse.companyLogo
                        .fileUrl ||
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png"
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png"
                }
                alt="회사이미지입니다"
              ></CompanyImg>
            </ImageList>
          </SlideBox>
          <Table>
            <Tr Height="111px">
              <PText Color="black" Size="36px">
                {datum.company.companyName}
              </PText>
            </Tr>
            {companyInfo.map((info) => (
              <Tr Height="52px">
                <PText Width="160px" Size="20px">
                  {info.title}
                </PText>
                <PText Weight="400" Size="14px" Color="black">
                  {typeof info.list === "object" ? (
                    <>
                      {info.list.map((str) => (
                        <>{str.id} ㅤ</>
                      ))}
                    </>
                  ) : (
                    <>{info.list}</>
                  )}
                </PText>
              </Tr>
            ))}
          </Table>
          {/*회사정보*/}
          <WorkTitle>
            <PText Weight="700" Size="20px">
              업무 내용
            </PText>
            <End>
              <EndText>마감일자</EndText>
              <EndDate>{data.noticeOpenPeriod.endDate}</EndDate>
            </End>
          </WorkTitle>
          {/*업무내용*/}
          <WorkInfo>
            <Info>{data.detailBusinessDescription || ""}</Info>
          </WorkInfo>
          {/*업무내용*/}
          <PrtCategory Title="채용직무" />
          <Employment>
            <EmploymentBox>
              {employmentInfo.map((info) => (
                <Tbr>
                  <PText Width="160px">{info.title}</PText>
                  <Td>{info.list}</Td>
                </Tbr>
              ))}
              <Tbr>
                <PText Width="160px">성적</PText>
                <Td>{data.gradeCutLine}%이내</Td>
              </Tbr>
              <Tor>
                <PText>필요언어</PText>
                <TagList>
                  {data.languageList.map((info) => (
                    <Tag>{info.languageName}</Tag>
                  ))}
                </TagList>
              </Tor>
              <Tor>
                <PText>기타기술</PText>
                <TagList>
                  {data.technologyList.map((info) => (
                    <Tag>{info.technologyName}</Tag>
                  ))}
                </TagList>
              </Tor>
              <Tor>
                <PText>자격증</PText>
                <TagList>
                  {data.certificteList.map((info) => (
                    <Tag>{info.certificateName}</Tag>
                  ))}
                </TagList>
              </Tor>
            </EmploymentBox>
          </Employment>
          {/* <PrtCategory Title="지원자격" /> */}
          <PrtCategory Title="복리후생" />
          <EnterTime>
            <ED>
              <ET>식사</ET>
              <p>
                {mealSupport.map((item) => (
                  <>
                    {data.mealSupport[item.title] === true ? (
                      <ED>
                        • {item.str} <br />
                        <br />
                      </ED>
                    ) : (
                      ""
                    )}
                  </>
                ))}
              </p>
            </ED>
            <ED>
              <ET>복리후생</ET>
              <p>
                {welfare.map((item) => (
                  <>
                    {data.welfare[item.title] === true ? (
                      <ED>
                        • {item.str} <br />
                        <br />
                      </ED>
                    ) : (
                      ""
                    )}
                  </>
                ))}
              </p>
            </ED>
            <ED>
              <ET>기타</ET>
              <EI>• {data.otherFeatures}</EI>
            </ED>
          </EnterTime>
          {/* <PrtCategory Title="출•퇴근시간" />
          <EnterTime>
            <ED>
              <ET>출근시간</ET>
              <EI>8시</EI>
            </ED>
            <ED>
              <ET>퇴근시간</ET>
              <EI>18시</EI>
            </ED>
            <ED>
              <ET>근무시간 (주)</ET>
              <EI>18시간</EI>
            </ED>
          </EnterTime> */}
          <PrtCategory Title="전형절차" />
          <EnterTime>
            <ED>
              <ET>전형절차</ET>
              <p>
                {Object.values(data.interviewProcessList).map((str, i) => (
                  <ED>
                    {i + 1}. {str} <br />
                    <br />
                  </ED>
                ))}
              </p>
            </ED>
          </EnterTime>
          <PrtCategory Title="제출서류" />
          <Document>
            {data.attachmentFileList.map((info) => (
              <File>
                <FileImg src={info.fileUrl} alt="파일아이콘입니다"></FileImg>
                <FileName href={info.extension} download>
                  {info.fileName}
                </FileName>
              </File>
            ))}
          </Document>
          <PrtCategory Title="근무지" />
          <PText Size="16px" Width="936px" Color="black">
            {data.workPlace.otherPlace}
          </PText>
        </Notice>
      </Blur>
    </Background>
  );
};

export default NoticeModal;

const DelBtn = styled.div`
  position: absolute;
  right: 30px;
  font-size: 50px;
  cursor: pointer;
  font-weight: 700;
`;

const FileImg = styled.img`
  height: 20px;
  padding-right: 10px;
`; // 파일 아이콘
const FileName = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  margin-right: 60px;
  text-decoration: none;
  color: black;
  cursor: pointer;
`; // 파일 이름
const File = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`; // 파일 div
const Document = styled.div`
  width: 936px;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
`; // 제출 서류 div

const ET = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  color: #4000ff;
  padding-right: 20px;
  white-space: nowrap;
`; // 시간 타이틀
const EI = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
`; // 시간 내용
const ED = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: start;
  width: 350px;
`; // 출퇴근무시간 div
const EnterTime = styled.div`
  width: 936px;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  margin-top: 40px;
`; // 출퇴근시간 div

const Tag = styled.div`
  background: white;
  padding: 7px 36px 7px 36px;
  border-radius: 100px;
  font-weight: 400;
  font-size: 14px;
  margin-right: 20px;
`; // 태그
const TagList = styled.tr`
  width: 936px;
  display: flex;
  height: 30px;
`; // 태그 나열 tr
const Tbr = styled.div`
  height: 61px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  margin-top: 40px;
`; // 대소분류, 채용인원 tr
const Tor = styled.div`
  height: 61px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  margin-top: 40px;
`; // 상세직무, 필요기타기술 tr
const EmploymentBox = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  background: #f3eeff;
  padding: 0 30px 60px 30px;
  border-radius: 20px;
  width: 936px;
`; // 채용직무 tbody
const Employment = styled.div`
  width: 936px;
  padding-top: 20px;
`; // 채용직무 table

const Hr = styled.hr`
  width: 936px;
  height: 2px;
  border: 2px solid #4000ff;
  margin: 0;
`; // 카테고리 구분선
const Category = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  padding-top: 4px;
`; // 카테고리 타이틀
const CategoryBox = styled.div`
  height: 40px;
  background: #4000ff;
  border-radius: 20px 20px 0 0;
  padding: 0 30px 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`; // 카테고리 타이틀 box
const CategoryBar = styled.div`
  margin: 60px 0 40px 0;
  width: 936px;
  display: flex;
  flex-direction: column;
  align-items: start;
`; // 카테고리 타이틀 div

const Info = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  margin: 0;
`; // 업무 내용
const WorkInfo = styled.div`
  width: 936px;
  padding: 20px;
  background: white;
  border-radius: 10px;
`; // 업무 내용 div

const EndText = styled.p`
  font-weight: 400;
  font-size: 14px;
`; // '마감일자'
const EndDate = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #4000ff;
`; // 0000.00.00
const End = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 138px;
`; // 마감일자 div
const WorkTitle = styled.div`
  width: 936px;
  height: 32px;
  margin-top: 100px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`; // 업무 내용 타이틀 div

const Now = styled.p`
  font-weight: 600;
  margin-right: 20px;
`; // '현재 지원자 수'
const Applicant = styled.div`
  width: 936px;
  height: 168px;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 24px;
`; // 지원자 수 div
const Td = styled.td`
  font-weight: 400;
  font-size: 16px;
  margin-top: 20px;
`; // 회사 세부정보
const Tr = styled.div`
  display: flex;
  align-items: center;
  height: ${(props) => props.Height};
`; // 테이블 형식으로 감쌈
const PText = styled.p`
  font-weight: ${(props) => props.Weight || "600"};
  font-size: ${(props) => props.Size || "18px"};
  text-align: start;
  width: ${(props) => props.Width || "auto"};
  color: ${(props) => props.Color || "#4000FF"};
`; // text
const Table = styled.div`
  width: 936px;
  height: 527px;
`; // 회사 정보 div
const CompanyImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
  background-color: #fff;
`; // 이미지
const ImageList = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`; // 이미지 목록
const LeftSlide = styled.button`
  color: white;
  position: absolute;
  left: 50px;
  width: 28px;
  height: 46px;
  border: none;
  background: none;
  font-size: 40px;
  cursor: pointer;
`; // 왼쪽 버튼
const RightSlide = styled.button`
  width: 28px;
  color: white;
  right: 50px;
  height: 46px;
  border: none;
  cursor: pointer;
  position: absolute;
  font-size: 40px;
  background: none;
`; // 오른쪽 버튼
const SlideBox = styled.div`
  margin-top: 100px;
  width: 936px;
  height: 300px;
  background-color: silver;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`; // 이미지 슬라이드 박스

const Notice = styled.div`
  position: absolute;
  font-family: "NanumGothic", sans-serif;
  background: linear-gradient(180deg, #ffffff, #f5f2ff);
  border-radius: 20px;
  width: 1136px;
  top: 100px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  z-index: 99;
`; // 모달창 배경
const Blur = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 1;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  overflow-y: scroll;
`; // 모달 뒤 블러
const Background = styled.div`
  height: 400vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  position: absolute;
  top: 0;
`; // 모달 뒷배경
