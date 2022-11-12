import * as s from "../style";
import { supportData } from "../../../../../export/data";
const BokLi = ({ wel, meal }) => {
  console.time("asd");
  let ad = [];
  if (meal.breakfast) {
    ad.push("조식제공");
  }
  if (meal.lunch) {
    ad.push("중식제공");
  }
  if (meal.dinner) {
    ad.push("석식제공");
  }
  const asdf = new Set(ad);
  const sd = [...asdf];
  console.timeEnd("asd");
  const arr = sd;
  return (
    <>
      <s.Titlet>복리후생</s.Titlet>
      <s.Subdd>식사</s.Subdd>
      <s.UlProps>
        <s.LiProps>
          <s.TenWon width={96} left={-40}>
            식대지원
          </s.TenWon>
        </s.LiProps>
        <s.LiProps>
          <s.WonText>{meal.mealSupportPay}</s.WonText>
        </s.LiProps>
        <s.LiProps>
          <s.TenWon width={68} left={5}>
            원(월)
          </s.TenWon>
        </s.LiProps>
      </s.UlProps>
      <s.EssentialUl>
        {arr.map((user) => (
          <>
            <s.EssentialLi>
              <s.ButtonProps width={101} left={20}>
                {user}
              </s.ButtonProps>
            </s.EssentialLi>
          </>
        ))}
      </s.EssentialUl>
    </>
  );
};
export default BokLi;
