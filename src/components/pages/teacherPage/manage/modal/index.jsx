import { useDispatch } from "react-redux";
import { stateModalManage } from "../../../../../redux/store/modal";
import { TitleData } from "../../../../../export/data";
import { useCallback, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { stateManageCount } from "../../../../../redux/store/count";
const ModalManage = ({ Data }) => {
  const [state, setState] = useState([{ state: false }]);
  const [, setRestart] = useState({});
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    const ad = state;
    for (let i = 1; i < Data.length; i++) {
      ad.push({ state: false });
    }
    setState(ad);
  }, [Data, state]);
  const ClickEvent = useCallback(
    (index) => {
      const ad = state;
      ad.map((item, i) => {
        if (i !== index) {
          item.state = false;
          return item;
        } else {
          item.state = true;
          return item;
        }
      });
      setState(ad);
      console.log(state);
      console.log(state[index].state);
      setRestart({});
    },
    [state]
  );
  const Submit = () => {
    const ad = state.findIndex((state) => state.state === true);
    dispatch(stateManageCount(ad));
    dispatch(stateModalManage(false));
  };
  return (
    <>
      <Box>
        <Head>
          <Title>채용 직무 선택</Title>
          <ExitButton onClick={() => dispatch(stateModalManage(false))}>
            X
          </ExitButton>
        </Head>
        <Table>
          <BoxPropsUl>
            {Data.map((el, i) => (
              <>
                <BoxPropsLi
                  onClick={() => ClickEvent(i)}
                  state={state[i].state}
                >
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
                    <LiContent width={212} state={state[i].state}>
                      {el.bigClassification}
                    </LiContent>
                    <LiContent width={167} state={state[i].state}>
                      {el.smallClassification}
                    </LiContent>
                    <LiContent width={191} state={state[i].state}>
                      {el.numberOfEmployee}
                    </LiContent>
                    <LiContent width={566} state={state[i].state}>
                      {el.detailBusinessDescription}
                    </LiContent>
                  </UlContent>
                  <SubTitle>필요언어</SubTitle>
                  <EssentialUl>
                    {el.languageList.map((user) => (
                      <EssentialLi>
                        <ButtonProps>{user}</ButtonProps>
                      </EssentialLi>
                    ))}
                  </EssentialUl>
                  <li>
                    <SubTitle>기타기술</SubTitle>
                  </li>
                  <li>
                    <GradesUl>
                      <AsdfProps>성적(커트라인)</AsdfProps>
                      <GradesLi>상위 {el.gradeCutLine}%이내</GradesLi>
                    </GradesUl>
                  </li>
                  <EssentialUl>
                    {el.technologyList.map((user) => (
                      <EssentialLi>
                        <ButtonProps>{user}</ButtonProps>
                      </EssentialLi>
                    ))}
                  </EssentialUl>
                  <SubTitle>국가자격증</SubTitle>
                  <EssentialUl>
                    {el.needCertificateList.map((user) => (
                      <EssentialLi>
                        <ButtonProps>{user}</ButtonProps>
                      </EssentialLi>
                    ))}
                  </EssentialUl>
                </BoxPropsLi>
              </>
            ))}
          </BoxPropsUl>
          <Button onClick={() => Submit()}>확인</Button>
        </Table>
      </Box>
    </>
  );
};
export default ModalManage;
const Box = styled.div`
  height: auto;
  width: 1206px;
  top: 609px;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  padding: 0;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 999999px;
  border-radius: 20px;
  background-color: white;
`;
const Head = styled.div`
  padding: 50px;
  position: relative;
  padding: 31px 56px 0px 110px;
  border-radius: 20px;
  top: -21px;
  width: 1206px;
  height: 190px;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.navy} 0%,
    ${(props) => props.theme.colors.purple} 100%
  );
  text-align: right;
`;
const Table = styled.div`
  position: absolute;
  height: auto;
  top: 110px;
  width: 1206px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
`;
const Title = styled.h1`
  width: 199px;
  height: 32px;
  top: 20px;
  left: 100px;
  letter-spacing: -2px;
  font-family: "NanumGothic", sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: ${(props) => props.theme.colors.white};
`;
const ExitButton = styled.div`
  position: relative;
  width: 21px;
  height: 38px;
  left: 1015px;
  top: -44px;
  cursor: pointer;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: ${(props) => props.theme.colors.white};
  :hover {
    color: ${(props) => props.theme.colors.gray};
  }
`;
const BoxPropsLi = styled.li`
  position: relative;
  width: 1156px;
  left: -10px;
  padding: 10px;
  height: auto;
  border: 2px solid
    ${(props) =>
      props.state ? props.theme.colors.blue : props.theme.colors.black};
  background-color: ${(props) =>
    props.state ? props.theme.colors.gray : props.theme.colors.white};
  list-style: none;
  border-radius: 20px;
  margin-top: 20px;
`;
const BoxPropsUl = styled.ul`
  position: relative;
  padding: 0px;
  width: 1156px;
  height: auto;
  left: 35px;
  margin-top: 30px;
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
  width: 1176px;
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
  color: ${(props) =>
    props.state ? props.theme.colors.white : props.theme.colors.black};
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
const Button = styled.button`
  position: relative;
  width: 150px;
  height: 50px;
  left: 0;
  margin: 30px 503px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.blue};
  border-radius: 100px;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.colors.blue};
`;
export const AsdfProps = styled.li`
  font: 700 normal 24px "NanumGothic", sans-serif;
  color: ${(props) => props.theme.colors.blue};
`;
export const GradeUl = styled.ul`
  position: relative;
  width: 1136px;
  display: flex;
  list-style-type: none;
  left: -40px;
`;
export const GradesUl = styled.ul`
  position: relative;
  width: 230px;
  height: 56px;
  top: 50px;
  left: 410px;
  list-style-type: none;
`;
export const GradesLi = styled.li`
  font: 400 normal 20px "NanumGothic";
  color: ${(props) => props.theme.colors.black};
`;
