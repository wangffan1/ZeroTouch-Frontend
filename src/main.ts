import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css' //element plus css
import VChart from 'vue-echarts'
import '@/assets/scss/font.scss';
import '@/styles/common.scss'

const pinia = createPinia()

const app = createApp(App);
app.component('v-chart', VChart)
app.use(router)
.use(pinia)
.use(ElementPlus)
.mount('#app')

