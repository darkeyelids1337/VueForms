<template style=" background-color:#f4f7f6;">
    <div v-if="!isError">
        <h1>InfoTable</h1>
        <h2>Добро пожаловать, {{ userInfo.name  }}</h2>
        <form @submit.prevent="submitForm">
            <div>
                <label>
                Электричество: 
                <input type="text" v-model="formElectricity">
            </label>
            </div>
            <div>
                <label style="margin-right: 69px;">
                Вода: 
                <input type="text" v-model="formWater">
            </label>
            </div>
            <div>
                <label style="margin-right: 67px;">
                Тепло: 
                <input type="text" v-model="formWarm">
            </label>
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
export default{
    name:'InfoTable',
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
            console.log(this.isFloat(+this.formElectricity))
            if(this.userInfo.electricity > +this.formElectricity || this.userInfo.water > +this.formWater || this.userInfo.warm > +this.formWarm){
                return this.isError = true;
            }
            // else if(this.isFloat(+this.formElectricity) && this.isFloat(+this.formWater) && this.isFloat(+this.formWarm)){
            //     this.$router.push('success');
            // }
            else if(+this.formElectricity === Number(this.formElectricity) && +this.formWater === Number(this.formWater) && +this.formWarm === Number(this.formWarm)){
                this.$router.push('success');
            }
            else this.isError = true;
        }
    }
}
</script>

<style scoped>
form{
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap:20px;
    width: 100%;
    
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