import Vue from 'vue';
import Vant from 'vant';
import store from './store';
import App from './App.vue';
import router from './router/index';
import 'vant/lib/index.css';
import 'vant/lib/icon/local.css';

// 全局css
import './styles/common.css';
import './styles/reset.css';
import './styles/main.css';

Vue.config.productionTip = false;

Vue.use(Vant);

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
