import axios from "axios";
import { BaseUrl } from "../../../export/base";
export const searchCompany = async (id, accessToken) => {
  const { data } = await axios({
    method: "get",
    url: BaseUrl + "/notice/search",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      query: id,
    },
  });
  return data;
};
