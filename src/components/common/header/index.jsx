import HeaderImage from "../../../images/Header.png";
import LogoImage from "../../../images/Logo.png";
import styled from "styled-components";
const Header = () => {
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
      <HeaderImg src={HeaderImage} alt="헤더이미지입니다." />
      <LogoImg src={LogoImage} alt="로고이미지입니다." />
      <MenuProps>
        {menu.map((nav) => (
          <>
            <Menu>{nav.menu}</Menu>
          </>
        ))}
      </MenuProps>
    </>
  );
};
export default Header;
const HeaderImg = styled.img`
  width: 100%;
`;
const LogoImg = styled.img`
  position: absolute;
  width: 115px;
  height: 43px;
  left: 284px;
  top: 29px;
`;
const MenuProps = styled.ul`
  position: absolute;
  width: 509px;
  height: 18px;
  display: flex;
  justify-content: space-between;
  right: 300px;
  top: 41px;
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
