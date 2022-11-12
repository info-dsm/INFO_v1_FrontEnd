import styled from "styled-components";
import { Notice } from "../../../../common/notice";
const Wait = () => {
  return (
    <>
      <button
        onClick={() => Notice({ state: "success", message: "안녕하세요" })}
      >
        클릭
      </button>
    </>
  );
};
export default Wait;
const Table = styled.div``;
