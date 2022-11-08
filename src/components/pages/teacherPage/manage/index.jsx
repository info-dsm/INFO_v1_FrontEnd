import { useDispatch } from "react-redux";
import { stateModalManage } from "../../../../redux/store/modal";
import { useSelector } from "react-redux";
import { TitleData } from "../../../../export/data";
import Header from "../../../common/header";
import { useState, useCallback, useRef } from "react";
import { mealData, supportData, workData } from "../../../../export/data";
import * as s from "./style";
import ModalManage from "./modal";
const RequstManage = () => {
  const modal = useSelector((state) => state.modal.state.modalmanage);
  const count = useSelector((count) => count.count.count.manageCount);
  const Data = useSelector((stack) => stack.selectValue.value);
  const [state, setState] = useState([1]);
  const [list, setList] = useState(supportData);
  const [admission, setAdmission] = useState([1]);
  const [file, setFile] = useState([]);
  const MoneyRef = useRef([]);
  const QualifiRef = useRef([]);
  const WelfareRef = useRef();
  const dispatch = useDispatch();
  const AddPropsFunc = useCallback(() => {
    if (QualifiRef.current[state.length - 1].value !== "") {
      setState([...state, 1]);
    }
  }, [state]);
  const AddWelfare = () => {
    console.log(WelfareRef.current.value);
    console.log(list);
    if (
      list.indexOf(WelfareRef.current.value) === -1 &&
      WelfareRef.current.value !== ""
    ) {
      setList([...list, WelfareRef.current.value]);
    }
  };
  const DeleteFunc = useCallback(
    (index) => {
      if (index !== 0) {
        const ad = state.filter((e, i) => {
          return i !== index;
        });
        setState(ad);
      }
    },
    [state]
  );
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
      if (e.target.files[0].size > 1048576) {
        window.alert("파일용량이 너무 큽니다.");
      } else {
        const ad = [...file, e.target.files];
        setFile(ad);
      }
      console.log(file);
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
              <s.LiContent width={212}>{Data[count].main}</s.LiContent>
              <s.LiContent width={167}>{Data[count].sub}</s.LiContent>
              <s.LiContent width={191}>{Data[count].num}</s.LiContent>
              <s.LiContent width={566}>{Data[count].duty}</s.LiContent>
            </s.UlContent>
            <s.SubTitle>필요언어</s.SubTitle>
            <s.EssentialUl>
              {Data[count].lang.map((user) => (
                <s.EssentialLi>
                  <s.ButtonProps>{user}</s.ButtonProps>
                </s.EssentialLi>
              ))}
            </s.EssentialUl>
            <s.SubTitle>기타기술</s.SubTitle>
            <s.EssentialUl>
              {Data[count].stack.map((user) => (
                <s.EssentialLi>
                  <s.ButtonProps>{user}</s.ButtonProps>
                </s.EssentialLi>
              ))}
            </s.EssentialUl>
          </s.BoxPropsLi>
        </s.BoxPropsUl>
        <s.Ring top={50} />
        <s.Tables>
          <s.Titlet>지원자격</s.Titlet>
          <s.Subdd>필수사항</s.Subdd>
          <s.UlProps>
            <s.LiProps>
              <s.CheckInput
                type="checkbox"
                value="국가자격증"
                left={-40}
              ></s.CheckInput>
            </s.LiProps>
            <s.LiProps>
              <s.CheckText>국가자격증</s.CheckText>
            </s.LiProps>
            <s.LiProps>
              <s.UlQualifi>
                {state.map((user, i) => (
                  <s.LiQulifi>
                    <s.MinusButton onClick={() => DeleteFunc(i)}>
                      x
                    </s.MinusButton>
                    <s.InputQualifi
                      type="text"
                      ref={(el) => (QualifiRef.current[i] = el)}
                    ></s.InputQualifi>
                  </s.LiQulifi>
                ))}
              </s.UlQualifi>
            </s.LiProps>
            <s.LiProps>
              <s.PlusButton onClick={() => AddPropsFunc()} left={40} top={0}>
                +
              </s.PlusButton>
            </s.LiProps>
            <s.LiProps>
              <s.CheckInput
                type="checkbox"
                vlaue="성적"
                left={60}
              ></s.CheckInput>
            </s.LiProps>
            <s.LiProps>
              <s.Achive>성적</s.Achive>
            </s.LiProps>
            <s.LiProps>
              <s.AchiveInput
                type="text"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  if (e.target.value > 99) {
                    e.target.value = 99;
                  }
                }}
              ></s.AchiveInput>
            </s.LiProps>
            <s.LiProps>
              <s.QweText>% 이내</s.QweText>
            </s.LiProps>
          </s.UlProps>
        </s.Tables>
        <s.Ring top={77 + state.length * 50 - 50} />
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
                  ref={(el) => (MoneyRef.current[0] = el)}
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
                  ref={(el) => (MoneyRef.current[1] = el)}
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
              }}
            ></s.InputMoney>
          </s.LiProps>
          <s.LiProps>
            <s.TenWon width={68} left={20}>
              원(월)
            </s.TenWon>
          </s.LiProps>
          {mealData.map((user) => (
            <>
              <s.CheckInput
                type="checkbox"
                value={user}
                left={60}
              ></s.CheckInput>
              <s.TenWon width={101} left={20}>
                {user}
              </s.TenWon>
            </>
          ))}
        </s.UlProps>
        <s.Subdd>복리후생</s.Subdd>
        <s.UlLineBreak>
          {list.map((user) => (
            <>
              <s.LiProps>
                <s.CheckInput
                  type="checkbox"
                  value={user}
                  left={60}
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
          {workData.map((user) => (
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
            <s.InputQualifi type="text"></s.InputQualifi>
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
            <s.InputQualifi type="text"></s.InputQualifi>
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
                  <s.InputPropss type="text" width={200}></s.InputPropss>
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
        <s.Ring top={50} />
        <s.Titlet>제출서류</s.Titlet>
        <s.UlSubmitted>
          <s.LiProps>
            <s.LabelFile for="file">양식 등록</s.LabelFile>
            <s.FileHidden
              type="file"
              id="file"
              onChange={(e) => AddFileProps(e)}
            ></s.FileHidden>
          </s.LiProps>
          {file.map((files, i) => (
            <>
              <s.LiProps>
                <s.UlTable>
                  <s.LiProps>
                    <s.FileTextDiv>{files[0].name}</s.FileTextDiv>
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
        ></s.InputTextProps>
        <s.Ring top={50} />
        <s.Titlet>근무지</s.Titlet>
        <s.UlDirectProps>
          <s.LiProps>
            <s.CheckInput type="checkbox" left={-40}></s.CheckInput>
          </s.LiProps>
          <s.LiProps>
            <s.TenWon width={185} left={20}>
              회사 주소와 동일
            </s.TenWon>
          </s.LiProps>
          <s.LiProps>
            <s.CheckInput type="checkbox" left={60}></s.CheckInput>
          </s.LiProps>
          <s.LiProps>
            <s.DirectInput type="text" placeholder="직접 입력" />
          </s.LiProps>
        </s.UlDirectProps>
        <s.Ring top={50} />
        <s.Titlet>개별등록</s.Titlet>
        <s.UlDirectProps>
          <s.LiProps>
            <s.CheckInput type="checkbox" left={-40}></s.CheckInput>
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
        <s.SubmitButton>모집의뢰 등록</s.SubmitButton>
      </s.Table>
      <s.TableTwo></s.TableTwo>
      {modal ? <ModalManage Data={Data} /> : <></>}
    </>
  );
};
export default RequstManage;
