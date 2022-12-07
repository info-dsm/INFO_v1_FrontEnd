import * as s from "../../style";
const BokliAfter = ({ wel }) => {
  let ad = [];
  if (wel.dormitorySupport) {
    ad.push("기숙사 지원");
  }
  if (wel.selfDevelopmentPay) {
    ad.push("자기개발비");
  }
  if (wel.equipmentSupport) {
    ad.push("장비지원");
  }
  if (wel.youthTomorrowChaeumDeduction) {
    ad.push("청년내일채움");
  }
  if (wel.alternativeMilitaryPlan) {
    ad.push("병특신청");
  }
  return (
    <>
      <s.Subdd>복리후생</s.Subdd>
      <s.UlLineBreak>
        <s.EssentialLi>
          <s.ButtonProps width={101} left={20}>
            {wel.elseSupport}
          </s.ButtonProps>
        </s.EssentialLi>
      </s.UlLineBreak>
    </>
  );
};
export default BokliAfter;
