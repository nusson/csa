<doc>
# UiWysiwyg
> Mainly about stiling

- accepts raw html
- paragraphes : `h1` - `h6`, `p`
- basic style : `em`, `strong`, `._underline`, `._linethrough`
- links (internal/external depending on url) : `a`
- listes : `ul`, `ol`
- others : `quote`

@author Nicolas Husson <hello@nusson.ninja>
</doc>

<script>
export default {
  name: 'UiWysiwyg',
  data: () => ({
    debug: process.env.NODE_ENV === 'development',
  }),
};
</script>

<template>
  <div :class="['UiWysiwyg', {'is-debug': debug}]">
    <slot />
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
  .UiWysiwyg
    font(text)

  //  ===DEBUG===
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .UiWysiwyg
    //
</style>
