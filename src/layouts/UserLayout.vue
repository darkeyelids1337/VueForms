<template>
    <div>
        <HeaderComponent>
            {{ activeUser.name }}
        </HeaderComponent>
        <slot>

        </slot>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent';
import FooterComponent from '@/components/FooterComponent'
import {mapState} from 'vuex';
export default{
    name:'UserLayout',
    components:{
        HeaderComponent,
        FooterComponent
    },
    computed:{
        ...mapState({
      activeUser: (state) => state.loginManager.activeUser,
    }),
    }
}
</script>

<style>
</style>