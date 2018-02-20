<doc>
# UiList
> List of (card) items

@todo

- make it work ;)
- can use slots to custom cards

@author Nicolas Husson <hello@nusson.ninja>
</doc>

<script>
export default {
  name: 'UiList',
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
};
</script>

<template>
  <div class="UiList">
    <slot
      v-for="(item, index) in items"
      class="Item"
      ref="Item"
      name="item">
      <pre>{{item}}</pre>
    </slot>
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
  .UiList
    //

  //  ===DEBUG===
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .UiList
    //
</style>
