import { useParams } from "react-router-dom";
import { getCompanyInfo, getCompanyName } from "../../../../api/teacher";
import ErrorPage from "../../../../common/error";
import LoadingPage from "../../../../common/loading";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useRef, useCallback } from "react";
import Header from "../../../../common/header";
import { ArrowBack } from "../../../../../images";
import { StyledLink } from "../../../../../style/theme";
import { useQueryClient } from "@tanstack/react-query";
import NavProps from "../../../../common/nav";
import { TeacherData } from "../../../../../export/data";
const SearchProps = () => {
  const { companyId } = useParams();
  const [state, setState] = useState(companyId);
  const InputRef = useRef();
  const queryClient = useQueryClient();
  const { status, data } = getCompanyName(state);
  const GetCompany = useCallback(() => {
    setState(InputRef.current.value);
  }, []);
  const PreFetching = async (id) => {
    queryClient.prefetchQuery(["companyInfo", id], () => getCompanyInfo(id));
  };
  return (
    <>
      {status === "loading" ? (
        <LoadingPage />
      ) : status === "error" ? (
        <ErrorPage />
      ) : (
        <>
          <Header
            title={"기업관리"}
            description={"손쉽게 기업들을 관리해보세요."}
          />
          <NavProps props={TeacherData} idx={0} />

          <SearchDiv>
            <Search placeholder="회사이름" ref={InputRef} />
            <SearchButton onClick={() => GetCompany()}>검색</SearchButton>
          </SearchDiv>

          <Ulbox>
            <Libox>
              <DivText>
                <span>{state}</span>의 검색결과입니다.
              </DivText>
            </Libox>
            {data.content.map((user, i) => (
              <Libox>
                <Box>
                  <Title>{user.companyId}</Title>
                  <ImgDiv>
                    <Img
                      src={user.companyIntroductionResponse.companyLogo.fileUrl}
                      alt="잉기모링"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </ImgDiv>

                  <Category>
                    <div>{user.companyName}</div>
                    <div>회사명</div>
                  </Category>
                  <Category>
                    <div>email</div>
                    <div>{user.contactorEmail}</div>
                  </Category>
                  <StyledLink to={`/teacher/company/${user.companyId}`}>
                    <ButtonProps
                      onMouseDown={() => PreFetching(user.companyId)}
                    >
                      자세히보기
                    </ButtonProps>
                  </StyledLink>
                </Box>
              </Libox>
            ))}
          </Ulbox>
        </>
      )}
    </>
  );
};
export default SearchProps;
const ImgDiv = styled.div`
  display: inline-flex;
  width: 60px;
  height: 60px;
  margin-right: 40px;
`;
const Img = styled.img`
  width: 60px;
  height: 60px;
`;
const Ulbox = styled.ul`
  position: relative;
  list-style-type: none;
  width: 1136px;
  top: 20px;
  margin: 150px auto;
`;
const Libox = styled.li`
  margin-top: 20px;
  margin-left: -40px;
`;
const Box = styled.div`
  width: 1136px;
  height: 80px;
  padding: 0px 20px 0px 45px;
  background-color: ${(props) => props.theme.colors.mediumGray};
  border-radius: 20px;
  display: flex;
  align-items: center;
  vertical-align: center;
`;
const Title = styled.div`
  width: 50px;
  font: 700 normal 24px "NanumGothic", sans-serif;
  color: ${(props) => props.theme.colors.blue};
  display: inline-flex;
  margin-right: 45px;
`;
const Category = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 20px;
  margin-right: 50px;
  div {
    width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font: 700 normal 24px "NanumGothic", sans-serif;
    color: ${(props) => props.theme.colors.blue};
    + div {
      overflow: visible;
      font: 400 normal 20px "NanumGothic", sans-serif;
      color: ${(props) => props.theme.colors.black};
    }
  }
`;
const ButtonProps = styled.div`
  position: relative;
  border-radius: 100px;
  left: 300px;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.blue};
  width: 120px;
  height: 40px;
  font: 700 normal 14px "NanumGothic", sans-serif;
  padding-top: 10px;
  color: ${(props) => props.theme.colors.white};
`;
const Search = styled.input`
  width: 870px;
  top: 0px;
  height: 50px;
  border: none;
  border-radius: 100px;
  padding-left: 15px;
  font: 400 normal 20px "NanumGothic", sans-serif;
`;
const SearchDiv = styled.div`
  position: relative;
  top: 100px;
  width: 1003px;
  height: 60px;
  border: 5px solid ${(props) => props.theme.colors.blue};
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 100px;
`;
const SearchButton = styled.div`
  position: relative;
  top: -55px;
  left: 870px;
  width: 125px;
  height: 60px;
  text-align: center;
  padding-top: 14px;
  font: 700 normal 20px "NanumGothic", sans-serif;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  border-radius: 100px;
`;
const DivText = styled.div`
  font: 700 normal 20px "NanumGothic", sans-serif;
  span {
    color: ${(props) => props.theme.colors.blue};
  }
`;
