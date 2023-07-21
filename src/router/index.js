import InputForm from '../views/InputForm'
import InfoTable from '../views/InfoTable';
import ErrorPage from '../components/ErrorPage';
//import SuccessComponent from '../components/SuccessComponent';
import {createRouter, createWebHistory} from 'vue-router';
export default new createRouter({
    history: createWebHistory(),
    routes:[
        {
            name:'InputForm',
            path: '/',
            component: InputForm
        },
        {
            path:'/info-table',
            name:'InfoTable',
            component: InfoTable
        },
        {
            path:'/404',
            name: 'ErrorPage',
            component: ErrorPage
        },
        {
            path: "/:catchAll(.*)",
            redirect: '/404'
        }
    ]
})