import LocaleService from '@/services/Locale';
import Vue from 'vue';
// import VueI18n from 'vue-i18n';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n: LocaleService.i18n,
  router,
  render: h => h(App),
});
