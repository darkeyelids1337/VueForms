<template>
    <div>
        <InfoTable v-if="this.$store.getters.getFoundUser.length > 0"></InfoTable>
        <InputForm v-else></InputForm>
    </div>
</template>

<script>
import InfoTable from './InfoTable.vue';
import InputForm from './InputForm.vue';
export default{
    name:'MainComponent',
    components: {
        InfoTable,
        InputForm,
    }
}
</script>

<style>
</style>