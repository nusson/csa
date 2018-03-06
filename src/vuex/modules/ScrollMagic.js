import { Controller as SMController } from 'scrollmagic';
import debug from 'ScrollMagicPlugins/debug.addIndicators';

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
      console.log('ADD_SCENE', scene, state.controller);
      scene
        .addIndicators()
        .addTo(state.controller);
      state.scenes.push(scene);
    },
  },
  actions: {
    ADDTO_PAGE_CONTROLLER({ commit }, scene) {
      commit('ADD_SCENE', scene);
    },
  },
  getters: {
    controller: state => state.controller,
    scenes: state => state.scenes,
  },
};
