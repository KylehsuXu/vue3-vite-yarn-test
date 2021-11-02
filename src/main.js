// 引入的是名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
// 引入Element Plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 引入路由
import router from "./router/index";
// 引入tailwind css

// 创建“轻量版”的应用实例对象，然后挂载到#app.注意use要在mount
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')


