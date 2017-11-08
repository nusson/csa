/** Local service
 *
 * manage current local, switch lang, provite i18n plugin etc...
 *
 * @author Nicolas Husson <hello@nusson.ninja>
 */
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import BrowserLanguage from 'in-browser-language';
import Cookies from 'js-cookie';
import { head } from 'lodash';
import Settings from '@/config/Settings';
import { FR, EN } from 'datas/lang';

Vue.use(VueI18n);

class LocaleService {
  constructor() {
    this.lang = this.defaultLang;
    // this.lang = this.lang;

    console.log('this.messages', this.messages);


    this.i18n = new VueI18n({
      locale: this.lang, // set locale
      messages: this.messages,
    });
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
    switch (this.lang) {
      case 'fr':
        return FR;
      case 'en':
      default:
        return EN;
    }
  }
}

export default new LocaleService();
