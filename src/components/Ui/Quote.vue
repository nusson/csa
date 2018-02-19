<doc>
# UiQuote
> A simple quote with author + animated text background

- main content using `slot`
- `author` and `background` animated text fron props

@author Nicolas Husson <hello@nusson.ninja>
</doc>

<script>
  export default {
    name: 'UiQuote',
    props: {
      /** @augments {String} author - citation author */
      author: {
        type: String,
        default: null,
      },
      /** @augments {String} Background - short bg animated text */
      background: {
        type: Object,
        default: null,
      },
    },
  };
</script>

<template>
  <div class="UiQuote">
    <blockquote class="Quote">
      <div class="Content">
        <slot/>
      </div>
      <footer
        class="Author"
        v-html="author" />
    </blockquote>
    <p
      ref="Background"
      class="Background"
      v-html="background" />
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
  .UiQuote
    //
</style>

<style lang="stylus">
  //  ===NO_SCOPE===
  .UiQuote
    //
</style>

