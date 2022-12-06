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
            <s.TenWon left={40}>유연 근무제</s.TenWon>
          </s.LiProps>
        </>
      ) : data?.workTimePerDay === undefined ? (
        <>
          <div>설정된 근무 시간이 없습니다.</div>
        </>
      ) : (
        <>
          <s.UlDirectProps>
            <s.LiProps>
              <s.ClockText>기본 근무시간</s.ClockText>
            </s.LiProps>
            <s.LiProps>
              <s.TenWon width={51} left={20}>
                {data.commuteStartTime}시
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
                {data.commuteEndTime}시
              </s.TenWon>
            </s.LiProps>
          </s.UlDirectProps>
          <s.UlDirectProps>
            <s.LiProps>
              <s.ClockText>하루 근무시간</s.ClockText>
            </s.LiProps>
            <s.LiProps>
              <s.TenWon width={51} left={20}>
                {data.workTimePerDay}시
              </s.TenWon>
            </s.LiProps>
          </s.UlDirectProps>
          <s.UlDirectProps>
            <s.LiProps>
              <s.ClockText>주당 근무시간</s.ClockText>
            </s.LiProps>
            <s.LiProps>
              <s.TenWon width={51} left={20}>
                {data.workTimePerWeek}시
              </s.TenWon>
            </s.LiProps>
          </s.UlDirectProps>
        </>
      )}
    </>
  );
};
export default ClockWork;
