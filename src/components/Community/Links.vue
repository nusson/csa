<doc>
  /** CommunityLinks
   * > List of usefull links
   *
   * ## ideas
   *
   * maybe some grid of link
   * easy yo play rollover for more infos etc
   * and hopefully less boring that a list of links
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
  <section class="CommunityLinks">
    <UiTitle
      ref="Title"
      class="Title"
      tag="h2"
      v-html="title"/>
    <UiList
      ref="Links"
      class="Links"
      :items="links" />
  </section>
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
