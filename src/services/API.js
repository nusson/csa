import Settings from 'Settings';
import LocaleService from 'services/Locale';
import Axios from 'axios';

/** Service to consume our API
 *
 * For now, just read json files in assets/data
 *
 * @author nicolas husson <hello@nusson.ninja
 */

let instance = null;

class APIService {
  constructor() {
    if (instance) {
      return instance;
    }
    this.instance = this;

    this.axios = Axios.create();
    this.lang = LocaleService.lang;
  }

  /**
   * on set lang, update axios's baseUrl
   */
  set lang(lang = '') {
    this.locale = lang;
    this.baseUrl = `${Settings.API_URL + lang}/`;
  }
  get baseUrl() {
    return this.axios.defaults.baseUrl;
  }
  set baseUrl(url) {
    this.axios.defaults.baseUrl = url;
  }
}

instance = new APIService();

if (Settings.isDev) {
  window.APIService = instance;
  console.log('[api]', instance); // eslint-disable-line
}

const APIServiceSingleton = instance;
export default APIServiceSingleton;
