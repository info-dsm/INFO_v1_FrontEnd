import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BaseUrl } from "../../../export/base";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNSIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2NjgzODEzNzUsImV4cCI6MTY2ODQ2Nzc3NX0.5BpCYYQQ_slpXRWtm3wdSjW-_VrKOnKK1KJ4R-MdY58";
export const getBoardList = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(["getBoardList"], async () => {
    const { data } = await axios({
      method: "get",
      url: BaseUrl + "/notice",
      params: { id: 134953727 },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    return data;
  });
};
export const noticeRequest = async (method, path, query) => {
  const { data } = await axios({
    method: method,
    url: BaseUrl + path,
    params: { noticeId: query },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(data);
};
export const postNoticeRequest = async (idx, path) => {
  let res;
  await axios({
    method: "get",
    url: BaseUrl + path,
    params: {
      idx: idx,
      size: 7,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    const data = response.data;
    console.log(data);
    let arr = new Array(data.content.length)
      .fill(0)
      .map((e, i) =>
        new Array(data.content[i].recruitmentBusinessResponse.length).fill("")
      );
    let arr2 = new Array(data.content.length)
      .fill(0)
      .map((e, i) =>
        new Array(data.content[i].recruitmentBusinessResponse.length).fill("")
      );
    let count = [];
    for (let i = 0; i < data.content.length; i++) {
      let temp = 0;
      for (
        let j = 0;
        j < data.content[i].recruitmentBusinessResponse.length;
        j++
      ) {
        arr[i][j] =
          data.content[i].recruitmentBusinessResponse[
            j
          ].classificationResponse.bigClassification.bigClassificationName;
        arr2[i][j] =
          data.content[i].recruitmentBusinessResponse[
            j
          ].classificationResponse.name;
        temp =
          temp +
          data.content[i].recruitmentBusinessResponse[j].numberOfEmployee;
      }
      count.push({
        total: temp,
        name: data.content[i].company.companyName,
        id: data.content[i].noticeId,
      });
    }
    const ad = arr.map((item) =>
      item.filter((e, i, ar) => {
        return ar.findIndex((el) => e === el) === i;
      })
    );
    const as = arr2.map((item) =>
      item.filter((e, i, ar) => {
        return ar.findIndex((el) => e === el) === i;
      })
    );
    for (let i = 0; i < data.content.length; i++) {
      as[i] = as[i].join();
      ad[i] = ad[i].join();
    }
    res = {
      count,
      as,
      ad,
      last: data.last,
      first: data.first,
      totalPage: data.totalPages,
    };
  });
  return res;
};
export const postNotice = (idx, path) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(
    ["pagin", idx, path],
    async () => postNoticeRequest(idx, path),
    {
      keepPreviousData: true,
    }
  );
};
