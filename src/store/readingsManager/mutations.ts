import { currentValues, users } from "./interfaces";
import { ReadingsState } from "./state";

export default {
  setUser(state: ReadingsState, payload: users) {
    state.foundUser = payload;
  },
  setBankBook(state: ReadingsState, payload: number) {
    state.bankBook = payload;
  },
  setCurrentValue(state: ReadingsState, payload: currentValues) {
    const { meter, value } = payload;
    const bankBook = state.foundUser[0]["bankBook"];
    const some = JSON.parse(
      JSON.stringify(
        state.data.filter((user) => {
          return user["bankBook"] === bankBook;
        })
      )
    );
    if (some.length > 0) {
      const arr = some[0]["NodeList"];
      const newArr = arr.filter((item: any) => {
        return item["прибор"] === meter;
      });
      newArr[0]["Текущее значение"] = +value;
      state.data[0].NodeList.forEach((item, index) => {
        if (item["прибор"] === meter) {
          state.data[0].NodeList[index] = newArr[0];
        }
      });
    }
  },
};
