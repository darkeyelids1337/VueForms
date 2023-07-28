import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
const state = {
  users: [
    {
      name: "Artem",
      login: "qwerty",
      password: "123456",
    },
    {
      name: "Vlad",
      login: "lvs",
      password: "12345",
    },
  ] as Array<{ name: string; login: string; password: string }>,
  activeUser: {
    name: "" as string,
    login: "" as string,
    password: "" as string,
  },
};
export type LoginState = typeof state;
export default {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
};
