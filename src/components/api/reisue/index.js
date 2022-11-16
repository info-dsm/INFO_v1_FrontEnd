import axios from "axios";
import { BaseUrl } from "../../../export/base";
import { useQuery } from "@tanstack/react-query";
export const Reissue = async () => {
  const refresh = sessionStorage.getItem("refreshToken");
  const token = sessionStorage.getItem("accessToken");
  await axios({
    url: BaseUrl + "/auth/reissue",
    method: "post",
    body: {
      accessToken: token,
      refreshToken: refresh,
    },
  }).then(({ accessToken, refreshToken }) => {
    sessionStorage.setItem("accessToken", accessToken);
    sessionStorage.setItem("refreshToken", refreshToken);
  });
};
export const PostReissue = () => {
  useQuery(["reissue"], async () => Reissue(), {
    staleTime: 171800000,
  });
};
