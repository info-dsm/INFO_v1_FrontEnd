import styled from "styled-components";

export const Category = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #4000ff;
  margin-right: 20px;
`;

export const InputForm = styled.input`
  border: none;
  width: 220px;
  height: 50px;
  border-radius: 18px;
  background-color: #f0f0f0;
  font-size: 17px;
  margin-right: 30px;
  padding-left: 24px;
  font-weight: 700;
  &::placeholder {
    font-size: 13px;
  }
`;

export const PlusButton = styled.div`
  display: inline-flex;
  align-items: center;
  width: 88%;
  gap: 10px;

  input {
    font-size: 16px;
    background-color: #f0f0f0;
    outline: none;
    border: none;
    padding: 10px 10px 10px 20px;
    border-radius: 12px;
    left: -45px;
    width: 250px;
  }
  div {
    cursor: pointer;
    font-size: 18px;
    right: 0;

    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.mediumGray};
    border-radius: 50%;
  }
`;

export const Nav = styled.div`
  width: 100vw;
  height: 100px;
  background-color: #000;
  padding-left: 350px;
  gap: 40px;
  display: inline-flex;
  align-items: center;

  button {
    padding: 0px 30px;
    border: none;
    height: 50px;
    border-radius: 24px;
    font-size: 24px;
  }
`;

export const MainDiv = styled.div`
  margin-top: 242px;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContentDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  width: 1136px;
`;

export const Description = styled.textarea`
  width: 1136px;
  height: 257px;
  background-color: #f0f0f0;
  border: none;
  resize: none;
  border-radius: 12px;
  font-size: 20px;
  padding: 20px;
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;

export const ContainerDiv = styled.div`
  width: 1100px;

  h2 {
    margin: 0;
  }

  hr {
    width: 1236px;
    height: 4px;
    border-radius: 4px;
    border: none;
    margin: 146px 0 65px -70px;
    background-color: #f0f0f0;
  }

  > span {
    font-weight: 400;
    font-size: 20px;
  }
`;

export const Title = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 60px;
  h2 {
    margin-right: 53px;
    font-size: 40px;
    font-weight: 700;
  }
  span {
    font-size: 24px;
  }
`;

export const GridDiv = styled.div`
  width: ${(props) => props.width}px;
  display: grid;
  grid-template-columns: repeat(${(props) => props.column}, 1fr);
  margin-right: 80px;
  grid-row-gap: 43px;
  place-items: center end;
  margin-bottom: 86px;

  div {
    font-size: 20px;
  }

  span {
    word-break: break-all;
  }
`;
export const SubmitBtn = styled.button`
  width: 600px;
  height: 50px;
  border-radius: 24px;
  margin: 150px;
  background: linear-gradient(to right, #ab91f8, #7243ff);
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  font-weight: 700;
`;
export const CheckInput = styled.input`
  margin-top: 5px;
  margin-right: 15px;
  cursor: pointer;
  appearance: none;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.mediumGray};
  :checked {
    border: 5px solid ${(props) => props.theme.colors.mediumGray};
    background-color: ${(props) => props.theme.colors.blue};
  }
`;

export const UlSubmitted = styled.ul`
  width: 850px;
  margin: 50px 0;
  display: flex;
  height: auto;
  top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 30px;
`;
export const LabelFile = styled.label`
  display: inline-block;
  padding: 10px 30px;
  background-color: ${(props) => props.theme.colors.blue};
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  border-radius: 20px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  margin-bottom: 10px;
`;
export const FileHidden = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
`;

export const FileTextDiv = styled.div`
  margin-left: -20px;
  width: 200px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 30px;
  font-family: "NanumGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.blue};
`;
export const UlTable = styled.ul`
  position: relative;
  top: 5px;
  width: auto;
  height: 40px;
  height: 100px;
  display: flex;
`;

export const LiProps = styled.div`
  position: relative;
  list-style: none;
  height: 100%;
`;
