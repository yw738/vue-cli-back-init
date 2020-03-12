import Vue from 'vue'

import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import qs from 'qs'
import App from './App.vue'
import './components/EleModule/index'
import rule from "./assets/js/filter_rules"

Vue.use(ElementUI);
Vue.prototype.$filter_rules = rule;//公共验证
Vue.config.productionTip = false
Vue.prototype.$axios= axios;
Vue.prototype.$qs = qs;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
