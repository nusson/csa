<doc>
  /** ComunityMap
   * > Map of our comunity
   *
   * @author Nicolas Husson <hello@nusson.ninja>
   */
</doc>

<script>
import GoogleMap from 'assets/js/GoogleMaps';
import { mapGetters } from 'vuex';


export default {
  name: 'ComunityMap',
  components: {},
  props: {},
  data: () => ({
    debug: process.env.NODE_ENV === 'development',
    /** @augments {GoogleMap} map */
    map: null,
    /** @augments {Object} location - {lat, lng} */
    location: {
      lat: 45.5318974,
      lng: -73.5722774,
    },
    /** @augments {Object} zoom - smaller = more zoom */
    zoom: 8,
  }),
  computed: {
    /** @augments {Object} options - GoogleMap options */
    options() {
      return {
        center: this.location,
        zoom: this.zoom,
      };
    },
    ...mapGetters({
      viewport: 'App/viewport',
    }),
  },
  watch: {
    location(location) {
      if (!this.map) {
        return;
      }
      this.map.setCenter(location);
    },
  },
  mounted() {
    GoogleMap.load(this.init.bind(this));
  },
  beforeDestroyed() {},
  methods: {
    init() {
      this.map = GoogleMap.createMap(this.$refs.Map, this.options);

      GoogleMap.geolocalisation(({ coords }) => {
        this.location = {
          lat: coords.latitude,
          lng: coords.longitude,
        };
      });
    },
  },
};
</script>

<template>
  <div :class="['ComunityMap', {'is-debug': debug}]">
    <div
      ref="Map"
      class="Map"
      :style="{
        width: viewport.width+'px',
        height: viewport.height+'px',
      }"/>
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
  // .ComunityMap
  //   overflow hidden

  .Map
    position relative
    size 500px

  //  ===DEBUG===
  .ComunityMap.is_debug
    //
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .ComunityMap
    //
</style>
