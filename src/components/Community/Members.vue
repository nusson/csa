<doc>
  /** CommunityMembers
   * > Members only section
   *
   * @author Nicolas Husson <hello@nusson.ninja>
   */
</doc>

<script>
export default {
  name: 'CommunityMembers',
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
  <div :class="['CommunityMembers', {'is-debug': debug}]">
    <h2 v-html="$t('title')"></h2>
    <section class="Section Advantages">
      <h3 class="SectionTitle">Avantage à être membre</h3>
    </section>
    <section class="Section Advantages">
      <h3 class="SectionTitle">Spots de highline</h3>
    </section>
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
  .CommunityMembers.is_debug
    //
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .CommunityMembers
    //
</style>

<i18n>
{
  "en": {
    "title": "Member section"
  },
  "fr": {
    "title": "Zone membre"
  }
}
</i18n>
