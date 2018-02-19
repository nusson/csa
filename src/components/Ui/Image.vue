<doc>
# UiImage
> Image ++

- responsive and auto resolution prediction
- preload (+ fallback ?)
- cover / ratio, free...

@author Nicolas Husson <hello@nusson.ninja>
</doc>

<script>
export default {
  name: 'UiImage',
  props: {
    src: {
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
    _state() {
      if (this.loaded) return 'loaded';
      if (this.error) return 'error';
      return 'loading';
    },
    /** @return {String} _src - but wait that it's loaded
     * @todo may return placeholder or loader etc
     */
    _src() {
      if (this.debug) return `https://picsum.photos/${600}/?random`;

      if (!this.loaded) return null; // @todo loader ?

      return this.src;
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
  },
};
</script>

<template>
  <!-- @todo transition for appear effect ? -->
  <img
    class="UiImage"
    :data-state="_state"
    :src="_src"
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
    //

  //  ===DEBUG===
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .UiImage
    //
</style>
