import { createApp } from 'vue'
import App from './App.vue'
import router from './core/router'
//import './styles/style.scss'
//createApp(App).mount('#app')


createApp(App).use(router).mount('#app')


