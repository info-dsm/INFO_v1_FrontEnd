import { useDispatch } from "react-redux";
import { stateModal } from "../../../../redux/store/modal";
import { stateCount } from "../../../../redux/store/count";
import { useSelector } from "react-redux";
import SelectModal from "./modal";
import { CompanyData2, TitleData } from "../../../../export/data";
import Header from "../../../common/header";
import { useState, useCallback, useRef } from "react";
import {
  mealData,
  supportData,
  workData,
  interviewData,
} from "../../../../export/data";
import SelectComplete from "../../../common/select";
import { value } from "../../../../redux/store/selectValue";
import * as s from "./style";
import { postNotice } from "../../../api/company/requesrResistration";
import { open } from "../../../common/addresshook";
import { useNavigate } from "react-router-dom";
import NavProps from "../../../common/nav";
const RequstResistration = () => {
  const modal = useSelector((state) => state.modal.state.modalrequest);
  const Data = useSelector((stack) => stack.selectValue.recruitmentRequest);
  const [list, setList] = useState(supportData);
  const [admission, setAdmission] = useState([1]);
  const [file, setFile] = useState([]);
  const [locate, setLocate] = useState({ set: 0, text: "" });
  const [mealState, setMealState] = useState(0);
  const [state, setState] = useState(false);
  const [special, setSpecial] = useState("");
  const [dateState, setDateState] = useState({ startDate: "", endDate: "" });
  const BokRef = useRef([]);
  const MealRef = useRef([]);
  const MoneyRef = useRef([]);
  const InputRef = useRef([]);
  const WorkRef = useRef([]);
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

  const AddWelfare = () => {
    if (
      list.indexOf(WelfareRef.current.value) === -1 &&
      WelfareRef.current.value !== ""
    ) {
      setList([...list, WelfareRef.current.value]);
    }
  };
  const AddAdmision = useCallback(() => {
    setAdmission([...admission, 1]);
  }, [admission]);
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
  const RemoveBigTitle = (index) => {
    console.log(Data);
    // eslint-disable-next-line array-callback-return
    const ad = Data.filter((el, i) => {
      if (i !== index) {
        return el;
      }
    });
    dispatch(value(ad));
  };
  const submit = () => {
    let arr = [];
    for (let i = 0; i < InputRef.current.length; i++) {
      console.log(InputRef.current[i].id);
      const find = (e) => {
        // console.log(e.skill);
        if (e.skill === InputRef.current[i].id) {
          return true;
        }
      };
      arr.push(interviewData[interviewData.findIndex(find)].request);
    }
    const ad = {
      recruitmentRequestList: Data,
      workTime: {
        untilCommuteStartTime: WorkRef.current[0].value,
        untilCommuteEndTime: WorkRef.current[1].value,
        workTimeForWeek: WorkRef.current[2].value,
      },
      pay: {
        fieldTrainingPayPerMonth: MoneyRef.current[0].value,
        fullTimeEmploymentPay: {
          yearPayStart: MoneyRef.current[1].value,
          yearPayEnd: MoneyRef.current[2].value,
          bonus: MoneyRef.current[3].value,
        },
      },
      mealSupport: {
        mealSupportPay: mealState,
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
      interviewProcessList: arr,
      otherFeatures: special,
    };
    let as = {};
    if (locate.set === 2) {
      as = {
        ...ad,
        workPlace: {
          isSameWithCompanyAddress: false,
          otherPlace: locate.text,
        },
        isPersonalContact: state,
      };
    } else {
      as = {
        ...ad,
        workPlace: {
          isSameWithCompanyAddress: true,
        },
        isPersonalContact: state,
      };
    }
    postNotice(file, as);
    navigate("/company/list");
  };
  return (
    <>
      <Header title="모집의뢰 관리" description="회사 정보를 볼 수 있습니다." />
      <NavProps props={CompanyData2} idx={1} />
      <s.Table>
        <s.Title>채용직무</s.Title>

        <s.BoxPropsUl>
          {Data.map((el, i) => (
            <>
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
                  <s.LiContent width={212}>{el.bigClassification}</s.LiContent>
                  <s.LiContent width={167}>
                    {el.smallClassification}
                  </s.LiContent>
                  <s.LiContent width={191}>{el.numberOfEmployee}명</s.LiContent>
                  <s.LiContent width={566}>
                    {el.detailBusinessDescription}
                  </s.LiContent>
                </s.UlContent>
                <s.SubTitle>필요언어</s.SubTitle>
                <s.EssentialUl>
                  {el.languageList.map((user) => (
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
                      <s.GradesLi>상위 {el.gradeCutLine}%이내</s.GradesLi>
                    </s.GradesUl>
                  </li>
                </s.GradeUl>
                <s.EssentialUl>
                  {el.technologyList.map((user) => (
                    <s.EssentialLi>
                      <s.ButtonProps>{user}</s.ButtonProps>
                    </s.EssentialLi>
                  ))}
                </s.EssentialUl>
                <s.SubTitle>국가자격증</s.SubTitle>
                <s.EssentialUl>
                  {el.needCertificateList.map((user) => (
                    <s.EssentialLi>
                      <s.ButtonProps>{user}</s.ButtonProps>
                    </s.EssentialLi>
                  ))}
                </s.EssentialUl>
                <s.Button
                  onClick={() => {
                    dispatch(stateModal(true));
                    dispatch(stateCount(i));
                  }}
                >
                  수정
                </s.Button>
                <s.DelButton
                  onClick={() => {
                    RemoveBigTitle(i);
                  }}
                >
                  삭제
                </s.DelButton>
              </s.BoxPropsLi>
            </>
          ))}
        </s.BoxPropsUl>
        <s.PlusButtonT
          onClick={() => {
            dispatch(stateModal(true));
            dispatch(stateCount(Data.length));
          }}
        >
          +
        </s.PlusButtonT>
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
          <s.LiMoney>
            <s.UlProps>
              <s.LiProps>
                <s.TestText width={96}>보너스</s.TestText>
              </s.LiProps>
              <s.LiProps>
                <s.InputMoney
                  type="text"
                  ref={(el) => (MoneyRef.current[3] = el)}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                ></s.InputMoney>
              </s.LiProps>
              <s.LiProps>
                <s.TenWon width={220} left={20}>
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
            <s.InputMoney
              type="text"
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
          {list.map((user, i) => (
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
            <s.InputQualifi type="text" ref={WelfareRef}></s.InputQualifi>
          </s.LiProps>
          <s.LiProps>
            <s.PlusBtn onClick={() => AddWelfare()}>+</s.PlusBtn>
          </s.LiProps>
        </s.UlProps>
        <s.Ring top={50} />
        <s.Titlet>출•퇴근시간</s.Titlet>
        <s.UlWork>
          {workData.map((user, i) => (
            <>
              <s.UlProps>
                <s.LiProps>
                  <s.ClockText>{user.clock}</s.ClockText>
                </s.LiProps>
                <s.LiProps>
                  <s.InputMoney
                    type="text"
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    ref={(el) => (WorkRef.current[i] = el)}
                  ></s.InputMoney>
                </s.LiProps>
                <s.LiProps>
                  <s.TenWon width={51} left={20}>
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
            <s.InputQualifi
              type="date"
              onChange={(e) =>
                setDateState({
                  startDate: e.target.value,
                  endDate: dateState.endDate,
                })
              }
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
            ></s.InputQualifi>
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
              <s.InputLi>
                <s.Delelte>
                  <SelectComplete
                    Data={interviewData}
                    ref={(el) => (InputRef.current[i] = el)}
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
              onClick={() =>
                open({
                  onComplete: handleComplete,
                  width: 700,
                  height: 700,
                  left: 200,
                  animation: true,
                })
              }
            />
          </s.LiProps>
        </s.UlDirectProps>
        <s.Ring top={50} />
        <s.Titlet>개별등록</s.Titlet>
        <s.UlDirectProps>
          <s.LiProps>
            <s.CheckInput
              type="checkbox"
              left={-40}
              onChange={() => setState(!state)}
            ></s.CheckInput>
          </s.LiProps>
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
        <s.SubmitButton onClick={() => submit()}>모집의뢰 등록</s.SubmitButton>
      </s.Table>
      <s.TableTwo></s.TableTwo>
      {modal ? <SelectModal /> : <></>}
    </>
  );
};
export default RequstResistration;
