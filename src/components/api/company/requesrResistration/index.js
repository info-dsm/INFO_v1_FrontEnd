import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BaseUrl } from "../../../../export/base";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNiIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2NjgzMTI4MTksImV4cCI6MTY2ODM5OTIxOX0.Xa8JlV2OyvwTvjV35kKCZrmfWI7mxN89UifM4UX_GYM";
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
export const getMyList = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(["MyCompanyList"], async () => {
    let res;
    await axios
      .get(BaseUrl + "/notice/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data;
        let arr = new Array(data.length)
          .fill(0)
          .map((e, i) =>
            new Array(
              data[i].data.notice.recruitmentBusinessResponse.length
            ).fill("")
          );
        let arr2 = new Array(data.length)
          .fill(0)
          .map((e, i) =>
            new Array(
              data[i].data.notice.recruitmentBusinessResponse.length
            ).fill("")
          );
        let count = [];
        for (let i = 0; i < data.length; i++) {
          let temp = 0;
          for (
            let j = 0;
            j < data[i].data.notice.recruitmentBusinessResponse.length;
            j++
          ) {
            arr[i][j] =
              data[i].data.notice.recruitmentBusinessResponse[
                j
              ].classificationResponse.bigClassification.bigClassificationName;
            arr2[i][j] =
              data[i].data.notice.recruitmentBusinessResponse[
                j
              ].classificationResponse.name;
            temp =
              temp +
              data[i].data.notice.recruitmentBusinessResponse[j]
                .numberOfEmployee;
          }
          count.push({
            total: temp,
            approve: data[i].approveStatus,
            day: data[i].data.notice.company.lastNoticeDate,
            id: data[i].data.notice.recruitmentBusinessResponse[0]
              .recruitmentBusinessId,
            noticeId: data[i].data.notice.noticeId,
          });
        }
        const ad = arr.map((item) =>
          item.filter((e, i, ar) => {
            return ar.findIndex((el) => e === el) === i;
          })
        );
        console.log(ad);
        const as = arr2.map((item) =>
          item.filter((e, i, ar) => {
            return ar.findIndex((el) => e === el) === i;
          })
        );
        for (let i = 0; i < data.length; i++) {
          as[i] = as[i].join();
          ad[i] = ad[i].join();
        }
        res = { count, as, ad };
      });
    return res;
  });
};
