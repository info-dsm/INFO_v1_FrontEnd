import styled from "styled-components";
export const Table = styled.div`
  position: relative;
  width: 1136px;
  height: auto;
  top: 50px;
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
  margin-bottom: 70px;
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
export const WonText = styled.div`
  position: relative;
  height: 28px;
  margin-top: 3px;
  margin-left: 20px;
  font: 400 normal 24px "NanumGothic";
  color: ${(props) => props.theme.colors.black};
`;
export const WonTest = styled.div`
  position: relative;
  height: 28px;
  margin-top: 3px;
  font: 400 normal 24px "NanumGothic";
  color: ${(props) => props.theme.colors.black};
`;
export const JunText = styled.div`
  position: relative;
  height: 28px;
  margin-top: 5px;
  margin-left: 20px;
  font: 700 normal 24px "NanumGothic";
  color: ${(props) => props.theme.colors.black};
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
  width: 130px;
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
  width: max-content;
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
export const UlPropss = styled.ul`
  position: relative;
  margin-top: 30px;
  width: 1136px;
  height: 40px;
  display: flex;
  left: -20px;
`;
export const LiProps = styled.li`
  position: relative;
  list-style: none;
  height: 100%;
`;
export const LiPropss = styled.li`
  position: relative;
  height: 100%;
  margin-right: 40px;
  width: auto;
  height: 28px;
  font: 400 normal 24px "NaumGothic";
  line-height: 24px;
  color: ${(props) => props.theme.colors.black};
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
export const TenWon = styled.div`
  position: relative;
  width: ${(props) => props.width}px;
  height: 28px;
  margin-top: 8px;
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
export const ClockTexts = styled.div`
  position: relative;
  margin-top: 3px;
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
  width: 560px;
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
  padding: 8px 39px;
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 100px;
  font: 700 16px "NanumGothic", sans-serif;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
`;
export const UlPross = styled.ul`
  position: relative;
  width: 840px;
  height: 40px;
  left: 0px;
  right: 0px;
  margin: 70px auto;
  display: flex;
  justify-content: space-between;
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
export const AsdfProps = styled.li`
  font: 700 normal 24px "NanumGothic", sans-serif;
  color: ${(props) => props.theme.colors.blue};
`;
export const GradeUl = styled.ul`
  position: relative;
  width: 1136px;
  display: flex;
  list-style-type: none;
  left: -40px;
`;
export const GradesUl = styled.ul`
  position: relative;
  width: 230px;
  height: 56px;
  top: 50px;
  left: 410px;
  list-style-type: none;
`;
export const GradesLi = styled.li`
  font: 400 normal 20px "NanumGothic";
  color: ${(props) => props.theme.colors.black};
`;
export const TextGeun = styled.div`
  margin-top: 50px;
  font: 500 normal 20px "NanumGothic";
`;
export const ImgDown = styled.img`
  position: relative;
  width: 17px;
  height: 17px;
  top: 3px;
  left: 5px;
`;
export const ArrowImg = styled.img`
  position: relative;
  top: 40px;
  left: 40px;
  width: 40px;
  height: 40px;
`;
