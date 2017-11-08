<script>
  /** > The homepage
   *
   * @author Nicolas Husson <hello@nusson.ninja>
   */
  export default {
    name: 'HomePage',
    components: { },
    props: { },
    data() {
      return {
        debug: process.env.NODE_ENV === 'development',
      };
    },
    watch: { },
    mounted() {
      console.log(this, this.$t, this.$t('general'));
    },
    methods: {

    },
  };
</script>

<template>
  <div :class="['HomePage', {'is-debug': debug}]">
    {{ $t('general.test') }}
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
  .HomePage
    //

  //  ===DEBUG===
  .HomePage.is_debug
    //
</style>
