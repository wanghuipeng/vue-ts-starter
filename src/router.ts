import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const scrollBehavior = (to, from, savedPosition) => {
  if (to.hash) {
    return { selector: to.hash };
  }
};

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'demo',
      component: () => import('./views/demo/demo.vue'),
      meta: {
        keepAlive: true,
        scrollTop: 0,
      },
    },
    // demo页
    {
      path: '/demo',
      name: 'demo',
      component: () => import('./views/demo/demo.vue'),
    },
    // demo详情页
    {
      path: '/demoDetail',
      name: 'demoDetail',
      component: () => import('./views/demo/demoDetail.vue'),
    },
  ],
});
