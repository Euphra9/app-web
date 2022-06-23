import { createApp } from 'vue'
import App from './App.vue'
import router from './core/router'
import './styles/style.css'
//createApp(App).mount('#app')


createApp(App).use(router).mount('#app')


