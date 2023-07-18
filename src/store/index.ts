import Vuex from 'vuex'
interface UsersInterface{
   users: Array<{name:string; bankBook:number;}>,
   foundUser: Array<{name:string; bankBook:number;}>,
   data: Array<{bankBook:number; name:string; electricity: number; water: number; warm: number}>
}
export default new Vuex.Store({
  state: {
    users:[
        {
            name: 'Artem',
            bankBook: 123456,
    
        },
        {
            name: 'Andrey',
            bankBook: 171171,
        },
        {
            name: 'Kirill',
            bankBook: 133713,
        },
    ],
    foundUser:[{
    }],
    data:[
        {
            bankBook:123456,
            name:'Artem',
            electricity: 170.25,
            water: 16.55,
            warm: 13.33
        },
        {
            bankBook:171171,
            name: 'Andrey',
            electricity: 170.25,
            water: 16.55,
            warm: 13.33
        },
        {
            bankBook:133713,
            electricity: 170.25,
            name:'Kirill',
            water: 16.55,
            warm: 13.33
        },
    ]
  } as UsersInterface,
  getters:{
    getUsers(state){
        return JSON.parse(JSON.stringify(state.users));
    },
    getFoundUser(state){
        return JSON.parse(JSON.stringify(state.foundUser));
    },
    getData(state){
        const bankBook = state.foundUser[0]['bankBook'];
        return JSON.parse(JSON.stringify(state.data.filter((user) => user['bankBook'] === bankBook)));
    }
  },
  mutations: {
    setUser (state, payload) {
      state.foundUser = payload;
    }
  }
})