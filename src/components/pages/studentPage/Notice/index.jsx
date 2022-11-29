import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import CA_View from "../Announcement.jsx"
import { BaseUrl } from "../../../../export/base.js";
import { Page_moving_btn, Image, Search_bar } from "../styled.jsx";
import Header from "../../../common/header/index.jsx";

const NoticeView = () => {
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [CA_data, set_CA] = useState(undefined);
    const [search_string, set_search] = useState('');
    let accessToken = sessionStorage.getItem("accessToken");

    const load_companys = () => {
        if (search_string === '') {
            axios({
                method: 'get',
                url: BaseUrl + '/notice/list',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                params: {
                    size: 4,
                    idx: page - 1
                },
            })
                .then((res) => {
                    console.log('companys sccess!');
                    set_CA(res.data.content);
                    setMaxPage(res.data.totalPages);
                })
                .catch((err) => {
                    console.log('companys error...');
                    console.log(err)
                });
        } else {
            axios({
                method: 'get',
                url: BaseUrl + '/notice/search',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                params: {
                    query: search_string
                },
            })
                .then((res) => {
                    console.log('companys sccess!');
                    set_CA(res.data.content);
                    setMaxPage(res.data.totalPages);
                })
                .catch((err) => {
                    console.log('companys error...');
                    console.log(err)
                });
        }
    };

    useEffect(() => {
        // if(accessToken) load_companys();
    }, [page, search_string]);

    const Click_page = () => {
        let list = [];
        if (page <= 2) {
            for (let i = 1; i <= 5 && i <= maxPage; i++) {
                list.push({ id: i, circle: i == page });
            }
        }
        else if (page >= 3 && maxPage - page >= 2) {
            for (let i = page - 2; i <= page + 2; i++) {
                list.push({ id: i, circle: i == page });
            }
        } else {
            for (let i = maxPage; i >= 1 && i >= maxPage - 4; i--) {
                list.push({ id: i, circle: i == page });
            }
            list = list.reverse();
        }

        return list;
    }

    const Search = (props) => {
        if (props.trim() != '' && search_string != props) {
            setPage(1);
            set_search(props);
        } else if (props.trim() === '') {
            setPage(1);
            set_search('');
        }
    }

    return (
        <>
            <Header
                title={"모집공고"}
                description={"자신이 원하는 직군의 채용 공고를 찾아보세요"}
            />
            <div style={{
                display: 'flex',
                width: '100%',
                height: 'auto',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <div style={{
                    minWidth: '1050px',
                }}>
                    <Search_bar />
                    <Header_box>
                        <Select_in_box>
                            <Select_text>남은 마감일자 순</Select_text>
                            <Triangle />
                        </Select_in_box>
                    </Header_box>
                </div>
                <Flex_box>
                    <Flex_in_flex>
                        <Flex_in_flex_box>
                            <CA_View CA_data />
                            <CA_View />
                            <CA_View />
                        </Flex_in_flex_box>
                        <CA_deadline>
                            <CA_deadline_header >
                                <Small_page_left_btn />
                                <CA_deadline_title>마감된 공고</CA_deadline_title>
                                <Small_page_right_btn />
                            </CA_deadline_header>
                            <CA_deadline_body> {/*최대 8개*/}
                                <CA_deadline_content title='INFO' text='이런저런 아주 좋은 일들을 합니다.' />
                                <CA_deadline_content />
                                <CA_deadline_content />
                                <CA_deadline_content />
                                <CA_deadline_content />
                                <CA_deadline_content />
                                <CA_deadline_content />
                                <CA_deadline_content />
                            </CA_deadline_body>
                        </CA_deadline>
                    </Flex_in_flex>
                    <Page_bar>
                        <Page_btn>First Page</Page_btn>
                        <Small_page_left_btn color="#000" top="-5px" />
                        <span>1</span>
                        <span>1</span>
                        <span>1</span>
                        <span>1</span>
                        <span>1</span>
                        <Small_page_right_btn color="#000" top="5px" />
                        <Page_btn>Last Page</Page_btn>
                    </Page_bar>
                </Flex_box>
            </div>
        </>
    );
}

export default NoticeView;

const Search_Box = styled.div`
    position: absolute;
    width: 800px;
    height: 60px;
    top: 500px;

    background: #4000FF;
    border-radius: 100px;
    font-family: 'NanumGothic';
    font-style: normal;
`;

const Flex_box = styled.div`
    margin-top: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Flex_in_flex = styled.div`
    width: 1050px;
    display: flex;
    justify-content: space-between;
`

const Flex_in_flex_box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Search_input = styled.input`
    width: 720px;
    height: 50px;
    padding: 0 60px 0 45px;

    background: #FFFFFF;
    border-radius: 100px;
    border: none;
    margin: 5px 0 0 5px;

    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #000000;
`;

const Search_btn = styled.button`
    position: absolute;
    width: 125px;
    height: 60px;
    right: 0;

    background: #4000FF;
    border: none;
    border-radius: 100px;

    font-weight: 600;
    font-size: 20px;
    line-height: 23px;

    color: #FFFFFF;
    cursor: pointer;
`;

const Header_box = styled.div`
    position: absolute;
    width: 210px;
    height: 60px;
    top: 500px;

    margin-left: 840px;

    background: #4000FF;
    border-radius: 100px;
`;

const Select_in_box = styled.div`
    width: 198px;
    height: 50px;

    background: #FFFFFF;
    border-radius: 100px;

    margin: 5px 0 0 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0 20px;
`;

const Select_text = styled.div`
    width: 115px;
    height: 18px;

    font-family: 'NanumGothic';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;

    color: #000000;
`;

const Triangle = styled.div`
    width: 0;
    height: 0;

    border-top: 20px solid #4000FF;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
`;

const CA_deadline = styled.div`
    width: 310px;
    height: 770px;

    background: linear-gradient(180deg, #7243FE 0%, #AA90F8 100%);
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CA_deadline_header = styled.div`
    width: 290px;
    display:flex;
    justify-content: space-around;
    padding:21px;
`;

const CA_deadline_title = styled.span`
    font-family: 'NanumGothic';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 160%;


    color: #FFFFFF;
`;


const Small_page_left_btn = styled.span`
    height: 3px;
    width: 15px;
    display: block;
    background-color: ${(props) => props.color || props.theme.colors.white};
    transform: translateY(${(props) => props.top || '13px'}) rotate(-45deg);
    border-radius: 10px;
    &::after {
        content: '';
        height: 3px;
        width: 15px;
        display: block;
        background-color: ${(props) => props.color || props.theme.colors.white};
        border-radius: 10px;
        transform: translate(-6px, 6px) rotate(90deg);
    }
`

const Small_page_right_btn = styled.span`
    height: 3px;
    width: 15px;
    display: block;
    background-color: ${(props) => props.color || props.theme.colors.white};
    transform: translateY(${(props) => props.top || '23px'}) rotate(135deg);
    border-radius: 10px;
    &::after {
        content: '';
        height: 3px;
        width: 15px;
        display: block;
        background-color: ${(props) => props.color || props.theme.colors.white};
        border-radius: 10px;
        transform: translate(-6px, 7px) rotate(-90deg);
    }
`

const CA_deadline_body = styled.div`
    width: 290px;
    height: 680px;
    border-radius: 20px;
    background: ${(props) => props.theme.colors.white};
    padding: 20px 0 20px 0;
`
const CA_deadline_content = ({ title, text }) => {
    return (
        <CA_deadline_content_box>
            <Image width="60px" height="60px" alt='이미지' />
            <CA_deadline_content_text_box>
                <CA_deadline_content_title>{title}</CA_deadline_content_title>
                <CA_deadline_content_text>{text}</CA_deadline_content_text>
            </CA_deadline_content_text_box>
        </CA_deadline_content_box>
    )
}

const CA_deadline_content_box = styled.div`
    width: 290px;
    height: 80px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const CA_deadline_content_text_box = styled.div`
    width: 180px;
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const CA_deadline_content_title = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;

    color: ${(props) => props.theme.colors.black};
`

const CA_deadline_content_text = styled.span`
    font-family: 'NanumGothic';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 160%;

    color: ${(props) => props.theme.colors.black};
`

const Page_bar = styled.div`
    width: 900px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 150px;
`

const Page_btn = styled.div`
    width: 160px;
    height: 60px;

    background: #4000FF;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    
    
    color: #FFFFFF;
`;