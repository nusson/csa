import LocaleService from '@/services/Locale';
import store from '@/vuex/Store';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueRouter);
console.log('LocaleService.i18n', LocaleService.i18n);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n: LocaleService.i18n,
  router,
  store,
  render: h => h(App),
});
