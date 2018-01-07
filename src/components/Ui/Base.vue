<script>
/** > Base page builder Fiel
 *
 * need to be extended as it own just the base BuilderField logic
 * such as :
 *
 * - define props
 * - compute translated content
 * - merge options
 * - Maybe basic layout style ?
 *
 *
 * @author Nicolas Husson <hello@nusson.ninja>
 */
import { get } from 'lodash';

export default {
  name: 'BuilderFieldBase',
  components: { },
  props: {
    model: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      debug: process.env.NODE_ENV === 'development',
    };
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
    content() {
      return get(this.model, this.locale);
    },
    ready() {
      return this.model || false;
    },
  },
  methods: {

  },
};
</script>

<template>
  <div
    v-if="ready"
    :class="['BuilderFieldBase', {'is-debug': debug}]">

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
  .BuilderFieldBase
    //

  //  ===DEBUG===
  .BuilderFieldBase.is_debug
    //
</style>
