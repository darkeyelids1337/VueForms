import {createRouter, createWebHistory} from 'vue-router';
export default new createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: require('../views/InputForm').default
        },
        {
            path:'/info-table',
        
            component: require('@/views/InfoTable').default
        },
        {
            path:'/404',
           
            component: require('@/views/ErrorPage').default
        },
        {
            path: "/:catchAll(.*)",
            redirect: '/404'
        }
    ]
})