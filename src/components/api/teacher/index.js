import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BaseUrl } from "../../../export/base";
import { Notice } from "../../common/notice";
import { CompanyList } from "../../../export/data";
export const getBoardList = async (id) => {
  const { data } = await axios({
    method: "get",
    url: BaseUrl + `/notice/${id}`,
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
    },
  });
  console.log(data);
  return data;
};
export const getNoticeItem = (id) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(["noticeItem", id], () => getBoardList(id));
};
export const noticeRequest = async (method, path, query, num, message) => {
  await axios({
    method: method,
    url: BaseUrl + `/notice/${num}/${query}${path}`,
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
  const ParamsProps =
    path === "/notice/list/end"
      ? {
          status: "APPROVE",
          idx: idx,
          size: 7,
        }
      : {
          idx: idx,
          size: 7,
        };
  await axios({
    method: "get",
    url: BaseUrl + path,
    params: ParamsProps,
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
        ].classificationResponse[0].bigClassification.bigClassification;
      ad[i] = data.content[i].classificationResponse[0].name;
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
  })
    .then((res) => {
      data = res.data;
    })
    .catch((err) => {
      console.error(err);
      data = CompanyList[`list${idx + 1}`];
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
export const getSearchCompanyRequest = async (id, idx) => {
  let data = [];
  await axios({
    method: "get",
    url: BaseUrl + "/company/search",
    params: { name: id, idx: idx, size: 8 },
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
    },
  })
    .then((res) => {
      data = res.data;
    })
    .catch(() => {
      for (let key in CompanyList) {
        // eslint-disable-next-line no-loop-func, array-callback-return
        CompanyList[key].content.map((item) => {
          if (item.companyName.include(id) !== -1) {
            data.push(item);
          }
        });
      }
    });
  console.log(data);
  return data;
};
export const getCompanyName = (id, idx) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(["list", id, idx], async () =>
    getSearchCompanyRequest(id, idx)
  );
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
