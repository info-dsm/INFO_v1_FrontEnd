import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BaseUrl } from "../../../../export/base";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNiIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2NjgwMDU3OTEsImV4cCI6MTY2ODA5MjE5MX0.QTZ34-wPuT39t-B_28_zfNi9PMEZSel4s632aw1AgF0";
export const getListProps = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(["datas"], async () => {
    let res;
    let ad;
    await axios
      .all([
        axios.get(BaseUrl + "/notice/technology/list", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        axios.get(BaseUrl + "/notice/language/list", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        axios.get(BaseUrl + "/notice/certificate/list", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          const data1 = res1.data;
          const data2 = res2.data;
          const data3 = res3.data;
          res = [data1, data2, data3];
          ad = new Array(3)
            .fill(0)
            .map((e, i) => new Array(res[i].length).fill({ skill: 0 }));
          for (let i = 0; i < ad[0].length; i++) {
            ad[0][i].skill = res[0][i].technologyName;
          }
          for (let i = 0; i < ad[1].length; i++) {
            ad[1][i].skill = res[1][i].languageName;
          }
          for (let i = 0; i < ad[2].length; i++) {
            ad[2][i].skill = res[2][i].certificateName;
          }
        })
      );
    return ad;
  });
};
export const postNotice = (arr, ad) => {
  console.log(arr);
  console.log(ad);
  let formData = new FormData();
  for (let i in arr) {
    formData.append("attachment", arr[i]);
  }
  formData.set(
    "request",
    new Blob([JSON.stringify(ad)], {
      type: "application/json",
    })
  );
  axios({
    url: BaseUrl + "/notice",
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    },
    data: formData,
  });
};
