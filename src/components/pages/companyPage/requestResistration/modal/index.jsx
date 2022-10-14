import { useDispatch } from "react-redux";
import { stateModal } from "../../../../../redux/store/modal";
import { bundle, mainData } from "../data";
import { useState, useCallback } from "react";
import * as s from "./style";
const SelectModal = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState(mainData);
  const [inputState, setInputState] = useState(false);
  const [state, setState] = useState(false);
  const BlurEvent = useCallback((e) => {
    if (e.target.value !== "") {
      const ad = { title: e.target.value, subtitle: [] };
      setList([...mainData, ad]);
      setInputState(false);
    }
  }, []);
  const BlurSubEvent = useCallback((event, index) => {
    if (event.target.value !== "") {
      setState(false);
      setList((list) =>
        list.map((e, i) => {
          if (i === index) {
            e.subtitle = [...e.subtitle, event.target.value];
          }
          return e;
        })
      );
    }
  }, []);

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
                        {user.subtitle.map((asdf) => (
                          <s.SubLi>
                            <s.Label>
                              <s.LabelButton>{asdf}</s.LabelButton>
                              <s.InputButton>
                                <s.Radio
                                  type="radio"
                                  id={user.title}
                                  name="jingeon"
                                  value={asdf}
                                ></s.Radio>
                              </s.InputButton>
                            </s.Label>
                          </s.SubLi>
                        ))}
                        <s.SubLi>
                          {state ? (
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
                                setState(true);
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
          <s.TableProps>채용인원</s.TableProps>
        </s.Table>
      </s.Box>
    </>
  );
};
export default SelectModal;
