import {createRouter, createWebHistory} from 'vue-router';
import TablaMultiplicar from './components/TablaMultiplicar.vue';

const myRoutes = [
    {
        path:"/tablamultiplicar/:numero?", component:TablaMultiplicar
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;