<template>
    <input type="text" @keypress="isNumberInput($event)" @change="changeModel" v-model="value" placeholder="тык">
</template>

<script>
export default{
    name:'InputComponent',
    data(){
        return {
            value: ''
        }
    },
    methods:{
    isNumberInput(evt){
            let charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();
            } else {
                return true;
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