import React, { useEffect, useState, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import CA_View from "../Announcement.jsx";
import { BaseUrl } from "../../../../export/base.js";
import { Page_moving_btn, Image } from "../styled.jsx";
import Header from "../../../common/header/index.jsx";
import { StyledLink } from "../../../../style/theme.js";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import NoticeModal from "../NoticeModal.jsx";
import { initialNotice } from "../../../../export/data.js";

const NoticeView = () => {
  const [inputState, setInputState] = useState("");
  const accessToken = sessionStorage.getItem("accessToken");
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);
  const queryClient = useQueryClient();
  const [noticeID, setNoticeID] = useState({
    id: "",
    company: "",
  });
  const { status, data } = useQuery(["studentNoticeList", count], () =>
    getNotices()
  );

  useEffect(() => {
    if (data?.totalPages > 5) {
      if (data.totalPages % 5 !== 0) {
        if (parseInt(count / 5) === parseInt(data.totalPages / 5)) {
          const asd = parseInt(data.totalPages % 5);
          let aq = new Array(asd).fill(0);
          for (let i = 0; i < asd; i++) {
            aq[i] = 5 * (asd + 1) + 1 + i;
          }
          setArr(aq);
        }
      }
      if (count % 5 === 0 && count / 5 < data.totalPages / 5 - 1) {
        setArr([count + 1, count + 2, count + 3, count + 4, count + 5]);
      } else if (count % 5 === 4) {
        setArr([count - 3, count - 2, count - 1, count, count + 1]);
      }
    } else if (data?.totalPages) {
      console.log(data.totalPages);
      let ad = new Array(data?.totalPages).fill(0);
      for (let i = 0; i < data.totalPages; i++) {
        ad[i] = i + 1;
      }
      setArr(ad);
    }
  }, [count, data]);
  useEffect(() => {
    if (data?.last && data.totalPages - 1 > count) {
      queryClient.prefetchQuery(["list", count + 1], () =>
        getNotices(count + 1)
      );
    }
  }, [data, count, queryClient]);
  const Click = useCallback((e) => {
    setCount(e);
  }, []);

  const getNotices = async () => {
    await axios({
      method: "get",
      url: BaseUrl + "/notice/list/on",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        size: 4,
        idx: count,
        status: "APPROVE",
      },
    })
      .then((res) => {
        if (res.data.message === "프레임워크 내부적인 오류가 발생했습니다.") {
          return { content: [initialNotice] };
        } else {
          if (res.data.content[0] === undefined)
            return { content: [initialNotice] };
          else return res.data;
        }
      })
      .catch(() => {
        return { content: [initialNotice] };
      });
    return { content: [initialNotice] };
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
          <Location2>
            {data.content.map((item) => (
              <>
                <CA_View
                  CA_data={item}
                  setNoticeID={setNoticeID}
                  detail={true}
                />
              </>
            ))}
          </Location2>
          <Ul top={0}>
            {data.content.length === 1 ? (
              <>
                <Li>
                  <Button onClick={() => setCount(0)}>First Page</Button>
                </Li>
                <Li>
                  <Text
                    onClick={() => {
                      if (count > 4) {
                        setCount((parseInt(count / 5) - 1) * 5 + 4);
                      }
                    }}
                  >
                    &lt;
                  </Text>
                </Li>
                {arr.map((item) => (
                  <Li id={item} onClick={() => Click(item - 1)}>
                    <Text state={item === count + 1}>{item}</Text>
                  </Li>
                ))}
                <Li>
                  <Text
                    onClick={() => {
                      if (
                        data.totalPages % 5 === 0
                          ? data.totalPages / 5 + 1 !== parseInt(count / 5) + 1
                          : parseInt(data.totalPages / 5) + 1 !==
                            parseInt(count / 5) + 1
                      ) {
                        setCount((parseInt(count / 5) + 1) * 5);
                      }
                    }}
                  >
                    &gt;
                  </Text>
                </Li>
                <Li>
                  <Button onClick={() => setCount(data.totalPages - 1)}>
                    Last Page
                  </Button>
                </Li>
              </>
            ) : (
              <></>
            )}
          </Ul>
        </>
      )}
    </>
  );
};

export default NoticeView;

const Sortation = styled.div`
  position: absolute;
  top: 0;
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

const Li = styled.li`
  margin-left: -40px;
`;
const Text = styled.div`
  position: relative;
  font: 700 normal 23px "Roboto";
  color: ${(props) =>
    props.state ? props.theme.colors.white : props.theme.colors.black};
  width: 60px;
  height: 60px;
  padding-top: 15px;
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
