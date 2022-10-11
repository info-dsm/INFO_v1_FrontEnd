import styled from "styled-components";
import { useDispatch } from "react-redux";
import { stateModal } from "../../../../../redux/store/modal";
import { bundle, mainData } from "../data";
import { useState, useMemo, useCallback } from "react";
const SelectModal = () => {
  const dispatch = useDispatch();
  const [inputState, setInputState] = useState(false);
  const [list, setList] = useState(mainData);
  const BlurEvent = useCallback((e) => {
    setInputState(false);
    setList(...list, { title: e.target.value });
  }, []);
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
            {list.map((user) => (
              <>
                <MainLi>
                  <SubListUl>
                    <SubList
                      width={300}
                      height={user.subtitle.length * 70 + 50}
                    >
                      <MainTitleProps>{user.title}</MainTitleProps>
                    </SubList>
                    <SubList
                      width={616}
                      height={user.subtitle.length * 70 + 50}
                    >
                      <SubUl>
                        {user.subtitle.map((asdf) => (
                          <SubLi>
                            <Label>
                              <LabelButton>{asdf}</LabelButton>
                              <InputButton>
                                <Radio
                                  type="radio"
                                  name="jingeon"
                                  value={asdf}
                                ></Radio>
                              </InputButton>
                            </Label>
                          </SubLi>
                        ))}
                        <SubLi>
                          <PlusButton width={400}>+</PlusButton>
                        </SubLi>
                      </SubUl>
                    </SubList>
                    <SubList
                      width={196}
                      height={user.subtitle.length * 70 + 50}
                    ></SubList>
                  </SubListUl>
                </MainLi>
              </>
            ))}
            <MainLi>
              <SubListUl>
                <SubLi>
                  {inputState ? (
                    <InputText
                      width={300}
                      type="text"
                      onBlur={(e) => BlurEvent(e)}
                    ></InputText>
                  ) : (
                    <PlusButton
                      width={300}
                      onClick={() => {
                        setInputState(true);
                      }}
                    >
                      +
                    </PlusButton>
                  )}
                </SubLi>
              </SubListUl>
            </MainLi>
          </MainUl>
        </Table>
      </Box>
    </>
  );
};
export default SelectModal;
const Ul = styled.ul`
  position: absolute;
  left: 0px;
  right: 0;
  margin: 0 auto;
  width: 936px;
  padding: 0;
`;
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
  height: 2800px;
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
const BundleUl = styled(Ul)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  top: 80px;
`;
const BundleLi = styled.li`
  list-style: none;
  width: ${(props) => props.width}px;
`;
const LabelButton = styled.button`
  top: -5px;
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
const Label = styled.label``;
const Radio = styled.input`
  appearance: none;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.white};
  :checked {
    border: 5px solid ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.blue};
  }
`;
const SubUl = styled.ul`
  position: relative;
  background-color: blue;
  margin: 0px;
  height: 100%;
  left: -20px;
  width: 100%;
`;
const SubLi = styled.li`
  list-style: none;
  margin-bottom: 20px;
  height: 50px;

  width: 100%;
`;
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
const MainUl = styled(Ul)`
  top: 180px;
  height: auto;
  overflow: hidden;
  background-color: red;
`;
const MainLi = styled(BundleLi)`
  height: auto;
  overflow: hidden;
  margin-bottom: 20px;
`;
const SubList = styled(BundleLi)`
  height: ${(props) => props.height}px;
`;
const MainTitleProps = styled.button`
  border: none;
  border-radius: 20px;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.mediumGray};
  font-family: "NanumGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;

  color: ${(props) => props.theme.colors.blue};
`;
const SubListUl = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 1136px;
  height: auto;
  padding: 0;
`;
const PlusButton = styled.button`
  background: ${(props) => props.theme.colors.semiWhite};
  border: 2px solid ${(props) => props.theme.colors.mediumGray};
  border-radius: 20px;
  width: ${(props) => props.width}px;
  height: 100%;
  position: relative;
  left: -10px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: ${(props) => props.theme.colors.black};
  margin-right: 20px;
`;
const InputButton = styled.button`
  border: none;
  background: #f0f0f0;
  border-radius: 20px;
  width: 196px;
  height: 50px;
`;
const InputText = styled.input`
  width: ${(props) => props.width}px;
  border-radius: 20px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.semiWhite};
  border: 2px solid ${(props) => props.theme.colors.mediumGray};
  color: ${(props) => props.theme.colors.black};
  :focus {
    border: 2px solid ${(props) => props.theme.colors.mediumGray};
  }
`;
