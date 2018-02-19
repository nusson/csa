<doc>
# UiSectionIntro
> Title, content...

**is a pagebuilder ?** not yet

big padding, and may have an image ti the right

@inspiratiion https://antoni.de/case/strongerthantime/

@author Nicolas Husson <hello@nusson.ninja>
</doc>

<script>
import { UiTitle, UiWysiwyg, UiImage } from 'ui';

export default {
  name: 'UiSectionIntro',
  components: {
    UiTitle,
    UiWysiwyg,
    UiImage,
  },
  props: {
    title: {
      type: String,
      default: 'Voluptate tempor pariatur',
    },
    description: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
  },
};
</script>

<template>
  <section class="UiSectionIntro">
    <div class="Content _safeVW _confortPaddings">
      <UiTitle
        ref="Title"
        class="Title"
        tag="h2"
        v-html="title"/>
      <UiWysiwyg
        ref="Description"
        class="Description"
        v-html="description" />
      <UiImage
        v-if="image"
        ref="Image"
        class="Image"
        :image="image" />
    </div>
  </section>
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
  .UiSectionIntro
    position relative
    background-color c-light_bg
    color c-dark
    display flex
    justify-content space-between
    align-items center
    width 100%
    box-sizing border-box
    z-index z-section_intro
    .Title
      width 60%
      // @todo genera rules with compute vw like lightemotion
    .Description
      position relative
      min-width 240px
      width 70%
      +below(vp-tablet-portrait)
        width 85%
      // +below(vp-phone)
      //   width 100%
      z-index 10
    .Image
      vp-small-confort()
      // @todo scrollmagic
      absolute false 0 0 false
      transform translateX(20%) translateY(80%)
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .UiSectionIntro
    // edit()
</style>
