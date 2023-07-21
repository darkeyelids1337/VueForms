<template>
  <form>
    <div class="form-div">
      <h2>Введите номер лицевого счета:</h2>
      <label>
        <InputComponent @changeModel="(data) => this.bankBook = data" @paste="onPaste($event)" :class="{active : isError}"></InputComponent>
      </label>
      <div>
      <button @click.prevent = "submitForm" type="submit">Проверить</button>
    </div>
    </div>
    <div v-if="isError" class="modal-class">
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
      else{
        return this.isError = true;
      } 
    },
    isNumberInput(evt){
      let charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    onPaste(evt){
      this.bankBook = evt.clipboardData.getData('text');
    }
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
  .active{
    color: red;
  }
  @keyframes myAnim {
	0% {
		animation-timing-function: ease-in;
		opacity: 1;
		transform: translateY(-45px);
	}

	24% {
		opacity: 1;
	}

	40% {
		animation-timing-function: ease-in;
		transform: translateY(-24px);
	}

	65% {
		animation-timing-function: ease-in;
		transform: translateY(-12px);
	}

	82% {
		animation-timing-function: ease-in;
		transform: translateY(-6px);
	}

	93% {
		animation-timing-function: ease-in;
		transform: translateY(-4px);
	}

	25%,
	55%,
	75%,
	87% {
		animation-timing-function: ease-out;
		transform: translateY(0px);
	}

	100% {
		animation-timing-function: ease-out;
		opacity: 1;
		transform: translateY(0px);
	}
}

  .modal-class{
    animation: myAnim 1s ease 0s 1 normal forwards;
    position: fixed;
    top:15%;
    z-index: 2;
    padding: 15px;
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    background-color: #04AA6D;
    border-radius: 5px;
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
