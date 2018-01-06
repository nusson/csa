<script>
  /** > Quote page builder
   *
   * @author Nicolas Husson <hello@nusson.ninja>
   */
  export default {
    name: 'BuilderQuote',
    components: { },
    props: {
      model: {
        type: Object,
        default: null,
      },
    },
    data() {
      return {
        debug: process.env.NODE_ENV === 'development',
      };
    },
    watch: { },
    methods: {

    },
  };
</script>

<template>
  <div
    v-if="model"
    :class="['BuilderQuote', {'is-debug': debug}]">
    <bloququote class="Quote">
      <p
        class="content"
        v-html="model.content" />
      <footer
        class="author"
        v-html="model.author" />>
    </bloququote>
    <p
      class="BackgroundText"
      v-html="model.alt" />
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
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .BuilderQuote
    //

  //  ===DEBUG===
  .BuilderQuote.is_debug
    //
</style>
