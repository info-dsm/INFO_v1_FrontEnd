import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BaseUrl } from "../../../../export/base";
export const getListProps = () => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNiIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2Njc3NDE0OTcsImV4cCI6MTY2NzgyNzg5N30.baNS3EXDzzzasm7qa1PMy-4nVtgHlFWp3cE1W_rxd_U";
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(["datas"], async () => {
    let res;
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
          res = [...data1, ...data2, ...data3];
        })
      );
    console.log(res);
    return res;
  });
};
