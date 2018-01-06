<script>
import { AppPageBuilder } from 'components/Builder';
import SecurityPageModel from './Model';
/** >
 *
 * @author Nicolas Husson <hello@nusson.ninja>
 */
export default {
  name: 'SecurityPage',
  components: { AppPageBuilder },
  i18n: { // `i18n` option
    messages: {
      en: {
        title: 'Security',
      },
      fr: {
        title: 'Securité',
      },
    },
  },
  data() {
    return {
      debug: process.env.NODE_ENV === 'development',
      model: new SecurityPageModel(),
    };
  },
  watch: { },
  mounted() {
    console.log('builder', this.model);
  },
  methods: {

  },
};
</script>

<template>
  <article :class="['Page -security', {'is-debug': debug}]">
    <header>
      <h1 class="Title -page" v-html="$t('title')"></h1>
    </header>
    <AppPageBuilder
      class="Content -builder"
      :model="model.builder" />
  </article>
</template>

<style lang="stylus" scoped>
  /**
  * TABLE OF CONTENT
  * --------
  *  - LAYOUT
  *  - DEBUG
  *  - NO_SCOPE
  *
  * @author Nicolas Husson <hello@nusson.ninja>
  */

  //  ===LAYOUT===
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .SecurityPage
    //

  //  ===DEBUG===
  .SecurityPage.is_debug
    //
</style>
