import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/Home/index';
import Settings from '@/config/Settings';
import LocaleService from '@/services/Locale';
import { map, flatten } from 'lodash';
import store from '@/vuex/Store';

Vue.use(Router);

/**
 * compute (conplex) routes based on simple i18n route map
 * @param {Array} routes - routes simple map i18n friendly
 * @return {Array} formated routes for vue router
 */
function mapRoutes(routes) {
  return flatten(map(Settings.locales, (lang) => {
    const prefix = (Settings.prefixRoute) ? `/${lang}` : '';

    return map(routes, (route, key) => ({
      path: prefix + route[lang],
      name: `${key}.${lang}`,
      meta: {
        name: key,
        lang,
      },
      component: route.component,
    }));
  }));
}

const routes = mapRoutes({
  home: {
    en: '/',
    fr: '/',
    component: HomePage,
  },
}).concat([
  { path: '/', redirect: { name: `home.${LocaleService.lang}` } },
  { path: '*', redirect: { name: `404.${LocaleService.lang}` } },
]);


const router = new Router({
  mode: 'history',
  routes,
});

/**
 * Change lang if needed at each page change
 */
router.afterEach((to) => {
  const lang = to.meta.lang;

  if (lang !== LocaleService.lang) {
    store.commit('App/SET_LANG', lang);
  }
});

export default router;
