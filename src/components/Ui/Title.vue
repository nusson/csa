<doc>
  /** BuilderTitle
   * > Builder title field
   *
   * ## exemple
   *
   * ```html
   * <Title tag="h2" :model="{ content: { fr: '', en: '' } }" />
   * ```
   *
   * @author Nicolas Husson <hello@nusson.ninja>
   */
</doc>

<script>
import Base from './Base';

export default {
  name: 'BuilderTitle',
  extends: Base,
  props: {
    /** @augments {Number} level = '2'
     * will be used for style. So you can have an h4 looking like an h2  */
    level: {
      type: Number,
      default: 2,
    },
    /** @augments {Number} tag = 'h2' - HTML Element used  */
    tag: {
      type: String,
      default: 'h2',
    },
  },
  computed: {},
};
</script>

<template>
  <component
    :is="tag"
    :class="['BuilderTitle', 'level-'+level, {'is-debug': debug}]"
    v-html="content" />
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

  //  ===DEBUG===
  .BuilderTitle.is_debug
    //
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .BuilderTitle
    //
</style>
