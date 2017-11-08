/** Service to consume our API
 *
 * For now, just read json files in assets/data
 *
 * @author nicolas husson <hello@nusson.ninja
 */

// allow to always return the same instance
const instance = null;

class APIService {
  // static instance;

  constructor() {
    if (instance) {
      return instance;
    }

    // console.log('[API] after check instance')
    this.state = 'duke';
    this.instance = this;
  }

  static test(state) {
    if (state) {
      return state;
    }
    return 'test';
  }
}

// test to simply return a created instance, so it's a singleton ;)
export default new APIService();
