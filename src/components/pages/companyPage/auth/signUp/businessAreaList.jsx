import { CheckInput } from "./styles";

const BusinessAreaList = ({ state, setState }) => {
  return (
    <>
      {state.map((item) => (
        <>
          <CheckInput
            type="checkbox"
            checked={item.checked}
            onChange={(e) => {
              setState(
                state.map((business) =>
                  business.name === item.name
                    ? { ...business, checked: e.target.checked }
                    : business
                )
              );
            }}
          ></CheckInput>
          <span>{item.name}</span>
        </>
      ))}
    </>
  );
};

export default BusinessAreaList;
