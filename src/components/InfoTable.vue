<template style=" background-color:#f4f7f6;">
    <div v-if="!isError">
        <h1>InfoTable</h1>
        <h2>Добро пожаловать, {{ userInfo.name  }}</h2>
        <form @submit.prevent="submitForm">
            <div class="table-class">
              
                <div class="table-column">
                    <P>Тип счетчика</P>
                    <p>
                    Электричество
                </p>
                <p>
                    Вода 
                </p>
                <p>
                    Тепло
                </p>
                </div>
                
                <div class="table-column">
                    <p>Текущие показания</p>
                    <div class="values">
                        {{ userInfo.electricity }}
                    </div>  
                    <div class="values">
                        {{ userInfo.water }}
                    </div>
                    <div class="values">  
                        {{ userInfo.warm }}
                    </div>
                    
                </div>
                <div class="table-column">
                    <p>Ввод значений</p>
                    <div>
                        <InputComponent @changeModel="(data) => this.formElectricity = data" :before="5" :after="3"></InputComponent>
                    </div>  
                    <div>
                        <InputComponent @changeModel="(data) => this.formWater = data" :before="5" :after="3"></InputComponent>
                    </div>
                    <div>  
                        <InputComponent @changeModel="(data) => this.formWarm = data" :before="5" :after="3"></InputComponent>
                    </div>
                    
                </div>
            </div>
           <button type="submit" :disabled="toDisable">Отправить</button>
        </form>
    </div>
    <div v-else>
            <h2>К сожалению вы ввели данные меньше предыдущих показаний или некорректные данные. Перепроверьтре и введите еще раз</h2>
            <button type="button" @click.prevent="isError = !isError">Вернуться</button>
    </div>
</template>


<script>
import InputComponent from './InputComponent.vue';
export default{
    name:'InfoTable',
    components: {
        InputComponent,
    },
    data(){
        return {
            userInfo: {

            },
            formElectricity: "",
            formWater: "",
            formWarm: "",
            isDisabled: true,
            isError: false,
        }
    },
    created(){
        if(this.$store.getters.getData[0]){
            this.userInfo = this.$store.getters.getData[0];
        }
    },
    computed:{
        toDisable(){
            const something = +this.formElectricity + +this.formWater + +this.formWarm;
            return something === 0;
        }
    },
    methods:{
        isFloat(number){
            return Number(number) === number && number % 1 !== 0;
        },
        submitForm(){
            console.log(+this.formElectricity);
            console.log(+this.formWater);
            console.log(+this.formWarm);
            if(this.userInfo.electricity > +this.formElectricity || this.userInfo.water > +this.formWater || this.userInfo.warm > +this.formWarm){
                return this.isError = true;
            }
            else if(+this.formElectricity === Number(this.formElectricity) && +this.formWater === Number(this.formWater) && +this.formWarm === Number(this.formWarm)){
                
                this.$router.push('success');
            }
            else this.isError = true;
        },
    }
}
</script>

<style scoped>
.table-class{
    margin-top: 50px;
    display: flex;
    gap: 20px;
}
.table-column{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.table-column > div{
    border: 2px solid #1C6EA4;
}
.table-column > p{
    border: 2px solid #1C6EA4;
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
    max-width: 50%;
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
</style>