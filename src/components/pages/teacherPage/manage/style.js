import styled from "styled-components";
export const Table = styled.div`
  position: relative;
  width: 1136px;
  height: auto;
  top: 100px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;
export const TableTwo = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;
export const Tables = styled.div`
  width: 1136px;
  position: relative;
  height: auto;
`;
export const Title = styled.h1`
  position: relative;
  width: 200px;
  height: 46px;
  left: 0px;
  margin-top: 100px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: ${(props) => props.theme.colors.black};
`;
export const Button = styled.button`
  position: relative;
  width: 100px;
  height: 40px;
  top: -60px;
  left: 220px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.blue};
  border-radius: 100px;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.colors.blue};
`;
export const DelButton = styled.button`
  position: relative;
  width: 100px;
  height: 40px;
  margin-left: 480px;
  margin-top: 38px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: ${(props) => props.theme.colors.black};
  background: ${(props) => props.theme.colors.mediumGray};
  border-radius: 100px;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.colors.mediumGray};
`;
export const UlSubTitle = styled.ul`
  position: relative;
  width: 900px;
  height: 28px;
  left: -180px;
  display: flex;
`;
export const LiSubTitle = styled.li`
  position: relative;
  margin-left: ${(props) => props.margin}px;
  list-style: none;
  width: ${(props) => props.width}px;
  height: 28px;
  color: ${(props) => props.theme.colors.blue};
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  text-align: left;
`;
export const UlContent = styled.ul`
  position: relative;
  width: 1176px;
  display: flex;
`;
export const LiContent = styled.li`
  width: ${(props) => props.width}px;
  list-style: none;
  position: relative;
  height: 23px;
  left: -40px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.black};
  word-break: break-all;
`;
export const SubTitle = styled.div`
  position: relative;
  width: 96px;
  height: 28px;
  margin-top: 60px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.blue};
`;
export const EssentialUl = styled.ul`
  position: relative;
  margin-top: 20px;
  width: 1136px;
  height: 40px;
  display: flex;
`;
export const EssentialLi = styled.li`
  position: relative;
  margin-left: 20px;
  list-style: none;
  left: -60px;
`;
export const ButtonProps = styled.button`
  height: 40px;
  width: auto;
  padding-left: 28px;
  padding-right: 28px;
  background-color: ${(props) => props.theme.colors.mediumPurple};
  font-family: "NanumGothic", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: ${(props) => props.theme.colors.black};
  border-radius: 100px;
  border: none;
`;

export const Titlet = styled.h1`
  position: relative;
  width: 300px;
  height: 46px;
  left: 0px;
  margin-top: 50px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: ${(props) => props.theme.colors.black};
`;
export const Subdd = styled.div`
  position: relative;
  width: 101px;
  height: 28px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.blue};
  margin-top: 60px;
`;
export const UlProps = styled.ul`
  position: relative;
  margin-top: 30px;
  width: 1136px;
  height: 40px;
  display: flex;
`;
export const LiProps = styled.li`
  position: relative;
  list-style: none;
  height: 100%;
`;
export const CheckInput = styled.input`
  margin-top: 5px;
  cursor: pointer;
  appearance: none;
  width: 30px;
  height: 30px;
  margin-left: ${(props) => props.left}px;
  background-color: ${(props) => props.theme.colors.mediumGray};
  :checked {
    border: 5px solid ${(props) => props.theme.colors.mediumGray};
    background-color: ${(props) => props.theme.colors.blue};
  }
`;
export const CheckText = styled.div`
  margin-left: 20px;
  position: relative;
  margin-top: 7px;
  width: 120px;
  height: 24px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.black};
`;
export const InputQualifi = styled.input`
  margin-left: 20px;
  width: 200px;
  height: 40px;
  border-radius: 20px;
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.mediumGray};
`;
export const UlQualifi = styled.ul`
  position: relative;
  width: 200px;
  height: auto;
  margin-bottom: 77px;
`;
export const LiQulifi = styled.li`
  margin-left: -40px;
  margin-bottom: 10px;
  list-style: none;
