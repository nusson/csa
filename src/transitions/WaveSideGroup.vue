<doc>
# WaveSideGroupTransition
> Appear from left with wave effect + alpha

@author Nicolas Husson <hello@nusson.ninja>
</doc>

<script>
import { Expo, TimelineMax } from 'gsap';

export default {
  name: 'WaveSideGroupTransition',
  props: {
    speed: {
      type: Number,
      default: 0.6,
    },
    mode: {
      type: String,
      default: '',
    },
  },
  methods: {
    enter(el, done) {
      return new TimelineMax({
        onComplete: done,
      })
        .staggerFrom(el, this.speed, {
          autoAlpha: 0,
          x: '-=100',
          ease: Expo.easeOut,
        }, 0.1);
    },
    leave(el, done) {
      return new TimelineMax({
        onComplete: done,
      })
        .staggerTo(el, this.speed, {
          autoAlpha: 0,
          x: '-=100',
          ease: Expo.easeIn,
        }, 0.1);
    },
  },
};
</script>

<template>
  <transition-group
    class="WaveSideGroupTransition"
    apear
    :mode="mode"
    :css="false"
    @enter="enter"
    @leave="leave">
    <slot />
  </transition-group>
</template>
