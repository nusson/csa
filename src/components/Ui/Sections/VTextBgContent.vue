<doc>
# UiSectionVTextBgContent
> Vertical title list that drive bg content

@references: https://badassfilms.tv

@author Nicolas Husson <hello@nusson.ninja>
</doc>

<script>
import { UiTitle, UiWysiwyg, UiImage } from 'ui';
import { SlideAppearTransition } from 'transitions';

export default {
  name: 'UiSectionVTextBgContent',
  components: {
    UiTitle,
    UiWysiwyg,
    UiImage,
    SlideAppearTransition,
  },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<template>
  <section class="UiSectionVTextBgContent">
    <ul class="List -titles">
      <li
        v-for="(item, index) in items"
        :key="'title-'+index"
        class="item Title"
        ref="Title"
        @mouseenter="currentIndex = index">
        <UiTitle
          tag="h4"
          class="title"
          v-text="item.title" />
      </li>
    </ul>
    <ul class="List -items">
      <li
        v-for="(item, index) in items"
        :key="'item-'+index"
        class="item Item _fullVP"
        ref="Item"
        @mouseenter="currentIndex = index">
          <UiImage
            :key="'item-bg-'+index"
            ref="Background"
            class="Background"
            background="cover"
            :image="null" />
          <div
            :key="'item-content-'+index"
            class="Content">
            <UiWysiwyg
              class="description"
              v-html="item.description_html" />
          </div>
      </li>
    </ul>
  </section>
</template>

<style lang="stylus" scoped>
  /**
  * TABLE OF CONTENT
  * --------
  *  - LAYOUT
  *  - DEBUG
  *  - NO_SCOPE
  */

  //  ===LAYOUT===

  //  ===DEBUG===
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .UiSectionVTextBgContent
    //
</style>
