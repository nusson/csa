<doc>
# UiParalaxHeader
> A big title that move X on scroll - used as a separator

@author Nicolas Husson <hello@nusson.ninja>

@TODO
- FITTEXT needed for responsive
- Smaller text inside (middle) that don't move (or just a little)
- if that possible add velocity to parralax tween (maybe by tweenTo with easing on progress)

</doc>

<script>
import { TimelineMax, Power0 } from 'gsap';
import { Scene } from 'scrollmagic';
import { UiTitle } from 'ui';

export default {
  name: 'UiParalaxHeader',
  components: { UiTitle },
  data() {
    return {};
  },
  mounted() {
    this.timeline = this.createTimeline();
    this.initScrollMagic();
  },
  beforeDestroyed() {
    // @todo destroy scene
  },
  methods: {
    /** create timeline to vove title from left to right
     * will be attached to scrollmagic
     * and no need refs to tha timeline ;)
     */
    createTimeline() {
      const el = this.$refs.Title;
      console.log('el.offsetWidth', el.offsetWidth, window.innerWidth);

      return new TimelineMax({})
        .fromTo(this.$refs.Title, 1, {
          x: window.innerWidth, // () => window.innerWidth + el.offsetWidth,
        }, {
          x: () => -el.offsetWidth,
          ease: Power0.easeNone,
        });
    },
    /** init scroll magic
     * to play timeline during scroll
     */
    initScrollMagic() {
      const scene = new Scene({
        triggerElement: this.$el,
        triggerHook: 0.8,
        duration: '120%',
      })
        .setTween(this.createTimeline());
      this.$store.dispatch('ScrollMagic/ADDTO_PAGE_CONTROLLER', scene);
    },
  },
};
</script>

<template>
  <header class="UiParalaxHeader">
    <h2
      ref="Title"
      class="Title">
      <slot />
    </h2>
  </header>
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
  .Title
    display inline-block
    padding-top 60px
    padding-bottom 60px
    font-size 60rem
    white-space nowrap
  //  ===DEBUG===
</style>
