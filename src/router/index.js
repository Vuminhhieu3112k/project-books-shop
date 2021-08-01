import { createRouter, createWebHistory } from "vue-router";
import Home from '../view/homePage/homePage.vue';
import product from '../view/product.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/product', component: product}

]
 
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router