<script>
  import { debounce, keys } from 'lodash';
  import Swiper from 'src/vendors/swiper';
  import Global from 'datas/Global';
  import { TimelineMax, TweenMax, Power4, Expo, Power2, SlowMo } from 'gsap';

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
        touch: false,
        blury: false,
        currentIndex: 0,
        debug: process.env.NODE_ENV === 'development',
        pages: Global.pages,
        shutterTimeline: null,
        swiperStyle: '',
        swiper: null,
        swiperBackground: null,
      };
    },
    mounted() {
      // this.timeline = this.createTimeline()
      this.createSutterTimeline();
      this.initSwiper();
    },
    onEnter(resolve) {
      // console.log('onEnter');
      const timeline = new TimelineMax({
        onComplete: () => {
          resolve();
        },
      });
      return timeline;
    },
    methods: {
      createSutterTimeline() {
        // console.log('this.$refs.Shutter', this.$refs.Shutter);

        this.shutterTimeline = new TimelineMax({
          paused: true,
        })
          .add('open')
          .to(this.$refs.Shutter, 0.6, {
            scale: 0.8,
            ease: Power4.easeOut,
          }, 'open')
          .fromTo(this.$refs.Image, 0.6, { scale: 1.1 }, {
            scale: 1,
            ease: Power2.easeInOut,
          }, 'open')
          // .to(this.$el, 0.6, {
          //   // color: 0.8,
          //   ease: Expo.easeOut,
          // }, 'open')
          .add('close');
      },
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

      initSwiper() {
        this.swiperBackground = new Swiper(this.$refs.Backgrounds);

        this.swiper = new Swiper(this.$refs.Content, {
          slidesPerView: 'auto',
          centeredSlides: true,
        })
          .on('setTranslate', () => {
            // console.log('setTranslate');

            this.$nextTick(() => {
              this.swiperStyle = {
                transform: `translateX(${-this.swiper.activeIndex * 100}%)`,
              };
            });
          })
          .on('touchStart', () => {
            if (this.touch) {
              return;
            }
            this.touch = true;
            this.blury = true;
            this.shutterTimeline.tweenTo('close', {
              ease: Power2.easeOut,
            });
            // console.log('touchStart');
          })
          .on('touchEnd', () => {
            this.touch = false;
            this.blury = false;
            setTimeout(() => {
              if (this.touch) {
                return;
              }
              this.shutterTimeline.tweenTo('open', {
                ease: Power2.easeOut,
                // delay: 0.6,
              });
              // console.log('touchEnd');
            }, 600);
          })
          .on('slideChangeTransitionEnd', () => {
            if (this.touch) {
              return;
            }
            // console.log('slideChangeTransitionEnd');

            this.shutterTimeline.tweenTo('open', {
              // ease: Power2.easeInOut,
              delay: 0.0,
            });
          })
          .on('slideChange', () => {
            this.currentIndex = this.swiper.realIndex;
          });
      },
      next() {
        // console.log(this.currentIndex, keys(this.pages).length);

        if (this.currentIndex >= keys(this.pages).length - 1) {
          return;
        }
        this.shutterTimeline.tweenTo('close', {
          ease: SlowMo.ease.config(0.9, 0.2, false),
        });
        setTimeout(() => {
          this.swiper.slideNext(600);
        }, 500);
      },
      prev() {
        if (this.currentIndex <= 0) {
          return;
        }
        this.shutterTimeline.tweenTo('close', {
          ease: SlowMo.ease.config(0.9, 0.2, false),
        });
        setTimeout(() => {
          this.swiper.slidePrev(600);
        }, 500);
      },
    },
  };
</script>

