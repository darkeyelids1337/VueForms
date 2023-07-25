const state = {
  news: [
    {
      title: "1 new",
      body: "Ура 1 новость ",
    },
    {
      title: "2 new",
      body: "Ура 2 новость ",
    },
    {
      title: "3 new",
      body: "Ура 3 новость ",
    },
    {
      title: "4 new",
      body: "Ура 4 новость ",
    },
    {
      title: "5 new",
      body: "Ура 5 новость ",
    },
    {
      title: "6 new",
      body: "Ура 6 новость ",
    },
    {
      title: "7 new",
      body: "Ура 7 новость ",
    },
    {
      title: "8 new",
      body: "Ура 8 новость ",
    },
    {
      title: "9 new",
      body: "Ура 9 новость ",
    },
    {
      title: "10 new",
      body: "Ура 10 новость ",
    },
    {
        title: "11 new",
        body: "Ура 11 новость ",
      },
  ] as Array<{title:string; body:string}>,
};
export type NewsState = typeof state;
export default{
    namespaced:true,
    state: state,
}