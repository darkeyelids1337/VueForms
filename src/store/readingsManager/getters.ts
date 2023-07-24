import { ReadingsState } from "./state";

export default {
  getUsers(state: ReadingsState) {
    return JSON.parse(JSON.stringify(state.users));
  },
  getFoundUser(state: ReadingsState) {
    return JSON.parse(JSON.stringify(state.foundUser));
  },
  getData(state: ReadingsState) {
    const bankBook = state.foundUser[0]["bankBook"];
    const newState = JSON.parse(
      JSON.stringify(
        state.data.filter((user: any) => user["bankBook"] === bankBook)
      )
    );
    const sendState = newState[0];
    return sendState;
  },
  getBankBook(state: ReadingsState) {
    return state.bankBook;
  },
};
