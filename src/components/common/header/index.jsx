import HeaderImage from "../../../images/Header.png";
import LogoImage from "../../../images/Logo.png";
import styled from "styled-components";
const Header = (props) => {
  const { title, description } = props;
  const menu = [
    { menu: "회사" },
    { menu: "모집공고" },
    { menu: "개발팀" },
    { menu: "취업현황" },
    { menu: "내 정보" },
    { menu: "Support" },
  ];
  return (
    <>
      <HeaderImg>
        <Nav>
          <LogoImg src={LogoImage} alt="로고이미지입니다." />
          <MenuProps>
            {menu.map((nav) => (
              <>
                <Menu>{nav.menu}</Menu>
              </>
            ))}
          </MenuProps>
        </Nav>
        <Title>
          <h1>{title}</h1>
          <span>{description}</span>
        </Title>
      </HeaderImg>
    </>
  );
};
export default Header;
const HeaderImg = styled.div`
  width: 100vw;
  height: 400px;
  background-image: url(${HeaderImage});
  padding: 40px 300px;
`;
const LogoImg = styled.img`
  width: 115px;
  height: 43px;
`;
const MenuProps = styled.ul`
  width: 509px;
  height: 18px;
  display: flex;
  justify-content: space-between;
`;
const Menu = styled.li`
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  list-style: none;
  position: relative;
  color: ${(props) => props.theme.colors.white};
`;
const Nav = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
`;
const Title = styled.div`
  margin-top: 67px;
<<<<<<< HEAD
=======
  margin-left: 100px;
>>>>>>> 5dc4a27ab67f37b264eb78c90b1e8cffd8341836
  color: #fff;
  h1 {
    margin: 0;
    font-size: 64px;
  }
  span {
    font-size: 24px;
  }
`;
