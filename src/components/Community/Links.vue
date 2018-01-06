<doc>
  /** CommunityLinks
   * > List of usefull links
   *
   * @author Nicolas Husson <hello@nusson.ninja>
   */
</doc>

<script>
export default {
  name: 'CommunityLinks',
  components: {},
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
  <div :class="['CommunityLinks', {'is-debug': debug}]">
    <h2 v-html="$t('title')"></h2>
  </div>
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

  //  ===DEBUG===
  .CommunityLinks.is_debug
    //
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .CommunityLinks
    //
</style>

<i18n>
{
  "en": {
    "title": "Usefull links"
  },
  "fr": {
    "title": "Liens utils"
  }
}
</i18n>
