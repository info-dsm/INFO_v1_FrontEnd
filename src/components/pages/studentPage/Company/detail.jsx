import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { BaseUrl } from "../../../../export/base.js";
import chack from "../../../../images/chack.png";
import { Page_moving_btn, Image, Search_bar } from "../styled.jsx";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../common/header/index.jsx";
import LoadingPage from "../../../common/loading/index.jsx";
import { useRef } from "react";

const CompanyDetailView = () => {
    const { id } = useParams();
    const [Img_Count, set_Img_Count] = useState([0, 0]);
    const ImgPage = useRef(0);
    let accessToken = sessionStorage.getItem("accessToken");
    const [data, setData] = useState(undefined);
    const [IC_data, set_IC_data] = useState([
        { title: '사업자 번호', data: '000-00-00000' },
        { title: '설립 일자', data: '0000년 00월 00일' },
        { title: 'E-mail', data: 'Error@error.com' },
        { title: '근로자 수', data: '0명' },
        { title: '연 매출액', data: '0,000,000 원' },
        { title: '사업 분야', data: '오류 만들기' },
        { title: '본사 주소', data: '우리은하 태양계 지구행성 어딘가' },
        { title: '지점 주소', data: '우리은하 태양계 지구행성 어딘가' }
    ])
    const navigate = useNavigate();

    const load_companys = () => {
        axios({
            method: 'get',
            url: BaseUrl + '/company/',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                id: id
            },
        })
            .then((res) => {
                console.log('companys sccess!');
                console.log(res.data);
                setData(res.data);
                set_IC_data([
                    { title: '사업자 번호', data: res.data.companyNumber },
                    { title: '설립 일자', data: res.data.companyInformation.establishedAt + '년' },
                    { title: 'E-mail', data: res.data.companyContact.email },
                    { title: '근로자 수', data: res.data.companyInformation.workerCount + '명' },
                    { title: '연 매출액', data: res.data.companyInformation.annualSales + ' 원' },
                    { title: '사업 분야', data: res.data.businessAreaResponseList[0].tagName },
                    { title: '본사 주소', data: res.data.companyInformation.homeAddress.fullAddress },
                    { title: '지점 주소', data: res.data.companyInformation.agentAddress.fullAddress }
                ]);
                set_Img_Count([0, res.data.companyIntroduction.companyPhotoList.length]);
            })
            .catch(() => {
                navigate(-1);
            });
    };

    useEffect(() => {
        load_companys();
    }, []);

    return (
        <>
            {data ?
                <>
                    <Header
                        title={data.companyName}
                        description={"..."}
                    />
                    <Out_box>
                        <Flex_box>
                            <Image width='500px' height='400px' alt='회사 이미지' src={data.companyIntroduction.companyPhotoList[ImgPage.current].fileUrl}/>
                            <Explanation>
                                <Header_out_box>
                                    <Image width='85px' height='85px' alt='로고 이미지' src={data.companyIntroduction.companyLogo.fileUrl} />
                                    <Header_Title_box>
                                        <Header_title>{data.companyName}</Header_title>
                                        <Header_sub_title>...</Header_sub_title>
                                    </Header_Title_box>
                                </Header_out_box>
                                <Flex_box margin='19px' height='26px'>
                                    {data.isLeading && <IC_company_point text="선도기업" />}
                                    {data.isAssociated && <IC_company_point text="협약완료" />}
                                </Flex_box>
                                <Introduce_box>{data.companyIntroduction.introduction}</Introduce_box>
                            </Explanation>
                        </Flex_box>
                        <Img_list_out_box>
                            <Img_list_box>
                            
                            </Img_list_box>
                            <div>
                                <span>해당 사업체를 거쳐간 학생 수</span>
                                <span>{data.totalHiredStudentList.length}명</span>
                            </div>
                        </Img_list_out_box>
                        <Table>
                            <tbody>
                                {IC_data.map((data, key) => (
                                    <tr key={key}>
                                        <td>{data.title}</td>
                                        <td>{data.data}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <Flex_box width='936px' justify='space-between' align='flex-end'>
                            <Sub_title>모집공고</Sub_title>
                            <Sub_text>
                                <span>마지막 모집공고</span>
                                <span>2022년</span>
                            </Sub_text>
                        </Flex_box>
                        <App_out_box>
                            <App_box>
                            </App_box>
                            <Page_moving_btn width='896px'>더 알아보기</Page_moving_btn>
                        </App_out_box>
                        <Flex_box width='936px' justify='flex-start' align='flex-end'>
                            <Sub_title>면접 후기</Sub_title>
                        </Flex_box>
                        <App_out_box height='370px'>
                        <App_box></App_box>
                        </App_out_box>
                    </Out_box>
                </>
                :
                <LoadingPage />
            }
        </>
    );
}

export default CompanyDetailView;

const Out_box = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    align-items: center;
    margin: 150px 0 150px 0;
`

const Flex_box = styled.div`
    display: flex;
    justify-content: ${(props) => props.justify || 'none'};
    align-items: ${(props) => props.align || 'none'};
    margin-top: ${(props) => props.margin || '0px'};
    margin-bottom: ${(props) => props.margin || '0px'};
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
`

const Explanation = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 40px;
`

const Header_out_box = styled.div`
    width: auto;
    height: 85px;
    display: flex;
`

const Header_Title_box = styled.div`
    width: auto;
    height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 19px;
    font-family: 'Roboto';
    font-style: normal;
`

const Header_title = styled.span`
    font-weight: 900;
    font-size: 40px;
    line-height: 47px;
    margin-bottom: 10px;
`

const Header_sub_title = styled.span`
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
`

const IC_company_point = ({ text }) => {
    return (
        <>
            <Point_box>
                <Image src={chack} width="16px" height="16px" alt="체크 이미지" />
                <Point_text>{text}</Point_text>
            </Point_box>
        </>
    )
}

const Point_box = styled.div`
    width: 80px;
    margin: 20px 40px 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Point_text = styled.span`
    font-family: 'NanumGothic';
    font-weight: 700;
    font-size: 14px;
    lineheight: 160%;
    color: ${(props) => props.theme.colors.green};
`

const Introduce_box = styled.span`
    width: 400px;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    word-wrap: break-word;
`

const Img_list_out_box = styled.div`
    width: 936px;
    font-family: 'NanumGothic';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 160%;
    color: ${(props) => props.theme.colors.black};
    display: flex;
    margin: 40px 0 80px 0;
    & > div:last-child {
        display: flex;
        flex-direction: column;
        margin-left: 40px;
        & > span:last-child {
            font-weight: 700;
            font-size: 32px;
            color: ${(props) => props.theme.colors.blue};
        }
    }
`

const Img_list_box = styled.div`
  width: 500px;
  height: 100px;
  display: flex;
`;

const Table = styled.table`
    width: 936px;
    height: 389px;
    margin-bottom: 20px;
    td{

        font-family: 'NanumGothic';
        font-style: normal;
        text-align: left;
        vertical-align: top;

        &:first-child {
            width: 160px;
            font-weight: 600;
            font-size: 16px;
            line-height: 160%;
            color: ${(props) => props.theme.colors.blue};
        }

        &:last-child {
            width: 776px;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: ${(props) => props.theme.colors.black};
        }
    }
`

const Sub_title = styled.span`
    font-family: 'NanumGothic';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 160%;

    color: ${(props) => props.theme.colors.blue};
    margin-top: 60px;
`

const Sub_text = styled.div`
    width: 176px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    font-family: 'NanumGothic';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 160%;
    
    span {
        &:last-child {
            color: ${(props) => props.theme.colors.blue};
        }
    }
`

const App_out_box = styled.div`
    width: 936px;
    height: ${(props) => props.height || '450px'};
    padding: 20px;
    border-radius: 20px;
    margin-top: 15px;
    background: #F8F6FF;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const App_box = styled.div`
    width: 896px;
    height: 350px;

    background: #F8F6FF;

    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar{
        width: 14px;
        border-radius: 100px;
    }
    &::-webkit-scrollbar-track {
        background: ${(props) => props.theme.colors.white};
        border-radius: 100px;
    }
    &::-webkit-scrollbar-thumb{
        border-radius: 100px;
        background: ${(props) => props.theme.colors.blue};
    }
`