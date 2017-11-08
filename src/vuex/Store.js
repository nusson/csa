import Vue from 'vue';
import Vuex from 'vuex';
import App from './modules/App';

Vue.use(Vuex);

/** > The vuex store
 *
 * @author Nicolas Husson <hello@nusson.ninja>
 */
const Store = new Vuex.Store({
  modules: {
    App,
  },
});


if (process.env.NODE_ENV === 'development') {
  window.$store = Store;
  console.log(Store); // eslint-disable-line
}
export default Store;
