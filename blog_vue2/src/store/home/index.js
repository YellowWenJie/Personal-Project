import { reqlist } from "../../api/Home/index";

const state = {
  blogList: []
};
//actions可以书写自己的业务逻辑，最后提交到mutations
const actions = {
  //通过api里面的接口函数调用，向服务器发请求
  async blogList({ commit }) {
    let result = await reqlist();
    console.log(result);
    // if (result.code == 200) {
    commit("BLOGLIST", result);
    // }
  }
};
//mutations修改state的唯一手段
const mutations = {
  BLOGLIST(state, result) {
    state.blogList = result;
  }
};
//getters理解为计算属性
const getters = {};

export default {
  // namespaced: true,
  state,
  actions,
  mutations,
  getters
};
