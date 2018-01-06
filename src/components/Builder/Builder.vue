<script>
import { BuilderTypes, BuilderLayouts } from 'components/Security/Model';
import { BuilderQuote, BuilderTitle } from './';

/** > Main builder component
 *
 * Automaticaly render correct components based on a Model
 *
 * @author Nicolas Husson <hello@nusson.ninja>
 */
export default {
  name: 'Builder',
  props: {
    model: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      debug: process.env.NODE_ENV === 'development',
      BuilderTypes,
      BuilderLayouts,
    };
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
  },
  watch: { },
  methods: {
    getComponentByType(type) {
      switch (type) {
        case BuilderTypes.quote:
          return BuilderQuote;
        case BuilderTypes.title:
          return BuilderTitle;
        default:
          return null;
      }
    },
  },
};
</script>

<template>
  <div :class="['Builder', {'is-debug': debug}]">
    <template v-for="(field, index) in model">

      <!-- @todo probably a component for deep layouts -->
      <template v-if="field.type === BuilderTypes.layout">
        <section v-if="field.layout === BuilderLayouts.section"
          :key="'Section-'+field.type+'-'+index">
          <component
            v-for="subField in field.content"
            :is="getComponentByType(subField.type)"
            :key="'Field-'+subField.type+'-'+index"
            :model="subField.content"></component>
        </section>
      </template>

      <component
        v-else
        :is="getComponentByType(field.type)"
        :key="'Field-'+field.type+'-'+index"
        :model="field.content[locale]"></component>
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
