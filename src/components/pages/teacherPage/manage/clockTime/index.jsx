import * as s from "../style";
import { workData } from "../../../../../export/data";
import { useState, useEffect } from "react";
const ClockWork = ({ data }) => {
  // "commuteStartTime": Int?,
  // 		"commuteEndTime": Int?,
  // 		"isFlexible": Boolean
  return (
    <>
      {data.isFlexible ? (
        <>
          <s.LiProps>
            <s.TenWon>유연 근무제</s.TenWon>
          </s.LiProps>
        </>
      ) : (
        <>
          <s.UlDirectProps>
            <s.LiProps>
              <s.TenWon>고정 출근시간</s.TenWon>
            </s.LiProps>
            <s.LiProps>
              <s.TenWon width={51} left={20}>
                시
              </s.TenWon>
            </s.LiProps>
            <s.LiProps>
              <s.TenWon width={51} left={20}>
                시
              </s.TenWon>
            </s.LiProps>
            <s.LiProps>
              <s.TenWon width={51} left={20}>
                ~
              </s.TenWon>
            </s.LiProps>
            <s.LiProps>
              <s.TenWon></s.TenWon>
            </s.LiProps>
            <s.LiProps>
              <s.TenWon width={51} left={20}>
                시
              </s.TenWon>
            </s.LiProps>
          </s.UlDirectProps>
        </>
      )}
    </>
  );
};
export default ClockWork;
