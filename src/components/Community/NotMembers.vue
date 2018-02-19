<doc>
  /** CommunityNotMembers
   * > If not a members section
   *
   * @author Nicolas Husson <hello@nusson.ninja>
   */
</doc>

<script>
import { UiTitle } from 'ui';

export default {
  name: 'CommunityNotMembers',
  components: {
    UiTitle,
  },
  props: {},
  data: () => ({
    debug: process.env.NODE_ENV === 'development',
  }),
  computed: {},
  watch: {},
  mounted() {},
  beforeDestroyed() {},
  methods: {},
};
</script>

<template>
  <article :class="['CommunityNotMembers', {'is-debug': debug}]">
    <header>
      <UiTitle v-html="$t('title')" />
    </header>
    <section class="Section Advantages">
      <h3 class="SectionTitle">Avantage à être membre</h3>
      <pre>{{$t('advantages.0')}}</pre>
      <ul class="List">
        <li
          v-for="(advantage, index) in $t('advantages')"
          :key="'advantage-'+index"
          v-html="advantage.title" />
      </ul>
    </section>
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
  .CommunityNotMembers
    color c-white

  //  ===DEBUG===
  .CommunityNotMembers.is-debug
    height 100vh
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .CommunityNotMembers
    //
</style>

<i18n>
{
  "en": {
    "title": "Become a membre",
    "advantages":[
      {
        "title": "a"
      }
    ]
  },
  "fr": {
    "title": "Devenir membre",
    "advantages":[
      {
        "title": "a"
      }
    ]
  }
}
</i18n>
