import Vue from 'vue';
import VueRouter from 'vue-router';
import CarDetails from '../views/CarDetails';
import Home from '../views/Home';

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
        component: CarDetails,
    },
];

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes
});

export default router;
