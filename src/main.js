import { createApp } from 'vue'
import './style/general.scss'
import App from './App.vue'
import { router } from "./router"
import * as bootstrap from 'bootstrap'

createApp(App).use(router).mount("#app");
