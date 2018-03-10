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
      const el = this.$refs.BackgroundTitle;
      if (!el) {
        return 0;
      }
      return new TimelineMax({})
        .fromTo(this.$refs.BackgroundTitle, 1, {
          x: 0, // () => window.innerWidth + el.offsetWidth,
        }, {
          x: window.innerWidth - el.offsetWidth,
          ease: Power0.easeNone,
        });
    },
    /** init scroll magic
     * to play timeline during scroll
     */
    initScrollMagic() {
      const scene = new Scene({
        triggerElement: this.$el,
        triggerHook: 1,
        duration: (() => {
          const h = window.innerHeight + this.$el.offsetHeight;
          return h;
        })(),

      })
        .setTween(this.createTimeline());
      this.$store.dispatch('ScrollMagic/ADDTO_PAGE_CONTROLLER', scene);
    },
  },
};
</script>

<template>
  <header class="UiParalaxHeader">
    <div
      ref="BackgroundTitle"
      class="BackgroundTitle"
      v-text="$slots.default[0].text">
    </div>
    <UiTitle
      ref="Title"
      class="Title"
      tag="h2"
      :level="1">
      <slot />
    </UiTitle>
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
  .UiParalaxHeader
    position relative

  .BackgroundTitle
    display inline-block
    padding 0
    font('title')
    line-height 1
    font-size 60rem
    white-space nowrap
    text-transform uppercase
    letter-spacing -0.1em

  .Title
    absolute top 50% left 50%
    transform translate(-50%, -50%)
    color white
    text-transform uppercase
    text-align center
  //  ===DEBUG===
</style>