`;
export const PlusButton = styled.button`
  position: relative;
  cursor: pointer;
  margin-left: ${(props) => props.left}px;
  border-radius: 50%;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  background-color: ${(props) => props.theme.colors.mediumGray};
  color: ${(props) => props.theme.colors.black};
  width: 40px;
  height: 40px;
  border: none;
  padding-bottom: 5px;
  top: ${(props) => props.top}px;
  padding-left: 8px;
`;
export const PlusButtonT = styled.button`
  position: relative;
  margin: 20px 548px 0px 548px;
  cursor: pointer;
  border-radius: 50%;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  background-color: ${(props) => props.theme.colors.mediumGray};
  color: ${(props) => props.theme.colors.black};
  width: 40px;
  height: 40px;
  border: none;
  padding-bottom: 5px;
  padding-left: 8px;
`;
export const Achive = styled.div`
  width: 51px;
  height: 28px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  margin-left: 20px;
  margin-top: 7px;
  color: ${(props) => props.theme.colors.black};
`;
export const AchiveInput = styled.input`
  margin-left: 20px;
  width: 80px;
  height: 40px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  background-color: ${(props) => props.theme.colors.mediumGray};
  color: ${(props) => props.theme.colors.black};
  border-radius: 20px;
  border: none;
  margin-right: 20px;
  padding-left: 24px;
  padding-right: 24px;
  text-align: center;
`;
export const QweText = styled.div`
  position: relative;
  width: 84px;
  height: 28px;
  margin-top: 7px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.black};
`;
export const MinusButton = styled.button`
  position: absolute;
  width: 40px;
  height: 30px;
  color: ${(props) => props.theme.colors.blue};
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  border: none;
  border-radius: 50%;
  left: 180px;
  cursor: pointer;
`;
export const Ring = styled.div`
  position: relative;
  width: 1136px;
  height: 4px;
  margin-top: ${(props) => props.top}px;
  background: ${(props) => props.theme.colors.mediumGray};
  border-radius: 20px;
`;
export const Money = styled.div`
  position: relative;
  width: 96px;
  height: 28px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.blue};
`;
export const UlMoney = styled.ul`
  position: relative;
  margin-top: 52px;
`;
export const LiMoney = styled.li`
  margin-bottom: 40px;
  list-style: none;
  margin-left: -40px;
`;
export const TestText = styled.div`
  margin-top: 7px;
  width: ${(props) => props.width}px;
  height: 24px;
  font-family: "NanumGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.blue};
  margin-left: -40px;
`;
export const InputMoney = styled.input`
  margin-left: 20px;
  width: 100px;
  height: 40px;
  text-align: center;
  border: none;
  background: ${(props) => props.theme.colors.mediumGray};
  border-radius: 20px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  padding-left: 10px;
  padding-right: 10px;
  color: ${(props) => props.theme.colors.black};
`;
export const TenWon = styled.div`
  position: relative;
  width: ${(props) => props.width}px;
  height: 28px;
  margin-top: 7px;
  font-family: "NanumGothic";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  margin-left: ${(props) => props.left}px;
  color: ${(props) => props.theme.colors.black};
`;
export const TextBok = styled.div`
  position: relative;
  width: auto;
  height: 28px;
  margin-top: 7px;
  margin-left: 20px;
  font-family: "NanumGothic";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  margin-left: ${(props) => props.left}px;
  color: ${(props) => props.theme.colors.black};
`;

export const UlLineBreak = styled.ul`
  position: relative;
  margin-top: 30px;
  width: 1236px;
  height: auto;
  left: -100px;
  display: flex;
  flex-wrap: wrap;
`;
export const PlusBtn = styled.div`
  position: absolute;
  width: 40px;
  height: 30px;
  font-family: "NanumGothic", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  left: -30px;
  top: 5px;
  color: ${(props) => props.theme.colors.blue};
  cursor: pointer;
`;
export const UlWork = styled.ul`
  position: relative;
  margin-top: 60px;
  margin-left: -80px;
`;
export const LiWork = styled.li`
  position: relative;
  margin-bottom: 30px;
  width: 400px;
  height: 40px;
