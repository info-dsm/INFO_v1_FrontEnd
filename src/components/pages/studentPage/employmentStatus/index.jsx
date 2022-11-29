import styled from "styled-components";
import Header from "../../../common/header";
import { BaseUrl } from "../../../../export/base.js";
import axios from "axios";
import { useEffect, useState } from "react";

const EmploymentStatus = () => {
    const [employment, setEmployment] = useState(undefined);
    let accessToken = sessionStorage.getItem("accessToken");

    const load_employment = () => {
        axios({
            method: 'get',
            url: BaseUrl + '/board/employment',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
            .then((res) => {
                console.log('companys sccess!');
                setEmployment(res.data);
            })
            .catch((err) => {
                console.log('companys error...');
            });
    };

    useEffect(() => {
        if (accessToken) load_employment();
    }, [])

    return (
        <>
            <Header
                title={"취업현황"}
                description={"취업이 얼마나 진행되었는지 확인해보세요"}
            />
            <Out_box>
                <All_stauts_box>
                    {
                        employment &&
                        <>
                            <All_stauts_left_box>
                                <div>
                                    <span>전체 취업률</span>
                                    <span>{employment.totalRate}%</span>
                                </div>
                                <div>
                                    <span>최고 취업률 학과</span>
                                    <span>소프트웨어 개발과</span>
                                </div>
                            </All_stauts_left_box>
                            <All_stauts_right_box>
                                <div>현재 취업률</div>
                                <div>
                                    <span>1반</span>
                                    <span>{employment.perClassEmployInfoDtoList[0].employRate}%</span>
                                </div>
                                <div>
                                    <span>2반</span>
                                    <span>{employment.perClassEmployInfoDtoList[1].employRate}%</span>
                                </div>
                                <div>
                                    <span>3반</span>
                                    <span>{employment.perClassEmployInfoDtoList[2].employRate}%</span>
                                </div>
                                <div>
                                    <span>4반</span>
                                    <span>{employment.perClassEmployInfoDtoList[3].employRate}%</span>
                                </div>
                            </All_stauts_right_box>
                        </>
                    }
                </All_stauts_box>
                {
                    employment && employment.perClassEmployInfoDtoList.map((item, index) => <Stauts key={index} data={item} />)
                }
            </Out_box>
        </>
    )
}

export default EmploymentStatus;

const Out_box = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const All_stauts_box = styled.div`
    width: 1136px;
    height: 302px;
    margin: 100px 0 100px 0;
    padding: 66px 80px 66px 80px;
    background: ${(props) => props.theme.colors.white};
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
`

const All_stauts_left_box = styled.div`
    margin-top: 12px;
    div {
        font-family: 'NanumGothic';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 160%;
        color: ${(props) => props.theme.colors.black};
        margin-bottom: 40px;
        span:last-child {
            color: ${(props) => props.theme.colors.blue};
            margin-left: 40px;
        }
    }
`

const All_stauts_right_box = styled.div`
    font-family: 'NanumGothic';
    font-style: normal;
    font-size: 20px;
    line-height: 160%;
    margin-right: 98px;
    div {
        width: 100px;
        font-weight: 600;
        color: ${(props) => props.theme.colors.black};
        display: flex;
        justify-content: space-between;
        span:last-child {
            color: ${(props) => props.theme.colors.blue};
        }
        &:first-child {
            font-weight: 700;
            margin-bottom: 10px;
            color: ${(props) => props.theme.colors.black};
        }
    }
`

const Stauts = ({ data }) => {
    const Class = [0, 'FIRST', 'SECOND', 'THIRD', 'FOURTH']
    const ClassName = data.majorType == 'SW_DEV' ? '소프트웨어 개발과' : data.majorType == 'EMBEDEED' ? '임베디드과' : '정보보안과';
    const contents = data.indicationDtoList;
    for(let i = data.indicationDtoList.length; i < 18; i++) {
        contents.push('');
    }

    return (
        <Stauts_box>
            <Stauts_title_box>
                <span>{Class.indexOf(data.classInfo)}반 - {ClassName}</span>
                <span>{data.employRate}%</span>
            </Stauts_title_box>
            <Grid_box>
                {   
                    contents.map((item) => {
                        if(item == '') return <Empty_box />;
                        return <Data_box></Data_box>
                    })
                }
            </Grid_box>
        </Stauts_box>
    )
}

const Stauts_box = styled.div`
    width: 1136px;
    height: auto;
    margin-bottom: 60px;
    padding: 34px 80px 80px;
    background: linear-gradient(180deg, ${(props) => props.theme.colors.mediumBlue} 0%, ${(props) => props.theme.colors.mediumSlateBlue} 100%);
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
`

const Stauts_title_box = styled.div`
    font-family: 'NanumGothic';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 160%;

    width: 100%;
    color: ${(props) => props.theme.colors.white};
    display: flex;
    justify-content: space-between;
`

const Grid_box = styled.div`
    width: 975px;
    margin-top: 35px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 40px;
    column-gap: 38px;
`
const Empty_box = styled.div`
    width: 300px;
    height: 80px;
    background-color: ${(props) => props.theme.colors.plum};
    border-radius: 20px;
`

const Data_box = styled.div`
    width: 300px;
    height: 80px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 20px;
`