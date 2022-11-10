import { useDispatch } from "react-redux";
import { stateModalManage } from "../../../../redux/store/modal";
import { useSelector } from "react-redux";
import { TitleData } from "../../../../export/data";
import Header from "../../../common/header";
import { useState } from "react";
import { mealData, supportData, workData } from "../../../../export/data";
import * as s from "./style";
import ModalManage from "./modal";
const RequstManage = () => {
  const modal = useSelector((state) => state.modal.state.modalmanage);
  const count = useSelector((count) => count.count.count.manageCount);
  const Data = useSelector((stack) => stack.selectValue.recruitmentRequest);
  const [admission] = useState([1]);
  const [file] = useState([]);
  const dispatch = useDispatch();
  const ShowModal = () => {
    dispatch(stateModalManage(true));
  };
  return (
    <>
      <Header title="모집의뢰 등록" description="모집공고를 등록해보세요" />
      <s.Table>
        <s.Title>채용직무</s.Title>
        <s.Button onClick={() => ShowModal()}>선택</s.Button>
        <s.BoxPropsUl>
          <s.BoxPropsLi>
            <s.UlSubTitle>
              {TitleData.map((user) => (
                <>
                  <s.LiSubTitle width={user.width} margin={user.margin}>
                    {user.data}
                  </s.LiSubTitle>
                  <s.LiSubTitle width={user.width} margin={user.margin}>
                    {user.data1}
                  </s.LiSubTitle>
                </>
              ))}
            </s.UlSubTitle>
            <s.UlContent>
              <s.LiContent width={212}>
                {Data[count].bigClassification}
              </s.LiContent>
              <s.LiContent width={167}>
                {Data[count].smallClassification}
              </s.LiContent>
              <s.LiContent width={191}>
                {Data[count].numberOfEmployee}
              </s.LiContent>
              <s.LiContent width={566}>
                {Data[count].detailBusinessDescription}
              </s.LiContent>
            </s.UlContent>
            <s.SubTitle>필요언어</s.SubTitle>
            <s.EssentialUl>
              {Data[count].languageList.map((user) => (
                <s.EssentialLi>
                  <s.ButtonProps>{user}</s.ButtonProps>
                </s.EssentialLi>
              ))}
            </s.EssentialUl>
            <s.GradeUl>
              <li>
                <s.SubTitle>기타기술</s.SubTitle>
              </li>
              <li>
                <s.GradesUl>
                  <s.AsdfProps>성적(커트라인)</s.AsdfProps>
                  <s.GradesLi>상위 {Data[count].gradeCutLine}%이내</s.GradesLi>
                </s.GradesUl>
              </li>
            </s.GradeUl>
            <s.EssentialUl>
              {Data[count].technologyList.map((user) => (
                <s.EssentialLi>
                  <s.ButtonProps>{user}</s.ButtonProps>
                </s.EssentialLi>
              ))}
            </s.EssentialUl>
            <s.SubTitle>국가자격증</s.SubTitle>
            <s.EssentialUl>
              {Data[count].needCertificateList.map((user) => (
                <s.EssentialLi>
                  <s.ButtonProps>{user}</s.ButtonProps>
                </s.EssentialLi>
              ))}
            </s.EssentialUl>
          </s.BoxPropsLi>
        </s.BoxPropsUl>
        <s.Ring top={50} />
        <s.Titlet>급여</s.Titlet>
        <s.UlMoney>
          <s.LiMoney>
            <s.UlProps>
              <s.LiProps>
                <s.TestText width={96}>실습수당</s.TestText>
              </s.LiProps>
              <s.LiProps>
                <s.WonText>200</s.WonText>
              </s.LiProps>
              <s.LiProps>
                <s.TenWon width={91} left={5}>
                  만원(월)
                </s.TenWon>
              </s.LiProps>
            </s.UlProps>
          </s.LiMoney>
          <s.LiMoney>
            <s.UlProps>
              <s.LiProps>
                <s.TestText width={235}>정규직 전환 시 (연봉)</s.TestText>
              </s.LiProps>
              <s.LiProps>
                <s.WonText>2800</s.WonText>
              </s.LiProps>
              <s.LiProps>
                <s.TenWon width={10} left={20}>
                  ~
                </s.TenWon>
              </s.LiProps>
              <s.LiProps>
                <s.WonText>3400</s.WonText>
              </s.LiProps>
              <s.LiProps>
                <s.TenWon width={51} left={5}>
                  만원
                </s.TenWon>
              </s.LiProps>
            </s.UlProps>
          </s.LiMoney>
          <s.LiMoney>
            <s.UlProps>
              <s.LiProps>
                <s.TestText width={96}>보너스</s.TestText>
              </s.LiProps>
              <s.LiProps>
                <s.WonText>300</s.WonText>
              </s.LiProps>
              <s.LiProps>
                <s.TenWon width={220} left={5}>
                  만원(대략적인 금액)
                </s.TenWon>
              </s.LiProps>
            </s.UlProps>
          </s.LiMoney>
        </s.UlMoney>
        <s.Ring top={60} />
        <s.Titlet>복리후생</s.Titlet>
        <s.Subdd>식사</s.Subdd>
        <s.UlProps>
          <s.LiProps>
            <s.TenWon width={96} left={-40}>
              식대지원
            </s.TenWon>
          </s.LiProps>
          <s.LiProps>
            <s.WonText>34000</s.WonText>
          </s.LiProps>
          <s.LiProps>
            <s.TenWon width={68} left={5}>
              원(월)
            </s.TenWon>
          </s.LiProps>
          {mealData.map((user) => (
            <>
              <s.TenWon width={101} left={20}>
                {user}
              </s.TenWon>
            </>
          ))}
        </s.UlProps>
        <s.Subdd>복리후생</s.Subdd>
        <s.UlLineBreak>
          {supportData.map((user) => (
            <>
              <s.LiPropss>{user}</s.LiPropss>
            </>
          ))}
        </s.UlLineBreak>
        <s.Ring top={50} />
        <s.Titlet>출•퇴근시간</s.Titlet>
        <s.UlWork>
          {workData.map((user) => (
            <>
              <s.UlProps>
                <s.LiProps>
                  <s.ClockText>{user.clock}</s.ClockText>
                </s.LiProps>
                <s.LiProps>
                  <s.WonText>21</s.WonText>
                </s.LiProps>
                <s.LiProps>
                  <s.TenWon width={51} left={5}>
                    {user.si}
                  </s.TenWon>
                </s.LiProps>
              </s.UlProps>
            </>
          ))}
        </s.UlWork>
        <s.Ring top={50} />
        <s.Titlet>모집기간</s.Titlet>
        <s.DailyUl>
          <s.LiProps>
            <s.ClockText>시작일</s.ClockText>
          </s.LiProps>
          <s.LiProps>
            <s.WonText>2022-10-21</s.WonText>
          </s.LiProps>
          <s.LiProps>
            <s.TenWon width={10} left={0}>
              ~
            </s.TenWon>
          </s.LiProps>
          <s.LiProps>
            <s.ClockText>종료일</s.ClockText>
          </s.LiProps>
          <s.LiProps>
            <s.WonText>2022-11-08</s.WonText>
          </s.LiProps>
        </s.DailyUl>
        <s.Ring top={50} />
        <s.Titlet>전형절차</s.Titlet>
        <s.UlAddmision>
          {admission.map((user, i) => (
            <>
              <s.InputLi>
                <s.ClockText>{i + 1}차전형일</s.ClockText>
              </s.InputLi>
              <s.InputLi></s.InputLi>
            </>
          ))}
        </s.UlAddmision>
        <s.Ring top={50} />
        <s.Titlet>제출서류</s.Titlet>
        <s.UlSubmitted>
          {file.map((files, i) => (
            <>
              <s.LiProps>
                <s.UlTable>
                  <s.LiProps>
                    <s.FileTextDiv>{files[0].name}</s.FileTextDiv>
                  </s.LiProps>
                  <s.LiProps>
                    <s.RemoveBtn>x</s.RemoveBtn>
                  </s.LiProps>
                </s.UlTable>
              </s.LiProps>
            </>
          ))}
        </s.UlSubmitted>
        <s.Ring top={90} />
        <s.Titlet>기타특기사항</s.Titlet>
        <s.Ring top={50} />
        <s.Titlet>근무지</s.Titlet>
        <s.UlDirectProps>
          <s.LiProps></s.LiProps>
          <s.LiProps>
            <s.TenWon width={185} left={20}>
              회사 주소와 동일
            </s.TenWon>
          </s.LiProps>
          <s.LiProps></s.LiProps>
          <s.LiProps></s.LiProps>
        </s.UlDirectProps>
        <s.Ring top={50} />
        <s.Titlet>개별등록</s.Titlet>
        <s.UlDirectProps>
          <s.LiProps></s.LiProps>
          <s.LiProps>
            <s.TenWon width={153} left={20}>
              개인컨택 등록
            </s.TenWon>
          </s.LiProps>
          <s.LiProps>
            <s.PersonalContact>
              *개인컨택인 경우 모집구분은 자동으로 모집종료로 등록됩니다.
            </s.PersonalContact>
          </s.LiProps>
        </s.UlDirectProps>
        <s.Ring top={50} />
        <s.SubmitButton>모집의뢰 등록</s.SubmitButton>
      </s.Table>
      <s.TableTwo></s.TableTwo>
      {modal ? <ModalManage Data={Data} /> : <></>}
    </>
  );
};
export default RequstManage;
