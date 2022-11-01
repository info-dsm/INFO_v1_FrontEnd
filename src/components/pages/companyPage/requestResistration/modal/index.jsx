import { useDispatch, useSelector } from "react-redux";
import { stateModal } from "../../../../../redux/store/modal";
import {
  bundle,
  mainData,
  langData,
  skillData,
} from "../../../../../export/data";
import { useState, useCallback, useEffect, useRef } from "react";
import * as s from "./style";
import { value } from "../../../../../redux/store/selectValue";
import AutoComplete from "../../../../common/autocomplete";
const SelectModal = () => {
  const dispatch = useDispatch();
  const ArrStateCountData = useSelector((count) => count.count.count.count);
  const ArrStateData = useSelector((stack) => stack.selectValue.value);
  const [list, setList] = useState(mainData);
  const [inputState, setInputState] = useState(false);
  const [arr, setArr] = useState([1]);
  const [skill, setSkill] = useState([1]);
  const [radio, setRadio] = useState({ id: "", value: "" });
  const InputRef = useRef([]);
  const SkillRef = useRef([]);
  const TextRef = useRef();
  const NumRef = useRef();
  useEffect(() => {
    const stateprops = { state: false };
    setList((list) =>
      list.map((e) => {
        return { ...e, ...stateprops };
      })
    );
    console.log("앙기모띠");
  }, []);
  const BlurEvent = useCallback((e) => {
    if (e.target.value !== "") {
      const ad = { title: e.target.value, subtitle: [], state: false };
      setList([...mainData, ad]);
      setInputState(false);
    }
  }, []);
  const BlurSubEvent = useCallback((event, index) => {
    if (event.target.value !== "") {
      setList((list) =>
        list.map((e, i) => {
          if (i === index) {
            e.state = false;
            e.subtitle = [...e.subtitle, event.target.value];
          }
          return e;
        })
      );
    } else {
      setList((list) =>
        list.map((e, i) => {
          if (i === index) {
            e.state = false;
          }
          return e;
        })
      );
    }
  }, []);

  const AddLangText = useCallback(
    (i) => {
      setArr([...arr, 1]);
    },
    [arr]
  );
  const DeleteLang = useCallback(
    (index) => {
      const ad = arr.filter((e, i) => {
        return i !== index;
      });
      // for (let i = index; i < arr.length - 1; i++) {
      //   InputRef.current[i].value = InputRef.current[i + 1].value;
      //   console.log(InputRef.current[i].value);
      // }
      console.log(ad);
      setArr(ad);
    },
    [arr]
  );
  const AddSkillText = useCallback(() => {
    setSkill([...skill, 1]);
  }, [skill]);
  const DeleteSkill = useCallback(
    (index) => {
      const ad = skill.filter((e, i) => {
        return i !== index;
      });
      setSkill(ad);
    },
    [skill]
  );
  const InputStateProps = useCallback((index) => {
    setList((list) =>
      list.map((e, i) => {
        if (i !== index && e.state === true) {
          e.state = false;
        }
        if (i === index) {
          e.state = true;
        }
        return e;
      })
    );
  }, []);
  const RadioProps = useCallback(
    (e) => {
      setRadio({ id: e.target.id, value: e.target.value });
      console.log(radio);
    },
    [radio]
  );
  const Submit = () => {
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < InputRef.current.length; i++) {
      if (InputRef.current[i].value !== "") {
        arr1.push(InputRef.current[i].value);
      }
    }
    for (let i = 0; i < SkillRef.current.length; i++) {
      if (SkillRef.current[i].value !== "") {
        arr2.push(SkillRef.current[i].value);
      }
    }
    if (radio.id === "") {
      window.alert("버튼을 체크해주세요");
    } else if (NumRef.current.value === "" || NumRef.current.value === "0") {
      window.alert("명 수를 입력해주세요");
    } else if (TextRef.current.value === "") {
      window.alert("상세직무를 입력해주세요");
    } else if (arr1.length === 0) {
      window.alert("사용언어를 입력해주세요");
    } else if (arr2.length === 0) {
      window.alert("사용스킬을 입력해주세요");
    } else if (ArrStateData.length === ArrStateCountData) {
      const props = {
        main: radio.id,
        sub: radio.value,
        num: NumRef.current.value + "명",
        duty: TextRef.current.value,
        lang: arr1,
        stack: arr2,
      };
      dispatch(value([...ArrStateData, props]));
      dispatch(stateModal(false));
    } else {
      const props = {
        main: radio.id,
        sub: radio.value,
        num: NumRef.current.value + "명",
        duty: TextRef.current.value,
        lang: arr1,
        stack: arr2,
      };
      const ad = ArrStateData.map((el, i) => {
        if (i === ArrStateCountData) {
          el = props;
          console.log(el);
          return el;
        } else {
          return el;
        }
      });
      dispatch(value(ad));
      dispatch(stateModal(false));
    }
  };
  return (
    <>
      <s.Box>
        <s.Head>
          <s.Title>채용 직무 선택</s.Title>
          <s.ExitButton onClick={() => dispatch(stateModal(false))}>
            X
          </s.ExitButton>
        </s.Head>
        <s.Table>
          <s.BundleUl>
            {bundle.map((user) => (
              <s.BundleLi width={user.width}>
                <s.MainTitle>{user.title} </s.MainTitle>
              </s.BundleLi>
            ))}
          </s.BundleUl>
          <s.MainUl>
            {list.map((user, i) => (
              <>
                <s.MainLi>
                  <s.SubListUl>
                    <s.SubList
                      width={300}
                      height={user.subtitle.length * 70 + 50}
                    >
                      <s.MainTitleProps>{user.title}</s.MainTitleProps>
                    </s.SubList>
                    <s.SubList
                      width={616}
                      height={user.subtitle.length * 70 + 50}
                    >
                      <s.SubUl>
                        {user.subtitle.map((asdf, index) => (
                          <s.SubLi>
                            <s.Label>
                              <s.LabelButton>{asdf}</s.LabelButton>
                              <s.InputButton>
                                <s.Radio
                                  type="radio"
                                  id={user.title}
                                  name="jingeon"
                                  value={asdf}
                                  onChange={(e) => RadioProps(e)}
                                ></s.Radio>
                              </s.InputButton>
                            </s.Label>
                          </s.SubLi>
                        ))}
                        <s.SubLi>
                          {user.state ? (
                            <s.Label>
                              <s.InputSubText
                                width={400}
                                type="text"
                                onBlur={(e) => BlurSubEvent(e, i)}
                              ></s.InputSubText>
                            </s.Label>
                          ) : (
                            <s.PlusButton
                              width={400}
                              left={-10}
                              onClick={() => {
                                InputStateProps(i);
                              }}
                            >
                              +
                            </s.PlusButton>
                          )}
                        </s.SubLi>
                      </s.SubUl>
                    </s.SubList>
                    <s.SubList
                      width={196}
                      height={user.subtitle.length * 70 + 50}
                    ></s.SubList>
                  </s.SubListUl>
                </s.MainLi>
              </>
            ))}
            <s.MainLi>
              <s.SubListUl>
                <s.SubLi>
                  {inputState ? (
                    <>
                      <s.InputText
                        left={-20}
                        width={300}
                        type="text"
                        onBlur={(e) => BlurEvent(e)}
                      ></s.InputText>
                    </>
                  ) : (
                    <s.PlusButton
                      width={300}
                      left={0}
                      onClick={() => {
                        setInputState(true);
                      }}
                    >
                      +
                    </s.PlusButton>
                  )}
                </s.SubLi>
              </s.SubListUl>
            </s.MainLi>
          </s.MainUl>
          <s.TableTwo>
            <s.TableProps>
              <s.LowUl>
                <s.LowLi bottom={20}>
                  <s.HTitle>채용인원</s.HTitle>
                </s.LowLi>
                <s.LowLi bottom={40}>
                  <s.InputProps
                    type="text"
                    onInput={(e) =>
                      (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                    }
                    width={140}
                    ref={NumRef}
                  ></s.InputProps>
                  <s.PropsText>&nbsp;&nbsp;명</s.PropsText>
                </s.LowLi>
                <s.LowLi bottom={20}>
                  <s.HTitle>상세직무</s.HTitle>
                </s.LowLi>
                <s.LowLi bottom={40}>
                  <s.TextAreaProps ref={TextRef}></s.TextAreaProps>
                </s.LowLi>
                <s.LowLi bottom={40}>
                  <s.HTitle>필요언어</s.HTitle>
                </s.LowLi>
                <s.LowLi bottom={190}>
                  <s.InputUl>
                    {arr.map((user, i) => (
                      <s.InputLi>
                        <s.Delelte>
                          <AutoComplete
                            Data={langData}
                            ref={(el) => (InputRef.current[i] = el)}
                          ></AutoComplete>
                          <s.DeleteButton onClick={() => DeleteLang(i)}>
                            X
                          </s.DeleteButton>
                        </s.Delelte>
                      </s.InputLi>
                    ))}

                    <s.InputLi>
                      <s.PlusBtn onClick={() => AddLangText(1)}></s.PlusBtn>
                    </s.InputLi>
                  </s.InputUl>
                </s.LowLi>
                <s.LowLi bottom={40}>
                  <s.HTitle>기타기술</s.HTitle>
                </s.LowLi>
                <s.LowLi bottom={225}>
                  <s.InputUl>
                    {skill.map((user, i) => (
                      <s.InputLi>
                        <s.Delelte>
                          <AutoComplete
                            Data={skillData}
                            ref={(el) => (SkillRef.current[i] = el)}
                          ></AutoComplete>
                          <s.DeleteButton onClick={() => DeleteSkill(i)}>
                            X
                          </s.DeleteButton>
                        </s.Delelte>
                      </s.InputLi>
                    ))}

                    <s.InputLi>
                      <s.PlusBtn onClick={() => AddSkillText(1)}></s.PlusBtn>
                    </s.InputLi>
                  </s.InputUl>
                </s.LowLi>
                <s.LowLi>
                  <s.SubmitButton onClick={() => Submit()}>확인</s.SubmitButton>
                </s.LowLi>
              </s.LowUl>
            </s.TableProps>
          </s.TableTwo>
        </s.Table>
      </s.Box>
    </>
  );
};
export default SelectModal;
