import styled from "styled-components";
export const Ul = styled.ul`
  position: absolute;
  left: 0px;
  right: 0;
  margin: 0 auto;
  width: 936px;
  padding: 0;
`;
export const Box = styled.div`
  height: 2818px;
  width: 1136px;
  top: 609px;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  padding: 0;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 999999px;
  border-radius: 20px;
`;
export const ExitButton = styled.div`
  position: absolute;
  width: 21px;
  height: 38px;
  left: 1015px;
  top: 44px;
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
export const Head = styled.div`
  border-radius: 20px;
  width: 1136px;
  height: 176px;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.navy} 0%,
    ${(props) => props.theme.colors.purple} 100%
  );
`;
export const Table = styled.div`
  position: absolute;
  border-radius: 20px;
  top: 120px;
  padding-left: 100px;
  padding-right: 100px;
  width: 1136px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
`;
export const Title = styled.h1`
  position: absolute;
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
export const BundleUl = styled(Ul)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  top: 80px;
`;
export const BundleLi = styled.li`
  list-style: none;
  width: ${(props) => props.width}px;
`;
export const LabelButton = styled.button`
  top: 0px;
  border-radius: 20px;
  height: 100%;
  border: none;
  width: 400px;
  background-color: ${(props) => props.theme.colors.mediumGray};
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: ${(props) => props.theme.colors.black};
  position: relative;
  left: -10px;
  margin-right: 20px;
`;
export const Label = styled.label``;
export const Radio = styled.input`
  appearance: none;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.white};
  :checked {
    border: 5px solid ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.blue};
  }
`;
export const SubUl = styled.ul`
  position: relative;
  margin: 0px;
  height: 100%;
  left: -20px;
  width: 100%;
`;
export const SubLi = styled.li`
  list-style: none;
  margin-bottom: 20px;
  height: 50px;

  width: 100%;
`;
export const MainTitle = styled.button`
  margin: 0;
  width: 100%;
  height: 80px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  font-family: "NanumGothic", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  border: none;
`;
export const MainUl = styled(Ul)`
  position: relative;
  padding-bottom: 100px;
  width: 936px;
  top: 180px;
  height: auto;
  overflow: hidden;
  /* background-color: ${(props) => props.theme.colors.white}; */
  background-color: red;
`;
export const MainLi = styled(BundleLi)`
  height: auto;
  overflow: hidden;
  margin-bottom: 20px;
`;
export const SubList = styled(BundleLi)`
  height: ${(props) => props.height}px;
`;
export const MainTitleProps = styled.button`
  border: none;
  border-radius: 20px;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.mediumGray};
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;

  color: ${(props) => props.theme.colors.blue};
`;
export const SubListUl = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 1136px;
  height: auto;
  padding: 0;
`;
export const PlusButton = styled.button`
  background: ${(props) => props.theme.colors.semiWhite};
  border: 2px solid ${(props) => props.theme.colors.mediumGray};
  border-radius: 20px;
  width: ${(props) => props.width}px;
  height: 100%;
  position: relative;
  left: ${(props) => props.left};
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: ${(props) => props.theme.colors.black};
  margin-right: 20px;
`;
export const InputButton = styled.button`
  top: -50px;
  position: relative;
  right: -410px;
  border: none;
  background: #f0f0f0;
  border-radius: 20px;
  width: 196px;
  height: 50px;
`;
export const Input = styled.input`
  width: ${(props) => props.width}px;
  border-radius: 20px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.semiWhite};
  border: 2px solid ${(props) => props.theme.colors.mediumGray};
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  position: relative;
`;
export const InputText = styled(Input)`
  font-size: 32px;
  color: ${(props) => props.theme.colors.blue};
`;
export const InputSubText = styled(Input)`
  left: -10px;
  font-size: 24px;
  color: ${(props) => props.theme.colors.black};
`;
export const TableProps = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  margin-top: 110px;
  position: relative;
  width: 936px;
  height: 1180px;
`;
export const LangInputProps = styled.div``;
