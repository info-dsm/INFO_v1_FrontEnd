import { useDispatch } from "react-redux";
import { stateModalManage } from "../../../../redux/store/modal";
import { useSelector } from "react-redux";
import { TitleData, TeacherData } from "../../../../export/data";
import Header from "../../../common/header";
import { useState } from "react";
import * as s from "./style";
import ModalManage from "./modal";
import { getNoticeItem, noticeRequest } from "../../../api/teacher";
import { SubmitData } from "../../../../export/data";
import BokLi from "./Bokli";
import ErrorPage from "../../../common/error";
import LoadingPage from "../../../common/loading";
import ClockWork from "./clockTime";
import BokliAfter from "./Bokli/bok";
import GeunMu from "./geunmu";
import { DownLoadImg } from "../../../../images";
import { useParams } from "react-router-dom";
import { StyledLink } from "../../../../style/theme";
import NavProps from "../../../common/nav";
const RequstManage = () => {
  const { noticeId } = useParams();
  const { status, data } = getNoticeItem(noticeId);
  const modal = useSelector((state) => state.modal.state.modalmanage);
  const count = useSelector((count) => count.count.count.manageCount);
  const [file] = useState([]);

  const dispatch = useDispatch();
  const ShowModal = () => {
    dispatch(stateModalManage(true));
  };
  return (
    <>
      {status === "loading" ? (
        <LoadingPage />
      ) : status === "error" ? (
        <ErrorPage />
      ) : (
        <>
          <Header
            title="모집의뢰 관리"
            description="회사정보를 볼 수 있습니다."
          />
          <NavProps props={TeacherData} idx={1} />
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
                    {
                      data.recruitmentBusinessResponse[count]
                        .classificationResponse.bigClassification
                        .bigClassificationName
                    }
                  </s.LiContent>
                  <s.LiContent width={167}>
                    {
                      data.recruitmentBusinessResponse[count]
                        .classificationResponse.name
                    }
                  </s.LiContent>
                  <s.LiContent width={191}>
                    {data.recruitmentBusinessResponse[count].numberOfEmployee}
                  </s.LiContent>
                  <s.LiContent width={566}>
                    {
                      data.recruitmentBusinessResponse[count]
                        .detailBusinessDescription
                    }
                  </s.LiContent>
                </s.UlContent>
                <s.SubTitle>필요언어</s.SubTitle>
                <s.EssentialUl>
                  {data.recruitmentBusinessResponse[count].languageSet.map(
                    (user) => (
                      <s.EssentialLi>
                        <s.ButtonProps>{user.languageName}</s.ButtonProps>
                      </s.EssentialLi>
                    )
                  )}
                </s.EssentialUl>
                <s.GradeUl>
                  <li>
                    <s.SubTitle>기타기술</s.SubTitle>
                  </li>
                  <li>
                    <s.GradesUl>
                      <s.AsdfProps>성적(커트라인)</s.AsdfProps>
                      <s.GradesLi>
                        상위{" "}
                        {data.recruitmentBusinessResponse[count].gradeCutLine}
                        %이내
                      </s.GradesLi>
                    </s.GradesUl>
                  </li>
                </s.GradeUl>
                <s.EssentialUl>
                  {data.recruitmentBusinessResponse[count].technologySet.map(
                    (user) => (
                      <s.EssentialLi>
                        <s.ButtonProps>{user.technologyName}</s.ButtonProps>
                      </s.EssentialLi>
                    )
                  )}
                </s.EssentialUl>
                <s.SubTitle>국가자격증</s.SubTitle>
                <s.EssentialUl>
                  {data.recruitmentBusinessResponse[count].certificateList.map(
                    (user) => (
                      <s.EssentialLi>
                        <s.ButtonProps>{user.certificateName}</s.ButtonProps>
                      </s.EssentialLi>
                    )
                  )}
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
                    <s.WonTest>300</s.WonTest>
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
            <BokLi meal={data.mealSupport} />
            <BokliAfter wel={data.welfare} />
            <s.Ring top={50} />
            <s.Titlet>출•퇴근시간</s.Titlet>
            <s.UlWork>
              <ClockWork data={data.workTime} />
            </s.UlWork>
            <s.Ring top={50} />
            <s.Titlet>모집기간</s.Titlet>
            <s.DailyUl>
              <s.LiProps>
                <s.ClockText>시작일</s.ClockText>
              </s.LiProps>
              <s.LiProps>
                <s.WonText>{data.noticeOpenPeriod.startDate}</s.WonText>
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
                <s.WonText>{data.noticeOpenPeriod.endDate}</s.WonText>
              </s.LiProps>
            </s.DailyUl>
            <s.Ring top={50} />
            <s.Titlet>전형절차</s.Titlet>
            <s.UlAddmision>
              {data.interviewProcessList.map((user, i) => (
                <>
                  <s.InputLi>
                    <s.ClockText>{i + 1}차전형일</s.ClockText>
                  </s.InputLi>
                  <s.InputLi>
                    <s.JunText>{user[`${i + 1}`]}</s.JunText>
                  </s.InputLi>
                </>
              ))}
            </s.UlAddmision>
            <s.Ring top={50} />
            <s.Titlet>참고서류</s.Titlet>
            <s.UlSubmitted>
              {data.formAttachmentList.map((item) => (
                <>
                  <s.EssentialLi>
                    <s.ButtonProps>
                      {item.fileName}
                      <a href={item.fileUrl} download={item.fileName}>
                        <s.ImgDown src={DownLoadImg} alt="" />
                      </a>
                    </s.ButtonProps>
                  </s.EssentialLi>
                </>
              ))}
            </s.UlSubmitted>

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
            <s.TextGeun>{data.otherFeatures}</s.TextGeun>
            <s.Ring top={50} />
            <s.Titlet>근무지</s.Titlet>
            <GeunMu
              company={data.company.companyInformation.homeAddress.fullAddress}
              address={data.workPlace}
            />
            <s.Ring top={50} />
            {/* <s.Titlet>개별등록</s.Titlet>
            <s.UlDirectProps>
              <s.LiProps></s.LiProps>
              <s.LiProps>
                <s.WonText>
                  {<>개인컨택 등록</>: <>개인컨택 미등록</>}
                </s.WonText>
              </s.LiProps>
            </s.UlDirectProps>
            <s.Ring top={50} /> */}
            <s.UlPross>
              {SubmitData.map((item) => (
                <s.LiProps>
                  <StyledLink to="/teacher/list">
                    <s.SubmitButton
                      onClick={() =>
                        noticeRequest(
                          item.method,
                          item.path,
                          data.noticeId,
                          item.message
                        )
                      }
                    >
                      {item.text}
                    </s.SubmitButton>
                  </StyledLink>
                </s.LiProps>
              ))}
            </s.UlPross>
          </s.Table>
          <s.TableTwo></s.TableTwo>
          {modal ? (
            <ModalManage Data={data.recruitmentBusinessResponse} />
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};
export default RequstManage;
