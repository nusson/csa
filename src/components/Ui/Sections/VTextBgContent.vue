<doc>
# UiSectionVTextBgContent
> Vertical title list that drive bg content

@references: https://badassfilms.tv

@author Nicolas Husson <hello@nusson.ninja>
</doc>

<script>
import { TimelineMax, TweenMax, Power2, Linear, Expo, Back } from 'gsap';
import SplitText from 'gsapPro/SplitText';
import { throttle, map, mapValues } from 'lodash';
import ScrollToPlugin from 'gsapPlugins/ScrollToPlugin';
import { mapGetters } from 'vuex';
import { UiTitle, UiWysiwyg, UiImage } from 'ui';
import { SlideAppearTransition } from 'transitions';
import { Scene } from 'scrollmagic';

export default {
  name: 'UiSectionVTextBgContent',
  components: {
    UiTitle,
    UiWysiwyg,
    UiImage,
    SlideAppearTransition,
  },
  props: {
    items: {
      type: [Array, Object],
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      index: 0,
      timelines: {
        waves: null,
        scroll: {
          titles: null,
          items: null,
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      fullVPStyle: 'App/fullVPStyle',
      viewport: 'App/viewport',
    }),
    scrollHeight() {
      TweenMax.set([this.$refs.TitlesList, this.$refs.ItemsList], { bottom: 'inherit' });
      const scrollHeight = {
        titles: this.$refs.TitlesList.offsetHeight - this.viewport.height,
        items: this.$refs.ItemsList.offsetHeight,
      };
      TweenMax.set([this.$refs.TitlesList, this.$refs.ItemsList], { bottom: 0 });
      return scrollHeight;
    },
  },
  watch: {
    index(index) {
      const ratio = 1 / (this.$refs.Item.length - 0);
      const percent = ratio * index;
      // console.log('percent', percent, this.timelines.scroll.items);

      this.timelines.scroll.items.tweenTo(percent, { ease: Power2.easeOut });
    },
  },
  mounted() {
    this.timelines = {
      waves: this.createWaveTimeline(),
      scroll: this.createScrollTimelines(),
    };
    // this.initScrollMagic();
  },
  methods: {
    /** @return {TimelineMax} timeline for enter in viewport (or leave)
     * ! Timeline is paused (to be used like in enter())
    */
    createWaveTimeline() {
      // wave effect for each title
      const waves = map(this.$refs.Title, (el, index) => {
        const waveEffect = new SplitText(el, { type: 'words,chars' });
        return new TimelineMax()
          .staggerFrom(waveEffect.chars, 1.2, {
            opacity: 0,
            scale: 0,
            y: -15,
            rotationX: -90,
            transformOrigin: '0% 50% -20',
            ease: Back.easeOut,
          }, 0.02, 0)
          .from(el, 0.6, {
            opacity: 0,
            y: 300,
            ease: Back.easeOut,
          }, 0);
      });

      return new TimelineMax({ paused: true })
        .add('start')
        .add(waves, '+=0', 'normal', 0.1)
        .add('end');
    },
    /** @returns {Object{TimelineMax}} separated ones for titles and items(bg) */
    createScrollTimelines() {
      const timelines = mapValues({
        titles: this.$refs.TitlesList,
        items: this.$refs.ItemsList,
      }, (el, key) => {
        console.log('el', el, key);

        return new TimelineMax({ paused: true })
          .fromTo(el, 1, { scrollTo: 0 }, {
            scrollTo: {
              y: this.scrollHeight[key],
              autoKill: false,
            },
            ease: Linear.easeNone,
          });
      });

      console.log('timelines', timelines);

      // slow down background one
      timelines.items.timeScale(0.1);

      return timelines;
    },
    /** init scroll magic
     * header is normal but content would pin and be revealed by header
     * then, let 20% scroll time in tha section... just for the feeling ;)
     */
    initScrollMagic() {
      const scene = new Scene({
        triggerElement: this.$el,
        triggerHook: 0,
        duration: this.scrollHeight.titles,
      })
      // .on('enter', this.)
        .setPin(this.$el, { pushFollowers: true })
        .on('progress', ({ progress }) => {
          this.scrollTween.titles.tweenTo(progress, { ease: Power2.easeOut });
          this.delayedSetIndex(progress);
        });
      this.$store.dispatch('ScrollMagic/ADDTO_PAGE_CONTROLLER', scene);
    },
    enter() {
      this.timelines.waves.tweenTo('end', { ease: Expo.easeOut });
      console.log('enter', this.timelines.waves);
    },
    leave() {
      this.timelines.waves.tweenTo('start', { ease: Expo.easeOut });
    },
    delayedSetIndex: throttle((progress) => {
      this.index = Math.round(progress * (this.$refs.Item.length));
    }, 100),
  },
};
</script>

<template>
  <section
    class="UiSectionVTextBgContent"
    :style="fullVPStyle">
    <ul
      ref="TitlesList"
      class="List -titles">
      <li
        v-for="(item, index) in items"
        :key="'title-'+index"
        class="item Title _safeVW"
        ref="Title"
        @mouseenter="currentIndex = index">
        <UiTitle
          tag="h4"
          :level="3"
          class="title"
          v-text="item.title" />
      </li>
    </ul>
    <ul
      ref="ItemsList"
      class="List -items">
      <li
        v-for="(item, index) in items"
        :key="'item-'+index"
        class="item Item"
        :style="fullVPStyle"
        ref="Item"
        @mouseenter="currentIndex = index">
          <UiImage
            :key="'item-bg-'+index"
            ref="Background"
            class="Background"
            background="cover"
            size="full"
            :image="null" />
          <div
            :key="'item-content-'+index"
            class="Content _safeVW">
            <UiWysiwyg
              class="Description"
              v-html="item.description_html" />
          </div>
      </li>
    </ul>
  </section>
</template>

<style lang="stylus" scoped>
  /**
  * TABLE OF CONTENT
  * --------
  *  - LAYOUT
  *  - DEBUG
  *  - NO_SCOPE
  */
  margin-title = 50px

  //  ===LAYOUT===
  .Item
    position relative
    display flex
    align-items center
    justify-content flex-end
    .Background
      absolute 0
    .Description
      width 20vw
      max-width 400px
      background-color c-white
      padding 60px
      margin auto 0 auto auto

  .UiSectionVTextBgContent
    position relative
    overflow hidden
  .List
    // absolute 0
    // overflow hidden
    &.-titles
      padding-top 50vh
      padding-bottom 50vh
      z-index 10

  .Title
    margin-top margin-title
    margin-bottom margin-title
    .title
      margin-bottom 0


  //  ===DEBUG===
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .UiSectionVTextBgContent
    //
</style>
