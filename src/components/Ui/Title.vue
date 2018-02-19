<doc>
# UiTitle
> Simple title with style for any (1 to 6) levels

- content though `slot`
- can manage `tag` (seo) and `level` (style) through `props`

@exemple

```html
<Title tag="h4" :level="2" v-html="'this is my title'" />
```

@author Nicolas Husson <hello@nusson.ninja>
</doc>

<script>
export default {
  name: 'UiTitle',
  props: {
    /** @augments {Number} level
     * (optional since we fallback to the tag number - @see `_level` computed)
     * Because tag is for seo, styleing will be based on that *  */
    level: {
      type: Number,
      default: null,
    },
    /** @augments {Number} tag = 'h2' - HTML Element used  */
    tag: {
      type: String,
      default: 'h2',
    },
  },
  computed: {
    /** @return {Number} level - @use `level` if defined, else guess using `tag` */
    _level() {
      const level = this.level || this.tag.split('h')[1];
      return parseInt(level, 10);
    },
  },
};
</script>

<template>
  <component
    :is="tag"
    class="UiTitle"
    :data-level="_level">
    <slot></slot>
  </component>
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
  .UiTitle
    font('title')
    &[data-level="1"]
      font('h1')
    &[data-level="2"]
      font('h2')
    &[data-level="3"]
      font('h3')
    &[data-level="4"]
      font('h4')
    &[data-level="5"]
      font('h5')
    &[data-level="6"]
      font('h6')
    &[data-light]
      font('light')
    //

  //  ===DEBUG===
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .UiTitle
    //
</style>
