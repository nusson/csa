import Vue from 'vue';
import LocaleService from '@/services/Locale';
import APIService from '@/services/API';
import Settings from '@/config/Settings';
import Cookies from 'js-cookie';

const route = {
  name: null,
  meta: {
    lang: LocaleService.lang,
    name: null,
  },
};

/** > General stuff for the whole app
 *
 * @author Nicolas Husson <hello@nusson.ninja>
 */
export default {
  namespaced: true,
  state: {
    lang: LocaleService.lang,
    route: {
      from: route,
      to: route,
    },
  },
  mutations: {
    SET_FROM_ROUTE(state, from) {
      state.route.from = from;
    },
    SET_TO_ROUTE(state, to) {
      state.route.to = to;
    },
    LANG_REFRESH(state) {
      const lang = state.lang;
      state.lang = 'none';
      Vue.$nextTick(() => {
        state.lang = lang;
      });
    },
    SET_LANG(state, lang) {
      if (lang === state.lang) {
        return;
      }
      state.lang = lang;
      LocaleService.lang = state.lang;
      Cookies.set(Settings.cookies.lang, state.lang);
      APIService.lang = state.lang;
    },
  },
  getters: {
    lang: state => state.lang,
    mode: state => state.mode,
    route: state => state.route,
  },
};
