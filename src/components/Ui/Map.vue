<doc>
# Google map

@author Nicolas Husson <hello@nusson.ninja>

@todo test getters/setters
</doc>

<script>
import GoogleMap from 'assets/js/GoogleMaps';
import { mapGetters } from 'vuex';
import { merge } from 'lodash';


export default {
  name: 'ComunityMap',
  components: {},
  props: {
    /** @augments {Object} used to set default options for position, center etc */
    opts: {},
  },
  data: () => ({
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
      return merge({
        center: this.location,
        zoom: this.zoom,
      });
    },
  },
  watch: {
    // merge `opts` props within our datas
    opts: {
      handler({ location, zoom } = {}) {
        if (location) this.location = location;
        if (zoom) this.zoom = zoom;
      },
      immediate: true,
    },
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
      // console.log('location', this.options);
      this.map = GoogleMap.createMap(this.$el, this.options);

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
  <div class="UiMap" />
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

  .UiMap
    position relative
    size 100%
</style>
