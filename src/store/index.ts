import Vuex from 'vuex'
interface UsersInterface{
   users: Array<{name:string; bankBook:number;}>,
   foundUser: Array<{name:string; bankBook:number;}>,
   data: Array<{bankBook:number; name:string; NodeList: Array<{'прибор': string; 'значение': number; 'номер счетчика': number;'Текущее значение': number}>;}>,
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
                    'прибор':'Электричество',
                    'значение': 170.25,
                    'номер счетчика': 500500,
                    'Текущее значение': 0
                },
                {
                    'прибор': 'Вода',
                    'значение':16.55,
                    'номер счетчика': 100500,
                    'Текущее значение': 0
                },
                {
                    'прибор': 'Тепло',
                    'значение': 13.33,
                    'номер счетчика': 300500,
                    'Текущее значение': 0
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
                     'Текущее значение': 0
                },
                {
                    'прибор': 'water',
                    'значение':16.55,
                    'номер счетчика': 100500,
                    'Текущее значение': 0
                },
                {
                    'прибор': 'warm',
                    'значение': 13.33,
                    'номер счетчика': 300500,
                    'Текущее значение': 0
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
        const newState = JSON.parse(JSON.stringify(state.data.filter((user) => user['bankBook'] === bankBook)));
        const sendState = newState[0];
        return sendState;
        //return JSON.parse(JSON.stringify(state.data.filter((user) => user['bankBook'] === bankBook)));
        
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
    },
    setCurrentValue(state, payload){
        const {meter, value} = payload;
        console.log(meter, value);
        const bankBook = state.foundUser[0]['bankBook'];
        const some = JSON.parse(JSON.stringify(state.data.filter((user) => {
            return user['bankBook'] === bankBook;
        })))
        if(some.length > 0){
            const arr = some[0]['NodeList'];
            const newArr = arr.filter((item:any) => {
                return item['прибор'] === meter;
            });
            console.log(newArr[0]);
            newArr[0]['Текущее значение'] = +value;
            console.log('new', newArr);
            state.data[0].NodeList.forEach((item, index) => {
                if(item['прибор'] === meter){
                    state.data[0].NodeList[index] = newArr[0];
                }
            })
            console.log(state.data[0]);
            //state.data[0].NodeList[meter] = newArr;
        }
        
    }
  }
})