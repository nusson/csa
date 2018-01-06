<doc>
  /** CommunityNotMembers
   * > If not a members section
   *
   * @author Nicolas Husson <hello@nusson.ninja>
   */
</doc>

<script>
export default {
  name: 'CommunityNotMembers',
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
  <article :class="['CommunityNotMembers', {'is-debug': debug}]">
    <header>
      <h2
        class="Title"
        v-html="$t('title')"></h2>
    </header>
    <section class="Section Advantages">
      <h3 class="SectionTitle">Avantage à être membre</h3>
      <ul class="List">
        <li
          v-for="(advantage, index) in $t('advantages')"
          :key="'advantage-'+index"
          v-html="advantage.title" />
      </ul>
    </section>
    <section class="Section Advantages">
      <h3 class="SectionTitle">Spots de highline</h3>
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

  //  ===DEBUG===
  .CommunityNotMembers.is_debug
    //
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
