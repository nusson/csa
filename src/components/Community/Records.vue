<doc>
  /** CommunityRecords
   * > List of records
   *
   * ## ideas
   *
   * use graph for records
   *
   * @author Nicolas Husson <hello@nusson.ninja>
   */
</doc>

<script>
export default {
  name: 'CommunityRecords',
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
  <div :class="['CommunityRecords', {'is-debug': debug}]">
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
  .CommunityRecords.is_debug
    //
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .CommunityRecords
    //
</style>

<i18n>
{
  "en": {
    "title": "Canadians Records"
  },
  "fr": {
    "title": "Records canadiens"
  }
}
</i18n>
