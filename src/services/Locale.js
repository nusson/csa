import Vue from 'vue';
import VueI18n from 'vue-i18n';
import BrowserLanguage from 'in-browser-language';
import Cookies from 'js-cookie';
import { head } from 'lodash';
import Settings from '@/config/Settings';
import { FR, EN } from 'datas/lang';
/** Local service
 *
 * manage current local, switch lang, provite i18n plugin etc...
 *
 * @author Nicolas Husson <hello@nusson.ninja>
 */

let instance = null;

Vue.use(VueI18n);

class LocaleService {
  constructor() {
    if (instance) {
      return instance;
    }
    this.instance = this;

    this.i18n = new VueI18n();
    this.lang = this.defaultLang;
  }

  /**
   * @return {String} locale - default locale to use
   * based on cookie or browser settings
   */
  get defaultLang() {
    return Cookies.get(Settings.cookies.lang) ||
      BrowserLanguage.pick(Settings.locales, head(Settings.locales));
  }

  get messages() {
    switch (this.locale) {
      case 'fr':
        return FR;
      case 'en':
      default:
        return EN;
    }
  }

  set lang(lang) {
    this.locale = lang;
    console.log(this.messages, lang);

    this.i18n.setLocaleMessage(
      lang,
      this.messages,
    );
    this.i18n.locale = lang;
  }
  get lang() {
    return this.locale;
  }
}
instance = new LocaleService();

if (Settings.isDev) {
  window.LocaleService = instance;
  console.log(instance); // eslint-disable-line
}

const LocaleServiceSingleton = instance;
export default LocaleServiceSingleton;
