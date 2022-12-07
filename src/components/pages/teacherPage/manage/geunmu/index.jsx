import * as s from "../style";
const GeunMu = ({ address }) => {
  let ad;
  if (!address.isSameWithCompanyAddress) {
    ad = address.otherPlace;
  } else {
    ad = "회사 정보 근무지와 같습니다.";
  }

  return (
    <>
      <s.TextGeun>{ad}</s.TextGeun>
    </>
  );
};
export default GeunMu;
