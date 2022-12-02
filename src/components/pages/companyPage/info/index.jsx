import styled from "styled-components";
import Header from "../../../common/header";
import { useParams } from "react-router-dom";
import { getUseCompanyInfo } from "../../../api/teacher";
import LoadingPage from "../../../common/loading";
import ErrorPage from "../../../common/error";
import NavProps from "../../../common/nav";
import { TeacherData } from "../../../../export/data";
const CompanyInfo = () => {
  const { id } = useParams();
  const { status, data } = getUseCompanyInfo(id);

  return (
    <>
      {status === "loading" ? (
        <LoadingPage />
      ) : status === "error" ? (
        <ErrorPage />
      ) : (
        <>
          <Header
            title={"기업 가입"}
            description={"채용 의뢰 전, 회사를 등록해주세요!"}
          />
          <NavProps props={TeacherData} idx={0} />
          <MainDiv>
            <ContainerDiv>
              <Title>
                <img
                  src={data.companyIntroductionResponse.companyLogo?.fileUrl}
                  alt=""
                />
                <h2>회사 정보</h2>
              </Title>
              <BannerImg
                src={
                  data.companyIntroductionResponse.companyPhotoList[0]?.fileUrl
                }
                alt=""
              />
              <ContentDiv>
                <GridDiv>
                  <Category>회사 명</Category>
                  <InputForm>{data.companyName}</InputForm>
                  <Category>
                    사업자
                    <br />
                    등록번호
                  </Category>
                  <InputForm>{data.companyNumber}</InputForm>
                  <Category>대표자</Category>
                  <InputForm>
                    {data.companyInformation.represntativeName}
                  </InputForm>
                  <Category>근로자 수</Category>
                  <InputForm>{data.companyInformation.workerCount}</InputForm>
                  <Category>설립연도</Category>
                  <InputForm>{data.companyInformation.establishedAt}</InputForm>
                  <Category>연매출액</Category>
                  <InputForm>{data.companyInformation.annualSales}</InputForm>
                </GridDiv>
                <Address>
                  <Category>주소</Category>
                  <div>
                    <div>
                      <span>본사</span>
                      <AddressForm>
                        {data.companyInformation.homeAddress.fullAddress}
                      </AddressForm>
                      <AddressForm style={{ width: "100px" }}>
                        {data.companyInformation.homeAddress.addressNumber}
                      </AddressForm>
                    </div>
                    <div>
                      <span>연구소/지점</span>
                      <AddressForm>
                        {data.companyInformation.agentAddress.fullAddress}
                      </AddressForm>
                      <AddressForm style={{ width: "100px" }}>
                        {data.companyInformation.agentAddress.addressNumber}
                      </AddressForm>
                    </div>
                  </div>
                </Address>
              </ContentDiv>
              <hr />
            </ContainerDiv>
            <ContainerDiv>
              <Title>
                <h2>Contect</h2>
              </Title>
              <ContentDiv>
                <GridDiv>
                  <Category>대표자</Category>
                  <InputForm>{data.contactor.name}</InputForm>
                  <Category>소속 부서</Category>
                  <InputForm>{data.contactor.rank}</InputForm>
                  <Category>전화번호</Category>
                  <InputForm>{data.contactor.phoneNumber}</InputForm>
                  <Category>휴대전화</Category>
                  <InputForm>{data.contactor.contactorNumber}</InputForm>
                </GridDiv>
              </ContentDiv>
              <hr />
            </ContainerDiv>
            <ContainerDiv>
              <Title>
                <h2>사업 분야</h2>
              </Title>
              <InputUl>
                {data.businessTagged.map((item, i) => (
                  <>
                    <InputLi>{item.id}</InputLi>
                  </>
                ))}
              </InputUl>
              <hr />
            </ContainerDiv>
            <ContainerDiv>
              <Title>
                <h2>Contect</h2>
              </Title>
              <ContentDiv />
              <Description>
                {data.companyIntroductionResponse.introduction}
              </Description>
            </ContainerDiv>
          </MainDiv>
        </>
      )}
    </>
  );
};

export default CompanyInfo;

const MainDiv = styled.div`
  margin-top: 242px;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ContentDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  width: 1136px;
`;

const Description = styled.div`
  width: 1136px;
  margin-bottom: 300px;
  height: 257px;
  background-color: #f0f0f0;
  border: none;
  resize: none;
  border-radius: 12px;
  font-size: 20px;
  padding: 20px;
  font-weight: 700;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 300px;
  margin-bottom: 50px;
  object-fit: cover;
`;

