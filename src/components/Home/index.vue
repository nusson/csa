<script>
  import Global from 'datas/Global';
  import { TimelineMax, TweenMax, Power4, Expo } from 'gsap';

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
        pages: Global.pages,
      };
    },
    mounted() {
      this.timeline = this.createTimeline();
    },
    onEnter(resolve) {
      const timeline = new TimelineMax({
        onComplete: () => {
          resolve();
        },
      });
      return timeline;
    },
    methods: {
      createTimeline() {
        const timeline = new TimelineMax({});
        timeline.add('start', 0);
        timeline.add(
          TweenMax.fromTo(this.$el, 5, {
            opacity: 0,
          }, {
            opacity: 1,
            ease: Power4.easeInOut,
          }), 'start',
        );
        timeline.add(
          TweenMax.fromTo(this.$el.querySelector('.Background'), 50, {
            x: 100,
            scale: 1,
          }, {
            x: -100,
            ease: Expo.easeOut,
            scale: 2,
          }), 'start',
        );

        return timeline;
      },
    },
  };
</script>

<template>
  <div :class="['HomePage', {'is-debug': debug}]">
    <!-- {{ $t('general.test') }} -->
    <ul class="pages">
      <li v-for="(page, id) in pages"
        v-if="page.background"
        :key="'page-'+id"
        :ref="'Page'"
        :class="['Page', '-'+id, {'is-current': id === 'home'}]">
        <header class="Header">
          <h1 class="Title" v-text="id"></h1>
        </header>
        <pre>{{page}}</pre>
        <div class="Background"
          :style="{backgroundImage: 'url('+page.background+')'}"></div>
      </li>
    </ul>
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
    size 100vw 100vh

  .Page
    absolute 0
    overflow hidden
    &:not(.is-current)
      transform translateX(100%)

  .Background
    absolute -100px
    background-repeat: no-repeat
    background-size cover
    background-position center center

  .Header
    position relative
    z-index: 2

  .Title
    color c-white
    font-size 10rem
    text-transform uppercase
    padding 1em

  //  ===DEBUG===
  .HomePage.is_debug
    //
</style>
