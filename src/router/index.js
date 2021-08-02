import { createRouter, createWebHistory } from "vue-router";
import Home from '../view/PageWeb/homePage/homePage.vue';
import product from '../view/PageWeb/productDetails/product.vue'
import login from '../view/PageWeb/login/login.vue'


const routes = [
    {path: '/', component: Home},
    {path: '/product', component: product},
    {path: '/login', component: login}


]
 
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router