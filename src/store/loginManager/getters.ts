import { LoginState } from "./state";

export default {
  getLoginUsers(state: LoginState) {
    return JSON.parse(JSON.stringify(state.users));
  },
  getActiveUser(state: LoginState) {
    return JSON.parse(JSON.stringify(state.activeUser));
  },
};
