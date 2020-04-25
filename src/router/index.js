/**
 * Created by Kaola on 2020-02-17.
 */
import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/home';

Vue.use(Router);

const router = new Router({
  routes: [{
      path: '/',
      name: '/',
      component: Home,
      meta: {
        title: '首页'
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === '/home') {
    if (from.path === '/house') {
      document.title = '我的房子';
    }
    if (from.path === '/car') {
      document.title = '我的车子';
    }
  }
  next(true);
});
export default router;
