<script>

  /** > One discipline article
   *
   * @author Nicolas Husson <hello@nusson.ninja>
   */
  export default {
    name: 'DisciplineArticle',
    props: {
      article: Object,
    },
    data() {
      return {
        debug: process.env.NODE_ENV === 'development',
        progress: 0,
      };
    },
    computed: {
      translateY() {
        return `${(this.progress - 0.5) * 60}%`;
      },
    },
  };
</script>

<template>
  <article :class="[
    'DisciplineArticle',
    { 'is-debug': debug },
    '-' + article.id,
  ]">
  <!-- <pre>{{progress}}</pre> -->
    <header class="PageHeader">
      <h1 class="PageTitle">
        <span class="text" v-text="article.title"></span>
      </h1>
    </header>
    <video ref="video"
      class="VideoBackground"
      type="video/mp4"
      :style="{transform:'translateY('+translateY+')'}"
      :src="article.video"
      :autoplay="true"
      :loop="true"
      :muted="true"
    ></video>
  </article>
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
  // .parallaxParent
  //   height: 100vh
  //   overflow: hidden
  // .parallaxParent > *
  //   height: 125%
  //   position: relative
  //   top: -40%

  //  ===NO_SCOPE===
  .DisciplineArticle
    overflow hidden
    height: 100%

  .VideoBackground
    size: 100%

    // background-image: url(../../img/example_parallax_bg2.png);
    //

  //  ===DEBUG===
  .DisciplineArticle.is_debug
    //
</style>
