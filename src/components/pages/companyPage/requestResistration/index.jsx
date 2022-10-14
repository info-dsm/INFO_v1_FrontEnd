import styled from "styled-components";
import { useDispatch } from "react-redux";
import { stateModal } from "../../../../redux/store/modal";
import { useSelector } from "react-redux";
import SelectModal from "./modal";
import { TitleData } from "./data";
import Header from "../../../common/header";
const RequstResistration = () => {
  const modal = useSelector((state) => state.modal.state);
  const dispatch = useDispatch();
  return (
    <>
      <Header title="모집의뢰 등록" description="모집공고를 등록해보세요" />
      <Table>
        <Title>채용직무</Title>
        <Button onClick={() => dispatch(stateModal(true))}>선택</Button>
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
      </Table>
      {modal ? <SelectModal /> : <></>}
    </>
  );
};
export default RequstResistration;
const Table = styled.div`
  position: relative;
  width: 1136px;
  height: 5081px;
  top: 100px;
  background-color: red;
  left: 0;
  right: 0;

  margin: 0 auto;
`;
const Title = styled.div`
  position: relative;
  width: 200px;
  height: 46px;
  left: 0px;
  top: 100px;

  font-family: "NanumGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;

  color: ${(props) => props.theme.colors.black};
`;
const Button = styled.button`
  position: relative;
  width: 100px;
  height: 40px;
  left: 183px;
  top: 63px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  border: none;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.blue};
  border-radius: 100px;
  cursor: pointer;
`;
const UlSubTitle = styled.ul`
  position: absolute;
  width: 808px;
  height: 28px;
  left: -185px;
  display: flex;
  top: 206px;
`;
const LiSubTitle = styled.li`
  position: relative;
  margin-left: ${(props) => props.margin}px;
  list-style: none;
  width: ${(props) => props.width}px;
  height: 28px;
  background-color: yellow;
  color: ${(props) => props.theme.colors.blue};
  font-family: "NanumGothic", sans-serif;
  letter-spacing: -4.2px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  text-align: left;
  outline: invert;
`;
