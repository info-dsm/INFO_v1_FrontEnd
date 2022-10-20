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
  overflow: hidden;
  :hover {
    overflow: visible;
  }
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
  background-color: ${(props) => props.theme.colors.white};
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
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: ${(props) => props.theme.colors.black};
  margin-left: ${(props) => props.left}px;
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
  padding-left: 24px;
  padding-right: 24px;
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
  padding-left: 24px;
  padding-right: 24px;
`;
export const InputSubText = styled(Input)`
  left: -10px;
  font-size: 24px;
  color: ${(props) => props.theme.colors.black};
  padding-left: 24px;
  padding-right: 24px;
`;
export const TableProps = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 936px;
  height: auto;
`;
export const TableTwo = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  margin-top: 110px;
  position: relative;
  left: -100px;
  padding: 0px 100px;
  width: 1136px;
  height: auto;
  border-radius: 20px;
`;
export const InputProps = styled.input`
  width: ${(props) => props.width}px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.mediumGray};
  border-radius: 20px;
  font-size: 24px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  color: ${(props) => props.theme.colors.black};
  text-align: center;
  border: none;
`;
export const TextAreaProps = styled.input`
  width: 936px;
  height: 50px;
  color: ${(props) => props.theme.colors.black};
  font-size: 24px;
  background-color: ${(props) => props.theme.colors.mediumGray};
  border-radius: 20px;
  border: none;
  padding-left: 24px;
  padding-right: 24px;
`;
export const LowUl = styled.ul`
  height: 100%;
  width: 100%;
`;
export const LowLi = styled.li`
  position: relative;
  list-style: none;
  margin-left: -40px;
  font-family: "NanumGothic", sans-serif;
  margin-bottom: ${(props) => props.bottom}px;
`;
export const HTitle = styled.text`
  color: ${(props) => props.theme.colors.blue};
  font-size: 32px;
  font-weight: 700;
`;
export const SubText = styled.text`
  color: ${(props) => props.theme.colors.black};
  font-size: 24px;
  font-weight: 700;
`;
export const DataList = styled.datalist``;
export const Option = styled.option``;
export const InputUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 1036px;
  align-content: space-between;
`;
export const InputLi = styled.li`
  position: relative;
  margin-right: 60px;
  list-style: none;
  margin-left: -40px;
  height: 60px;
`;
export const PropsText = styled.text`
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
`;
export const Delelte = styled.div`
  width: 270px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.mediumGray};
  border-radius: 20px;
`;
export const InputPropss = styled(InputProps)`
  background-color: ${(props) => props.theme.colors.semiWhite};
`;
export const DeleteButton = styled.button`
  cursor: pointer;
  position: relative;
  top: -3px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 0px;
  color: ${(props) => props.theme.colors.black};
  border: none;
  margin-left: 20px;
  margin-bottom: 10px;
`;
export const PlusBtn = styled.div`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.mediumGray};
  margin-top: 5px;
  cursor: pointer;
  :after {
    content: "+";
    margin-left: 12px;
    margin-top: 50px;
    font-family: "NanumGothic", sans-serif;
    font-weight: 700;
    font-size: 24px;
    font-style: normal;
    color: ${(props) => props.theme.colors.blcak};
  }
`;
export const SubmitButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.blue};
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 50px;
  align-items: center;
  margin-left: 388px;
  margin-bottom: 60px;
  cursor: pointer;
`;
