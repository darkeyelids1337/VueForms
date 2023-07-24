import Vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
const state = {
  users: [
    {
      name: "Artem",
      bankBook: 123456,
    },
    {
      name: "Andrey",
      bankBook: 171171,
    },
    {
      name: "Kirill",
      bankBook: 133713,
    },
  ] as Array<{ name: string; bankBook: number }>,
  foundUser: [{}] as Array<{ name: string; bankBook: number }>,
  data: [
    {
      bankBook: 123456,
      name: "Artem",
      NodeList: [
        {
          прибор: "Электричество",
          значение: 170.25,
          "номер счетчика": 500500,
          "Текущее значение": 0,
        },
        {
          прибор: "Вода",
          значение: 16.55,
          "номер счетчика": 100500,
          "Текущее значение": 0,
        },
        {
          прибор: "Тепло",
          значение: 13.33,
          "номер счетчика": 300500,
          "Текущее значение": 0,
        },
      ],
    },
    {
      bankBook: 171171,
      name: "Andrey",
      NodeList: [
        {
          прибор: "electricity",
          значение: 170.25,
          "номер счетчика": 500500,
        },
        {
          прибор: "water",
          значение: 16.55,
          "номер счетчика": 100500,
        },
        {
          прибор: "warm",
          значение: 13.33,
          "номер счетчика": 300500,
        },
      ],
    },
    {
      bankBook: 133713,
      name: "Kirill",
      NodeList: [
        {
          прибор: "electricity",
          значение: 170.25,
          "номер счетчика": 500500,
          "Текущее значение": 0,
        },
        {
          прибор: "water",
          значение: 16.55,
          "номер счетчика": 100500,
          "Текущее значение": 0,
        },
        {
          прибор: "warm",
          значение: 13.33,
          "номер счетчика": 300500,
          "Текущее значение": 0,
        },
      ],
    },
  ] as Array<{
    bankBook: number;
    name: string;
    NodeList: Array<{
      прибор: string;
      значение: number;
      "номер счетчика": number;
      "Текущее значение": number;
    }>;
  }>,
  bankBook: 0 as number,
};
export default {
  namespaced:true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};

export type ReadingsState = typeof state;

