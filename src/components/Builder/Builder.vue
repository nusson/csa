<script>
import { BuilderTypes } from 'components/Security/Model';
import { BuilderQuote } from './';

/** > Main builder component
 *
 * Automaticaly render correct components based on a Model
 *
 * @author Nicolas Husson <hello@nusson.ninja>
 */
export default {
  name: 'Builder',
  components: { },
  props: {
    model: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      debug: process.env.NODE_ENV === 'development',
    };
  },
  watch: { },
  methods: {
    getComponentByType(type = '') {
      switch (type) {
        case BuilderTypes.quote:
          return BuilderQuote;
        default:
          return null;
      }
    },
  },
};
</script>

<template>
  <div :class="['Builder', {'is-debug': debug}]">
    <template v-for="(field, index) in fields">
      <component
        :is="getComponentByType(field.type)"
        :key="'Field-'+field.type+'-'+index"
        :model="$t(field.data)"></component>
    </template>
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
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .Builder
    //

  //  ===DEBUG===
  .Builder.is_debug
    //
</style>
