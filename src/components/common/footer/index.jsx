import styled from "styled-components";
import Logo from "../../../images/Logo2.png";
const Footer = () => {
  const arr = [
    { title: "ABOUT", list1: "about text", list2: "about" },
    { title: "SERVICES", list1: "services text", list2: "services" },
    { title: "SECTORS", list1: "sectors text", list2: "sectors" },
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
                <TextList>{foot.list1}</TextList>
                <TextList>{foot.list2}</TextList>
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
`;
const Table = styled.div`
  position: relative;
  bottom: 0px;
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
  height: 81px;
  font-family: "Roboto", sans-serif;
  list-style: none;
  text-align: center;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 20px;
`;
const Ul = styled.ul`
  position: relative;
  left: -40px;
  right: 0;
  width: 90px;
  height: 43px;
`;
const TextList = styled.li`
  list-style: none;
  font-size: 16px;
  font-weight: 500;
`;
