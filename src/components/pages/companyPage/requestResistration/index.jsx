import { useDispatch } from "react-redux";
import { stateModal } from "../../../../redux/store/modal";
import { value } from "../../../../redux/store/selectValue";
import { useSelector } from "react-redux";
import SelectModal from "./modal";
import { CompanyData2, TitleData } from "../../../../export/data";
import Header from "../../../common/header";
import { useState, useCallback, useRef } from "react";
import { mealData, supportData, workData } from "../../../../export/data";
import SelectComplete from "../../../common/select";
import * as s from "./style";
import {
  InterviewProcess,
  postNotice,
} from "../../../api/company/requesrResistration";
import { open } from "../../../common/addresshook";
import { useNavigate } from "react-router-dom";
import NavProps from "../../../common/nav";
import { Notice } from "../../../common/notice";
import ModalPortal from "./modal/portal";
import { useQuery } from "@tanstack/react-query";
import LoadingPage from "../../../common/loading";
import ErrorPage from "../../../common/error";
const RequstResistration = () => {
  const modal = useSelector((state) => state.modal.state.modalrequest);
  const Data = useSelector((stack) => stack.selectValue.state);
  const { status, data } = useQuery(["getInterviewData"], () =>
    InterviewProcess()
  );
  const [admission, setAdmission] = useState(["클릭 시 선택"]);
  const [file, setFile] = useState([]);
  const [locate, setLocate] = useState({ set: 1, text: "" });
  const [mealState, setMealState] = useState(0);
  const [state, setState] = useState(0);
  const [special, setSpecial] = useState("");
  const [dateState, setDateState] = useState({
    startDate: new Date().toISOString().substring(0, 10),
    endDate: "",
  });
  const [, setReRender] = useState({});
  const [clockState, setClockState] = useState(false);
  const [chulGeun, setChulGeun] = useState(0);
  const [today, setToday] = useState(0);
  const [week, setWeek] = useState(0);
  const BokRef = useRef([]);
  const MealRef = useRef([]);
  const MoneyRef = useRef([]);
  const WelfareRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setLocate({ set: locate.set, text: fullAddress });
    document.body.removeChild(document.getElementById("daum_postcode_script"));
  };
  const AddAdmision = useCallback(() => {
    setAdmission([...admission, "클릭 시 선택"]);
  }, [admission]);
  const ChangeAdmision = (props, num) => {
    let ad = admission;
    ad[num] = props;
    setAdmission(ad);
    console.log(admission);
    setReRender({});
  };
  const RemoveAdmision = useCallback(
    (index) => {
      // eslint-disable-next-line array-callback-return
      const ad = admission.filter((e, i) => {
        if (i !== index) {
          return e;
        }
      });
      setAdmission(ad);
    },
    [admission]
  );
  const AddFileProps = useCallback(
    (e) => {
      const ad = [...file, ...e.target.files];
      setFile(ad);
    },
    [file]
  );
  const RemoveFileProps = useCallback(
    (index) => {
      // eslint-disable-next-line array-callback-return
      const ad = file.filter((e, i) => {
        if (i !== index) {
          return e;
        }
      });
      setFile(ad);
    },
    [file]
  );
  const submit = () => {
    let arr = [];
    const Recruitment = {
      smallClassificationList: [Data.smallClassification],
      numberOfEmployee: parseInt(Data.numberOfEmployee),
      detailBusinessDescription: Data.detailBusinessDescription,
      gradeCutLine: parseInt(Data.gradeCutLine),
      needCertificateList: Data.needCertificateList,
      languageList: Data.languageList,
      technologyList: Data.technologyList,
    };
    console.log(Recruitment);
    console.log(data);
    for (let i = 0; i < admission.length; i++) {
      const find = (e) => {
        if (e.meaning === admission[i]) {
          return true;
        }
      };
      console.log(data.findIndex(find));
      arr.push(data[data.findIndex(find)].process);
    }
    let qwer = {};
    for (let key in arr) {
      qwer[`${parseInt(key) + 1}`] = arr[key];
    }
    console.log(qwer);
    console.log(Recruitment);
    let ad = {
      pay: {
        fieldTrainingPayPerMonth: parseInt(MoneyRef.current[0].value),
        fullTimeEmploymentPay: {
          yearPayStart: parseInt(MoneyRef.current[1].value),
          yearPayEnd: parseInt(MoneyRef.current[2].value),
        },
      },
      mealSupport: {
        mealSupportPay: parseInt(mealState),
        breakfast: MealRef.current[0].checked,
        lunch: MealRef.current[1].checked,
        dinner: MealRef.current[2].checked,
      },
      welfare: {
        dormitorySupport: BokRef.current[0].checked,
        selfDevelopmentPay: BokRef.current[1].checked,
        equipmentSupport: BokRef.current[2].checked,
        youthTomorrowChaeumDeduction: BokRef.current[3].checked,
        alternativeMilitaryPlan: BokRef.current[4].checked,
      },
      noticeOpenPeriod: {
        startDate: dateState.startDate,
        endDate: dateState.endDate,
      },
      interviewProcessMap: qwer,
      otherFeatures: special,
    };
    if (!clockState) {
      ad = {
        ...Recruitment,
        workTime: {
          isFlexible: true,
        },
        ...ad,
      };
    } else {
      ad = {
        ...Recruitment,
        workTime: {
          commuteStartTime: chulGeun,
          commuteEndTime: state,
          workTimePerDay: today,
          workTimePerWeek: week,
          isFlexible: false,
        },
        ...ad,
      };
    }
    let as = {};
    if (locate.set === 2) {
      as = {
        ...ad,
        workPlace: {
          isSameWithCompanyAddress: false,
          otherPlace: locate.text,
        },
        isPersonalContact: false,
      };
    } else {
      as = {
        ...ad,
        workPlace: {
          isSameWithCompanyAddress: true,
        },
        isPersonalContact: false,
      };
    }
    console.log(as);
    postNotice(file, as);
    dispatch(
      value({
        bigClassification: "",
        smallClassification: "",
        numberOfEmployee: 0,
        detailBusinessDescription: "",
        gradeCutLine: 0,
        needCertificateList: [],
        languageList: [],
        technologyList: [],
      })
    );
    navigate("/company/list");
  };
  return (
    <>
      {status === "loading" ? (
        <>
          <LoadingPage />
        </>
      ) : status === "error" ? (
        <>
          <ErrorPage />
        </>
      ) : (
        <>
          <Header
            title="모집의뢰 관리"
            description="회사 정보를 볼 수 있습니다."
          />
          <NavProps props={CompanyData2} idx={1} />
          <s.Table>
            <s.Title>채용직무</s.Title>
            <s.Button
              onClick={() => {
                dispatch(stateModal(true));
              }}
            >
              선택
            </s.Button>
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
                    {Data.bigClassification}
                  </s.LiContent>
                  <s.LiContent width={167}>
                    {Data.smallClassification}
                  </s.LiContent>
                  <s.LiContent width={191}>
                    {Data.numberOfEmployee}명
                  </s.LiContent>
                  <s.LiContent width={566}>
                    {Data.detailBusinessDescription}
                  </s.LiContent>
                </s.UlContent>
                <s.SubTitle>필요언어</s.SubTitle>
                <s.EssentialUl>
                  {Data.languageList.map((user) => (
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
                      <s.GradesLi>상위 {Data.gradeCutLine}%이내</s.GradesLi>
                    </s.GradesUl>
                  </li>
                </s.GradeUl>
                <s.EssentialUl>
                  {Data.technologyList.map((user) => (
                    <s.EssentialLi>
                      <s.ButtonProps>{user}</s.ButtonProps>
                    </s.EssentialLi>
                  ))}
                </s.EssentialUl>
                <s.SubTitle>국가자격증</s.SubTitle>
                <s.EssentialUl>
                  {Data.needCertificateList.map((user) => (
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
                    <s.InputMoney
                      type="text"
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
                      }}
                      ref={(el) => (MoneyRef.current[0] = el)}
                    ></s.InputMoney>
                  </s.LiProps>
                  <s.LiProps>
                    <s.TenWon width={91} left={20}>
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
                    <s.InputMoney
                      ref={(el) => (MoneyRef.current[1] = el)}
                      type="text"
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
                      }}
                    ></s.InputMoney>
                  </s.LiProps>
                  <s.LiProps>
                    <s.TenWon width={10} left={20}>
                      ~
                    </s.TenWon>
                  </s.LiProps>
                  <s.LiProps>
                    <s.InputMoney
                      ref={(el) => (MoneyRef.current[2] = el)}
                      type="text"
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
                      }}
                    ></s.InputMoney>
                  </s.LiProps>
                  <s.LiProps>
                    <s.TenWon width={51} left={20}>
                      만원
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
                <s.InputMoney
                  type="text"
                  value={mealState}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    setMealState(e.target.value);
                  }}
                ></s.InputMoney>
              </s.LiProps>
              <s.LiProps>
                <s.TenWon width={68} left={20}>
                  원(월)
                </s.TenWon>
              </s.LiProps>
              {mealData.map((user, i) => (
                <>
                  <s.CheckInput
                    type="checkbox"
                    value={user}
                    left={60}
                    ref={(el) => (MealRef.current[i] = el)}
                  />
                  <s.TenWon width={101} left={20}>
                    {user}
                  </s.TenWon>
                </>
              ))}
            </s.UlProps>
            <s.Subdd>복리후생</s.Subdd>
            <s.UlLineBreak>
              {supportData.map((user, i) => (
                <>
                  <s.LiProps>
                    <s.CheckInput
                      type="checkbox"
                      value={user}
                      left={60}
                      ref={(el) => (BokRef.current[i] = el)}
                    ></s.CheckInput>
                  </s.LiProps>
                  <s.LiProps>
                    <s.TextBok>{user}</s.TextBok>
                  </s.LiProps>
                </>
              ))}
            </s.UlLineBreak>
            <s.UlProps>
              <s.LiProps>
                <s.TenWon width={51} left={-40}>
                  기타
                </s.TenWon>
              </s.LiProps>
              <s.LiProps>
                <s.GitaBokli
                  type="text"
                  ref={WelfareRef}
                  placeholder="기타복리후생을 적어주세요"
                ></s.GitaBokli>
              </s.LiProps>
            </s.UlProps>
            <s.Ring top={50} />
            <s.Titlet>근무시간</s.Titlet>
            <s.UlDirectProps>
              <s.LiProps>
                <s.CheckInput
                  type="radio"
                  name={3}
                  left={-20}
                  checked={clockState}
                  onClick={() => setClockState(true)}
                ></s.CheckInput>
              </s.LiProps>
              <s.LiProps>
                <s.TenWon> &nbsp; &nbsp;고정 근무시간</s.TenWon>
              </s.LiProps>
              <s.LiProps>
                <s.InputMoney
                  type="text"
                  readOnly={!clockState}
                  value={chulGeun}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    setChulGeun(e.target.value);
                  }}
                ></s.InputMoney>
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
                <s.InputMoney
                  type="text"
                  readOnly={!clockState}
                  value={state}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    setState(e.target.value);
                  }}
                ></s.InputMoney>
              </s.LiProps>
              <s.LiProps>
                <s.TenWon width={51} left={20}>
                  시
                </s.TenWon>
              </s.LiProps>
            </s.UlDirectProps>
            <s.UlDirectProps>
              <s.LiProps>
                <s.TenWon> &nbsp; &nbsp; 하루 근무시간</s.TenWon>
              </s.LiProps>
              <s.LiProps>
                <s.InputMoney
                  type="text"
                  readOnly={!clockState}
                  value={today}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    setToday(e.target.value);
                  }}
                ></s.InputMoney>
              </s.LiProps>
              <s.LiProps>
                <s.TenWon width={51} left={20}>
                  시
                </s.TenWon>
              </s.LiProps>
            </s.UlDirectProps>
            <s.UlDirectProps>
              <s.LiProps>
                <s.TenWon> &nbsp; &nbsp; 주당 근무시간</s.TenWon>
              </s.LiProps>
              <s.LiProps>
                <s.InputMoney
                  type="text"
                  readOnly={!clockState}
                  value={week}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    setWeek(e.target.value);
                  }}
                ></s.InputMoney>
              </s.LiProps>
              <s.LiProps>
                <s.TenWon width={51} left={20}>
                  시
                </s.TenWon>
              </s.LiProps>
            </s.UlDirectProps>
            <s.UlDirectProps>
              <s.LiProps>
                <s.CheckInput
                  type="radio"
                  name={3}
                  left={-20}
                  checked={!clockState}
                  onClick={() => {
                    setClockState(false);
                    setChulGeun("");
                    setState("");
                  }}
                ></s.CheckInput>
              </s.LiProps>

              <s.LiProps>
                <s.TenWon> &nbsp; &nbsp;유연 근무제</s.TenWon>
              </s.LiProps>
            </s.UlDirectProps>

            <s.UlWork>
              <s.UlProps></s.UlProps>
            </s.UlWork>
            <s.Ring top={50} />
            <s.Titlet>모집기간</s.Titlet>
            <s.DailyUl>
              <s.LiProps>
                <s.ClockText>시작일</s.ClockText>
              </s.LiProps>
              <s.LiProps>
                <s.InputQualifi
                  type="date"
                  onChange={(e) =>
                    setDateState({
                      startDate: e.target.value,
                      endDate: dateState.endDate,
                    })
                  }
                  value={dateState.startDate}
                  min={new Date().toISOString().substring(0, 10)}
                ></s.InputQualifi>
              </s.LiProps>
              <s.LiProps>
                <s.TenWon width={10} left={20}>
                  ~
                </s.TenWon>
              </s.LiProps>
              <s.LiProps>
                <s.ClockText>종료일</s.ClockText>
              </s.LiProps>
              <s.LiProps>
                <s.InputQualifi
                  type="date"
                  onChange={(e) =>
                    setDateState({
                      startDate: dateState.startDate,
                      endDate: e.target.value,
                    })
                  }
                  min={dateState.startDate}
                ></s.InputQualifi>
              </s.LiProps>
            </s.DailyUl>
            <s.Ring top={50} />
            <s.Titlet>전형절차</s.Titlet>
            <s.UlAddmision>
              {admission.map((item, i) => (
                <>
                  <s.InputLi>
                    <s.ClockText>{i + 1}차전형</s.ClockText>
                  </s.InputLi>
                  <s.InputLi>
                    <s.Delelte>
                      <SelectComplete
                        Data={data}
                        func={ChangeAdmision}
                        write={item}
                        num={i}
                      ></SelectComplete>
                      <s.DeleteButton onClick={() => RemoveAdmision(i)}>
                        X
                      </s.DeleteButton>
                    </s.Delelte>
                  </s.InputLi>
                </>
              ))}
              <s.InputLi>
                <s.PlusButton onClick={() => AddAdmision()} top={5}>
                  +
                </s.PlusButton>
              </s.InputLi>
            </s.UlAddmision>
            <s.Ring top={150} />
            <s.Titlet>제출서류</s.Titlet>
            <s.UlSubmitted>
              <s.LiProps>
                <s.LabelFile for="file">양식 등록</s.LabelFile>
                <s.FileHidden
                  type="file"
                  id="file"
                  multiple="multiple"
                  onChange={(e) => AddFileProps(e)}
                ></s.FileHidden>
              </s.LiProps>
              {file.map((files, i) => (
                <>
                  <s.LiProps>
                    <s.UlTable>
                      <s.LiProps>
                        <s.FileTextDiv>{files.name}</s.FileTextDiv>
                      </s.LiProps>
                      <s.LiProps>
                        <s.RemoveBtn onClick={() => RemoveFileProps(i)}>
                          x
                        </s.RemoveBtn>
                      </s.LiProps>
                    </s.UlTable>
                  </s.LiProps>
                </>
              ))}
            </s.UlSubmitted>
            <s.Ring top={90} />
            <s.Titlet>기타특기사항</s.Titlet>
            <s.InputTextProps
              type-="text"
              placeholder="지원자에게 전달할 사항 또는 회사 및 업무에 대해 강조할 사항등의 의견을 적어주세요."
              onChange={(e) => setSpecial(e.target.value)}
            ></s.InputTextProps>
            <s.Ring top={50} />
            <s.Titlet>근무지</s.Titlet>
            <s.UlDirectProps>
              <s.LiProps>
                <s.CheckInput
                  type="radio"
                  name={1}
                  left={-40}
                  checked={locate.set === 1}
                  onChange={() => setLocate({ set: 1, text: locate.text })}
                ></s.CheckInput>
              </s.LiProps>
              <s.LiProps>
                <s.TenWon width={185} left={20}>
                  회사 주소와 동일
                </s.TenWon>
              </s.LiProps>
              <s.LiProps>
                <s.CheckInput
                  type="radio"
                  name={1}
                  left={60}
                  checked={locate.set === 2}
                  onChange={() => {
                    setLocate({ set: 2, text: locate.text });
                  }}
                ></s.CheckInput>
              </s.LiProps>
              <s.LiProps>
                <s.DirectInput
                  type="text"
                  placeholder="직접 입력"
                  value={locate.text}
                  readOnly={locate.set !== 2}
                  onClick={(e) => {
                    if (locate.set !== 2) {
                      Notice({
                        state: "error",
                        message: "체크가 되지 않았습니다",
                      });
                      e.preventDefault();
                    } else {
                      open({
                        onComplete: handleComplete,
                        width: 700,
                        height: 700,
                        left: 200,
                        animation: true,
                      });
                    }
                  }}
                />
              </s.LiProps>
            </s.UlDirectProps>
            <s.Ring top={50} />
            <s.SubmitButton onClick={() => submit()}>
              모집의뢰 등록
            </s.SubmitButton>
          </s.Table>
          <s.TableTwo></s.TableTwo>
          {modal ? <ModalPortal /> : <></>}
        </>
      )}
    </>
  );
};
export default RequstResistration;