<template>
  <div :class="['HomePage', 'swiper-container', {'is-debug': debug}]">

    <!-- {{ $t('general.test') }} -->
    <div ref="Content"
      :class="[
        'Content',
        'swiper-container',
        {'is-blury': blury},
        {'touch': touch},
      ]">
      <ul ref="ContentWrapper" class="swiper-wrapper">
        <li v-for="(page, id) in pages"
          v-if="page.background"
          :key="'page-'+id"
          :ref="'Page'"
          :class="['Page', '-'+id, 'swiper-slide',
          {'is-current': currentIndex === Object.keys(pages).indexOf(id)},
          {'is-next': currentIndex < Object.keys(pages).indexOf(id)},
          {'is-prev': currentIndex > Object.keys(pages).indexOf(id)}
        ]">
          <header class="Header">
            {{Object.keys(pages).indexOf(id)}} {{id}} {{currentIndex}}
            <h1 class="Title" v-text="id"></h1>
          </header>
          <!-- <pre>{{page}}</pre> -->
        </li>
      </ul>
    </div>
    <div ref="Backgrounds" class="Backgrounds swiper-container">
      <ul class="swiper-wrapper" :style="swiperStyle"
    :class="{'touch': touch}">
        <li v-for="(page, id) in pages"
          v-if="page.background"
          :key="'Background-'+id"
          :class="[
            'Background',
            '-'+id,
            'swiper-slide',
            {'is-current': id === currentIndex}
          ]">
          <div :ref="'Image'" class="Image" :style="{backgroundImage: 'url('+page.background+')'}"></div>
        </li>
      </ul>
    </div>

    <div ref="SwiperPrev" class="swiper-button-prev" @click="prev"></div>
    <div ref="SwiperNext" class="swiper-button-next" @click="next"></div>
    <!-- <div class="swiper-scrollbar"></div> -->
    <div ref="Shutter" class="Shutter"></div>
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
  .HomePage
    background: c-black
    position relative
    &:before
      // content ''
      absolute 0 0 0 50%
      background rgba(red, .6)
      z-index 2000
      pointer-events none

  .Backgrounds
    absolute 0
    size 100%
    z-index 1
    .swiper-wrapper
      transition-duration 0.6s !important
      transition-timing-function easing('out-quad') !important
      // &.touch
    .Background
      overflow hidden
      size 100%

  .Image
    absolute -100px
    background-repeat: no-repeat
    background-size cover
    background-position center center

  .Shutter
    borderSize = 1000px
    absolute -(borderSize + 2)
    border borderSize solid c-white
    z-index 2
    box-sizing content-box
    pointer-events none
    // transform scale(.5)

  // .Content
  //   absolute 0
  //   size 100%
  //   overflow hidden
  //   z-index 10
  .Content
    position relative
    z-index 10
    display flex
    justify-content center
    justify-content flex-start
    // width 200%
    // transform translateX(-20vw) !important
    // transform translateX(-50%)

    .swiper-wrapper
      display flex
      justify-content center
      justify-content space-between
      align-items flex-end
      // margin-left -20%

  .Page
    size auto
    margin 0 2em
    flex-grow 1
    display inline-block
    padding-bottom 20vh

  .Content
    position relative
    height 100%
    .Page
      transition all .4s easing('in-quad')
      &.is-prev
        transform translateX(-25vw)
      &.is-next
        transform translateX(25vw)
      &.is-current
        .Title
          color c-white
          transition color 0.4s easing('out-expo')
    &.is-blury .Page
      transform translateX(0) !important
      transition all 0.6s easing('out-quad')
    // &:not(.is-blury) .Page:not(.is-current)
      // opacity 0
    &:not(.touch) .Page
      // transition all .6s easing('out-expo')
      &.is-current
        transition all .4s easing('out-quad')
      &:not(.is-current)
        opacity 0
        &.is-prev
          transform translateX(-30vw)
        &.is-next
          transform translateX(30vw)
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .HomePage
    size 100vw 100vh


  .Header
    // relative 70%  false false 10%
    z-index: 2

  .Title
    color c-white
    color red
    font-size fz-title
    text-transform uppercase
    // padding .1em
    font-family ff-bold
    // -webkit-text-stroke: 1px rgba(c-black, .4);
    z-index 10
    transition color 0.4s easing('in-quad')
    text-align center
  //  ===DEBUG===
  .HomePage.is_debug
    //
</style>
