import * as s from "../style";
const GeunMu = ({ company, address }) => {
  let ad;
  if (!address.isSameWithCompanyAddress) {
    ad = address.otherPlace;
  } else {
    ad = company;
  }

  return (
    <>
      <s.TextGeun>{ad}</s.TextGeun>
    </>
  );
};
export default GeunMu;
