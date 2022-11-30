import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { BaseUrl } from "../../../../export/base.js";
import chack from "../../../../images/chack.png";
import { Page_moving_btn, Image, Search_bar } from "../styled.jsx";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../common/header/index.jsx";
import LoadingPage from "../../../common/loading/index.jsx";

const CompanyDetailView = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    companyNumber: "string",
    companyName: "string",
    contactor: {
      name: "string",
      email: "string",
      rank: "string",
      phoneNumber: "string?",
      passwordHint: "string?",
      companyNumber: "string",
    },
    companyInformation: {
      homeAddressInfo: {
        fullAddress: "string",
        addressNumber: "string",
      },
      agentAddress: {
        fullAddress: "string",
        addressNumber: "string",
      },
      representativeName: "string",
      establishedAt: 0,
      workerCount: 0,
      annualSales: 0,
      companyPhone: "string",
    },
    businessTagged: [
      {
        name: "string",
      },
    ],
    isLeading: true,
    isAssociated: true,
    latestNoticeYear: 0,
    totalEmployedCount: 0,
    companyIntroductionResponse: {
      introduction: "stringㅓㅁㄴ이ㅏㅗ하ㅗㅓㅐ;ㅗㅕ효ㅑ료혀ㅗㅑㅐ",
      businessCertificate: {
        fileId: "string",
        fileUrl: "string",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      companyIntroductionFile: [
        {
          fileId: "string",
          fileUrl: "string",
          fileType: "FileType",
          extension: "string",
          fileName: "string",
          companyNumber: "string",
          companyFileClassificationType: "CompanyFileClassificationType",
        },
      ],
      companyLogo: {
        fileId: "string",
        fileUrl: "string",
        fileType: "FileType",
        extension: "string",
        fileName: "string",
        companyNumber: "string",
        companyFileClassificationType: "CompanyFileClassificationType",
      },
      companyPhotoList: [
        {
          fileId: "string",
          fileUrl: "string",
          fileType: "FileType",
          extension: "string",
          fileName: "string",
          companyNumber: "string",
          companyFileClassificationType: "CompanyFileClassificationType",
        },
      ],
    },
  });
  const [IC_data, set_IC_data] = useState([
    { title: "사업자 번호", data: "000-00-00000" },
    { title: "설립 일자", data: "0000년 00월 00일" },
    { title: "E-mail", data: "Error@error.com" },
    { title: "근로자 수", data: "0명" },
    { title: "연 매출액", data: "0,000,000 원" },
    { title: "사업 분야", data: ["오류 만들기", "react", "asd"] },
    { title: "본사 주소", data: "우리은하 태양계 지구행성 어딘가" },
    { title: "지점 주소", data: "우리은하 태양계 지구행성 어딘가" },
  ]);
  const [imgArr, setImgArr] = useState([]);
  const navigate = useNavigate();

  const load_companys = () => {
    // axios({
    //   method: "get",
    //   url: BaseUrl + `/company/${id}`,
    //   headers: {
    //     Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
    //   },
    // })
    //   .then((res) => {
    //     console.log("companys sccess!");
    //     setData(res.data);
    //     setImgArr(res.data.companyIntroduction.companyPhotoList);
    //     set_IC_data([
    //       { title: "사업자 번호", data: res.data.companyNumber },
    //       {
    //         title: "설립 일자",
    //         data: res.data.companyInformation.establishedAt + "년",
    //       },
    //       { title: "E-mail", data: res.data.companyContact.email },
    //       {
    //         title: "근로자 수",
    //         data: res.data.companyInformation.workerCount + "명",
    //       },
    //       {
    //         title: "연 매출액",
    //         data: res.data.companyInformation.annualSales + " 원",
    //       },
    //       {
    //         title: "사업 분야",
    //         data: res.data.businessAreaResponseList[0].tagName,
    //       },
    //       {
    //         title: "본사 주소",
    //         data: res.data.companyInformation.homeAddress.fullAddress,
    //       },
    //       {
    //         title: "지점 주소",
    //         data: res.data.companyInformation.agentAddress.fullAddress,
    //       },
    //     ]);
    //   })
    //   .catch(() => {
    //     navigate(-1);
    //   });
  };

  useEffect(() => {
    // load_companys();
  }, []);

  return (
    <>
      {data ? (
        <>
          <Header title={data.companyName} description={"..."} />
          <Out_box>
            <Flex_box>
              <Image
                width="500px"
                height="400px"
                alt="회사 이미지"
                // src={imgArr[0].fileUrl}
                src=""
              />
              <Explanation>
                <Header_out_box>
                  <Image
                    width="85px"
                    height="85px"
                    alt="로고 이미지"
                    src={data.companyIntroductionResponse.companyLogo.fileUrl}
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
                    <img src={item.fileUrl} alt="" />
                  </>
                ))}
                <div
                  onClick={() => {
                    setImgArr([
                      ...imgArr.filter((item, i) => i !== 0),
                      imgArr[0],
                    ]);
                    console.log(imgArr);
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
                    {typeof data.data == "string" ? (
                      <td>{data.data}</td>
                    ) : (
                      <>
                        {data.data.map((str) => (
                          <td>{str}</td>
                        ))}
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </Table>
            <Flex_box width="936px" justify="space-between" align="flex-end">
              <Sub_title>모집공고</Sub_title>
              <Sub_text>
                <span>마지막 모집공고</span>
                <span>2022년</span>
              </Sub_text>
            </Flex_box>
            <App_out_box>
              <div>
                <App_box>
                  <div>
                    <span>특기사항</span>
                    <span>
                      ㅓㅗ머ㅗ나ㅓ롸ㅣㅓㅁㄴ오ㅓㅏㅣㄻ놔ㅣㅓㅇㅁㄴ롸ㅣㄴㅁㅇ뢀ㅇ노ㅓㅏ나ㅓ롸ㅣㅓㅁㄴ오ㅓㅏㅣㄻ놔ㅣㅓㅇㅁㄴ롸ㅣㄴㅁㅇ뢀ㅇ노ㅓㅏ
                    </span>
                  </div>
                  <span>
                    <span>인원 수</span>
                    <span>10명</span>
                  </span>
                </App_box>
              </div>
              <Page_moving_btn width="896px">더 알아보기</Page_moving_btn>
            </App_out_box>
            <Flex_box width="936px" justify="flex-start" align="flex-end">
              <Sub_title>면접 후기</Sub_title>
            </Flex_box>
            <App_out_box height="390px">
              <div>
                <App_box>
                  <div>
                    <span>특기사항</span>
                    <span>
                      ㅓㅗ머ㅗ나ㅓ롸ㅣㅓㅁㄴ오ㅓㅏㅣㄻ놔ㅣㅓㅇㅁㄴ롸ㅣㄴㅁㅇ뢀ㅇ노ㅓㅏ나ㅓ롸ㅣㅓㅁㄴ오ㅓㅏㅣㄻ놔ㅣㅓㅇㅁㄴ롸ㅣㄴㅁㅇ뢀ㅇ노ㅓㅏ
                    </span>
                  </div>
                  <span>
                    <span>인원 수</span>
                    <span>10명</span>
                  </span>
                </App_box>
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
  display: flex;
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
  width: 936px;
  height: ${(props) => props.height || "450px"};
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

    overflow: hidden;
    overflow: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      background-color: #fff;
      border-radius: 100px;
      width: 14px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.colors.blue};
      border-radius: 3px;
      width: 14px;
    }
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