const ContainerDiv = styled.div`
  width: 1100px;

  h2 {
    margin: 0;
  }

  hr {
    width: 1236px;
    height: 4px;
    border-radius: 4px;
    border: none;
    margin: 146px 0 65px -70px;
    background-color: #f0f0f0;
  }

  > span {
    font-weight: 400;
    font-size: 20px;
  }
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 60px;
  h2 {
    margin-right: 53px;
    font-size: 40px;
    font-weight: 700;
  }
  span {
    font-size: 24px;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 4px;
    margin-right: 30px;
    object-fit: cover;
  }
`;

const InputForm = styled.div`
  border: none;
  width: 220px;
  height: 50px;
  border-radius: 18px;
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-right: 30px;
  padding-left: 24px;
  font-weight: 700;
`;

const AddressForm = styled.div`
  border: none;
  width: 220px;
  height: 50px;
  border-radius: 100px;
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-right: 30px;
  padding-left: 24px;
  font-weight: 700;
  background-color: #f3eeff;
`;

const Category = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #4000ff;
  margin-right: 20px;
`;

const GridDiv = styled.div`
  width: 800px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-right: 80px;
  grid-row-gap: 43px;
  place-items: center end;
  margin-bottom: 86px;

  div {
    font-size: 20px;
  }
`;

const Address = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  > div {
    margin-left: 35px;
    > div {
      width: 630px;
      display: flex;
      align-items: center;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: 20px;
      span {
        width: 120px;
        display: flex;
        justify-content: flex-end;
        margin-right: 22px;
      }
    }
  }

  input {
    width: 389px;
    height: 40px;
    border-radius: 18px;

    background-color: #f3eeff;
    border: none;
    padding-left: 24px;
    margin-right: 20px;
  }
`;

const Success = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;

const Check = styled.div`
  color: #4000ff;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;

const InputDiv = styled.div`
  width: 600px;
  margin-bottom: 30px;
  span {
    margin-left: 25px;
    font-size: 20px;
    font-weight: 700;
  }

  div {
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }

  input {
    margin-top: 13px;
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 24px;
    background-color: #f0f0f0;
    padding-left: 24px;
    color: #000;
    font-size: 20px;
    font-weight: 700;
  }
`;

const SubmitBtn = styled.button`
  width: 600px;
  height: 50px;
  border-radius: 24px;
  margin-top: 33px;
  background: linear-gradient(to right, #ab91f8, #7243ff);
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  font-weight: 700;
`;

export const InputUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 1036px;
  align-content: space-between;
`;
export const InputLi = styled.li`
  position: relative;
  margin-right: 60px;
  list-style: none;
  margin-left: -40px;
  width: 150px;
  background-color: #f3eeff;
  border-radius: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
`;

export const Delelte = styled.div`
  width: 270px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.mediumGray};
  border-radius: 20px;
`;
export const DeleteButton = styled.button`
  cursor: pointer;
  position: relative;
  top: -190px;
  left: 200px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 0px;
  color: ${(props) => props.theme.colors.black};
  border: none;
  margin-left: 20px;
  margin-bottom: 10px;
`;
export const PlusBtn = styled.div`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.mediumGray};
  margin-top: 5px;
  cursor: pointer;
  :after {
    content: "+";
    margin-left: 12px;
    margin-top: 50px;
    font-family: "NanumGothic", sans-serif;
    font-weight: 700;
    font-size: 24px;
    font-style: normal;
    color: ${(props) => props.theme.colors.blcak};
  }
`;

export const CheckInput = styled.input`
  margin-top: 5px;
  margin-right: 15px;
  cursor: pointer;
  appearance: none;
  width: 30px;
  height: 30px;
  margin-left: ${(props) => props.left}px;
  background-color: ${(props) => props.theme.colors.mediumGray};
  :checked {
    border: 5px solid ${(props) => props.theme.colors.mediumGray};
    background-color: ${(props) => props.theme.colors.blue};
  }
`;

export const UlSubmitted = styled.ul`
  width: 850px;
  margin: 50px 0;
  display: flex;
  height: auto;
  top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 30px;
`;
export const LabelFile = styled.label`
  display: inline-block;
  padding: 10px 30px;
  background-color: ${(props) => props.theme.colors.blue};
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  border-radius: 20px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  margin-bottom: 10px;
`;
export const FileHidden = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
`;
export const RemoveBtn = styled.button`
  margin-left: 15px;
  width: 30px;
  height: 30px;
  font-family: "NanumGothic", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  background: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 50%;
  padding-bottom: 6px;
  padding-right: 6.5px;
`;

export const FileTextDiv = styled.div`
  margin-left: -20px;
  width: 130px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 24px;
  font-family: "NanumGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.blue};
`;
export const UlTable = styled.ul`
  position: relative;
  top: 5px;
  width: auto;
  height: 40px;
  display: flex;
`;

export const LiProps = styled.div`
  position: relative;
  list-style: none;
  height: 100%;
`;
