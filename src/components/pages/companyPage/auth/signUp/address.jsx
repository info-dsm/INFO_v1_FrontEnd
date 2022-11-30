import styled from "styled-components";
import { open } from "../../../../common/addresshook";
import { Category, InputForm } from "./styles";

const CompanyAddress = ({ info, setInfo }) => {
  const arr = [
    {
      title: "본사",
      str: "home",
    },
    {
      title: "연구소/지점",
      str: "agent",
    },
  ];

  const getAddress = (data, str) => {
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

    setInfo({
      ...info,
      [str + "FullAddress"]: fullAddress,
      [str + "AddressNumber"]: data.zonecode,
    });
    document.body.removeChild(document.getElementById("daum_postcode_script"));
  };

  return (
    <>
      <Address>
        <Category>주소</Category>
        <div>
          {arr.map((item) => (
            <div>
              <span>{item.title}</span>
              <InputForm
                value={info[item.str + "FullAddress"]}
                onClick={() =>
                  open({
                    onComplete: (data) => getAddress(data, item.str),
                    width: 700,
                    height: 700,
                    left: 200,
                    animation: true,
                  })
                }
                placeholder="ex) 대전광역시 유성구 가정북로 76"
              />
              <InputForm
                value={info[item.str + "AddressNumber"]}
                onClick={() =>
                  open({
                    onComplete: (data) => getAddress(data, item.str),
                    width: 700,
                    height: 700,
                    left: 200,
                    animation: true,
                  })
                }
                style={{ width: "100px" }}
                placeholder="ex) 34111"
              />
            </div>
          ))}
        </div>
      </Address>
    </>
  );
};

export default CompanyAddress;

const Address = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  > div {
    margin-left: 35px;
    > div {
      width: 630px;
      display: flex;
      align-items: center;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: 20px;
      span {
        width: 120px;
        display: flex;
        justify-content: flex-end;
        margin-right: 22px;
      }
    }
  }

  input {
    width: 389px;
    height: 40px;
    border-radius: 18px;

    background-color: #f3eeff;
    border: none;
    padding-left: 24px;
    margin-right: 20px;
  }
`;
