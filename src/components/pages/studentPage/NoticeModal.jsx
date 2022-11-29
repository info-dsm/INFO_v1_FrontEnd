import styled from "styled-components";
import CompanyImage from "../../../images/CompanyImg.jpg";
import FileImage from "../../../images/file 2.png";
import axios from "axios";
// import {useAsync} from 'react-async';
import { useQuery } from "@tanstack/react-query";
import { BaseUrl } from "../../../export/base";

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

const myToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5IiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTY2ODc2OTgzMCwiZXhwIjoxNjY4ODU2MjMwfQ.Pwss-Q4yTXsOTF7IQJXutWIbaZxQC8w-CfTieL4lxSM";

async function getUsers() {
  const token = sessionStorage.getItem("accessToken");
  const response = await axios({
    method: "get",
    url: BaseUrl + "/notice",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    params: {
      id: 134953727,
    },
  });
  return response.data;
}

const NoticeModal = () => {
  const { isLoading, error, data, isRefetching } = useQuery(
    ["CompanyInfo"],
    () => getUsers()
  );

  if (isLoading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return <button>불러오기</button>;
  console.log(data.company.businessAreaResponseList);
  const DC = data.company;
  const CI = data.company.companyInformation;
  const companyInfo = [
    { title: "사업자 번호", list: DC.companyNumber },
    { title: "대표", list: CI.representative },
    { title: "설립 일자", list: CI.establishedAt + "년" },
    { title: "E-mail", list: DC.companyContact.email },
    {
      title: "근로자 수",
      list: CI.workerCount.toLocaleString("ko-KR") + " 명",
    },
    {
      title: "연 매출액",
      list: CI.annualSales.toLocaleString("ko-KR") + " 원",
    },
    { title: "사업 분야", list: DC.businessAreaResponseList[0].tagName },
    { title: "본사 주소", list: CI.homeAddress.fullAddress },
    { title: "지점 주소", list: CI.agentAddress || "지점 주소가 엄서요" },
  ];
  const employmentInfo = [
    { title: "대분류", list: "웹프로그래밍" },
    { title: "소분류", list: "풀스택" },
    { title: "채용인원", list: "2명" },
  ];
  const needLang = [
    { name: "Java" },
    { name: "Java Script" },
    { name: "HTML" },
    { name: "CSS" },
  ];
  const ectTech = [{ name: "Vue.js" }, { name: "React" }];
  const file = [
    {
      name: data.formAttachmentList[0].fileName,
      url: data.formAttachmentList[0].fileUrl,
    },
    {
      name: data.formAttachmentList[1].fileName,
      url: data.formAttachmentList[1].fileUrl,
    },
    {
      name: data.formAttachmentList[2].fileName,
      url: data.formAttachmentList[2].fileUrl,
    },
  ];
  return (
    <Background>
      <Blur>
        <Notice>
          <SlideBox>
            <LeftSlide>(</LeftSlide>
            <RightSlide>)</RightSlide>
            <ImageList>
              <CompanyImg
                src={CompanyImage}
                alt="회사이미지입니다"
              ></CompanyImg>
            </ImageList>
          </SlideBox>
          {/*슬라이드이미지*/}
          <Table>
            <Tr Height="111px">
              <PText Color="black" Width="162px" Size="36px">
                {data.company.companyName}
              </PText>
              <PText Color="black" Size="36px">
                INFO
              </PText>
            </Tr>
            {companyInfo.map((info) => (
              <Tr Height="52px">
                <PText Width="160px" Size="20px">
                  {info.title}
                </PText>
                <PText Weight="400" Size="14px" Color="black">
                  {info.list}
                </PText>
              </Tr>
            ))}
          </Table>
          {/*회사정보*/}
          <Applicant>
            <Now>현재 지원자 수</Now>
            <PText Weight="700" Size="24px">
              {data.applicantCount}
            </PText>
          </Applicant>
          {/*지원자 수*/}
          <WorkTitle>
            <PText Weight="700" Size="20px">
              업무 내용
            </PText>
            <End>
              <EndText>마감일자</EndText>
              <EndDate>{DC.lastNoticeDate}</EndDate>
            </End>
          </WorkTitle>
          {/*업무내용*/}
          <WorkInfo>
            <Info>이런 저런 일을 합니다.</Info>
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
              <Tor>
                <PText>상세직무</PText>
                <Td>
                  백엔드백엔드프론드백엔드 백엔드풀스택웹 프로그래밍
                  웹프로그래밍
                </Td>
              </Tor>
              <Tor>
                <PText>필요언어</PText>
                <TagList>
                  {needLang.map((info) => (
                    <Tag>{info.name}</Tag>
                  ))}
                </TagList>
              </Tor>
              <Tor>
                <PText>기타기술</PText>
                <TagList>
                  {ectTech.map((info) => (
                    <Tag>{info.name}</Tag>
                  ))}
                </TagList>
              </Tor>
            </EmploymentBox>
          </Employment>
          <PrtCategory Title="지원자격" />
          <PrtCategory Title="복리후생" />
          <PrtCategory Title="출•퇴근시간" />
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
          </EnterTime>
          <PrtCategory Title="전형절차" />
          <PrtCategory Title="제출서류" />
          <Document>
            {file.map((info) => (
              <File>
                <FileImg src={FileImage} alt="파일아이콘입니다"></FileImg>
                <FileName href={info.url} download>
                  {info.name}
                </FileName>
              </File>
            ))}
          </Document>
          <PrtCategory Title="근무지" />
          <PText Size="16px" Width="936px" Color="black">
            대전 유성구 가정북로 76
          </PText>
        </Notice>
      </Blur>
    </Background>
  );
};

export default NoticeModal;

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
`; // 시간 타이틀
const EI = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
`; // 시간 내용
const ED = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 200px;
`; // 출퇴근무시간 div
const EnterTime = styled.div`
  width: 936px;
  display: flex;
  justify-content: start;
  align-items: center;
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
  margin-top: 20px;
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
  object-fit: cover;
  border-radius: 10px;
`; // 이미지
const ImageList = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`; // 이미지 목록
const LeftSlide = styled.button`
  color: white;
  position: absolute;
  left: 528px;
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
  right: 528px;
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
`; // 이미지 슬라이드 박스

const Notice = styled.div`
  font-family: "NanumGothic", sans-serif;
  background: linear-gradient(180deg, #ffffff, #f5f2ff);
  border-radius: 20px;
  height: 3203px;
  width: 1136px;
  display: flex;
  flex-direction: column;
  align-items: center;
`; // 모달창 배경
const Blur = styled.div`
  position: absolute;
  top: 0;
  height: 4503px;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`; // 모달 뒤 블러
const Background = styled.div`
  height: 3803px;
  width: 100%;
  background: white;
`; // 모달 뒷배경