`;
export const ClockText = styled.div`
  position: relative;
  margin-top: 5px;
  width: auto;
  font-family: "NanumGothic";
  font-weight: 700;
  font-size: 24px;
  height: 24px;
  color: ${(props) => props.theme.colors.blue};
  margin-left: 20px;
`;
export const DailyUl = styled.ul`
  position: relative;
  height: 40px;
  width: 712px;
  margin-top: 60px;
  left: -60px;
  display: flex;
  justify-content: space-between;
`;
export const UlAddmision = styled.ul`
  position: relative;
  margin-top: 60px;
  width: 1036px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  left: -20px;
`;
export const Delelte = styled.div`
  width: 270px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.mediumGray};
  border-radius: 20px;
`;
export const InputProps = styled.input`
  width: ${(props) => props.width}px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.mediumGray};
  border-radius: 20px;
  font-size: 24px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  color: ${(props) => props.theme.colors.black};
  text-align: center;
  border: none;
`;
export const InputPropss = styled(InputProps)`
  background-color: ${(props) => props.theme.colors.semiWhite};
`;
export const DeleteButton = styled.button`
  cursor: pointer;
  position: relative;
  top: -3px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 0px;
  color: ${(props) => props.theme.colors.black};
  border: none;
  margin-left: 20px;
  margin-bottom: 10px;
`;
export const InputLi = styled.li`
  position: relative;
  margin-right: 60px;
  list-style: none;
  margin-left: -40px;
  height: 60px;
`;
export const UlSubmitted = styled.ul`
  position: relative;
  width: 1136px;
  display: flex;
  height: auto;
  top: 40px;
  flex-wrap: wrap;
`;
export const LabelFile = styled.label`
  display: inline-block;
  padding: 8.5px 44.5px;
  background-color: ${(props) => props.theme.colors.blue};
  vertical-align: middle;
  font-family: "NanumGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  border-radius: 20px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  margin-left: -40px;
`;
export const FileHidden = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
export const RemoveBtn = styled.button`
  margin-left: 15px;
  width: 30px;
  height: 30px;
  font-family: "NanumGothic", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  background: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 50%;
  padding-bottom: 6px;
  padding-right: 6.5px;
`;

export const FileTextDiv = styled.div`
  margin-left: 20px;
  width: auto;
  height: 28px;
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
  display: flex;
`;
export const InputTextProps = styled.input`
  position: relative;
  margin-top: 40px;
  width: 1136px;
  height: 40px;
  background: ${(props) => props.theme.colors.mediumGray};
  padding: 0 21px;
  border: none;
  border-radius: 20px;
`;
export const DirectInput = styled.input`
  width: 798px;
  height: 40px;
  margin-left: 20px;
  background: ${(props) => props.theme.colors.mediumGray};
  border-radius: 20px;
  border: none;
  padding: 0 21px;
`;
export const UlDirectProps = styled.ul`
  margin-top: 60px;
  width: 1136px;
  position: relative;
  height: 40px;
  display: flex;
`;
export const PersonalContact = styled.div`
  position: relative;
  top: 10px;
  margin-left: 20px;
  width: 455px;
  height: 18px;
  font-family: "NanumGothic", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: ${(props) => props.theme.colors.blue};
`;
export const SubmitButton = styled.div`
  position: relative;
  width: 180px;
  height: 40px;
  padding: 7px 39px;
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 100px;
  font-family: "NanumGothic", sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
  left: 0px;
  right: 0px;
  margin: 70px auto;
  cursor: pointer;
`;
export const BoxPropsLi = styled.li`
  position: relative;
  width: 1156px;
  left: -10px;
  padding: 10px;
  height: auto;
  border: 1px solid ${(props) => props.theme.colors.mediumPurple};
  list-style: none;
  border-radius: 20px;
  margin-top: 20px;
  box-shadow: ${(props) => props.theme.colors.mediumPurple} 0px 0px 10px 5px;
`;
export const BoxPropsUl = styled.ul`
  top: -30px;
  position: relative;
  padding: 0px;
  width: 1156px;
  height: auto;
`;
