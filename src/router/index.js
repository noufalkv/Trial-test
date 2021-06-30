import Vue from 'vue';
import VueRouter from 'vue-router';
import Detail from '../views/detail';
import Home from '../components/Home';

Vue.use(VueRouter);

const routes = [
    {
        name: 'Root',
        path: '/',
        component: Home,
       
    },
     {
        name: 'DetailById',
        path: '/detail/:id',
        component: Detail,
   },
];

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes
});

export default router;
