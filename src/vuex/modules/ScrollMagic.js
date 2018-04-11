import { Controller as SMController } from 'scrollmagic';
import debug from 'ScrollMagicPlugins/debug.addIndicators';

const SHOULD_ADD_INDICATOR = process.env.NODE_ENV === 'development';

/** # ScrollMagic store
 * > All about scrollmagic
 *
 * Easy way to auto destroy scene based on routing etc
 *
 * @author Nicolas Husson <hello@nusson.ninja>
 */
export default {
  namespaced: true,
  state: {
    controller: new SMController(),
    scenes: [],
  },
  mutations: {
    ADD_SCENE(state, scene) {
      scene.addTo(state.controller);
      state.scenes.push(scene);
    },
  },
  actions: {
    ADDTO_PAGE_CONTROLLER({ commit }, scene) {
      if (SHOULD_ADD_INDICATOR) {
        scene.addIndicators();
      }
      commit('ADD_SCENE', scene);
    },
  },
  getters: {
    controller: state => state.controller,
    scenes: state => state.scenes,
  },
};
