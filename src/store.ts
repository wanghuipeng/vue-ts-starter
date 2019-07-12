import Vue from 'vue';
import Vuex from 'vuex';
// import { userInfo } from '@/store/model';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    pageLoad: !0,
  },
  mutations: {
    setPageLoad(state, load) {
      setTimeout(() => {
        state.pageLoad = load;
      }, 1e3);
    },
  },
  actions: {
    initDemoPage(context) {
      context.commit('setPageLoad', !1);
    },
    initDemoDetailPage(context) {
      context.commit('setPageLoad', !1);
    },
  },
});
