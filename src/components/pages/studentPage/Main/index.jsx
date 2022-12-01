import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import CA_View from "../Announcement.jsx";
import IC_View from "../Introduce_company.jsx";
import Sub from "../../../../images/Main_Bottom.png";
import { Page_moving_btn } from "../styled.jsx";
import { BaseUrl } from "../../../../export/base.js";
import Header from "../../../common/header/index.jsx";
import { useQuery } from "@tanstack/react-query";
import LoadingPage from "../../../common/loading";
import ErrorPage from "../../../common/error";
import { useNavigate } from "react-router-dom";
import { initialCompany, initialNotice } from "../../../../export/data.js";
import NoticeModal from "../NoticeModal.jsx";
const MainView = () => {
  const accessToken = sessionStorage.getItem("accessToken");
  const [noticeID, setNoticeID] = useState("");

  const { status, data } = useQuery(["mainData", accessToken], async () => {
    let res = [{}, {}];
    await axios
      .all([
        axios({
          method: "get",
          url: BaseUrl + "/notice/list/on",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            idx: 0,
            size: 1,
          },
        }),
        axios({
          method: "get",
          url: BaseUrl + "/company/list",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            idx: 0,
            size: 1,
          },
        }),
      ])
      .then(
        axios.spread((res1, res2) => {
          if (
            res1.data.message === "프레임워크 내부적인 오류가 발생했습니다." ||
            res2.data.message === "프레임워크 내부적인 오류가 발생했습니다."
          ) {
            res = [initialNotice, initialCompany];
          } else {
            if (res1.data.content[0] !== undefined)
              res[0] = res1.data.content[0];
            else res[0] = initialNotice;

            if (res2.data.content[0] !== undefined)
              res[1] = res2.data.content[0];
            else res[1] = initialCompany;
          }
        })
      )
      .catch(() => {
        res = [initialNotice, initialCompany];
      });
    return res;
  });

  return (
    <>
      {status === "loading" ? (
        <>
          <LoadingPage />
        </>
      ) : status === "error" ? (
        <>
          <ErrorPage />
        </>
      ) : (
        <>
          <Header />
          <Triangle_box>
            <Triangle />
          </Triangle_box>
          <Center>
            <Content>
              <CA_View CA_data={data[0]} detail={false} />
              <div
                style={{
                  height: "500px",
                  position: "relative",
                  right: "-100px",
                }}
              >
                <Sub_Title
                  text="더 다양한 모집공고를 원하시나요?"
                  button="모집공고"
                />
              </div>
            </Content>
            <Content width="937px" top="1533px" left="-170px">
              <div style={{ height: "330px", position: "relative" }}>
                <Sub_Title
                  text="여러 회사를 둘러보세요"
                  button="둘러보기"
                  color="#000"
                  top="50px"
                />
              </div>
              <IC_View IC_data={data[1]} />
            </Content>
          </Center>
          <SubImg />
        </>
      )}
    </>
  );
};

export default MainView;

const Sub_Title = ({ text, button, color, top }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Sub_Title_text color={color} top={top}>
        {text}
      </Sub_Title_text>
      <Page_moving_btn
        width="200px"
        onClick={() => {
          if (button === "모집공고") navigate("/student/notice");
          else navigate("/student/company");
        }}
      >
        {button}
      </Page_moving_btn>
    </div>
  );
};

const Triangle_box = styled.div`
  overflow: hidden;
  margin: -1px 0 127px 0;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: 700px solid transparent;
  border-right: 100vmax solid ${(props) => props.theme.colors.purple};
  z-index: -1;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const SubImg = styled.div`
  width: 100%;
  height: 1400px;
  background-image: url(${Sub});
  background-size: cover;
  z-index: -1;
`;

const Content = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  width: ${(props) => props.width || "1100px"};
  top: ${(props) => props.top || "338px"};
  justify-content: space-between;
  margin-left: ${(props) => props.left || "0px"};
`;

const Sub_Title_text = styled.span`
  display: block;
  width: 400px;

  font-family: NanumGothic;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 74px;

  color: ${(props) => props.color || "#fff"};
  margin-bottom: 40px;
  margin-top: ${(props) => props.top || "150px"};
`;
