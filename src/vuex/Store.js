import Vue from 'vue';
import Vuex from 'vuex';
import App from './modules/App';
import ScrollMagic from './modules/ScrollMagic';

Vue.use(Vuex);

/** > The vuex store
 *
 * @author Nicolas Husson <hello@nusson.ninja>
 */
const Store = new Vuex.Store({
  modules: {
    App,
    ScrollMagic,
  },
});


if (process.env.NODE_ENV === 'development') {
  window.$store = Store;
  // console.log('[store]', Store); // eslint-disable-line
}
export default Store;
