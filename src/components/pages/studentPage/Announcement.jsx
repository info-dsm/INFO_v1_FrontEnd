import { useState } from "react";
import styled from "styled-components";
import { Page_moving_btn, Image } from "./styled.jsx";
import { useNavigate } from "react-router-dom";
const CA_View = ({ CA_data }) => {
  const navigate = useNavigate();
  console.log(CA_data);
  let Data = {
    title: "최신 공고가 없네요",
    sub_title: "INFO",
    src: undefined,
    tag: ["자격증이", "없네요"],
    person: [0, 0],
    work: "저도 모르겠는데요...?",
    certificate: ["무슨 자격증이", "있으신가요?"],
    spec: "0",
    skills: ["뭘 잘하시나요?"],
    link: "/",
  };
  return (
    <>
      <CA_box>
        <CA_title>{CA_data.company.companyName}</CA_title>
        <CA_sub_title>{CA_data.company.companyName}</CA_sub_title>
        <Image
          src={CA_data.company.companyIntroductionResponse.companyLogo.fileUrl}
          width="600px"
          height="300px"
          alt="회사 공고 이미지"
        />
        <Tag_box>
          {CA_data.company.businessTagged.map((data) => (
            <Tag>{data.tagName}</Tag>
          ))}
        </Tag_box>
        <Work_title_box>
          <Subheading>업무 내용</Subheading>
          <Work_title_sub_out_box>
            <Work_title_sub_box>
              <span>채용인원</span>
              <span>
                {CA_data.recruitmentBusinessResponse[0].numberOfEmployee}
              </span>
            </Work_title_sub_box>
          </Work_title_sub_out_box>
        </Work_title_box>
        <Work_box>
          {CA_data.recruitmentBusinessResponse[0].detailBusinessDescription}
        </Work_box>
        <Subheading>자격 요건</Subheading>
        <Spec_box>
          <Spec_title>자격증</Spec_title>
          <Spec_ul>
            {CA_data.recruitmentBusinessResponse[0].certificateList.map(
              (data) => (
                <li>{data.certificateName}</li>
              )
            )}
          </Spec_ul>
          <Spec_title>성적</Spec_title>
          <div>
            <Spec_in_spec>
              {CA_data.recruitmentBusinessResponse[0].gradeCutLine}%
            </Spec_in_spec>
            <span>이내</span>
          </div>
          <Spec_title>사용언어</Spec_title>
          <span>
            {CA_data.recruitmentBusinessResponse[0].languageSet
              .map((data) => data.languageName)
              .join(",")}
          </span>
        </Spec_box>
        <Page_moving_btn>자세히 알아보기</Page_moving_btn>
      </CA_box>
    </>
  );
};

export default CA_View;

const CA_box = styled.div`
  width: 700px;
  height: auto;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.white} 0%,
    ${(props) => props.theme.colors.whiteGray} 100%
  );
  box-shadow: 0 0 18px rgba(47, 54, 62, 0.14);
  border-radius: 20px;
  border: none;
  font-family: "Roboto";
  font-style: normal;
  display: flex;
  flex-direction: column;
  padding: 50px;
  margin-bottom: 100px;
`;

const CA_title = styled.span`
  font-weight: 900;
  font-size: 40px;
  line-height: 47px;
  margin-bottom: 10px;
`;

const CA_sub_title = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 34px;
`;
const Subheading = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 160%;
  color: ${(props) => props.theme.colors.blue};
`;

const Tag_box = styled.div`
  margin: 20px 0 30px 0;
  width: 600px;
  display: grid;
  gap: 10px 30px;
  grid-template-columns: repeat(auto-fill, minmax(100px, auto));
  grid-auto-rows: minmax(30px, auto);
  font-family: "NanumGothic";
  font-style: normal;
`;

const Tag = styled.span`
  height: 22px;
  background: #e5dcff;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 160%;
  padding: 4px 17px;
  color: ${(props) => props.theme.colors.blue};
`;

const Work_title_box = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Work_title_sub_out_box = styled.div`
  width: 490px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Work_title_sub_box = styled.div`
  width: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  span {
    &:last-child {
      color: ${(props) => props.theme.colors.blue};
    }
  }
`;

const Work_box = styled.div`
  width: 600px;
  height: auto;
  padding: 20px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  margin: 10px 0 20px 0;
`;

const Spec_box = styled.div`
  width: 600px;
  height: auto;
  padding: 20px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  margin: 10px 0 20px 0;
  display: grid;
  gap: 10px 10px;
  grid-template-columns: 90px 450px;
  grid-auto-rows: minmax(30px, auto);
  font-family: "NanumGothic";
  font-style: normal;
  font-size: 16px;
  line-height: 160%;
  font-weight: 400;
`;

const Spec_title = styled.span`
  width: 100px;
  height: auto;
  font-weight: 600;
`;

const Spec_ul = styled.ul`
  display: inline-block;
  line-height: 160%;
  padding-left: 20px;
  margin: 0;
`;

const Spec_in_spec = styled.span`
  color: ${(props) => props.theme.colors.blue};
  margin-right: 10px;
`;
