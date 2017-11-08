/** # Some general settings
 * > and utilities
 *
 * @author Nicolas Husson <hello@nusson.ninja>
 */

const Settings = {
  // env
  isDev: (process.env.NODE_ENV === 'development'),
  isProd: (process.env.NODE_ENV === 'production'),
  isTest: (process.env.NODE_ENV === 'testing'),

  // cookies
  cookies: {
    lang: 'lightemotion_v2_lang',
  },
  locales: ['fr', 'en'], // 1st = default
  // API_PREFIX: 'api',
  // BASE_URL: 'csa.int',
};

// if (typeof (window) !== 'undefined') {
//   // disable loader for prerender.io
//   if (/PhantomJS/.test(window.navigator.userAgent)) { Settings.loader = false; }
//   // OVERWRITE BY PHP ENV
//   if (typeof (window) !== 'undefined' && window.__ENV !== undefined) {
//     Settings = _.merge(Settings, window.__ENV);
//   }
// }

// concat BASE_URL + PREFIX
// Settings.API_URL = `${Settings.BASE_URL}/${Settings.API_PREFIX}/`;


module.exports = Settings;

