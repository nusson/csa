<doc>
# UiImage
> Image ++

- responsive and auto resolution prediction
- preload (+ fallback ?)
- cover / ratio, free...

@author Nicolas Husson <hello@nusson.ninja>
</doc>

<script>
import { uniqueId, assign } from 'lodash';
import { mapGetters } from 'vuex';

export default {
  name: 'UiImage',
  props: {
    src: {
      type: String,
      default: null,
    },
    /* if defined, must be covermode ('cover' | 'contain' ...) */
    background: {
      type: String,
      default: null,
    },
    /* if defined, must be 'full' to fit full viewport */
    size: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      loaded: false,
      error: null,
      debug: true,
    };
  },
  computed: {
    ...mapGetters({
      fullVPStyle: 'App/fullVPStyle',
    }),
    _state() {
      if (this.loaded) return 'loaded';
      if (this.error) return 'error';
      return 'loading';
    },
    /** @return {String} _src - but wait that it's loaded
     * @todo may return placeholder or loader etc
     */
    _src() {
      if (this.debug) return `https://picsum.photos/${600}/?image=${this.getRandomId()}`;

      if (!this.loaded) return null; // @todo loader ?

      return this.src;
    },
    /** @return {String} _styles - for fullpin size
     */
    _styles() {
      const styles = {};
      if (this.size === 'full') {
        assign(styles, this.fullVPStyle);
      }
      if (this.background) {
        assign(styles, { objectFit: this.background });
        // @todo pollifyll here
      }
      return styles;
    },
  },
  mounted() {
    this.load();
  },
  methods: {
    /* @todo preload image
     * the assign `loaded` data, that'll display img within nice show animation
     */
    load() {
      this.loaded = true;
    },
    getRandomId() {
      return Math.ceil(Math.random() * 30, 10);
    },
  },
};
</script>

<template>
  <!-- @todo transition for appear effect ? -->
  <img
    class="UiImage"
    :data-state="_state"
    :data-coverMode="background"
    :src="_src"
    :style="_styles"
    v-bind="$attrs"
    />
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
  .UiImage
    &[data-cover-mode]
      absolute 0
      size 100%
      display block

    // @todo polyfill
    //

  //  ===DEBUG===
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .UiImage
    //
</style>
