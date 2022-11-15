import styled from "styled-components";
import { StyledLink } from "../../../style/theme";
const NavProps = ({ props, idx }) => {
  return (
    <>
      <Table>
        {props.map((user, i) => (
          <>
            <StyledLink>{user}</StyledLink>
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
  color: ${(props) => props.theme.colors.black};
`;
const Ul = styled.ul`
  position: relative;
`;
