import * as S from "./styles";

const InputCompany = ({ arr, onChangeState }) => {
  return (
    <>
      {arr.map((item) => (
        <>
          <S.Category>{item.title}</S.Category>
          <S.InputForm
            type={item.type}
            onChange={(e) => onChangeState(item.state, e)}
            placeholder={item.placeholder}
          />
        </>
      ))}
    </>
  );
};

export default InputCompany;
