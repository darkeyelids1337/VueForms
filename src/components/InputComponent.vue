<template>
    <input type="text" @keypress="isNumberInput($event)" @change="changeModel" v-model="value" placeholder="тык" @paste.prevent="onPaste($event)"> 
</template>

<script>
export default{
    name:'InputComponent',
    props:{
        before: {
            type:Number,
            default:6
        },
        after:{
            type:Number,
            default:3
        }
    },
    data(){
        return {
            value: '',
            period: 0
        }
    },
    methods:{
    isNumberInput(evt, text){
            let charCode = evt.keyCode;
            const splited = this.value.split('.') || text;
            console.log(splited);
            const len = splited.length;
            len === 1 ? this.period = 1 : this.period = 2; 
            //charCode === 46 ? this.period++ : this.period;
            if(len === 1 && splited[0].length > this.before - 1 && charCode !== 46){
                evt.preventDefault();
                return false;
            }
            else if((len === 2 && splited[1].length > this.after - 1 ) || (len === 1 && splited[0].length > this.before && charCode !== 46)){
                evt.preventDefault();
                return false;
            }
            else if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46 || (charCode === 46 && this.period > 1)) {
                evt.preventDefault();
            } else {
                return true;
            }
        },
        onPaste(evt){
            const text = evt.clipboardData.getData('text');
            if(isNaN(Number(text)) || text.split('.')[0].length > this.before) {
                evt.preventDefault();
            }
            else{
                this.value = text;
                this.isNumberInput(evt, this.value);
                this.changeModel();
            }    
        },
    changeModel(){
        console.log(this.value);
        this.$emit('changeModel', this.value)
    }
    },
}
</script>

<style>
</style>