import { createApp } from 'vue'
import { createPinia } from 'pinia'; // Sử dụng pinia để quản lý state
import router from './router/index';
import { Button, Drawer, message, List, Menu } from 'ant-design-vue'; // Những component của Ant Design vue tại https://antdv.com
import App from './App.vue'

import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Button);
app.use(List);
app.use(Drawer);
app.use(Menu);
app.mount('#app');

app.config.globalProperties.$message = message;
