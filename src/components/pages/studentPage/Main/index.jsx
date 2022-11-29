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
const MainView = () => {
  const accessToken = sessionStorage.getItem("accessToken");
  const { status, data } = useQuery(["mainData", accessToken], async () => {
    let res;
    await axios
      .all([
        axios({
          method: "get",
          url: BaseUrl + "/notice/list",
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
          console.log(res1);
          res = [res1.data.content[0], res2.data.content[0]];
        })
      );
    console.log(res);
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
          {" "}
          <Header />
          <Triangle_box>
            <Triangle />
          </Triangle_box>
          <Center>
            <Content>
              <CA_View CA_data={data[0]} />
              <Sub_Title
                text="더 다양한 모집공고를 원하시나요?"
                button="모집공고"
              />
            </Content>
            <Content width="937px" top="1533px" left="-170px">
              <Sub_Title
                text="여러 회사를 둘러보세요"
                button="둘러보기"
                color="#000"
                top="50px"
              />
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
  return (
    <div>
      <Sub_Title_text color={color} top={top}>
        {text}
      </Sub_Title_text>
      <Page_moving_btn width="200px">{button}</Page_moving_btn>
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
  display: flex;
  width: ${(props) => props.width || "1100px"};
  top: ${(props) => props.top || "338px"};
  justify-content: space-between;
  margin-left: ${(props) => props.left || "0px"};
`;

const Sub_Title_text = styled.span`
  display: block;
  width: 336.5px;

  font-family: NanumGothic;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 74px;

  color: ${(props) => props.color || "#fff"};
  margin-bottom: 40px;
  margin-top: ${(props) => props.top || "150px"};
`;
