import styled from "styled-components";
import { useState, useCallback, forwardRef, useEffect } from "react";
const AutoComplete = forwardRef(({ Data }, ref) => {
  const [state, setState] = useState(false);
  const [statee, setStatee] = useState(true);
  const [data, setData] = useState(Data);
  const [write, setWrite] = useState("");
  const [start, setStart] = useState(-1);
  useEffect(() => {
    console.log(data);
    // eslint-disable-next-line array-callback-return
    const same = Data.filter((el) => {
      if (el.indexOf(write) !== -1) {
        return el;
      }
    });
    const content = same.sort((a, b) => {
      return a.indexOf(write) - b.indexOf(write);
    });
    setData(content);
    if (start === -1) {
      setState(false);
    } else if (statee) {
      setState(true);
    } else {
      setStatee(true);
      setState(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Data, data.length, write, setWrite]);
  const AddValuePropsFunc = (props) => {
    console.log(props);
    setWrite(props);
    setStatee(false);
    setState(false);
  };
  const RemoveEvent = useCallback(
    (e) => {
      setState(false);
      // eslint-disable-next-line array-callback-return
      const same = Data.filter((el) => {
        if (el.skill.indexOf(e.target.value) !== -1) {
          return el;
        }
      });
      setData(same);
    },
    [Data]
  );
  return (
    <>
      <InputProps
        ref={ref}
        type="text"
        width={200}
        value={write}
        state={state}
        onInput={(e) => {
          setWrite(e.target.value);
          setStart(1);
        }}
        onFocus={() => {
          console.log(Data);
          if (statee) {
            setState(true);
          } else {
            setState(false);
            setStatee(true);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") RemoveEvent(e);
        }}
        onBlur={(e) => {
          RemoveEvent(e);
        }}
      ></InputProps>
      <DataList state={state}>
        <ul>
          {data.map((user) => (
            <li onMouseDown={() => AddValuePropsFunc(user)}>{user}</li>
          ))}
        </ul>
      </DataList>
    </>
  );
});
export default AutoComplete;
const DataList = styled.div`
  position: relative;
  width: 200px;
  height: 150px;
  padding: 9px 0px 14px 0px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 20px 20px;
  z-index: 2;
  visibility: ${(props) => (props.state ? "visible" : "hidden")};
  ul {
    width: 195px;
    height: 127px;
    list-style-type: none;

    overflow-y: scroll;
    scroll-padding-top: 20px;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      width: 5px;
      height: 127px;
      border-radius: 20px;

      background-color: ${(props) => props.theme.colors.mediumGray};
    }

    &::-webkit-scrollbar-thumb {
      padding-top: 9px;
      height: 28px;
      border-radius: 20px;
      background: ${(props) => props.theme.colors.blue};
    }
    overflow-x: hidden;
    margin-top: -3.5px;
  }
  li {
    position: relative;
    padding-left: 16px;
    width: 200px;
    height: 30px;
    color: #000;
    font-size: 18px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.lightGray};
    margin-left: -40px;
  }

  li:hover {
    background-color: ${(props) => props.theme.colors.lightGray};
    color: ${(props) => props.theme.colors.white};
  }
`;
const InputProps = styled.input`
  width: ${(props) => props.width}px;
  height: 50px;
  border-radius: 20px 20px ${(props) => (props.state ? 0 : 20)}px
    ${(props) => (props.state ? 0 : 20)}px;
  font-size: 24px;
  font-family: "NanumGothic", sans-serif;
  font-style: normal;
  font-weight: 700;
  color: ${(props) => props.theme.colors.black};
  text-align: center;
  border: none;
  background-color: ${(props) => props.theme.colors.semiWhite};
`;
