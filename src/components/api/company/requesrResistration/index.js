import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BaseUrl } from "../../../../export/base";
import { Notice } from "../../../common/notice";
export const getListProps = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(["datas"], async () => {
    let res;
    let ad;

    await axios
      .all([
        axios.get(BaseUrl + "/notice/technology", {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
          },
        }),
        axios.get(BaseUrl + "/notice/language", {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
          },
        }),
        axios.get(BaseUrl + "/notice/certificate", {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
          },
        }),
        axios.get(BaseUrl + "/notice/classification", {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
          },
        }),
      ])
      .then(
        axios.spread((res1, res2, res3, res4) => {
          const data1 = res1.data;
          const data2 = res2.data;
          const data3 = res3.data;
          const data4 = res4.data;
          res = [data1, data2, data3, data4];
          console.log(res);
          let arr = [
            {
              bigClassification:
                res[3][0].bigClassification.bigClassificationName,
              smallClassification: [res[3][0].name],
            },
          ];
          let count = 0;
          ad = new Array(3)
            .fill(0)
            .map((e, i) => new Array(res[i].length).fill({ skill: 0 }));
          for (let i = 0; i < ad[0].length; i++) {
            ad[0][i] = res[0][i].technologyName;
          }
          for (let i = 0; i < ad[1].length; i++) {
            ad[1][i] = res[1][i].languageName;
          }
          for (let i = 0; i < ad[2].length; i++) {
            ad[2][i] = res[2][i].certificateName;
          }
          console.log(ad);
          for (let i = 1; i < res[3].length; i++) {
            count = arr.findIndex(
              (el) =>
                el.bigClassification ===
                res[3][i].bigClassification.bigClassificationName
            );
            if (count === -1) {
              arr.push({
                bigClassification:
                  res[3][i].bigClassification.bigClassificationName,
                smallClassification: [res[3][i].name],
              });
              count++;
            } else {
              arr[count].smallClassification.push(res[3][i].name);
            }
          }
          res = [...ad, arr];
        })
      );
    // .catch(() => {
    //   ad = [
    //     [
    //       { skill: "React" },
    //       { skill: "Vue" },
    //       { skill: "Spring" },
    //       { skill: "Springboot" },
    //       { skill: "recoil" },
    //       { skill: "React-Query" },
    //       { skill: "Redux-Toolkit" },
    //       { skill: "axios" },
    //       { skill: "styled-components" },
    //       { skill: "express" },
    //       { skill: "React-Native" },
    //     ],
    //     [
    //       { skill: "JavaScript" },
    //       { skill: "TypeScript" },
    //       { skill: "C" },
    //       { skill: "C++" },
    //       { skill: "C#" },
    //       { skill: "Rust" },
    //       { skill: "Java" },
    //       { skill: "Go" },
    //       { skill: "Python" },
    //       { skill: "PHP" },
    //       { skill: "Swift" },
    //       { skill: "objective-c" },
    //     ],
    //     [
    //       { skill: "?????????????????????" },
    //       { skill: "?????????????????????2???" },
    //       { skill: "?????????????????????" },
    //     ],
    //   ];
    //   arr = [
    //     {
    //       bigClassification: "??????????????????",
    //       smallClassification: ["?????????", "???????????????", "?????????"],
    //     },
    //     {
    //       bigClassification: "?????????",
    //       smallClassification: ["??????", "???????????????", "IOS"],
    //     },
    //     {
    //       bigClassification: "????????????",
    //       smallClassification: [
    //         "??????",
    //         "?????????",
    //         "?????????????????????",
    //         "????????????????????????",
    //       ],
    //     },
    //     {
    //       bigClassification: "??????",
    //       smallClassification: ["?????????", "??????", "??????"],
    //     },
    //     {
    //       bigClassification: "?????????????????????",
    //       smallClassification: ["????????????????????????", "????????????????????????"],
    //     },
    //   ];
    // });
    console.log(res);
    return res;
  });
};
export const InterviewProcess = async () => {
  let arr;
  await axios({
    method: "get",
    url: BaseUrl + "/notice/interview",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
    },
  })
    .then((res) => {
      // const data = res.data;
      // console.log(res.data);
      // arr = new Array(data.length).fill({ skill: "", request: "" });
      // arr = arr.map((item, i) => {
      //   return { skill: data[i].meaning, request: data[i].process };
      // });
      arr = res.data;
    })
    .catch(() => {
      arr = [
        { skill: "????????????", request: "DOCUMENT" },
        { skill: "????????? ?????????", request: "PERSONALITY_TEST" },
        { skill: "?????? ?????????", request: "CODING_TEST" },
        { skill: "????????? ??????", request: "LIVE_CODING" },
        { skill: "AI ??????", request: "AI_INTERVIEW" },
        { skill: "?????? ??????", request: "ASSIGNMENT_REPORT" },
        { skill: "?????? ??????", request: "TECHNOLOGY_INTERVIEW" },
        { skill: "?????? ??????", request: "CULTURE_INTERVIEW" },
        { skill: "?????? ??????", request: "DIRECTOR_INTERVIEW" },
        { skill: "?????? ??????", request: "FINAL_INTERVIEW" },
        { skill: "?????? ??????", request: "PHYSICAL_TEST" },
      ];
    });

  return arr;
};
export const postNotice = (arr, ad) => {
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
    url: BaseUrl + "/notice/",
    method: "POST",
    params: { companyNumber: localStorage.getItem("companyNumber") },
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    },
    data: formData,
  })
    .then((res) => {
      console.log(res);
      Notice({ state: "success", message: "??????????????? ?????????????????????." });
    })
    .catch((err) => {
      console.log(err);
      Notice({ state: "error", message: err.message });
    });
};
export const getMyList = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(["MyCompanyList"], async () => {
    const { data } = await axios.get(
      BaseUrl + `/notice/list/every/${localStorage.getItem("companyNumber")}`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      }
    );
    // .then((response) => {
    //   const data = response.data;
    //   console.log(response);
    //   let arr = new Array(data.length).fill(0);
    //   let arr2 = new Array(data.length).fill(0);
    //   let count = [];
    //   for (let i = 0; i < data.length; i++) {
    //     let temp = 0;
    //     for (
    //       let j = 0;
    //       j < data[i].data.notice.recruitmentBusinessResponse.length;
    //       j++
    //     ) {
    //       arr[i][j] =
    //         data[i].data.notice.recruitmentBusinessResponse[
    //           j
    //         ].classificationResponse.bigClassification.bigClassificationName;
    //       arr2[i][j] =
    //         data[i].data.notice.recruitmentBusinessResponse[
    //           j
    //         ].classificationResponse.name;
    //       temp =
    //         temp +
    //         data[i].data.notice.recruitmentBusinessResponse[j]
    //           .numberOfEmployee;
    //     }
    //     count.push({
    //       total: temp,
    //       approve: data[i].approveStatus,
    //       day: data[i].data.notice.company.lastNoticeDate,
    //       id: data[i].data.notice.recruitmentBusinessResponse[0]
    //         .recruitmentBusinessId,
    //       noticeId: data[i].data.notice.noticeId,
    //       data: data[i].data.notice,
    //     });
    //   }
    //   const ad = arr.map((item) =>
    //     item.filter((e, i, ar) => {
    //       return ar.findIndex((el) => e === el) === i;
    //     })
    //   );
    //   console.log(ad);
    //   const as = arr2.map((item) =>
    //     item.filter((e, i, ar) => {
    //       return ar.findIndex((el) => e === el) === i;
    //     })
    //   );
    //   for (let i = 0; i < data.length; i++) {
    //     as[i] = as[i].join();
    //     ad[i] = ad[i].join();
    //   }
    //   res = { count, as, ad };
    // });
    console.log(data);
    return data;
  });
};
