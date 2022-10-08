import styled from "styled-components";
const RequstResistration = () => {
  return (
    <Table>
      <Title>채용직무</Title>
      <Button>선택</Button>
    </Table>
  );
};
export default RequstResistration;
const Table = styled.div`
  width: 1136px;
  height: 3000px;
  background-color: red;
  left: 0;
  right: 0;
  margin: 0 auto;
`;
const Title = styled.div`
  position: relative;
  width: 200px;
  height: 46px;
  left: 0px;
  top: 125px;

  font-family: "NanumGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;

  color: ${(props) => props.theme.colors.black};
`;
const Button = styled.button``;
