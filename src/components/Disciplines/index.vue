<script>
/* eslint-disable */
  import { get, map, each } from 'lodash';
  import ScrollMagic from 'ScrollMagic';// eslint-disable-line
  import 'ScrollMagicPlugins/animation.gsap';// eslint-disable-line
  import 'ScrollMagicPlugins/debug.addIndicators';// eslint-disable-line
  import { Linear } from 'gsap';
  import LonglineVideo from 'assets/_ignore/disciplines/longline.mp4';
  import WaterlineVideo from 'assets/_ignore/disciplines/waterline.mp4';
  import HighlineVideo from 'assets/_ignore/disciplines/highline.mp4';
  import YogalineVideo from 'assets/_ignore/disciplines/yoga.mp4';
  import RodeolineVideo from 'assets/_ignore/disciplines/rodeo.mp4';
  import TricklineVideo from 'assets/_ignore/disciplines/trickline.mp4';
  import DisciplineArticle from './Article';

  /** > The wrapper of disciplines
   *
   * @author Nicolas Husson <hello@nusson.ninja>
   */
  export default {
    name: 'DisciplinePage',
    components: { DisciplineArticle },
    props: {},
    data() {
      return {
        debug: process.env.NODE_ENV === 'development',
        ScrollMagicController: null
      };
    },
    computed: {
      slug() {
        return get(this.$route, 'params.slug');
      },
      articles() {
        const articles = this.slug ? [this.slug] : [
          'yogaline',
          'trickline',
          'rodeoline',
          'waterline',
          'longline',
          'highline',
          // 'All combined',
        ];
        return map(articles, slug => ({
          id: slug,
          title: slug,
          video: this.getVideoBySlug(slug),
        }));
      },
    },
    watch: { },
    methods: {
      getVideoBySlug(slug) {
        switch (slug) {
          case 'yogaline': return YogalineVideo;
          case 'trickline': return TricklineVideo;
          case 'rodeoline': return RodeolineVideo;
          case 'waterline': return WaterlineVideo;
          case 'longline': return LonglineVideo;
          case 'highline': return HighlineVideo;
          case 'All combined': return HighlineVideo;
          default: return null;
        }
      },
      initScrollMagic() {
        this.ScrollMagicController = new ScrollMagic.Controller({
          globalSceneOptions: { triggerHook: 1 }
        });

        // build scenes
        each(this.$refs.paralaxSection, (item, index) => {
          const el = item.$el;
          const isLast = (index + 1 === this.$refs.paralaxSection.length);

          const scene = new ScrollMagic.Scene({
            triggerElement: el,
            duration: isLast ? '100%' : '200%',
          })
            .addIndicators()
            .addTo(this.ScrollMagicController)
            .on('progress', (event) => {
              item.progress = isLast? event.progress/2 : event.progress
            });
        });
      },
    },
    mounted() {
      this.initScrollMagic();
    },
    beforeDestroyed(){
      this.ScrollMagicController.destroy()
    }
  };
</script>

<template>
  <div :class="['DisciplinePage',
    { 'is-debug': debug },
    '-' + slug,
]">
    <DisciplineArticle
      v-for="(article, index) in articles"
      :key="'spacer-'+article.slug"
      ref="paralaxSection"
      :class="['Article']"
      :article="article"
    ></DisciplineArticle>
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
  .Article
    position relative
    height 100vh
    width 100vw
    // background-image url(http://scrollmagic.io/img/example_parallax_bg2.png)

</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .DisciplinePage
    //

  //  ===DEBUG===
  .DisciplinePage.is_debug
    //
</style>
