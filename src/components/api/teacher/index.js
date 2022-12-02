import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BaseUrl } from "../../../export/base";
import { Notice } from "../../common/notice";
export const getBoardList = async (id) => {
  const { data } = await axios({
    method: "get",
    url: BaseUrl + "/notice",
    params: { id: id },
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
    },
  });
  return data;
};
export const getNoticeItem = (id) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(["noticeItem", id], () => getBoardList(id));
};
export const noticeRequest = async (method, path, query, message) => {
  await axios({
    method: method,
    url: BaseUrl + path,
    params: { noticeId: query },
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
    },
  })
    .then((res) => {
      Notice({ state: "seccess", message: message });
    })
    .catch((err) => {
      Notice({ state: "error", message: err.message });
    });
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
      Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
    },
  }).then((response) => {
    const data = response.data;
    console.log(data);
    let as = new Array(data.content.length).fill(0);
    let ad = new Array(data.content.length).fill(0);
    let count = [];
    for (let i = 0; i < data.content.length; i++) {
      let temp = 0;
      as[i] =
        data.content[
          i
        ].classificationResponse.bigClassification.bigClassification;
      ad[i] = data.content[i].classificationResponse.name;
      temp = data.content[i].numberOfEmployee;
      count.push({
        total: temp,
        name: data.content[i].company.companyName,
        id: data.content[i].noticeId,
        num: data.content[i].company.companyNumber,
      });
    }
    res = {
      count,
      as,
      ad,
      last: data.last,
      first: data.first,
      totalPage: data.totalPages,
      content: data.content,
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
export const getCompanyRequest = async (idx) => {
  let data;
  await axios({
    method: "get",
    url: BaseUrl + "/company/list",
    params: {
      idx: idx,
      size: 8,
    },
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
    },
  }).then((res) => {
    data = res.data;
  });
  console.log(data);
  return data;
};
export const getCompany = (idx) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(["list", idx], async () => getCompanyRequest(idx), {
    keepPreviousData: true,
  });
};
export const getCompanyName = (id) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(["list", id], async () => {
    const { data } = await axios({
      method: "get",
      url: BaseUrl + "/company/search",
      params: { query: id },
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    return data;
  });
};
export const getCompanyInfo = async (id) => {
  const { data } = await axios({
    url: BaseUrl + "/company/" + id,
    method: "get",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
    },
  });
  console.log(data);
  return data;
};
export const getUseCompanyInfo = (id) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(["companyInfo", id], () => getCompanyInfo(id));
};
export const getUserCompany = async (companyNum, id, status) => {
  const { data } = await axios({
    url: BaseUrl + `/applies/${companyNum}/${id}`,
    method: "get",
    params: {
      status: status,
    },
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
    },
  });
  console.log(data);
  return data;
};
export const getUseUserCompany = (id, idx) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(["teacherGetUser", id, idx], () =>
    getUseUserCompany(id, idx)
  );
};
