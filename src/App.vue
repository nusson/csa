<script>
  import { throttle } from 'lodash';
  import TheMenu from 'components/TheMenu';
  import 'assets/stylus/index.styl';

  /** > Our entry point
   *
   * @author Nicolas Husson <hello@nusson.ninja>
   */
  export default {
    name: 'App',
    components: { TheMenu },
    props: { },
    data() {
      return {
        debug: process.env.NODE_ENV === 'development',
        loaded: false,
        handlers: {
          resize: throttle(function (event) { // eslint-disable-line func-names
            this.$store.dispatch('App/RESIZE', event);
          }, 250),
        },
      };
    },
    watch: {
      $route(route) {
        this.loaded = true;
      },
    },
    mounted() {
      window.addEventListener('resize', this.handlers.resize.bind(this));
      this.handlers.resize.bind(this)();
    },
    methods: {

    },
  };
</script>

<template>
  <div :class="['App', {'is-debug': debug}]">

    <main>
      <template v-if="loaded">
        <TheMenu />
        <router-view ref="Page"></router-view>
      </template>
      <p v-else>LOADING</p>
    </main>

  </div>
</template>

<style lang="stylus" scoped>
  // @require '~/assets/stylus/index'
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
  .App
    background-color black
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .App
    //

  //  ===DEBUG===
  .App.is_debug
    //
</style>
