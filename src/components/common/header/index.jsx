import HeaderImage from "../../../images/Header.png";
import LogoImage from "../../../images/Logo.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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
          <LogoImg
            onClick={() => {
              navigate("/");
            }}
            src={LogoImage}
            alt="로고이미지입니다."
          />
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
