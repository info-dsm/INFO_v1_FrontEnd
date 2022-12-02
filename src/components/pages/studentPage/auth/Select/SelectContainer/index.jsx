import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SelectContainer = ({ img, title, description, url }) => {
  const navigate = useNavigate();
  return (
    <>
      <MainDiv>
        <Profile>
          <img src={img} alt="" />
        </Profile>
        <hr />
        <Title>{title}</Title>
        <Description>{description}</Description>{" "}
        <SubmitBtn>
          <a onClick={() => navigate(`/${url}`)}>이동하기</a>{" "}
        </SubmitBtn>
      </MainDiv>
    </>
  );
};

export default SelectContainer;

const MainDiv = styled.div`
  width: 450px;
  height: 580px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  hr {
    margin: 30px 0 0 0;
    width: 70px;
    height: 1px;
    border: none;
    background-color: #d3d3d3;
  }
`;

const SubmitBtn = styled.button`
  width: 153px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.plum};
  border: none;
  border-radius: 6px;
  margin-top: 84px;
  color: #fdfdfd;
  cursor: pointer;
  font-size: 20px;
`;

const Description = styled.div`
  margin-top: 33px;
  font-size: 18px;
  color: #929292;
  font-weight: 700;
  text-align: center;
`;

const Title = styled.div`
  margin-top: 26px;
  font-size: 24px;
  font-weight: 600;
`;

const Profile = styled.div`
  width: 150px;
  background-color: #fdfdfd;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
  }
`;
