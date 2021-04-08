import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { _isMobile } from './assets/js/utils'

if(_isMobile()){
  require('./assets/css/wap.scss')
  console.log('wap');
} else {
  require('./assets/css/web.scss')
  console.log('web');
}
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
