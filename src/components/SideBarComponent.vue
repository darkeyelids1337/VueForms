<template>
    <div class="side-wrapper">
        <div class="side-element" :style="{marginTop: '20px'}" @click="toMain">
            <h4>Главная</h4>
        </div>
        <div class="side-element" @click="toContact">
            <h4>Контакты</h4>
        </div>
        <div class="side-element" @click="toNews">
            <h4>Новости</h4>
        </div>
        <div class="side-element" @click="toDocuments">
            <h4>Документы</h4>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default{
    name:'SideBarComponent',
    methods:{
        ...mapMutations({
            setLoginUser: 'loginManager/setLoginUser'
        }),
        toMain(){
            this.$router.push("/login-info-table");
        },
        toContact(){
            this.$router.push('/contacts');
        },
        toNews(){
            this.$router.push('/news');
        },
        toDocuments(){
            this.$router.push('/documents')
        }
    }
}
</script>

<style>
.side-wrapper{
    background: #2cac3d; 
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    /* position: absolute; */
    height: 100%;
    padding: 15px;
}
h4{
    margin: 0;
    font-size: 16px;
    padding: 6px;
}
ul{
    list-style: none;
    text-align: center;
}   
.side-element{
    border: 2px solid black;
    border-radius: 20%;
    width: 95%;
    cursor: pointer;
}
.side-element:hover,
.side-element:active{
    background-color: #6aac2c;
}
</style>