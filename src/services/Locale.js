import Vue from 'vue';
import VueI18n from 'vue-i18n';
import BrowserLanguage from 'in-browser-language';
import Cookies from 'js-cookie';
import { compose, without, head, indexOf } from 'lodash/fp';
// import store from '@/vuex/Store';
import Settings from 'Settings';
import { FR, EN } from 'datas/lang';
import { get } from 'lodash';

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
    instance = this;

    this.store = null;
    this.i18n = new VueI18n();
    this.lang = this.defaultLang;

    // @todo better way to do this
    // @return like `$t` but as object
    Vue.prototype.$t_raw = function test(path) {
      const locale = this.$i18n.locale;
      return get(this.$i18n.messages[locale], path);
    };
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

  /**
   * please, use `this.store.commit('App/SET_LANG', lang)` to update locale
   * on change lang, update i18n
   * Should be Store that call this method
   * @param {String} lang - locale to use
   */
  set lang(lang) {
    if (indexOf(lang)(Settings.locales) < 0) {
      throw new Error(`this lang (${lang}) isn't in ${Settings.locales}`);
    }

    if (lang === this.locale) {
      return;
    }

    this.locale = lang;
    this.updateI18N(lang, true);
    Cookies.set(Settings.cookies.lang, lang);
  }
  get lang() {
    return this.locale;
  }

  switchLang(locale = null) {
    let lang = locale; // eslint-disable-line
    if (!locale) {
      if (Settings.locales.length !== 2) {
        throw (new Error('need to pass lang param because you don\'t have just 2 locales'));
      }

      lang = compose(
        head,
        without([this.lang]),
      )(Settings.locales);
    }
    if (!Vue.config.store) {
      throw new Error('please provide Vue.config.store');
    }
    Vue.config.store.commit('App/SET_LANG', lang);
  }

  /**
   *
   * @param {String} lang - locale to use
   * @param {Boolean} (force=false) - will force update enev in sdame locale
   */
  updateI18N(lang = this.locale) {
    if (!lang) {
      throw new Error('must have lang param (or this.locale)');
    }

    this.i18n.setLocaleMessage(
      lang,
      this.messages,
    );
    this.i18n.locale = lang;
  }
}
instance = new LocaleService();

if (Settings.isDev) {
  window.LocaleService = instance;
  console.log('[settings]', instance); // eslint-disable-line
}

const LocaleServiceSingleton = instance;
export default LocaleServiceSingleton;
