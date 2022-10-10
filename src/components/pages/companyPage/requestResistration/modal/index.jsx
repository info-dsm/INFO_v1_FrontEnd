import styled from "styled-components";
import { useDispatch } from "react-redux";
import { stateModal } from "../../../../../redux/store/modal";
import { bundle, mainData } from "../data";
import { useState } from "react";
const SelectModal = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Box>
        <Head>
          <Title>채용 직무 선택</Title>
          <ExitButton onClick={() => dispatch(stateModal(false))}>X</ExitButton>
        </Head>
        <Table>
          <BundleUl>
            {bundle.map((user) => (
              <BundleLi width={user.width}>
                <MainTitle>{user.title} </MainTitle>
              </BundleLi>
            ))}
          </BundleUl>
          <MainUl>
            {mainData.map((user) => (
              <>
                <MainLi width={300} height={user.subtitle.length * 70 + 50}>
                  <MainTitleProps></MainTitleProps>
                </MainLi>
              </>
            ))}
          </MainUl>
        </Table>
      </Box>
    </>
  );
};
export default SelectModal;
const Box = styled.div`
  height: 2818px;
  width: 1136px;
  top: 609px;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 999999px;
  border-radius: 20px;
`;
const ExitButton = styled.div`
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
const Head = styled.div`
  border-radius: 20px;
  width: 1136px;
  height: 176px;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.navy} 0%,
    ${(props) => props.theme.colors.purple} 100%
  );
`;
const Table = styled.div`
  position: absolute;
  border-radius: 20px;
  top: 120px;
  width: 1136px;
  height: 2698px;
  background-color: ${(props) => props.theme.colors.white};
`;
const Title = styled.h1`
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
const BundleUl = styled.ul`
  position: absolute;
  left: 0px;
  right: 0;
  margin: 0 auto;
  width: 936px;
  display: flex;
  justify-content: space-between;
  padding: 0;
  top: 80px;
`;
const BundleLi = styled.li`
  list-style: none;
  width: ${(props) => props.width}px;
`;
const Label = styled.label``;
const CheckBox = styled.input``;
const SubUl = styled.ul``;
const SubLi = styled.li``;
const MainTitle = styled.button`
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
const MainUl = styled.ul`
  position: absolute;
  left: 0px;
  right: 0;
  margin: 0 auto;
  width: 936px;
  justify-content: space-between;
  padding: 0;
  top: 80px;
`;
const MainLi = styled.li`
  list-style: none;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
const MainTitleProps = styled.button`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.mediumGray};
`;
