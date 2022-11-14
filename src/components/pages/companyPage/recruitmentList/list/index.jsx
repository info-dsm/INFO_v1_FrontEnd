import styled from "styled-components";

import ImageProps from "./Status";
const ResistrationList = ({ data }) => {
  console.log(data);
  return (
    <>
      <Ul>
        {data.as.map((user, i) => (
          <>
            <Li>
              <Recruitment>
                <div>
                  <ImageProps status={data.count[i].approve} />
                  <Number>{data.count[i].id}</Number>
                  <Category>
                    <div>대분류</div>
                    <Main>{data.ad[i]}</Main>
                  </Category>
                  <Category>
                    <div>소분류</div>
                    <Sub>{user}</Sub>
                  </Category>
                  <Category>
                    <div>채용인원</div>
                    <div>{data.count[i].total}명</div>
                  </Category>
                </div>
                <ApplicantList>
                  <div>{data.count[i].day}</div>
                  <button>신청자 리스트</button>
                </ApplicantList>
              </Recruitment>
            </Li>
          </>
        ))}
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
