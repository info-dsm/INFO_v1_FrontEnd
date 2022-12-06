import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { TitleData } from "../../../../../../export/data";
import { getNoticeItem } from "../../../../../api/teacher";
const Recruitment = ({ Data }) => {
  const { status, data } = getNoticeItem(Data.noticeId);
  return (
    <>
      {status === "loading" ? (
        <></>
      ) : status === "error" ? (
        <></>
      ) : (
        <>
          <BoxPropsUl>
            <BoxPropsLi>
              <UlSubTitle>
                {TitleData.map((user) => (
                  <>
                    <LiSubTitle width={user.width} margin={user.margin}>
                      {user.data}
                    </LiSubTitle>
                    <LiSubTitle width={user.width} margin={user.margin}>
                      {user.data1}
                    </LiSubTitle>
                  </>
                ))}
              </UlSubTitle>
              <UlContent>
                <LiContent width={212}>
                  {
                    data.classificationResponse[0].bigClassification
                      .bigClassificationName
                  }
                </LiContent>
                <LiContent width={167}>
                  {data.classificationResponse[0].name}
                </LiContent>
                <LiContent width={191}>{data.numberOfEmployee}</LiContent>
                <LiContent width={566}>
                  {data.detailBusinessDescription}
                </LiContent>
              </UlContent>
              <SubTitle>필요언어</SubTitle>
              <EssentialUl>
                {data.languageList.map((user) => (
                  <EssentialLi>
                    <ButtonProps>{user.languageName}</ButtonProps>
                  </EssentialLi>
                ))}
              </EssentialUl>
              <GradeUl>
                <li>
                  <SubTitle>기타기술</SubTitle>
                </li>
                <li>
                  <GradesUl>
                    <AsdfProps>성적(커트라인)</AsdfProps>
                    <GradesLi>
                      상위 {data.gradeCutLine}
                      %이내
                    </GradesLi>
                  </GradesUl>
                </li>
              </GradeUl>
              <EssentialUl>
                {data.technologyList.map((user) => (
                  <EssentialLi>
                    <ButtonProps>{user.technologyName}</ButtonProps>
                  </EssentialLi>
                ))}
              </EssentialUl>
              <SubTitle>국가자격증</SubTitle>
              <EssentialUl>
                {data.certificateList.map((user) => (
                  <EssentialLi>
                    <ButtonProps>{user.certificateName}</ButtonProps>
                  </EssentialLi>
                ))}
              </EssentialUl>
            </BoxPropsLi>
          </BoxPropsUl>
        </>
      )}
    </>
  );
};
export default Recruitment;
const BoxPropsLi = styled.li`
  position: relative;
  width: 1190px;
  left: -10px;
  padding: 10px;
  height: auto;
  border: 1px solid ${(props) => props.theme.colors.mediumPurple};
  list-style: none;
  border-radius: 20px;
  margin-top: 20px;
  box-shadow: ${(props) => props.theme.colors.mediumPurple} 0px 0px 10px 5px;
`;
const BoxPropsUl = styled.ul`
  top: -30px;
  position: relative;
  padding: 0px;
  width: 1190px;
  height: auto;
`;
const UlSubTitle = styled.ul`
  position: relative;
  width: 900px;
  height: 28px;
  left: -180px;
  display: flex;
`;
const LiSubTitle = styled.li`
  position: relative;
  margin-left: ${(props) => props.margin}px;
  list-style: none;
  width: ${(props) => props.width}px;
  height: 28px;
  color: ${(props) => props.theme.colors.blue};
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  text-align: left;
`;
const UlContent = styled.ul`
  position: relative;
  width: 1190px;
  display: flex;
`;
const LiContent = styled.li`
  width: ${(props) => props.width}px;
  list-style: none;
  position: relative;
  height: 23px;
  left: -40px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.black};
  word-break: break-all;
`;
const SubTitle = styled.div`
  position: relative;
  width: 130px;
  height: 28px;
  margin-top: 60px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.blue};
`;
const EssentialUl = styled.ul`
  position: relative;
  margin-top: 20px;
  width: 1136px;
  height: 40px;
  display: flex;
`;
const EssentialLi = styled.li`
  position: relative;
  margin-left: 20px;
  list-style: none;
  left: -60px;
`;
const ButtonProps = styled.button`
  height: 40px;
  width: auto;
  padding-left: 28px;
  padding-right: 28px;
  background-color: ${(props) => props.theme.colors.mediumPurple};
  font-family: "NanumGothic", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: ${(props) => props.theme.colors.black};
  border-radius: 100px;
  border: none;
`;
const AsdfProps = styled.li`
  font: 700 normal 24px "NanumGothic", sans-serif;
  color: ${(props) => props.theme.colors.blue};
`;
const GradeUl = styled.ul`
  position: relative;
  width: 1136px;
  display: flex;
  list-style-type: none;
  left: -40px;
`;
const GradesUl = styled.ul`
  position: relative;
  width: 230px;
  height: 56px;
  top: 50px;
  left: 410px;
  list-style-type: none;
`;
const GradesLi = styled.li`
  font: 400 normal 20px "NanumGothic";
  color: ${(props) => props.theme.colors.black};
`;
