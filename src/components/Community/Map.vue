<doc>
  /** ComunityMap
   * > Map of our comunity
   *
   * @author Nicolas Husson <hello@nusson.ninja>
   */
</doc>

<script>
import { UiMap } from 'ui';
import GoogleMap from 'assets/js/GoogleMaps';
import { mapGetters } from 'vuex';
import ScrollMagicDirective from 'directives/ScrollMagic';


export default {
  name: 'ComunityMap',
  directives: {
    sm: ScrollMagicDirective,
  },
  components: { UiMap },
  props: {},
  data() {
    return {
      /** @augments {String} query - form search */
      query: '',
    };
  },
  computed: {
    ...mapGetters({
      viewport: 'App/viewport',
    }),
  },
};
</script>

<template>
  <div class="ComunityMap">
    <UiMap
      v-sm="{
        type: 'grow_sticky'
      }"
      ref="Map"
      class="Map" />

    <form
      ref="SearchForm"
      class="SearchForm">
      <div class="Field -search">
        <label
          class="SearchForm_query-label fa fa-search"
          for="SearchForm_query"></label>
        <input
          id="SearchForm_query"
          type="text"
          name="q"
          v-model="query">
        <input type="submit" value=">">
      </div>
    </form>
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
  // .ComunityMap
  //   overflow hidden

  .Map
    position relative
    size 100%

  .ContentSection
    absolute 50% 100px false false
    width 20%
    max-width 300px
    min-width 180px
    transform translateY(-50%)
    background-color white
    padding 20px
    border 20px solid black

  .SearchForm
    .Field
      display flex
      justify-content space-between
      align-items center

  .Card
    // @todo


  //  ===DEBUG===
  .ComunityMap.is_debug
    //
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .ComunityMap
    //
</style>
