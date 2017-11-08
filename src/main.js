import LocaleService from '@/services/Locale';
import store from '@/vuex/Store';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.config.store = store;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n: LocaleService.i18n,
  router,
  store,
  render: h => h(App),
});
