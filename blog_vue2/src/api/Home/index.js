//对API进行统一管理
import requests from "../ajax";
export const reqlist = () => {
  return requests({ url: "blog/blog", method: "get" });
};
