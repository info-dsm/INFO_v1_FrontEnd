import styled from "styled-components";
import { StyledLink } from "../../../style/theme";
const NavProps = ({ props, idx }) => {
  return (
    <>
      <Table>
        {props.map((user, i) => (
          <>
            <StyledLink to={user.path}>
              <Div state={i === idx}>{user.name}</Div>
            </StyledLink>
          </>
        ))}
      </Table>
    </>
  );
};
export default NavProps;
const Table = styled.div`
  position: relative;
  width: 100vw;
  height: 100px;
  background-color: ${(props) => props.theme.colors.black};
  padding-top: 23px;
  padding-left: 300px;
`;
const Div = styled.div`
  display: inline-flex;
  text-align: center;
  padding: 8px 35px;
  height: 50px;
  border-radius: 100px;
  background-color: ${(props) =>
    props.state ? props.theme.colors.mediumSlateBlue : "#272238"};
  font: 400 normal 24px "NanumGothic";
  top: 20px;
  margin-right: 20px;
  color: ${(props) => props.theme.colors.white};
`;
