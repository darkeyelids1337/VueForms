<template>
  <form>
    <div v-if="!isError" class="form-div">
      <h2>Введите номер лицевого счета:</h2>
      <label>
        <InputComponent @changeModel="(data) => this.bankBook = data"></InputComponent>
      </label>
      <div>
      <button @click.prevent = "submitForm" type="submit">Проверить</button>
    </div>
    </div>
    <div v-else>
      <h1>Такой лицевой счет не найден =(</h1>
      <button type="button" @click.prevent='isError = !isError'>Вернуться</button>
    </div>
    
 
  </form>
</template>

<script>
import InputComponent from './InputComponent.vue';
export default {
  name: 'InputForm',
  components:{
    InputComponent,
  },
  data(){
    return {
      isError: false,
      bankBook: '',
    }
  },
  computed: {
 
  },

  methods:{
    submitForm(){
      //this.bankBook = this.$store.getters.getBankBook;
      if(isNaN(+this.bankBook)){
        this.isError = true;
      }
      const users = this.$store.getters.getUsers.filter((user) => {
        return user['bankBook'] === +this.bankBook;
      });
      if(users.length > 0){
        this.$store.commit('setUser', users);
        this.$router.push('/info-table');
      }
      else return this.isError = true;
    },
    isNumberInput(evt){
      let charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
  },
  created(){
  },
}
</script>


<style scoped>
  form{
    width: 500px;
    height: 200px;
    margin: 0 auto;
    background-color:#f4f7f6;
  }
  .form-div{
    text-align: center;
    margin-top:50%;
  }
  button{
    border-radius: 15px;
    border-color: white;
    border-style: none;
    padding: 8px;
    text-align: center;
    font-size: 20px;
    margin-top: 25px;
  }
  button:active{
    background-color: rgb(18, 248, 18);
  }
  /* button:hover{
    background-color: rgb(250, 250, 252);
  } */
</style>
