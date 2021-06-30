import Vue from 'vue';
import VueRouter from 'vue-router';
import Detail from '../views/detail';

Vue.use(VueRouter);

const routes = [
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
