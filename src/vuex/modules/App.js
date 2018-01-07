import Vue from 'vue';
import LocaleService from '@/services/Locale';
import APIService from '@/services/API';

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
    viewport: {
      width: 0,
      height: 0,
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
      try {
        LocaleService.lang = lang;
        state.lang = lang;
        APIService.lang = state.lang;
      } catch (error) {
        console.log('SET_LANG error', error);// eslint-disable-line
      }
    },
    /** update viewport size */
    UPDATE_VIEWPORT(state, { width, height }) {
      state.viewport = { width, height };
    },
  },
  actions: {
    RESIZE({ commit }, event) {
      const {
        innerWidth: width,
        innerHeight: height,
      } = window;
      commit('UPDATE_VIEWPORT', { width, height });
    },
  },
  getters: {
    lang: state => state.lang,
    mode: state => state.mode,
    route: state => state.route,
    viewport: state => state.viewport,
  },
};
