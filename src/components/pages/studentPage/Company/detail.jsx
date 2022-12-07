import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { BaseUrl } from "../../../../export/base.js";
import chack from "../../../../images/chack.png";
import { Page_moving_btn, Image, Search_bar, Sortation } from "../styled.jsx";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../common/header/index.jsx";
import LoadingPage from "../../../common/loading/index.jsx";
import {
  initialCompany,
  initialCompanyDetail,
  initialNotice,
} from "../../../../export/data.js";
import NoticeModal from "../NoticeModal.jsx";

const CompanyDetailView = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  // const comInfo = initialCompany.content[parseInt(id)];
  const [noticeID, setNoticeID] = useState({
    id: "",
    company: "",
  });
  const [IC_data, set_IC_data] = useState([
    { title: "사업자 번호", data: "000-00-00000" },
    { title: "설립 일자", data: "0000년 00월 00일" },
    { title: "E-mail", data: "Error@error.com" },
    { title: "근로자 수", data: "0명" },
    { title: "연 매출액", data: "0,000,000 원" },
    { title: "사업 분야", data: ["오류 만들기", "react", "asd"] },
    { title: "본사 주소", data: "우리은하 태양계 지구행성 어딘가" },
    { title: "지점 주소", data: "리은하 태양계 지구행성 어딘가" },
  ]);
  // const notice = initialNotice.content[id];
  const [notice, setNotice] = useState();
  const [imgArr, setImgArr] = useState([
    {
      fileId: "string",
      fileUrl: "",
      fileType: "FileType",
      extension: "string",
      fileName: "string1",
      companyNumber: "string",
      companyFileClassificationType: "CompanyFileClassificationType",
    },
    {
      fileId: "string",
      fileUrl: "",
      fileType: "FileType",
      extension: "string",
      fileName: "string2",
      companyNumber: "string",
      companyFileClassificationType: "CompanyFileClassificationType",
    },
    {
      fileId: "string",
      fileUrl: "",
      fileType: "FileType",
      extension: "string",
      fileName: "string3",
      companyNumber: "string",
      companyFileClassificationType: "CompanyFileClassificationType",
    },
    {
      fileId: "string",
      fileUrl: "",
      fileType: "FileType",
      extension: "string",
      fileName: "string4",
      companyNumber: "string",
      companyFileClassificationType: "CompanyFileClassificationType",
    },
    {
      fileId: "string",
      fileUrl: "",
      fileType: "FileType",
      extension: "string",
      fileName: "string5",
      companyNumber: "string",
      companyFileClassificationType: "CompanyFileClassificationType",
    },
  ]);

  const load_companys = () => {
    axios({
      method: "get",
      url: BaseUrl + `/company/${id}`,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.data.message !== "프레임워크 내부적인 오류가 발생했습니다.") {
          console.log(res.data);
          settingData(res.data);
        } else {
          settingData(initialCompanyDetail);
        }
      })
      .catch((err) => {
        // settingData(initialCompany.content[id]);
        // settingData(initialCompanyDetail);
        // navigate(-1);
      });

    axios({
      url: BaseUrl + `notice/list/${id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.message !== "프레임워크 내부적인 오류가 발생했습니다.") {
          if (res.data.content[0] === undefined) {
            setNotice(initialNotice);
          } else setNotice(res.data);
        } else {
          setNotice(initialNotice);
        }
      })
      .catch((err) => {
        console.log(err);
        setNotice(initialNotice);
        // navigate(-1);
      });
  };

  const settingData = (res) => {
    console.log(res);
    setData(res);
    setImgArr(res.companyIntroductionResponse.companyPhotoList);
    set_IC_data([
      { title: "사업자 번호", data: res.companyNumber },
      { title: "E-mail", data: res.contactor.email },
      {
        title: "근로자 수",
        data: res.companyInformation.workerCount,
      },
      {
        title: "연 매출액",
        data: res.companyInformation.annualSales,
      },
      {
        title: "사업 분야",
        data: res.businessTagged,
      },
      {
        title: "본사 주소",
        data: res.companyInformation.homeAddress.fullAddress,
      },
    ]);
    // set_IC_data([
    //   { title: "사업자 번호", data: res.companyNumber },
    //   { title: "E-mail", data: res.contactorEmail },
    //   {
    //     title: "근로자 수",
    //     data: res.workerCount,
    //   },
    //   {
    //     title: "연 매출액",
    //     data: res.annualSales,
    //   },
    //   { title: "사업 분야", data: res.businessTagged },
    //   {
    //     title: "본사 주소",
    //     data: res.homeAddressInfo.fullAddress,
    //   },
    // ]);
  };

  useEffect(() => {
    load_companys();
  }, []);

  return (
    <>
      <Sortation id="main">ㅤ</Sortation>
      {noticeID.id !== "" ? (
        <NoticeModal datum={noticeID} setNoticeID={setNoticeID} />
      ) : (
        <></>
      )}
      {data ? (
        <>
          <Header title={data.companyName} description={data.companyNumber} />
          <Out_box>
            <Flex_box>
              <Image
                width="500px"
                height="400px"
                alt=""
                src={imgArr[0].fileUrl}
              />
              <Explanation>
                <Header_out_box>
                  <Image
                    width="85px"
                    height="85px"
                    alt="로고 이미지"
                    src={
                      data.companyIntroductionResponse.companyLogo
                        ? data.companyIntroductionResponse.companyLogo.fileUrl
                        : data.companyIntroductionResponse.companyPhotoList[0]
                            .fileUrl
                    }
                  />
                  <Header_Title_box>
                    <Header_title>{data.companyName}</Header_title>
                    <Header_sub_title>{data.companyNumber}</Header_sub_title>
                  </Header_Title_box>
                </Header_out_box>
                <Flex_box margin="19px" height="26px">
                  {data.isLeading && <IC_company_point text="선도기업" />}
                  {data.isAssociated && <IC_company_point text="협약완료" />}
                </Flex_box>
                <Introduce_box>
                  {data.companyIntroductionResponse.introduction}
                </Introduce_box>
              </Explanation>
            </Flex_box>
            <Img_list_out_box>
              <Img_list_box>
                {imgArr.map((item, i) => (
                  <>
                    {i < 4 ? (
                      <img src={item.fileUrl} alt={item.fileName} />
                    ) : (
                      <></>
                    )}
                  </>
                ))}
                <div
                  onClick={() => {
                    setImgArr([
                      ...imgArr.filter((item, i) => i !== 0),
                      imgArr[0],
                    ]);
                  }}
                >
                  <div />
                </div>
              </Img_list_box>
            </Img_list_out_box>
            <Table>
              <tbody>
                {IC_data.map((data, key) => (
                  <tr key={key}>
                    <td>{data.title}</td>
                    {typeof data.data === "object" ? (
                      <>
                        {data.data.map((str) => (
                          <td>{str.id}</td>
                        ))}
                      </>
                    ) : (
                      <td>{data.data}</td>
                    )}
                  </tr>
                ))}
              </tbody>
            </Table>
            {/* <Flex_box width="936px" justify="space-between" align="flex-end">
              <Sub_title>모집공고</Sub_title>
              <Sub_text>
                <span>마지막 모집공고</span>
                <span>2022년</span>
              </Sub_text>
            </Flex_box> */}
            {/* <App_out_box>
              {notice.content.map((item) => (
                <a
                  href="#main"
                  onClick={() => {
                    setNoticeID({
                      id: item.noticeId,
                      company: data,
                      CA_data: item,
                    });
                  }}
                >
                  <App_box>
                    <div>
                      <span>특기사항</span>
                      <span>{item.detailBusinessDescription}</span>
                    </div>
                    <span>
                      <span>인원 수</span>
                      <span>5명</span>
                    </span>
                  </App_box>
                </a>
              ))} */}
              {/* <Page_moving_btn width="896px">더 알아보기</Page_moving_btn> */}
            {/* </App_out_box> */}
            <Flex_box width="936px" justify="flex-start" align="flex-end">
              <Sub_title>면접 후기</Sub_title>
            </Flex_box>
            <App_out_box height="390px">
              <div>
                <Interview_box>
                  <div>
                    <img
                      src="https://avatars.githubusercontent.com/u/80964727?v=4"
                      alt=""
                    />
                    <span>
                      면접 내내 직원들이 정말 상냥하고 편하게 대해주셔서 정말
                      뜻깊은 시간이었던 것 같아요!
                    </span>
                  </div>
                  <span>
                    <span>2022-12-14</span>
                    <span>5.0</span>
                    <div />
                  </span>
                </Interview_box>
              </div>
            </App_out_box>
          </Out_box>
        </>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default CompanyDetailView;

const Out_box = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: center;
  margin: 150px 0 150px 0;
`;

const Flex_box = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || "none"};
  align-items: ${(props) => props.align || "none"};
  margin-top: ${(props) => props.margin || "0px"};
  margin-bottom: ${(props) => props.margin || "0px"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  img {
    object-fit: cover;
  }
`;

const Explanation = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

const Header_out_box = styled.div`
  width: auto;
  height: 85px;
  display: flex;
  img {
    object-fit: contain;
  }
`;

const Header_Title_box = styled.div`
  width: auto;
  height: 85px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 19px;
  font-family: "Roboto";
  font-style: normal;
`;

const Header_title = styled.span`
  font-weight: 900;
  font-size: 40px;
  line-height: 47px;
  margin-bottom: 10px;
`;

const Header_sub_title = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
`;

const IC_company_point = ({ text }) => {
  return (
    <>
      <Point_box>
        <Image src={chack} width="16px" height="16px" alt="체크 이미지" />
        <Point_text>{text}</Point_text>
      </Point_box>
    </>
  );
};

const Point_box = styled.div`
  width: 80px;
  margin: 20px 40px 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Point_text = styled.span`
  font-family: "NanumGothic";
  font-weight: 700;
  font-size: 14px;
  lineheight: 160%;
  color: ${(props) => props.theme.colors.green};
`;

const Introduce_box = styled.span`
  width: 400px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  word-wrap: break-word;
`;

const Img_list_out_box = styled.div`
  width: 936px;
  font-family: "NanumGothic";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 160%;
  color: ${(props) => props.theme.colors.black};
  display: flex;
  margin: 40px 0 80px -120px;
  & > div:last-child {
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    & > span:last-child {
      font-weight: 700;
      font-size: 32px;
      color: ${(props) => props.theme.colors.blue};
    }
  }
`;

const Img_list_box = styled.div`
  width: 500px;
  height: 100px;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 20px;
  img {
    border-radius: 12px;
    border: 1px solid #ddd;
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  div {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    cursor: pointer;
    div {
      width: 30px;
      height: 50px;
      background-repeat: no-repeat;
      background-image: url("data:image/svg+xml,%3Csvg width='26' height='46' viewBox='0 0 26 46' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25.1213 25.1213C26.2929 23.9497 26.2929 22.0503 25.1213 20.8787L6.02944 1.7868C4.85786 0.615224 2.95837 0.615224 1.78679 1.7868C0.615221 2.95837 0.615221 4.85787 1.7868 6.02944L18.7574 23L1.7868 39.9706C0.615225 41.1421 0.615225 43.0416 1.7868 44.2132C2.95837 45.3848 4.85787 45.3848 6.02944 44.2132L25.1213 25.1213ZM18 26L23 26L23 20L18 20L18 26Z' fill='black'/%3E%3C/svg%3E%0A");
    }
  }
`;

const Table = styled.table`
  width: 936px;
  height: 389px;
  margin-bottom: 20px;
  tr {
    width: 776px;
    display: flex;
    flex-wrap: wrap;
  }
  td {
    font-weight: 700;
    font-family: "NanumGothic";
    font-style: normal;
    text-align: left;
    vertical-align: top;

    &:first-child {
      width: 160px;
      font-weight: 600;
      font-size: 16px;
      line-height: 160%;
      color: ${(props) => props.theme.colors.blue};
    }

    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    margin-right: 10px;
    color: ${(props) => props.theme.colors.black};
  }
`;

const Sub_title = styled.span`
  font-family: "NanumGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 160%;

  color: ${(props) => props.theme.colors.blue};
  margin-top: 60px;
`;

const Sub_text = styled.div`
  width: 176px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: "NanumGothic";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 160%;

  span {
    &:last-child {
      color: ${(props) => props.theme.colors.blue};
    }
  }
`;

const App_out_box = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  a {
    text-decoration: none;
    color: #000;
  }
  width: 936px;
  height: ${(props) => props.height || "400px"};
  padding: 20px;
  border-radius: 20px;
  margin-top: 15px;
  background: #f8f6ff;
  position: relative;

  > div {
    height: 350px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const App_box = styled.div`
  width: 866px;
  height: 60px;
  margin-bottom: 20px;
  margin-right: 30px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  padding: 20px;
  background-color: #fff;
  > div {
    display: inline-flex;
    align-items: center;
  }
  > div :first-child {
    font-weight: 700;
    margin-right: 20px;
  }
  > div :last-child {
    width: 590px;
    margin-right: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > span :first-child {
    font-weight: 700;
    margin-right: 20px;
  }
  > span :last-child {
    width: 50px;
    display: inline-flex;
    color: ${(props) => props.theme.colors.blue};
  }
`;

const Interview_box = styled.div`
  width: 866px;
  height: 60px;
  margin-bottom: 20px;
  margin-right: 30px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  padding: 20px;
  background-color: #fff;
  > div {
    display: inline-flex;
    align-items: center;
  }
  > div > img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
  > div > span {
    width: 570px;
    margin-right: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > div > img,
  > div > span {
    margin-left: 20px;
  }
  > span :first-child {
    color: #868686;
    font-weight: 400;
    margin-right: 20px;
  }
  > span {
    font-weight: 700;
    display: inline-flex;
  }
  > span > div {
    margin-left: 10px;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Crect width='20' height='20' fill='url(%23pattern0)'/%3E%3Cdefs%3E%3Cpattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'%3E%3Cuse xlink:href='%23image0_82_25' transform='scale(0.00195312)'/%3E%3C/pattern%3E%3Cimage id='image0_82_25' width='512' height='512' xlink:href='data:image/png;base64,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'/%3E%3C/defs%3E%3C/svg%3E%0A");
  }
`;
