import * as s from "../style";
import { workData } from "../../../../../export/data";
import { useState, useEffect } from "react";
const ClockWork = ({ data }) => {
  const [work, setWork] = useState(workData);
  useEffect(() => {
    let state = workData;
    state[0].workTime = data.untilCommuteStartTime;
    state[1].workTime = data.untilCommuteEndTime;
    state[2].workTime = data.workTimeForWeek;
    setWork(state);
  }, [
    data.untilCommuteStartTime,
    data.untilCommuteEndTime,
    data.workTimeForWeek,
  ]);

  return (
    <>
      {work.map((user) => (
        <>
          <s.UlPropss>
            <s.LiProps>
              <s.ClockTexts>{user.clock}</s.ClockTexts>
            </s.LiProps>
            <s.LiProps>
              <s.WonText>{user.workTime}</s.WonText>
            </s.LiProps>
            <s.LiProps>
              <s.TenWon width={51} left={5}>
                {user.si}
              </s.TenWon>
            </s.LiProps>
          </s.UlPropss>
        </>
      ))}
    </>
  );
};
export default ClockWork;
