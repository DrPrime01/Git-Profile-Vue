import { createApp } from 'vue'
import App from './App.vue'
import { router } from './Router/index';
import store from '@/Store';
import './assets/tailwind.css'

createApp(App).use(router).use(store).mount('#app')
