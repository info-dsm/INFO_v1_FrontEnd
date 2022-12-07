import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { BaseUrl } from "../../../../export/base.js";
import IC_View from "../Introduce_company.jsx";
import Header from "../../../common/header/index.jsx";
import { initialCompany } from "../../../../export/data.js";
import companyDeco from "../../../../images/companyDeco.png";
import { Sortation } from "../styled.jsx";
import { useQuery } from "@tanstack/react-query";
const CompanyView = () => {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState([1]);
  const [search_string, set_search] = useState("");
  const { status, data } = useQuery(["data", page], async () => {
    const { data } = await axios({
      method: "get",
      url: BaseUrl + "/company/list/",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
      params: {
        size: 4,
        idx: page - 1,
      },
    });
    // const data = initialCompany;
    return data;
  });
  useEffect(() => {
    // const cnt = data.totalPages;
    const cnt = 4;
    if (status === "success") {
      setMaxPage(
        Array.from({ length: cnt }, (t, i) => {
          return i + 1;
        })
      );
    }
  }, [data]);
  // .then((res) => {
  //   if (res.data.message !== "프레임워크 내부적인 오류가 발생했습니다.") {
  //     setIC(res.data.content);
  //     setMaxPage(getArray(res.data));
  //     setState({});

  // if (res.data.content[0] === undefined) {
  //   set_IC(initialCompany.content);
  //   setMaxPage(getArray(initialCompany));
  // } else {
  //   setMaxPage(getArray(res.data));
  //   set_IC(res.data.content);
  // }
  //       } else {
  //         setIC(initialCompany.content);
  //         setMaxPage(getArray(initialCompany));
  //       }
  //     })
  //     .catch((err) => {
  //       setIC(initialCompany.content);
  //       setMaxPage(getArray(initialCompany));
  //     });
  // } else {
  // axios({
  //   method: "get",
  //   url: BaseUrl + "/company/search",
  //   headers: {
  //     Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
  //   },
  //   params: {
  //     query: search_string,
  //   },
  // })
  //   .then((res) => {
  //     set_IC(res.data.content);
  //     setMaxPage(res.data.totalPages);
  //   })
  //   .catch(() => {
  //     navigate(-1);
  //   });
  //   }
  // };

  // useEffect(() => {
  //   load_companys();
  // }, [page, search_string]);

  // const getArray = (res) => {
  //   return Array.from({ length: Math.ceil(res.totalPages) }, (t, i) => {
  //     return i + 1;
  //   });
  // };

  // useEffect(() => {
  //   load_companys();
  // }, [page]);

  const Click_page = () => {
    // let list = [];
    // if (page <= 2) {
    //   for (let i = 1; i <= 5 && i <= maxPage; i++) {
    //     list.push({ id: i, circle: i == page });
    //   }
    // } else if (page >= 3 && maxPage - page >= 2) {
    //   for (let i = page - 2; i <= page + 2; i++) {
    //     list.push({ id: i, circle: i == page });
    //   }
    // } else {
    //   for (let i = maxPage; i >= 1 && i >= maxPage - 4; i--) {
    //     list.push({ id: i, circle: i == page });
    //   }
    //   list = list.reverse();
    // }
    // return list;
  };

  // const Search = (props) => {
  //   if (props.trim() != "" && search_string != props) {
  //     setPage(1);
  //     set_search(props);
  //   } else if (props.trim() === "") {
  //     setPage(1);
  //     set_search("");
  //   }
  // };

  return (
    <>
      {status === "loading" ? (
        <></>
      ) : status === "error" ? (
        <></>
      ) : (
        <>
          <Deco src={companyDeco} alt="" />
          <Sortation id="main">ㅤ</Sortation>
          <Header
            title={"기업 목록"}
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
              {/* {data.content.slice((page - 1) * 4, page * 4).map((item, i) => (
                <IC_View IC_data={item} key={i} idx={(page - 1) * 4 + i} />
              ))} */}
              {data.content.map((item, i) => (
                <IC_View IC_data={item} key={i} />
              ))}
            </Grid_box>
            {search_string === "" && (
              <Page_bar>
                {/* <Page_btn href="#main" onClick={() => setPage(1)}>
              First Page
            </Page_btn> */}
                <Small_box
                  href="#main"
                  onClick={() => {
                    if (page >= 1) setPage(page - 1);
                  }}
                >
                  <Small_page_left_btn color="#000" top="-5px" />
                </Small_box>
                {data ? (
                  maxPage.map((item, i) => {
                    // if (data) {
                    //   return (
                    //     <Circle_btn
                    //       href="#main"
                    //       onClick={() => {
                    //         setPage(data.id);
                    //       }}
                    //       key={data.id}
                    //     >
                    //       {data.id}
                    //     </Circle_btn>
                    //   );
                    // } else {
                    //   return (
                    //     <UnCircle_btn
                    //       href="#main"
                    //       onClick={() => {
                    //         setPage(data.id);
                    //       }}
                    //       key={data.id}
                    //     >
                    //       {data.id}
                    //     </UnCircle_btn>
                    //   );
                    // }
                    return (
                      <UnCircle_btn
                        href="#main"
                        onClick={() => {
                          setPage(item);
                        }}
                        key={item}
                      >
                        {item}
                      </UnCircle_btn>
                    );
                  })
                ) : (
                  <></>
                )}
                <Small_box
                  href="#main"
                  onClick={() => {
                    if (page <= maxPage.length) setPage(page + 1);
                  }}
                >
                  <Small_page_right_btn color="#000" top="5px" />
                </Small_box>
                {/* <Page_btn
              href="#main"
              onClick={() => {
                setPage(maxPage);
              }}
            >
              Last Page
            </Page_btn> */}
              </Page_bar>
            )}
          </Out_box>
        </>
      )}
    </>
  );
};

export default CompanyView;

const Deco = styled.img`
  width: 20%;
  position: absolute;
  top: 550px;
  left: 100px;
`;

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

const Small_box = styled.a`
  text-decoration: none;
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

const Page_btn = styled.a`
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

const UnCircle_btn = styled.a`
  text-decoration: none;
  color: #000;
  transition: 0.4s ease-in;
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
