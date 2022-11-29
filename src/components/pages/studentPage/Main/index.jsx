import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import CA_View from "../Announcement.jsx"
import IC_View from "../Introduce_company.jsx";
import Sub from "../../../../images/Main_Bottom.png";
import { Page_moving_btn } from "../styled.jsx";
import { BaseUrl } from "../../../../export/base.js";
import Header from "../../../common/header/index.jsx";

const MainView = () => {
    const [CA_data, set_CA] = useState(undefined);
    const [IC_data, set_IC] = useState(undefined);
    let accessToken = sessionStorage.getItem("accessToken");

    const new_CA = () => {
        axios({
            method: 'get',
            url: BaseUrl + '/notice/list',
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            params: {
                size: 1,
                idx: 0
            }
        })
            .then((res) => {
                console.log('new_advertisement sccess!');
                set_CA(res.data.content[0]);
            })
            .catch((err) => {
                console.log('new_advertisement error...');
                console.log(err)
            })
    };

    const load_companys = () => {
        axios({
            method: 'get',
            url: BaseUrl + '/company/list',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                size: 1,
                idx: 0
            }
        })
            .then((res) => {
                console.log('companys sccess!');
                set_IC(res.data.content[0]);
            })
            .catch((err) => {
                console.log('companys error...');
                console.log(err)
            });
    };

    useEffect(() => {
        if(accessToken) {
            new_CA();
            load_companys();
        }
    }, []);

    return (
        <>
        <Header />
            <Triangle_box>
                <Triangle />
            </Triangle_box>
            <Center>
                <Content>
                    <CA_View CA_data={CA_data} />
                    <Sub_Title text='더 다양한 모집공고를 원하시나요?' button='모집공고' />
                </Content>
                <Content width='937px' top='1533px' left='-170px'>
                    <Sub_Title text='여러 회사를 둘러보세요' button='둘러보기' color="#000" top="50px" />
                    <IC_View IC_data={IC_data} />
                </Content>
            </Center>
            <SubImg />
        </>
    );
}

export default MainView;

const Sub_Title = ({ text, button, color, top }) => {
    return (
        <div>
            <Sub_Title_text color={color} top={top}>{text}</Sub_Title_text>
            <Page_moving_btn width='200px'>{button}</Page_moving_btn>
        </div>
    )
}

const Triangle_box = styled.div`
    overflow: hidden;
    margin: -1px 0 127px 0;
`

const Triangle = styled.div`
    width: 0;
    height: 0;
    border-bottom: 700px solid transparent;
    border-right: 100vmax solid ${(props) => props.theme.colors.purple};
    z-index: -1;
`

const Center = styled.div`
    display: flex;
    justify-content: center;
`

const SubImg = styled.div`
    width: 100%;
    height: 1400px;
    background-image: url(${Sub});
    background-size: cover;
    z-index: -1;
`;

const Content = styled.div`
    position: absolute;
    display: flex;
    width: ${(props) => props.width || '1100px'};
    top: ${(props) => props.top || '338px'};
    justify-content: space-between;
    margin-left: ${(props) => props.left || '0px'};
`

const Sub_Title_text = styled.span`
    display: block;
    width: 336.5px;

    font-family: NanumGothic;
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 74px;

    color: ${(props) => props.color || '#fff'};
    margin-bottom: 40px;
    margin-top: ${(props) => props.top || '150px'};
`
