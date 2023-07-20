import Vuex from 'vuex'
interface UsersInterface{
   users: Array<{name:string; bankBook:number;}>,
   foundUser: Array<{name:string; bankBook:number;}>,
   data: Array<{bankBook:number; name:string; NodeList: Array<{'прибор': string; 'значение': number; 'номер счетчика': number;}>;}>,
   bankBook: number,
   newValues: object
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
            NodeList: [
                {
                    'прибор':'electricity',
                    'значение': 170.25,
                    'номер счетчика': 500500,
                },
                {
                    'прибор': 'water',
                    'значение':16.55,
                    'номер счетчика': 100500
                },
                {
                    'прибор': 'warm',
                    'значение': 13.33,
                    'номер счетчика': 300500
                },
            ],
        },
        {
            bankBook:171171,
            name: 'Andrey',
            NodeList: [
                {
                    'прибор':'electricity',
                    'значение': 170.25,
                    'номер счетчика': 500500,
                },
                {
                    'прибор': 'water',
                    'значение':16.55,
                    'номер счетчика': 100500
                },
                {
                    'прибор': 'warm',
                    'значение': 13.33,
                    'номер счетчика': 300500
                },
            ],
        },
        {
            bankBook:133713,
            name:'Kirill',
            NodeList: [
                {
                    'прибор':'electricity',
                    'значение': 170.25,
                    'номер счетчика': 500500,
                },
                {
                    'прибор': 'water',
                    'значение':16.55,
                    'номер счетчика': 100500
                },
                {
                    'прибор': 'warm',
                    'значение': 13.33,
                    'номер счетчика': 300500
                },
            ],
        },
    ],
    bankBook: 0,
    newValues:{
        meter: 'meter',
        value: 1
    }
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
        //console.log(state.data.filter((user) => user['bankBook'] === bankBook));
        //console.log(JSON.stringify(state.data.filter((user) => user['bankBook'] === bankBook)));
        return JSON.parse(JSON.stringify(state.data.filter((user) => user['bankBook'] === bankBook)));
        //return JSON.stringify(state.data.filter((user) => user['bankBook'] === bankBook));
    },
    getBankBook(state){
        return state.bankBook;
    },
    getNewValues(state){
        return JSON.parse(JSON.stringify(state.newValues));
    }
  },
  mutations: {
    setUser (state, payload) {
      state.foundUser = payload;
    },
    setBankBook(state, payload){
        state.bankBook = payload;
    },
    setNewValues(state, payload){
        state.newValues = payload;
    }
  }
})