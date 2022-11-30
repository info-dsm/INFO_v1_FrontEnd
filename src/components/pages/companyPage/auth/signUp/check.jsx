import checkImg from "../../../../../images/checked.png";
import styled from "styled-components";
import failImg from "../../../../../images/failed.png";
const CompanySuccessCheck = ({ elm, success, info }) => {
  return (
    <>
      {elm.key === "email" && success.sendEmail !== "" ? (
        <Success src={success.sendEmail ? checkImg : failImg} alt="" />
      ) : (
        <></>
      )}
      {elm.key === "emailCheckCode" && success.checkSuccess !== "" ? (
        <Success src={success.checkSuccess ? checkImg : failImg} alt="" />
      ) : (
        <></>
      )}
      {elm.title === "비밀번호 확인" &&
      success.passwordSuccess !== "" &&
      info.password !== "" ? (
        <Success src={success.passwordSuccess ? checkImg : failImg} alt="" />
      ) : (
        <></>
      )}
    </>
  );
};

export default CompanySuccessCheck;

const Success = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;
