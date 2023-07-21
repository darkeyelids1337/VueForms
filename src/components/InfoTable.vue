<template>
    <div>
        <h1>InfoTable</h1>
        <h2>Добро пожаловать, {{ userInfo.name  }}</h2>
        <form @submit.prevent="submitForm($event)" ref="formItem">
            <table class="table-class">
                <tr>
                    <th v-for="(item, index) in Object.keys(userInfo['NodeList'][0])" :key="index" >
                        {{ item.toUpperCase() }}
                    </th>
                    <th>Разница </th>
                </tr>
                <tr v-for="item in userInfo['NodeList']" :key="item">
                    <td>
                        {{ item['прибор'] }}
                    </td>
                    <td>
                        {{ item['значение'] }}
                    </td>
                    <td>
                        {{ item['номер счетчика'] }}
                    </td>
                    <td>
                        <InputComponent :before="5" :after="3" @changeModel="checkInput" :meter="item['прибор']"></InputComponent>
                        <p class="errorP" v-if="isError && item['Текущее значение'] - item['значение'] < 0 ">Перепроверьте данные!</p>
                    </td>
                    <td :style="(item['Текущее значение'] - item['значение']) < 0  ? errorStyle : okStyle" >
                        {{ (item['Текущее значение'] === 0 ? 0 : item['Текущее значение'] - item['значение']).toFixed(3)}}
                    </td>
                    <!-- :class="{errorClass: meters[item['прибор']] - item['значение'] < 0 ? true : false}" -->
                </tr>
            </table>
           <button type="submit" :disabled="toDisable" :style="{marginBottom: '15px', marginTop: '0px'}">Отправить</button>
        </form>
    </div>
    <ModalComponent v-if="isModal" @closeModal = 'fromModal' @clickOn="fromModal">
            <h2>К сожалению вы ввели данные меньше предыдущих показаний или некорректные данные. Перепроверьте и введите еще раз</h2>
    </ModalComponent>
    <!-- <div v-if="isModal" class="modal-class" v-click-away = 'fromModal'>
            
    </div> -->
</template>


<script>
import InputComponent from './InputComponent.vue';
import ModalComponent from './ModalComponent.vue';
export default{
    name:'InfoTable',
    components: {
        InputComponent,
        ModalComponent,
    },
    data(){
        return {
            userInfo: {
                name: 'Artem'
            },
            meters:{
                
            },
            isDisabled: [],
            isError: false,
            isModal: false,
            
        }
    },
    created(){
        if(this.$store.getters.getData){
           this.userInfo = this.$store.getters.getData;
        }
    },
    computed:{
        toDisable(){
            let disabled = true;
            this.userInfo.NodeList.forEach((item) => {
                if(item['Текущее значение'] > 0){
                    disabled = false;
                }
            })
            return disabled;
        },
        okStyle(){
            return {
                color: `green`
            }
        },
        errorStyle(){
            return {
                color: `red`
            }
        }
    },
    methods:{
        submitForm(){
            //const meters = JSON.parse(JSON.stringify(this.meters));
            const prevValues = JSON.parse(JSON.stringify(this.userInfo['NodeList']));
            prevValues.forEach((item) => {
                if(item['значение'] > item['Текущее значение'] ){
                    this.isModal = true;
                    this.isError = true;
                }
            })
            if(!this.isModal){
                this.$router.push('success');
            }
            
        },
        fromModal(){
              this.isModal = !this.isModal;
        //    this.isError = !this.isError
        },
        checkClick(evt){
            console.log(evt);
        },
        checkInput(value, meter){
            const newValues = {
            'meter': meter,
            'value': value
            };
            this.$store.commit('setCurrentValue', newValues);
            const some = JSON.parse(JSON.stringify(this.$store.getters.getData))
              this.userInfo['NodeList'].forEach((item, index) => {
                item['Текущее значение'] = some.NodeList[index]['Текущее значение']
              })
        }
        
    }
}
</script>

<style scoped>
.okClass{
    color: rgb(2, 0, 128);
}
.errorP{
    color: red;
    font-size: 12px;
    
}
.table-class{
    border-collapse: collapse;
    width: 100%;
    /* margin-top:15px */
    
}
th{
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #04AA6D;
    color: white;
}
td{
    border: 1px solid #ddd;
    padding: 8px;
}
p{
    margin: 0;
}
.values{
    font-weight: 700;
    background-color: rgba(129, 127, 127, 0.185);
}
form{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap:20px;
    max-width: 70%;
    border: 1px solid #1C6EA4;
    
}
h1{
    text-align: center;
    margin: 0 auto;
}
form > div{
    text-align: center;
}
input{
    padding: 0px;
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
  /* @keyframes myAnim {
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
    top:10%;
    left:40%;
    border: 1px solid #ddd;
    text-align: center;
    background-color: #04AA6D;
    color: white;
    z-index: 2;
    padding: 15px;
    border-radius: 5px;
    width: 400px;
    height: 300px;
    box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  }
  .modal-class > div{
    position: relative;
    left: 50%;
    bottom: 3%;
    cursor: pointer;
  } */
</style>