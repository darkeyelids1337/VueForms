<template>
    <input type="text" @input="numberReg($event)" @change="changeModel($event)" v-model="value" placeholder="тык" @paste.prevent="onPaste($event)"> 
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
            lastValue: '',
            period: 0
        }
    },
    methods:{
    // isNumberInput(evt, text){
    //         const key = evt.key;
    //         console.log(evt);
    //         const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', 'Backspace'];
    //         if(!keysAllowed.includes(key)){
    //             evt.preventDefault();
    //         }
    //         const splited = this.value.split('.') || text;
    //         console.log(splited);
    //         const len = splited.length;
    //         len === 1 ? this.period = 1 : this.period = 2; 
    //         if(len === 1 && splited[0].length > this.before - 1 && (key !== '.' && key !== 'Backspace')){
    //             console.log('1 otrabotala')
    //             evt.preventDefault();  
    //             return false;
    //         }
    //         else if(len === 2 && key != 'Backspace'){
    //             if(splited[1].length > this.after - 1){
    //                 evt.preventDefault();
    //             }
    //             else if(splited[0].length > this.before){
    //                 evt.preventDefault();
    //             }
    //         }
    //         else return true;
    //     },
        numberReg(evt){
            const regex = new RegExp('^(\\d{0,' + this.before + '}|\\d{' + this.before + '}\\.\\d{0,' + this.after + '})$');
            const currentValue = evt.target.value;
            
            if (!currentValue.match(regex)){
                evt.preventDefault();
                evt.target.value = this.lastValue;
            }
            else{
                this.lastValue = currentValue;
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