import { createApp } from 'vue'
import App from './App.vue'
import router from './core/router'

//createApp(App).mount('#app')


createApp(App).use(router).mount('#app')
