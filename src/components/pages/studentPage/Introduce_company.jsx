import styled from "styled-components";
import chack from "../../../images/chack.png";
import { Page_moving_btn, Image } from "./styled.jsx";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const IC_View = ({ IC_data }) => {
  console.log(IC_data);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  let Data;

  if (IC_data !== undefined) {
    Data = {
      id: IC_data.companyNumber || "000-00-00000",
      title: IC_data.companyName || "이동현컴퍼니",
      number: IC_data.companyNumber || "000-00-00000",
      year: IC_data.latestNoticeYear || "아직 모집공고를 올리지 않았네요..",
      isLeading: IC_data.isLeading || false,
      isAssociated: IC_data.isAssociated || false,
      src:
        IC_data.companyIntroductionResponse.companyPhotoList[0] !== {} &&
        IC_data.companyIntroductionResponse.companyPhotoList[0] !== undefined &&
        IC_data.companyIntroductionResponse.companyPhotoList[0] !== null
          ? IC_data.companyIntroductionResponse.companyPhotoList[0].fileUrl
          : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png",
      text:
        IC_data.companyIntroductionResponse.introduction ||
        "소개글이 없습니다..",
      table: [
        { title: "E-mail", data: IC_data.contactorEmail || "email.dsm.hs.kr" },
        { title: "근로자 수", data: `${IC_data.workerCount || 0}명` },
        { title: "연 매출액", data: `${IC_data.annualSales || 0}원` },
        {
          title: "사업 분야",
          data: IC_data.businessTagged || [{ name: "사업체수" }],
        },
        {
          title: "주소",
          data:
            IC_data.homeAddressInfo.fullAddress ||
            "대전광역시 유성구 가정북로 76",
        },
      ],
    };
  }

  return (
    <>
      <IC_box>
        <IC_title>{Data.title}</IC_title>
        <Flex_box justify="space-between">
          <IC_sub_title>{Data.number}</IC_sub_title>
          {/* <IC_sub_title color="#868686">{Data.year}</IC_sub_title> */}
        </Flex_box>
        <Flex_box margin="19px" height="26px">
          {Data.isLeading && <IC_company_point text="선도기업" />}
          {Data.isAssociated && <IC_company_point text="협약완료" />}
        </Flex_box>
        <Image src={Data.src} width="400px" height="184px" alt="회사 이미지" />
        <Introduce_box>{Data.text}</Introduce_box>
        <Table>
          <tbody>
            {Data.table.map((data, key) => (
              <tr key={key}>
                <td>{data.title}</td>
                {typeof data.data == "string" ? (
                  <td>{data.data}</td>
                ) : (
                  <>
                    {data.data.map((str) => (
                      <td>{str.id}</td>
                    ))}
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
        <Page_moving_btn
          width="400px"
          onClick={() => navigate("/student/company/" + IC_data.companyNumber)}
        >
          자세히 보기
        </Page_moving_btn>
      </IC_box>
    </>
  );
};

export default IC_View;

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

const IC_box = styled.div`
  width: 500px;
  height: auto;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.white} 0%,
    ${(props) => props.theme.colors.whiteGray} 100%
  );
  box-shadow: 0 0 18px rgba(47, 54, 62, 0.14);
  border-radius: 20px;
  border: none;
  font-family: "Roboto";
  font-style: normal;
  display: flex;
  flex-direction: column;
  padding: 50px;
  margin: 0 25px 100px 25px;
  position: relative;
  img {
    object-fit: contain;
  }
`;

const IC_title = styled.span`
  font-weight: 900;
  font-size: 40px;
  line-height: 47px;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Flex_box = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || "none"};
  margin-top: ${(props) => props.margin || "0px"};
  margin-bottom: ${(props) => props.margin || "0px"};
  height: ${(props) => props.height || "auto"};
`;

const IC_sub_title = styled.span`
  font-family: "NanumGothic";
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;
  color: ${(props) => props.color || "#000000"};
`;

const Introduce_box = styled.span`
  width: 400px;
  height: 60px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  word-wrap: break-word;
  margin: 40px 0 40px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Table = styled.table`
  width: 400px;
  height: 210px;
  margin-bottom: 40px;
  display: flex;

  tr {
    width: 400px;
    display: flex;
    flex-wrap: wrap;
  }

  td {
    font-family: "NanumGothic";
    font-style: normal;
    text-align: left;

    &:first-child {
      width: 110px;
      font-weight: 600;
      font-size: 16px;
      line-height: 160%;
      color: ${(props) => props.theme.colors.blue};
    }
    max-width: 250px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    margin-right: 10px;
    color: ${(props) => props.theme.colors.black};
  }
`;

const Point_box = styled.div`
  width: 80px;
  margin-right: 52px;
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
