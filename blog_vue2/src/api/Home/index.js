//对API进行统一管理
import requests from "../ajax";
// 所有博客
export const reqlist = () => {
  return requests({ url: "/api/user/bloglist", method: "get" });
};
