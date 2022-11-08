import styled from "styled-components";

const Recruitment = ({ TitleData, Data, count }) => {
  return (
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
            <LiContent width={212}>{Data[count].main}</LiContent>
            <LiContent width={167}>{Data[count].sub}</LiContent>
            <LiContent width={191}>{Data[count].num}</LiContent>
            <LiContent width={566}>{Data[count].duty}</LiContent>
          </UlContent>
          <SubTitle>필요언어</SubTitle>
          <EssentialUl>
            {Data[count].lang.map((user) => (
              <EssentialLi>
                <ButtonProps>{user}</ButtonProps>
              </EssentialLi>
            ))}
          </EssentialUl>
          <SubTitle>기타기술</SubTitle>
          <EssentialUl>
            {Data[count].stack.map((user) => (
              <EssentialLi>
                <ButtonProps>{user}</ButtonProps>
              </EssentialLi>
            ))}
          </EssentialUl>
        </BoxPropsLi>
      </BoxPropsUl>
    </>
  );
};
export default Recruitment;
const BoxPropsLi = styled.li`
  position: relative;
  width: 1156px;
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
  width: 1156px;
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
  color: ${(props) => props.theme.colors.black};
  word-break: break-all;
`;
const SubTitle = styled.div`
  position: relative;
  width: 96px;
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
