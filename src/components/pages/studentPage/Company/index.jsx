import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { BaseUrl } from "../../../../export/base.js";
import IC_View from "../Introduce_company.jsx";
import Header from "../../../common/header/index.jsx";
import { useNavigate } from "react-router-dom";

const CompanyView = () => {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [IC_data, set_IC] = useState({
    totalPages: 0,
    totalElements: 0,
    size: 0,
    content: [
      {
        companyNumber: "string",
        contactorEmail: "string",
        companyName: "string",
        homeAddressInfo: {
          fullAddress: "string",
          addressNumber: "string",
        },
        businessTagged: [
          {
            name: "string",
          },
          {
            name: "react",
          },
        ],
        workerCount: 0,
        annualSales: 0,
        isLeading: true,
        isAssociated: true,
        latestNoticeYear: 0,
        totalEmployedCount: 0,
        companyIntroductionResponse: {
          introduction: "string",
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
      },
    ],
    number: 0,
    sort: {
      empty: true,
      sorted: true,
      unsorted: true,
    },
    numberOfElements: 0,
    pageable: {
      offset: 0,
      sort: {
        empty: true,
        sorted: true,
        unsorted: true,
      },
      paged: true,
      pageNumber: 0,
      pageSize: 0,
      unpaged: true,
    },
    first: true,
    last: true,
    empty: true,
  });
  const [search_string, set_search] = useState("");
  const navigate = useNavigate();
  let accessToken = sessionStorage.getItem("accessToken");

  const load_companys = () => {
    // if (search_string === "") {
    //   axios({
    //     method: "get",
    //     url: BaseUrl + "/company/list",
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //     params: {
    //       size: 4,
    //       idx: page - 1,
    //     },
    //   })
    //     .then((res) => {
    //       console.log("companys sccess!");
    //       set_IC(res.data.content);
    //       setMaxPage(res.data.totalPages);
    //     })
    //     .catch(() => {
    //       console.log("companys error...");
    //     });
    // } else {
    //   axios({
    //     method: "get",
    //     url: BaseUrl + "/company/search",
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //     params: {
    //       query: search_string,
    //     },
    //   })
    //     .then((res) => {
    //       set_IC(res.data.content);
    //       setMaxPage(res.data.totalPages);
    //     })
    //     .catch(() => {
    //       navigate(-1);
    //     });
    // }
  };

  useEffect(() => {
    load_companys();
  }, [page, search_string]);

  const Click_page = () => {
    let list = [];
    if (page <= 2) {
      for (let i = 1; i <= 5 && i <= maxPage; i++) {
        list.push({ id: i, circle: i == page });
      }
    } else if (page >= 3 && maxPage - page >= 2) {
      for (let i = page - 2; i <= page + 2; i++) {
        list.push({ id: i, circle: i == page });
      }
    } else {
      for (let i = maxPage; i >= 1 && i >= maxPage - 4; i--) {
        list.push({ id: i, circle: i == page });
      }
      list = list.reverse();
    }

    return list;
  };

  const Search = (props) => {
    if (props.trim() != "" && search_string != props) {
      setPage(1);
      set_search(props);
    } else if (props.trim() === "") {
      setPage(1);
      set_search("");
    }
  };

  return (
    <>
      <Header
        title={"회사 정보"}
        description={"찾으시는 회사의 정보를 확인해 보세요"}
      />
      <Out_box>
        {/* <Search_bar search={Search} width="1050px" /> */}
        {search_string !== "" && (
          <Search_message>
            <span>{search_string}</span>
            <span>의 검색 결과입니다.</span>
          </Search_message>
        )}
        <Grid_box>
          {IC_data ? (
            IC_data.content.map((Data) => (
              <IC_View IC_data={Data} key={Data.companyId} />
            ))
          ) : (
            <></>
          )}
        </Grid_box>
        {search_string === "" && (
          <Page_bar>
            <Page_btn onClick={() => setPage(1)}>First Page</Page_btn>
            <Small_box
              onClick={() => {
                if (page > 1) setPage(page - 1);
              }}
            >
              <Small_page_left_btn color="#000" top="-5px" />
            </Small_box>
            {IC_data ? (
              Click_page().map((data) => {
                if (data.circle) {
                  return (
                    <Circle_btn onClick={() => setPage(data.id)} key={data.id}>
                      {data.id}
                    </Circle_btn>
                  );
                } else {
                  return (
                    <UnCircle_btn
                      onClick={() => setPage(data.id)}
                      key={data.id}
                    >
                      {data.id}
                    </UnCircle_btn>
                  );
                }
              })
            ) : (
              <></>
            )}
            <Small_box
              onClick={() => {
                if (page < maxPage) setPage(page + 1);
              }}
            >
              <Small_page_right_btn color="#000" top="5px" />
            </Small_box>
            <Page_btn onClick={() => setPage(maxPage)}>Last Page</Page_btn>
          </Page_bar>
        )}
      </Out_box>
    </>
  );
};

export default CompanyView;

const Out_box = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: center;
`;

const Grid_box = styled.div`
  margin-top: 260px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Small_box = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: 0.1s;
  &:hover {
    background: ${(props) => props.theme.colors.blue};
    span,
    span::after {
      background: ${(props) => props.theme.colors.white};
    }
  }
`;

const Small_page_left_btn = styled.span`
  height: 3px;
  width: 15px;
  display: block;
  background-color: ${(props) => props.color || props.theme.colors.white};
  transform: translateY(${(props) => props.top || "13px"}) rotate(-45deg);
  border-radius: 10px;
  &::after {
    content: "";
    height: 3px;
    width: 15px;
    display: block;
    background-color: ${(props) => props.color || props.theme.colors.white};
    border-radius: 10px;
    transform: translate(-6px, 6px) rotate(90deg);
  }
`;

const Small_page_right_btn = styled.span`
  height: 3px;
  width: 15px;
  display: block;
  background-color: ${(props) => props.color || props.theme.colors.white};
  transform: translateY(${(props) => props.top || "23px"}) rotate(135deg);
  border-radius: 10px;
  &::after {
    content: "";
    height: 3px;
    width: 15px;
    display: block;
    background-color: ${(props) => props.color || props.theme.colors.white};
    border-radius: 10px;
    transform: translate(-6px, 7px) rotate(-90deg);
  }
`;

const Page_bar = styled.div`
  width: 900px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 150px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
`;

const Page_btn = styled.div`
  width: 160px;
  height: 60px;

  background: ${(props) => props.theme.colors.blue};
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  line-height: 160%;

  color: #ffffff;
  cursor: pointer;

  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const UnCircle_btn = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: 0.1s;
  &:hover {
    background: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
  }
`;

const Circle_btn = styled.div`
  width: 60px;
  height: 60px;
  background: ${(props) => props.theme.colors.blue};
  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
`;

const Search_message = styled.div`
  width: 1000px;
  margin-top: 230px;
  margin-bottom: -230px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  display: flex;
  justify-content: flex-start;

  span {
    color: ${(props) => props.theme.colors.black};
    &:first-child {
      color: ${(props) => props.theme.colors.blue};
    }
  }
`;
