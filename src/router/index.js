import Vue from 'vue';
import Router from 'vue-router';
import Settings from '@/config/Settings';
import Global from 'datas/Global';
import LocaleService from '@/services/Locale';
import { get, map, flatten, filter } from 'lodash';
import store from '@/vuex/Store';

Vue.use(Router);

function getRoute(page, { id, lang, prefix = '' }) {
  const route = get(page, `route.${lang}`);
  if (!route) { return null; }

  return {
    path: prefix + route,
    name: `${id}.${lang}`,
    meta: {
      name: id,
      lang,
    },
    component: get(page, 'route.component'),
  };
}
/**
 * compute (conplex) routes based on simple i18n route map
 * @param {Array} routes - routes simple map i18n friendly
 * @return {Array} formated routes for vue router
 */
function mapRoutes(pages) {
  return flatten(map(Settings.locales, (lang) => {
    const prefix = (Settings.prefixRoute) ? `/${lang}` : '';

    const routes = filter(pages, 'route');
    console.log(routes);
    return flatten(map(routes, (page, id) => {
      const route = getRoute(page, { prefix, lang, id });

      return [
        route,
        ...map(page.children, (child, childId) =>
          getRoute(child, { prefix: route.path, lang, id: childId })),
      ];
    }));
  }));
}

const routes = mapRoutes(Global.pages).concat([
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
