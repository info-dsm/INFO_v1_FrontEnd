import styled from "styled-components";
import LoadingPage from "../../../../common/loading";
import ErrorPage from "../../../../common/error";
import { getMyList } from "../../../../api/company/requesrResistration";
import ImageProps from "./Status";
const ResistrationList = () => {
  const { status, data } = getMyList();
  console.log(data);
  return (
    <>
      {status === "loading" ? (
        <LoadingPage />
      ) : status === "error" ? (
        <ErrorPage />
      ) : (
        <Ul>
          {data.map((user) => (
            <>
              {user.data.notice.recruitmentBusinessResponse.map((item) => (
                <Li>
                  <Recruitment>
                    <div>
                      <ImageProps status={user.approveStatus} />
                      <Number>{item.recruitmentBusinessId}</Number>
                      <Category>
                        <div>대분류</div>
                        <div>
                          {
                            item.classificationResponse.bigClassification
                              .bigClassificationName
                          }
                        </div>
                      </Category>
                      <Category>
                        <div>소분류</div>
                        <div>{item.classificationResponse.name}</div>
                      </Category>
                      <Category>
                        <div>채용인원</div>
                        <div>{item.numberOfEmployee}명</div>
                      </Category>
                    </div>
                    <ApplicantList>
                      <div>{user.data.notice.company.lastNoticeDate}</div>
                      <button>신청자 리스트</button>
                    </ApplicantList>
                  </Recruitment>
                </Li>
              ))}
            </>
          ))}
        </Ul>
      )}
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
  }
`;

const Number = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #4000ff;
  margin-left: 20px;
  margin-right: 31px;
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
      font-weight: 400;
      font-size: 20px;
    }
  }
`;
const Ul = styled.ul`
  position: relative;
  list-style-type: none;
`;
const Li = styled.li``;
