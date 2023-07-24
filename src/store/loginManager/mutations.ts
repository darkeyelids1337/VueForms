import { LoginState } from "./state";
import { setUser } from "./interfaces";
export default {
  setLoginUser(state: LoginState, payload: setUser) {
    state.activeUser = payload;
  },
};
