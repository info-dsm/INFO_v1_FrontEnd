import HeaderImage from "../../../images/Header.png";
import LogoImage from "../../../images/Logo.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const { title, description } = props;
  const navigate = useNavigate();
  const menu = [
    { menu: "메인페이지", url: "/student" },
    { menu: "모집공고", url: "/student/notice" },
    { menu: "기업 목록", url: "/student/company" },
    // { menu: "로그인", url: "/student/login" },
    // { menu: "회원가입", url: "/student/signup" },
  ];
  return (
    <>
      <HeaderImg>
        <Nav>
          <LogoImg
            onClick={() => {
              navigate("/");
            }}
            src={LogoImage}
            alt="로고이미지입니다."
          />
          <MenuProps>
            {menu.map((nav) => (
              <>
                <Menu
                  onClick={() => {
                    navigate(nav.url);
                  }}
                >
                  {nav.menu}
                </Menu>
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
  cursor: pointer;
  width: 115px;
  height: 43px;
`;
const MenuProps = styled.ul`
  width: 609px;
  height: 18px;
  display: flex;
  margin-left: 700px;
  gap: 50px;
`;
const Menu = styled.div`
  width: 80px;
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-size: 0% 100%;
  background-image: linear-gradient(
    transparent calc(100% - 3px),
    ${(props) => props.theme.colors.white} 3px
  );
  background-repeat: no-repeat;
  transition: background-size 0.3s;
  &:hover {
    background-size: 100% 100%;
  }
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 500;
  font-size: 17px;
  line-height: 16px;
  list-style: none;
  position: relative;
  color: ${(props) => props.theme.colors.white};
  filter: drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.75));
`;
const Nav = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
`;
const Title = styled.div`
  margin-top: 67px;
  color: #fff;
  h1 {
    margin: 0;
    font-size: 64px;
  }
  span {
    font-size: 24px;
  }
`;
