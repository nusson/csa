<doc>
# SlideAppearTransition
> Appear by sliding with fade

@author Nicolas Husson <hello@nusson.ninja>

</doc>

<script>
import { Expo, TimelineMax } from 'gsap';

export default {
  name: 'SlideAppearTransition',
  components: {},
  props: {
    from: {
      type: String,
      default: 'bottom',
    },
    ease: {
      type: Function,
      default() {
        return Expo.easeOut;
      },
    },
    speed: {
      type: Number,
      default: 0.6,
    },
    mode: {
      type: String,
      default: '',
    },
    gap: {
      type: Number,
      default: 100,
    },
  },
  computed: {
    direction() {
      switch (this.from) {
        case 'bottom':
          return {
            prop: 'y',
            value: this.gap,
          };
        case 'top':
          return {
            prop: 'y',
            value: -this.gap,
          };
        case 'left':
          return {
            prop: 'x',
            value: -this.gap,
          };
        case 'right':
          return {
            prop: 'x',
            value: this.gap,
          };
        default:
          return {
            prop: 'y',
            value: '+=0',
          };
      }
    },
  },
  methods: {
    enter(el, done) {
      return new TimelineMax({
        onComplete: done,
      })
        .from(el, this.speed, {
          autoAlpha: 0,
          [this.direction.prop]: `+=${this.direction.value}`,
          ease: Expo.easeOut,
        });
    },
    leave(el, done) {
      return new TimelineMax({
        onComplete: done,
      })
        .to(el, this.speed, {
          autoAlpha: 0,
          [this.direction.prop]: `-=${this.direction.value}`,
          ease: Expo.easeIn,
        });
    },
  },
};
</script>

<template>
  <transition
    name="SlideAppearTransition"
    :mode=" mode"
    :css="false"
    appear
    @enter="enter"
    @leave="leave">
    <slot />
  </transition>
</template>
