import styled from "styled-components";
import Logo from "../../../images/Logo2.png";
const Footer = () => {
  const arr = [
    {
      title: "FrontEnd",
      list: ["김진건", "이동현"],
    },
    { title: "BackEnd", list: ["안진우"] },
  ];

  return (
    <>
      <Table>
        <LogoImg src={Logo} alt="로고이미지입니다."></LogoImg>
        <FooterTextUl>
          {arr.map((foot) => (
            <FooterList>
              <Title>{foot.title}</Title>
              <Ul>
                <>
                  {foot.list.map((list) => (
                    <>
                      <>{list}</>
                      <br />
                      <hr />
                    </>
                  ))}
                </>
              </Ul>
            </FooterList>
          ))}
        </FooterTextUl>
      </Table>
    </>
  );
};
export default Footer;
const LogoImg = styled.img`
  position: relative;
  left: 384px;
  top: 50px;
  height: 40px;
`;
const Table = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 300px;
  background-color: ${(props) => props.theme.colors.black};
`;
const FooterTextUl = styled.ul`
  position: absolute;
  width: 600px;
  height: 81px;
  right: 521px;
  top: 58px;
  justify-content: space-between;
  display: flex;
`;
const FooterList = styled.li`
  color: ${(props) => props.theme.colors.white};
  width: 92px;
  height: 200px;
  font-family: "Roboto", sans-serif;
  list-style: none;
  text-align: center;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 15px;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;
  margin-left: -40px;
  hr {
    opacity: 0;
    margin: 3px;
  }
`;
const TextList = styled.li`
  list-style: none;
  font-size: 16px;
  font-weight: 500;
`;
