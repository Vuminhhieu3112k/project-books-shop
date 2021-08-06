import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.css'
import './assets/css/base.css'
import './assets/css/main.css'
import './assets/css/product_detail.css'
import './assets/css/login-regis.css'
import './assets/css/cart.css'
import './assets/css/grid.css'
import './assets/css/responsive.css'


// import './assets/font/fontawesome-free-5.15.1-web/css/all.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/tailwind.css'

library.add(fas)




const app = createApp(App)
    .use(router)
    .component('fa', FontAwesomeIcon)
app.mount('#app')
