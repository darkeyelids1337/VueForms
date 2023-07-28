import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
const state = {
  data: [
    {
      company: "Alfreds Futterkiste",
      contact: "Maria Anders",
      country: "Germany",
      number: 1
    },
    {
      company: "Berglunds snabbköp",
      contact: "Christina Berglund",
      country: "Sweden",
      number: 2
    },
    {
      company: "Centro comercial Moctezuma",
      contact: "Francisco Chang",
      country: "Mexico",
      number: 3
    },
    {
      company: "Ernst Handel",
      contact: "Roland Mendel",
      country: "Austria",
      number: 4
    },
    {
      company: "Island Trading",
      contact: "Helen Bennett",
      country: "UK",
      number: 5
    },
    {
      company: "Königlich Essen",
      contact: "Philip Cramer",
      country: "Germany",
      number: 6
    },
    {
      company: "Laughing Bacchus Winecellars",
      contact: "Yoshi Tannamuri",
      country: "Canada",
      number: 7
    },
    {
      company: "Magazzini Alimentari Riuniti",
      contact: "Giovanni Rovelli",
      country: "Italy",
      number: 8
    },
    {
      company: "North/South",
      contact: "Simon Crowther",
      country: "UK",
      number: 9
    },
    {
      company: "Paris spécialités",
      contact: "Marie Bertrand",
      country: "France",
      number: 10
    },
  ] as Array<{company: string; contact: string; country: string; number: number}>,
  data2: [
    {
      company: "ITS",
      contact: "Maria Anders",
      country: "Germany",
      number: 1
    },
    {
      company: "VVS",
      contact: "Christina Berglund",
      country: "Sweden",
      number: 2
    },
    {
      company: "GPS",
      contact: "Francisco Chang",
      country: "Mexico",
      number: 3
    },
    {
      company: "RFS",
      contact: "Roland Mendel",
      country: "Austria",
      number: 4
    },
    {
      company: "DT",
      contact: "Helen Bennett",
      country: "UK",
      number: 5
    },
    {
      company: "KAAAA",
      contact: "Philip Cramer",
      country: "Germany",
      number: 6
    },
    {
      company: "HEHEHE",
      contact: "Yoshi Tannamuri",
      country: "Canada",
      number: 7
    },
    {
      company: "MaAAG",
      contact: "Giovanni Rovelli",
      country: "Italy",
      number: 8
    },
    {
      company: "eEEAST",
      contact: "Simon Crowther",
      country: "UK",
      number: 9
    },
    {
      company: "OSLO",
      contact: "Marie Bertrand",
      country: "France",
      number: 10
    },
  ] as Array<{company: string; contact: string; country: string; number: number}>,
  data3: [
    {
      company: "Alfreds Futterkiste",
      contact: "Maria Anders",
      country: "Germany",
      number: 10
    },
    {
      company: "Berglunds snabbköp",
      contact: "Christina Berglund",
      country: "Sweden",
      number: 9
    },
    {
      company: "Centro comercial Moctezuma",
      contact: "Francisco Chang",
      country: "Mexico",
      number: 8
    },
    {
      company: "Ernst Handel",
      contact: "Roland Mendel",
      country: "Austria",
      number: 10
    },
    {
      company: "Island Trading",
      contact: "Helen Bennett",
      country: "UK",
      number: 10
    },
    {
      company: "Königlich Essen",
      contact: "Philip Cramer",
      country: "Germany",
      number: 10
    },
    {
      company: "Laughing Bacchus Winecellars",
      contact: "Yoshi Tannamuri",
      country: "Canada",
      number: 10
    },
    {
      company: "Magazzini Alimentari Riuniti",
      contact: "Giovanni Rovelli",
      country: "Italy",
      number: 10
    },
    {
      company: "North/South",
      contact: "Simon Crowther",
      country: "UK",
      number: 10
    },
    {
      company: "Paris spécialités",
      contact: "Marie Bertrand",
      country: "France",
      number: 10
    },
  ] as Array<{company: string; contact: string; country: string; number: number}>,
};
export type DocumentsState = typeof state;
export default {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
};
