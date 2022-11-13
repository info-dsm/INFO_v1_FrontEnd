/* eslint-disable react/jsx-no-undef */
import styled from "styled-components";
import { Notice } from "../../../../common/notice";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useCallback } from "react";
import { postNotice, postNoticeRequest } from "../../../../api/teacher";
import LoadingPage from "../../../../common/loading";
import ErrorPage from "../../../../common/error";
const Wait = () => {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);
  const [arr2, setArr2] = useState([1]);
  const queryClient = useQueryClient();
  const { status, data } = postNotice(count, "/notice/waiting-notice/list");

  useEffect(() => {
    let asdf = [];
    if (status === "success") {
      for (let i = 1; i <= data.totalPage; i++) {
        asdf.push(i);
      }
      setArr(asdf);
    }
  }, [data]);
  useEffect(() => {
    if (data?.last) {
      queryClient.prefetchQuery(
        ["pagin", count, "/notice/waiting-notice/list"],
        () => postNoticeRequest(count, "/notice/waiting-notice/list")
      );
    }
  }, [data, count, queryClient]);
  const Click = useCallback((e) => {
    setCount(e);
  }, []);
  return (
    <>
      {status === "loading" ? (
        <LoadingPage />
      ) : status === "error" ? (
        <ErrorPage />
      ) : (
        <>
          <Table>
            <Ulbox>
              {data.count.map((user, i) => (
                <Libox>
                  <Box>
                    <Category>
                      <div>{user.name}</div>
                      <div>{data.ad[i]}</div>
                      <div>{data.as[i]}</div>
                    </Category>
                    <Category>
                      <div>채용인원</div>
                      <div>{user.total}명</div>
                    </Category>
                    <ButtonProps>
                      <div>자세히 보기</div>
                      <div>지원자 리스트</div>
                    </ButtonProps>
                  </Box>
                </Libox>
              ))}
            </Ulbox>
            <Ul top={100 * (7 - data.count.length) + 50}>
              <Li>
                <Button onClick={() => setCount(0)}>First Page</Button>
              </Li>
              <Li>
                <Text>&lt;</Text>
              </Li>
              {arr.map((item) => (
                <Li id={item} onClick={() => Click(item - 1)}>
                  <Text>{item}</Text>
                </Li>
              ))}
              <Li>
                <Text>&gt;</Text>
              </Li>
              <Li>
                <Button onClick={() => setCount(data.totalPage - 1)}>
                  Last Page
                </Button>
              </Li>
            </Ul>
          </Table>
        </>
      )}
    </>
  );
};
export default Wait;
const Table = styled.div`
  margin: 200px auto;
  width: 1190px;
  height: 813px;
  background-color: ${(props) => props.theme.colors.mediumPurple};
  border-radius: 20px;
`;
const Li = styled.li`
  margin-left: -40px;
`;
const Text = styled.div`
  position: relative;
  font: 700 normal 23px "Roboto";
  color: ${(props) => props.theme.colors.black};
  width: 60px;
  height: 60px;
  padding-top: 15px;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.colors.blue};
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
  margin: 0 auto;
  justify-content: space-between;
`;
const Ulbox = styled.ul`
  position: relative;
  list-style-type: none;
  width: 1136px;
  top: 20px;
  margin: 0 auto;
`;
const Libox = styled.li`
  margin-top: 20px;
  margin-left: -40px;
`;
const Box = styled.div`
  width: 1136px;
  height: 80px;
  padding: 25px 20px 0px 65px;
  background-color: ${(props) => props.theme.colors.mediumGray};
  border-radius: 20px;
`;
const Category = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 20px;
  margin-right: 50px;
  div {
    width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font: 700 normal 24px "NanumGothic", sans-serif;
    color: ${(props) => props.theme.colors.blue};
    + div {
      width: 130px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font: 400 normal 20px "NanumGothic", sans-serif;
      color: ${(props) => props.theme.colors.black};
    }
  }
`;
const ButtonProps = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  left: 750px;
  top: -35px;
  gap: 54px;
  div {
    border-radius: 100px;
    text-align: center;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.blue};
    width: 120px;
    height: 40px;
    font: 700 normal 14px "NanumGothic", sans-serif;
    padding-top: 10px;
    color: ${(props) => props.theme.colors.white};
  }
`;
