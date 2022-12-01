import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { userModal } from "../../../../../../redux/store/userData";
import { FileDownImg } from "../../../../../../images";
import { TriAngle } from "../../../../../../images";
const AppliModal = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.data);
  return (
    <>
      <Box>
        <Header>
          <Title>
            제출 서류 현황-{userData.name}
            {userData.email}
          </Title>
          <ExitButton onClick={() => dispatch(userModal())}>X</ExitButton>
        </Header>
        <Table>
          <Ulbox>
            {userData.file.map((user) => (
              <Libox>
                <Container>
                  <Title2>
                    <div>{user.fileId}</div>
                    <div>
                      <img src={FileDownImg} alt=""></img>
                    </div>
                    <div>{user.fileName}</div>
                  </Title2>
                  <Down src={user.fileUrl} download>
                    다운로드 <img src={TriAngle} alt=""></img>
                  </Down>
                </Container>
              </Libox>
            ))}
          </Ulbox>
        </Table>
      </Box>
    </>
  );
};
export default AppliModal;
const Ulbox = styled.ul`
  position: relative;
  list-style-type: none;
  width: 1030px;
  height: 500px;
  top: 20px;
  margin: 0 auto;
  overflow-y: scroll;
  scroll-padding-top: 20px;
  padding-bottom: 20px;
  scroll-snap-points-y: none;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    width: 18px;
    border-radius: 20px;

    background-color: ${(props) => props.theme.colors.mediumGray};
  }

  &::-webkit-scrollbar-thumb {
    padding-top: 9px;
    height: 28px;
    border-radius: 20px;
    background: ${(props) => props.theme.colors.blue};
  }
  overflow-x: hidden;
  margin-top: -3.5px;
`;
const Libox = styled.li`
  margin-bottom: 20px;
  margin-left: -40px;
`;
const Title2 = styled.div`
  padding-left: 40px;
  width: 792px;
  height: 83px;

  display: flex;
  div {
    display: block;
    :first-child {
      margin-right: 34px;
    }
    :nth-child(2) {
      margin-right: 11px;
    }
  }
  img {
    margin-top: 32px;
    width: 24px;
    height: 26px;
  }
`;
const Down = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
`;
const Container = styled.div`
  width: 1000px;
  height: 83px;
  background: #f0f0f0;
  border-radius: 20px;
  font: 700 normal 24px "NanumGothic";
  color: #4000ff;
  line-height: 83px;
  display: flex;
`;
const Header = styled.div`
  width: 1136;
  height: 176px;
  background: linear-gradient(180deg, #7243ff 0%, #ab91f8 100%);
  border-radius: 20px;
`;
const ExitButton = styled.div`
  position: absolute;
  width: 21px;
  height: 38px;
  left: 1080px;
  top: 29px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  cursor: pointer;
  color: #ffffff;
  :hover {
    color: #808080;
  }
`;
const Table = styled.div`
  position: relative;
  top: -56px;
  width: 1136px;
  height: 550px;
  background-color: #fff;
  border-radius: 20px;
`;
const Box = styled.div`
  position: absolute;
  top: 50px;
  width: 1136px;
  height: 670px;
  background-color: black;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.6);
`;
const Title = styled.div`
  width: max-content;
  height: 120px;
  padding-left: 32px;
  color: #fff;
  font-family: "NanumGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120px;
`;
