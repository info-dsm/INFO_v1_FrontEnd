import styled from "styled-components";
import { StyledLink } from "../../../../../style/theme";

import ImageProps from "./Status";
const ResistrationList = ({ data }) => {
  return (
    <>
      <Ul>
        {data === [] ? (
          <></>
        ) : (
          <>
            {data.map((user, i) => (
              <>
                <Li>
                  <Recruitment>
                    <div>
                      <ImageProps status={user.approveStatus} />
                      <Number>{i + 1}</Number>
                      <Category>
                        <div>대분류</div>
                        <Main>
                          {
                            user.notice.classificationResponse[0]
                              .bigClassification.bigClassificationName
                          }
                        </Main>
                      </Category>
                      <Category>
                        <div>소분류</div>
                        <Sub>{user.notice.classificationResponse[0].name}</Sub>
                      </Category>
                      <Category>
                        <div>채용인원</div>
                        <div>{user.notice.numberOfEmployee}명</div>
                      </Category>
                    </div>
                    <ApplicantList>
                      <div>{user.notice.noticeOpenPeriod.endDate}</div>
                      <StyledLink
                        to={`/company/manage/user/${user.notice.noticeId}`}
                        state={user.notice}
                      >
                        <button>신청자 리스트</button>
                      </StyledLink>
                    </ApplicantList>
                  </Recruitment>
                </Li>
              </>
            ))}
          </>
        )}
      </Ul>
    </>
  );
};
export default ResistrationList;
const Recruitment = styled.div`
  width: 100%;
  height: 83px;
  border-radius: 24px;
  background-color: #f0f0f0;
  border: none;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 31px;
  display: flex;
  justify-content: space-between;
  > div {
    height: 83px;
    display: flex;
    align-items: center;
  }
`;

const ApplicantList = styled.div`
  div {
    font-size: 16px;
    margin-right: 17px;
  }
  button {
    width: 120px;
    height: 40px;
    color: #fff;
    border: none;
    border-radius: 24px;
    background-color: #4000ff;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
  }
`;

const Number = styled.div`
  width: 10px;
  font-size: 24px;
  font-weight: 700;
  color: #4000ff;
  margin-left: 20px;
  margin-right: 31px;
`;
const Main = styled.div`
  width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Sub = styled.div`
  width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Category = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 20px;
  margin-right: 61px;
  div {
    font-size: 24px;
    font-weight: 700;
    color: #4000ff;
    + div {
      color: #000;
      font: 400 normal 18px "NanumGothic", sans-serif;
    }
  }
`;
const Ul = styled.ul`
  position: relative;
  list-style-type: none;
`;
const Li = styled.li`
  width: 1136px;
`;
