import styled from 'styled-components';
import ProfileImage from '../../../images/ProfileImg.jpg';
import EmailIcon from '../../../images/EmailIcon.png';
import StatusIcon from '../../../images/StatusIcon.png';
import GithubIcon from '../../../images/GithubIcon.png';
import CompanyImage from '../../../images/CompanyImg.jpg';
import CheckImg1 from '../../../images/checked1.png';
import CheckImg2 from '../../../images/checked2.png';
import CheckImg3 from '../../../images/checked3.png';
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {BaseUrl} from "../../../export/base";
import Header from '../../common/header/index';

const myToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5IiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTY2ODc2OTgzMCwiZXhwIjoxNjY4ODU2MjMwfQ.Pwss-Q4yTXsOTF7IQJXutWIbaZxQC8w-CfTieL4lxSM';

async function getUsers() {
    const response = await axios({
        method: 'get',
        url: BaseUrl + '/user/info?userId=',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${myToken}`,
        }
    })
    return response.data;
}


const MyProfile = () => {
    const {isLoading, error, data} = useQuery(["Profile"], () => getUsers());
    if (isLoading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!data) return <button>불러오기</button>;
    return (
        <>
            <Header title="내 정보" description="내 정보를 관리하고 수정해보세요"/>
            <SizeDiv>
                <ProfileInfo>
                    <InfoDiv>
                        <ProfileImg src={ProfileImage} alt="프로필이미지입니다."/>
                        <Name>{data.name}</Name>
                        <ClassNum>{data.studentKey}</ClassNum>
                        <Infomation>
                            <EmailIco src={EmailIcon} alt="이메일아이콘입니다."/>
                            <Address>{data.email}</Address>
                        </Infomation>
                        <Infomation>
                            <StatusIco src={StatusIcon} alt="재직상태아이콘입니다."/>
                            <Status>{data.isWorking === true ? '재직중' : '노는중'}</Status>
                        </Infomation>
                        <Infomation>
                            <GithubIco src={GithubIcon} alt="깃허브아이콘입니다."/>
                            <Link>{data.githubLink}</Link>
                        </Infomation>
                    </InfoDiv>
                    <Line/>
                    <CompanyDiv>
                        <Title>재직중인 회사</Title>
                        <CompanyName>INFO</CompanyName>
                        <CompanyFullName>info</CompanyFullName>
                        <CompanyImg src={CompanyImage} alt="회사이미지입니다."/>
                        <CompanyDescription>회사 설명하는 곳 회사설명 회사설명 설명 설명 회사 설명 인포 설명 인포설명 INFO 좋은 아주 인포 회사설명 회사 설명하는 곳 회사설명
                            회사설명 설명 설명 회사 설명 인포 설명 인포설명 INFO 좋은 아주 인포 회사설명 회사 설명하는 곳 회사설명 회사설명 설명 설명 회사 설명 인포 설명 인포설명
                            INFO
                            좋은 아주 인포 회사설명</CompanyDescription>
                    </CompanyDiv>
                </ProfileInfo>
                <ApplicationStatus>
                    <AppTitle>지원 현황</AppTitle>
                    <AppBox>
                        <AppScroll>
                            <AppObject>
                                <CheckImg src={CheckImg1} alt="확인아이콘입니다."></CheckImg>
                                <AppNum>17</AppNum>
                                <AppCategory>
                                    <ATitle>대분류</ATitle>
                                    <AInfo>웹프로그래밍</AInfo>
                                </AppCategory>
                                <AppCategory>
                                    <ATitle>소분류</ATitle>
                                    <AInfo>풀스택</AInfo>
                                </AppCategory>
                                <Intake>
                                    <ATitle>채용인원</ATitle>
                                    <IntakeInfo>2명</IntakeInfo>
                                </Intake>
                                <Date>2022-10-03</Date>
                                <ViewMore>모집공고 정보</ViewMore>
                            </AppObject>
                        </AppScroll>
                    </AppBox>
                </ApplicationStatus>
            </SizeDiv>
        </>
    )
}
export default MyProfile;
const ApplicationStatus = styled.div`
  margin-top: 90px;
  font-family: 'NanumGothic', sans-serif;
  height: 508px;
  width: 1135px;
`;
const AppTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 160%;
  color: #4000FF;
`;
const AppBox = styled.div`
  height: 450px;
  width: 100%;
  background: #F8F6FF;
  border-radius: 20px;
  padding: 30px 16px 30px 30px;
`;
const AppScroll = styled.div`
  height: 390px;
  width: 100%;
  background: #F8F6FF;
  border-radius: 20px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    background: white;
    width: 14px;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background: #4000FF;
  }
`;
const AppObject = styled.div`
  height: 83px;
  width: 1059px;
  background: white;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const CheckImg = styled.img`
  height: 30px;
  padding-left: 30px;
`;
const AppNum = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #4000FF;
  padding: 0 50px 0 30px;
  width: 22px;
`;
const AppCategory = styled.div`
  width: 211px;
  display: flex;
  justify-content: start;
  align-items: center;
`;
const ATitle = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #4000FF;
  padding-right: 30px;
`;
const AInfo = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  width: 130px;
`;
const Intake = styled.div`
  width: 140px;
  display: flex;
  justify-content: start;
  align-items: center;
`;
const IntakeInfo = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
`;
const Date = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  padding-left: 60px;
`;
const ViewMore = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  width: 140px;
  height: 40px;
  border: none;
  color: white;
  background: #4000FF;
  border-radius: 100px;
  margin: 0 30px 0 30px;
  cursor: pointer;
`;
const Line = styled.hr`
  height: 100%;
  width: 2px;
  background-color: #D9D9D9;
  border-radius: 10px;
  border: none;
`;
const SizeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 200px;
  padding-bottom: 200px;
  height: 100%;
  width: 100%;
`;
const ProfileInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 1135px;
  height: 635px;
  color: black;
`;
const InfoDiv = styled.div`
  width: 340px;
  height: 100%;
  text-align: start;
  padding-right: 40px;
`;
const CompanyDiv = styled.div`
  width: 793px;
  height: 100%;
  padding-left: 99px;
  padding-right: 99px;
`;
const ProfileImg = styled.img`
  object-fit: cover;
  border-radius: 100%;
  width: 300px;
  height: 300px;
`;
const Name = styled.p`
  font-family: 'NanumGothic', sans-serif;
  height: 41px;
  font-weight: 700;
  font-size: 36px;
  line-height: 41px;
  margin-top: 16px;
  margin-bottom: 8px;
`;
const ClassNum = styled.p`
  font-family: 'NanumGothic', sans-serif;
  height: 28px;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  margin-top: 0;
  margin-bottom: 32px;
`;
const Infomation = styled.div`
  height: 30px;
  width: 100%;
  margin-top: 16px;
  display: flex;
  justify-content: start;
  align-items: center;
`;
const EmailIco = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 16px;
`;
const Address = styled.p`
  height: 19px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;
const StatusIco = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 16px;
`;
const Status = styled.p`
  height: 19px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;
const GithubIco = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 16px;
`;
const Link = styled.p`
  height: 19px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
`;
const Title = styled.p`
  height: 32px;
  font-family: 'NanumGothic', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 160%;
  color: #4000FF;
  margin-bottom: 40px;
`;
const CompanyName = styled.p`
  height: 47px;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 40px;
  line-height: 47px;
  margin-bottom: 10px;
`;
const CompanyFullName = styled.p`
  height: 28px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 34px;
`;
const CompanyImg = styled.img`
  width: 596px;
  height: 300px;
  border-radius: 10px;
`;
const CompanyDescription = styled.p`
  width: 596px;
  font-family: 'NanumGothic', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
`;