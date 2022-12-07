import React, { useEffect, useState, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import CA_View from "../Announcement.jsx";
import { BaseUrl } from "../../../../export/base.js";
import { Page_moving_btn, Image, Sortation } from "../styled.jsx";
import Header from "../../../common/header/index.jsx";
import { StyledLink } from "../../../../style/theme.js";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import NoticeModal from "../NoticeModal.jsx";
import { initialNotice } from "../../../../export/data.js";
import noticePageDeco from "../../../../images/loginPageDeco.png";

const NoticeView = () => {
  const [count, setCount] = useState(1);
  const [arr, setArr] = useState([]);
  const [noticeID, setNoticeID] = useState({
    id: "",
    company: "",
  });
  const { status, data } = useQuery(["studentNoticeList", count], () =>
    getNotices()
  );
  const [info, setInfo] = useState(data);

  // useEffect(() => {
  //   if (data?.totalPages > 5) {
  //     if (data.totalPages % 5 !== 0) {
  //       if (parseInt(count / 5) === parseInt(data.totalPages / 5)) {
  //         const asd = parseInt(data.totalPages % 5);
  //         let aq = new Array(asd).fill(0);
  //         for (let i = 0; i < asd; i++) {
  //           aq[i] = 5 * (asd + 1) + 1 + i;
  //         }
  //         setArr(aq);
  //       }
  //     }
  //     if (count % 5 === 0 && count / 5 < data.totalPages / 5 - 1) {
  //       setArr([count + 1, count + 2, count + 3, count + 4, count + 5]);
  //     } else if (count % 5 === 4) {
  //       setArr([count - 3, count - 2, count - 1, count, count + 1]);
  //     }
  //   } else if (data?.totalPages) {
  //     console.log(data.totalPages);
  //     let ad = new Array(data?.totalPages).fill(0);
  //     for (let i = 0; i < data.totalPages; i++) {
  //       ad[i] = i + 1;
  //     }
  //     setArr(ad);
  //   }
  // }, [count, data]);
  // useEffect(() => {
  //   if (data?.last && data.totalPages - 1 > count) {
  //     queryClient.prefetchQuery(["list", count + 1], () =>
  //       getNotices(count + 1)
  //     );
  //   }
  // }, [data, count, queryClient]);
  // const Click = useCallback((e) => {
  //   setCount(e);
  // }, []);

  const getNotices = async () => {
    await axios({
      method: "get",
      url: BaseUrl + "/notice/list/on",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
      params: {
        size: 4,
        idx: count - 1,
        status: "APPROVE",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.message === "프레임워크 내부적인 오류가 발생했습니다.") {
          setInfo(initialNotice);
          return initialNotice;
        } else {
          if (res.data.content[0] === undefined) {
            setInfo(initialNotice);
            setArr(
              Array.from({ length: initialNotice.totalPages }, (t, i) => {
                return i + 1;
              })
            );
            return initialNotice;
          } else {
            setInfo(res.data);
            setArr(
              Array.from({ length: res.data.totalPages }, (t, i) => {
                return i + 1;
              })
            );
            return res.data;
          }
        }
      })
      .catch(() => {
        setInfo(initialNotice);
        return initialNotice;
      });
    // setArr(
    //   Array.from(
    //     { length: Math.ceil(initialNotice.content.length / 3) - 1 },
    //     (t, i) => {
    //       return i + 1;
    //     }
    //   )
    // );

    return initialNotice;
  };

  //   const Search = (props) => {
  //     if (props.trim() != "" && search_string != props) {
  //       setPage(1);
  //       set_search(props);
  //     } else if (props.trim() === "") {
  //       setPage(1);
  //       set_search("");
  //     }
  //   };

  return (
    <>
      {status === "loading" ? (
        <></>
      ) : status === "error" ? (
        <></>
      ) : (
        <>
          <Deco src={noticePageDeco} alt="" />
          <Sortation id="main">ㅤ</Sortation>
          {noticeID.id !== "" ? (
            <NoticeModal datum={noticeID} setNoticeID={setNoticeID} />
          ) : (
            <></>
          )}
          <Header
            title={"모집공고"}
            description={"자신이 원하는 직군의 채용 공고를 찾아보세요"}
          />
          {/* <Location>
            <SearchDiv>
              <Search
                placeholder="회사이름"
                onInput={(e) => setInputState(e.target.value)}
              />
              <StyledLink to={`/student/notice/${inputState}`}>
                <SearchButton>검색</SearchButton>
              </StyledLink>
            </SearchDiv>
          </Location> */}
          <div>
            <Location2>
              {info !== "" ? (
                <>
                  {info.content.map((item, i) => (
                    <>
                      <CA_View
                        CA_data={item}
                        setNoticeID={setNoticeID}
                        detail={true}
                        idx={(count - 1) * 3 + i}
                      />
                    </>
                  ))}
                </>
              ) : (
                <></>
              )}
            </Location2>
            <Ul top={0}>
              <>
                {/* <Li>
                <Button onClick={() => setCount(0)}>First Page</Button>
              </Li> */}
                <a
                  onClick={() => {
                    if (count > 1) {
                      // setCount((parseInt(count / 5) - 1) * 5 + 4);
                      setCount(count - 1);
                    }
                  }}
                >
                  <Li>
                    <Text>&lt;</Text>
                  </Li>
                </a>
                {arr.map((item) => (
                  <a
                    onClick={() => {
                      setCount(item);
                    }}
                  >
                    <Li id={item}>
                      <Text>{item}</Text>
                    </Li>
                  </a>
                ))}
                <a
                  onClick={() => {
                    // if (
                    //   data.totalPages % 5 === 0
                    //     ? data.totalPages / 5 + 1 !== parseInt(count / 5) + 1
                    //     : parseInt(data.totalPages / 5) + 1 !==
                    //       parseInt(count / 5) + 1
                    // ) {
                    //   setCount((parseInt(count / 5) + 1) * 5);
                    // }
                    if (count < arr.length - 1) {
                      setCount(count + 1);
                    }
                  }}
                >
                  <Li>
                    <Text>&gt;</Text>
                  </Li>
                </a>
                {/* <Li>
                <Button onClick={() => setCount(data.totalPages - 1)}>
                  Last Page
                </Button>
              </Li> */}
              </>
            </Ul>
          </div>
        </>
      )}
    </>
  );
};

export default NoticeView;

const Deco = styled.img`
  width: 100%;
  position: absolute;
  top: 700px;
  left: 100px;
`;

const Location = styled.div`
  position: relative;
  display: flex;
  width: 800px;
  height: 60px;
  left: 0;
  right: 0;
  margin: 100px auto;
`;
const SearchDiv = styled.div`
  width: 800px;
  height: 60px;
  border: 5px solid ${(props) => props.theme.colors.blue};
  border-radius: 100px;
`;
const SearchButton = styled.div`
  position: relative;
  top: -55px;
  left: 670px;
  width: 125px;
  height: 60px;
  text-align: center;

  font: 700 normal 20px "NanumGothic", sans-serif;
  line-height: 60px;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  border-radius: 100px;
`;
const Search = styled.input`
  width: 650px;
  top: 0px;
  height: 50px;
  border: none;
  border-radius: 100px;
  padding-left: 40px;
  font: 400 normal 20px "NanumGothic", sans-serif;
`;

const Li = styled.div`
  margin-left: -40px;
`;
const Text = styled.div`
  text-decoration: none;
  position: relative;
  font: 700 normal 23px "Roboto";
  color: ${(props) =>
    props.state ? props.theme.colors.white : props.theme.colors.black};
  width: 60px;
  height: 60px;
  padding-top: 15px;
  transition: 0.4s ease-in;
  text-align: center;
  background-color: ${(props) =>
    props.state ? props.theme.colors.blue : props.theme.colors.white};
  cursor: pointer;
  border-radius: 100%;
  :hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: #fff;
    border-radius: 100%;
  }
`;
const Button = styled.div`
  width: 160px;
  height: 60px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  padding-top: 17px;
  cursor: pointer;
`;
const Ul = styled.ul`
  a {
    text-decoration: none;
  }
  position: relative;
  top: ${(props) => props.top}px;
  width: 836px;
  height: 60px;
  list-style-type: none;
  display: flex;
  margin: 0px auto;
  margin-bottom: 100px;
  justify-content: space-between;
`;
const Location2 = styled.div`
  position: relative;
  margin: 100px auto;
  width: 700px;
`;
// const CA_deadline = styled.div`
//   width: 310px;
//   height: 770px;

//   background: linear-gradient(180deg, #7243fe 0%, #aa90f8 100%);
//   box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
//   border-radius: 20px;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const CA_deadline_header = styled.div`
//   width: 290px;
//   display: flex;
//   justify-content: space-around;
//   padding: 21px;
// `;

// const CA_deadline_title = styled.span`
//   font-family: "NanumGothic";
//   font-style: normal;
//   font-weight: 700;
//   font-size: 24px;
//   line-height: 160%;

//   color: #ffffff;
// `;

// const Small_page_left_btn = styled.span`
//   height: 3px;
//   width: 15px;
//   display: block;
//   background-color: ${(props) => props.color || props.theme.colors.white};
//   transform: translateY(${(props) => props.top || "13px"}) rotate(-45deg);
//   border-radius: 10px;
//   &::after {
//     content: "";
//     height: 3px;
//     width: 15px;
//     display: block;
//     background-color: ${(props) => props.color || props.theme.colors.white};
//     border-radius: 10px;
//     transform: translate(-6px, 6px) rotate(90deg);
//   }
// `;

// const Small_page_right_btn = styled.span`
//   height: 3px;
//   width: 15px;
//   display: block;
//   background-color: ${(props) => props.color || props.theme.colors.white};
//   transform: translateY(${(props) => props.top || "23px"}) rotate(135deg);
//   border-radius: 10px;
//   &::after {
//     content: "";
//     height: 3px;
//     width: 15px;
//     display: block;
//     background-color: ${(props) => props.color || props.theme.colors.white};
//     border-radius: 10px;
//     transform: translate(-6px, 7px) rotate(-90deg);
//   }
// `;

// const CA_deadline_body = styled.div`
//   width: 290px;
//   height: 680px;
//   border-radius: 20px;
//   background: ${(props) => props.theme.colors.white};
//   padding: 20px 0 20px 0;
// `;
// const CA_deadline_content = ({ title, text }) => {
//   return (
//     <CA_deadline_content_box>
//       <Image width="60px" height="60px" alt="이미지" />
//       <CA_deadline_content_text_box>
//         <CA_deadline_content_title>{title}</CA_deadline_content_title>
//         <CA_deadline_content_text>{text}</CA_deadline_content_text>
//       </CA_deadline_content_text_box>
//     </CA_deadline_content_box>
//   );
// };

// const CA_deadline_content_box = styled.div`
//   width: 290px;
//   height: 80px;
//   padding: 10px 20px;
//   display: flex;
//   justify-content: space-between;
// `;

// const CA_deadline_content_text_box = styled.div`
//   width: 180px;
//   height: 45px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

// const CA_deadline_content_title = styled.span`
//   font-family: "Roboto";
//   font-style: normal;
//   font-weight: 700;
//   font-size: 16px;
//   line-height: 160%;

//   color: ${(props) => props.theme.colors.black};
// `;

// const CA_deadline_content_text = styled.span`
//   font-family: "NanumGothic";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 10px;
//   line-height: 160%;

//   color: ${(props) => props.theme.colors.black};
// `;
