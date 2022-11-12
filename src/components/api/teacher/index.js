import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BaseUrl } from "../../../export/base";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNSIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2NjgyMTc4OTAsImV4cCI6MTY2ODMwNDI5MH0.MKJc3OQID5--XKcbxn045jrArILC5Sop_e5UQXV7Fcc";
export const getBoardList = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(["getBoardList"], async () => {
    const { data } = await axios({
      method: "get",
      url: BaseUrl + "/notice",
      params: { id: 656574354 },
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
