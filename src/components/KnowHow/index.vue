<script>
  /** > The expertise main page
   *
   * @author Nicolas Husson <hello@nusson.ninja>
   */
  export default {
    name: 'ExpertisePage',
    components: { },
    props: { },
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
  <div :class="['ExpertisePage', {'is-debug': debug}]">
    ExpertisePage
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
  .ExpertisePage
    //

  //  ===DEBUG===
  .ExpertisePage.is_debug
    //
</style>
