<template>
    <input type="text" @input="numberReg($event)" @change="changeModel($event)" v-model="value" placeholder="тык" @paste.prevent="onPaste($event)" @focusout="onFocusOut($event)"> 
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
            default:0
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
            let currentValue = evt.target.value;
            const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
            const keysAllowedNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
            const foundNum = evt.target.value.split('').every(r => keysAllowedNum.includes(r))
            if(evt.inputType === "deleteContentBackward" && evt.target.value.split('').length < 5 ){
                const newArr = evt.target.value.split('');
                evt.target.value = newArr.join('');
                currentValue = newArr.join('');
                this.lastValue = currentValue;
            }
            else if (!currentValue.match(regex)){
                const newArr = evt.target.value.split(''); 
                const beforeDot = evt.target.value.split('.');
                
                console.log(newArr);
               
                if( foundNum && newArr.length > 5 && !evt.target.value.includes('.')){
                    newArr.splice(5, 0, '.');
                    evt.target.value = newArr.join('');
                    this.lastValue = evt.target.value;
                }
                else if(beforeDot.length === 2 && beforeDot[0].length < 5 && beforeDot[1].length <= 3){
                    //console.log(evt.target.value.split("."));
                    //console.log(evt.target.value.split)
                    const found = evt.target.value.split('').every(r => keysAllowed.includes(r))
                    console.log(found);
                    if(found){
                        this.lastValue = evt.target.value;
                    }
                    else{
                        evt.target.value = this.lastValue;
                    }
                    
                }
                else{
                    console.log('im here')
                    evt.preventDefault();
                    evt.target.value = this.lastValue;
                }
            }
            else{
                this.lastValue = currentValue;
            } 
        },
        onFocusOut(evt){
            const currentValue = evt.target.value;
            const newArr= currentValue.split('.');
            if(newArr[1] ===''){
                evt.target.value = newArr.join('');
            }
        },
        onPaste(evt){
            const text = evt.clipboardData.getData('text');
            if(isNaN(Number(text)) || text.split('.')[0].length > this.before) {
                evt.preventDefault();
            }
            else{
                this.value = text;
                // this.isNumberInput(evt, this.value);
                this.changeModel();
            }    
        },
    changeModel(){
        this.$emit('changeModel', this.value)
    }
    },
}
</script>

<style>
</style>