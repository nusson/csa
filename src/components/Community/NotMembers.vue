<doc>
  # CommunityNotMembers
  > If not a members section, else will use CommunityMembers

  @author Nicolas Husson <hello@nusson.ninja>
</doc>

<script>
import { UiParalaxHeader, UiSectionVTextBgContent } from 'ui';
import { Scene } from 'scrollmagic';
import { mapGetters } from 'vuex';

export default {
  name: 'CommunityNotMembers',
  components: {
    UiParalaxHeader,
    UiSectionVTextBgContent,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    // ...mapGetters(
    //   SMController: 'ScrollMagic/controller',
    // )
    ...mapGetters({
      viewport: 'App/viewport',
    }),
  },
  mounted() {
    this.initScrollMagic();
  },
  methods: {
    /** init scroll magic
     * header is normal but content would pin and be revealed by header
     * then, let 20% scroll time in tha section... just for the feeling ;)
     */
    initScrollMagic() {
      // pin content 150%
      // 100% time to be revealed by header
      // + 50% just to be safe/smooth
      const pinContentScene = new Scene({
        triggerElement: this.$el,
        triggerHook: 0,
        duration: '150%',
      })
      // .on('enter', this.)
        .setPin(this.$refs.Content.$el, { pushFollowers: false });
      this.$store.dispatch('ScrollMagic/ADDTO_PAGE_CONTROLLER', pinContentScene);

      /* reveal Content titles nicely once header revealed enough space */
      const enterVpContentScene = new Scene({
        triggerElement: this.$el,
        triggerHook: 0.3,
        offset: this.viewport.height,
      })
        .on('enter', this.$refs.Content.enter.bind(this.$refs.Content))
        .on('leave', this.$refs.Content.leave.bind(this.$refs.Content));
      this.$store.dispatch('ScrollMagic/ADDTO_PAGE_CONTROLLER', enterVpContentScene);
      this.$watch('viewport', ({ height }) => {
        enterVpContentScene.offset(height);
      });
    },
    showFact(index) {
      this.currentIndex = index;
    },
    // hideFact(index) {
    // },
  },
};
</script>

<template>
  <article class="CommunityNotMembers">
    <UiParalaxHeader class="Header">{{ $t('title') }}</UiParalaxHeader>
    <UiSectionVTextBgContent
      ref="Content"
      class="Content"
      :items="$t_raw('about.items')" />
      <!-- <section class="Section Advantages">
        <div class="content">
          <UiTitle
            tag="h3"
            v-text="$t('advantages.title')" />
          <ul class="list">
            <li
              v-for="(item, index) in $t_raw('advantages.items')"
              :key="'advantage-'+index"
              class="item">
              <UiTitle
                tag="h4"
                class="title"
                v-text="item.title" />
              <UiWysiwyg
                class="description"
                v-html="item.description_html" />
            </li>
          </ul>
        </div>
      </section> -->
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
  .CommunityNotMembers
    position relative
    // padding 60px
    color c-black
    background-color c-white
    z-index 1

  .Content
    position absolute
    top -100vh
    size 100% 100vh
    padding-top 0
    padding-bottom 0
    z-index 1
    background-color rgba(red, 0.4)

  .Header
    absolute top 0 left 0
    size 100vw 100vh
    display flex
    align-items center
    justify-content center
    z-index 10
    background-color c-white

  .Section
    display flex
    align-items center
    size 100%
    .List
      max-width 50%
      padding-right 30px
      box-sizing border-box
      > .item
        margin-bottom 20px

  .Fact
    >.content
      absolute top 50% left 50%
      width 50%
      transform translateY(-50%)


  //  ===DEBUG===

  // .Content
  //   background-color rgba(red, 50%)
  //   edit()

  // .Header
  //   background-color rgba(blue, 50%)
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
</style>

<i18n>
{
  "en": {
    "title": "Become a membre",
    "about": {
      "title": "What is a member ?",
      "items":[
        {
          "title": "Description and goal",
          "description_html": "<p>The CSA membership is a project that will allow slackliners from the country to get involve in the community also as giving them the opportunity to enhance their practice and accessibility to professional gear while encouraging Canadian Slackline businesses. A membership will be 25$ per year and will give them multiple advantage that the CSA will have negotiated for them. This will also help gathering statistic on the mobility of the slackliners.</p>"
        },
        {
          "title": "When to be started",
          "description_html": "<p>TBA</p>"
        },
        {
          "title": "Who is the project manager",
          "description_html": "<p>Luca Larouche for at least 1 financial year (1st january 2017 to 1st january 2018)<br>Luca.Larouche@slackline.ca<br>514-974-5725</p>"
        },
        {
          "title": "Where could you get your membership",
          "description_html": "<p>Slackline partner should be able to get the payment and fill the form for new member and offer the discount directly. A trimestrial report shall be sent to the project manager so he can print the membership card and send it to the new members. Also at any CSA events or any events that the CSA takes parts, new members shall be able to get register. Some CSA city and province leaders slacklining in town shall also be able to fill a form.</p>"
        },
        {
          "title": "Contract with business partner",
          "description_html": "<p>Contract with business partnership will be available in the “Board” database, which only the board of director and some related person can access. If anyone else want to look at the contract, they should ask for it.</p><p>Some interested business to be part of it<ul><li>Slackline Montreal</li><li>Absolute Slackline</li><li>Paragym</li><li>Bloc shop</li></ul></p><p>The contract shall have those following informations:<ul><li>What will the CSA benefits from this partnership</li><li>What the other business benefits from this partnership</li><li>What will the member will benefits from this partnership</li><li>Date that it start and end / when we need to look back at the contract</li><li>Register Athlete (2 persons for the first year) and what would they benefits</li></ul></p>"
        },
        {
          "title": "Map with highline spots and beta",
          "description_html": "<p>Blablabla</p>"
        },
        {
          "title": "Discounts for local indoor meetups",
          "description_html": "<ul><li></li>Monkey Vault, Toronto</li><li>Taz</li><li>iSaute</li><li>QC</li></u>"
        },
        {
          "title": "Can borrow gear",
          "description_html": "<p>... only where association with gear is present<ul><li>Torronto</li><li>Montreal</li><li>Quebec</li></ul></p><p>Ad commodo ea aliquip et id dolor sit duis.</p>"
        },
        {
          "title": "Unique free workshops and events",
          "description_html": "<p>Laboris cillum aute cupidatat voluptate id culpa eiusmod ullamco reprehenderit reprehenderit sint sit labore.</p>"
        },
        {
          "title": "Custom newsletter",
          "description_html": "<p>Qui qui tempor cupidatat proident non ut pariatur dolore enim incididunt quis veniam deserunt amet.</p>"
        },
        {
          "title": "The CSA as a database",
          "description_html": "<p>... of informational content about slacklining, from beginner to highline informations. The member will have access to those informations connecting to it from their emails.<br>eg : <ul><li>Instructables videos</li><li>google drive MAIN</li></li></li></ul></p>"
        },
        {
          "title": "Have a single profile",
          "description_html": "<p>so we know if<ul><li>You are accredited or not</li><li>Access to restricted events</li><li>Gear exchange datas</li><li>I you make a records</li></ul></p>"
        },
        {
          "title": "More opportunity to go highlining",
          "description_html": "<p><ul><li>Organize highligne meetups</li><li>Easy spots for beginners (terrebonnes etc)</li><li>Introduction to rigging</li><li>I personally love the Lucas technique to always try to bring a motivated beginner with you at all your expeditions</li><li>Facilitate transport (tool for covoiturage within website)</li></ul></p>"
        },
        {
          "title": "Highline parks with FQME @maybe",
          "description_html": "<p>so discounts etc</p>"
        },
        {
          "title": "Our gratitude",
          "description_html": "<p>and welcome to the family ;)</p>"
        }
      ]
    }
  },
  "fr": {
    "title": "Become a membre",
    "about": {
      "title": "C'est quoi déjà être membre ?",
      "items":[
        {
          "title": "Description and goal",
          "description_html": "<p>The CSA membership is a project that will allow slackliners from the country to get involve in the community also as giving them the opportunity to enhance their practice and accessibility to professional gear while encouraging Canadian Slackline businesses. A membership will be 25$ per year and will give them multiple advantage that the CSA will have negotiated for them. This will also help gathering statistic on the mobility of the slackliners.</p>"
        },
        {
          "title": "When to be started",
          "description_html": "<p>TBA</p>"
        },
        {
          "title": "Who is the project manager",
          "description_html": "<p>Luca Larouche for at least 1 financial year (1st january 2017 to 1st january 2018)<br>Luca.Larouche@slackline.ca<br>514-974-5725</p>"
        },
        {
          "title": "Where could you get your membership",
          "description_html": "<p>Slackline partner should be able to get the payment and fill the form for new member and offer the discount directly. A trimestrial report shall be sent to the project manager so he can print the membership card and send it to the new members. Also at any CSA events or any events that the CSA takes parts, new members shall be able to get register. Some CSA city and province leaders slacklining in town shall also be able to fill a form.</p>"
        },
        {
          "title": "Contract with business partner",
          "description_html": "<p>Contract with business partnership will be available in the “Board” database, which only the board of director and some related person can access. If anyone else want to look at the contract, they should ask for it.</p><p>Some interested business to be part of it<ul><li>Slackline Montreal</li><li>Absolute Slackline</li><li>Paragym</li><li>Bloc shop</li></ul></p><p>The contract shall have those following informations:<ul><li>What will the CSA benefits from this partnership</li><li>What the other business benefits from this partnership</li><li>What will the member will benefits from this partnership</li><li>Date that it start and end / when we need to look back at the contract</li><li>Register Athlete (2 persons for the first year) and what would they benefits</li></ul></p>"
        },
        {
          "title": "Map with highline spots and beta",
          "description_html": "<p>Blablabla</p>"
        },
        {
          "title": "Discounts for local indoor meetups",
          "description_html": "<ul><li></li>Monkey Vault, Toronto</li><li>Taz</li><li>iSaute</li><li>QC</li></u>"
        },
        {
          "title": "Can borrow gear (where association with gear is present)",
          "description_html": "<p>where association with gear is present</p>"
        },
        {
          "title": "Unique free workshops",
          "description_html": "<p>xxx</p>"
        },
        {
          "title": "Newsletter ",
          "description_html": "<p>blablabla</p>"
        },
        {
          "title": "The CSA as a database",
          "description_html": "<p>... of informational content about slacklining, from beginner to highline informations. The member will have access to those informations connecting to it from their emails.<br>eg : <ul><li>Instructables videos</li><li>google drive MAIN</li></li></li></ul></p>"
        },
        {
          "title": "Have a single profile",
          "description_html": "<p>so we know if<ul><li>You are accredited or not</li><li>Access to restricted events</li><li>Gear exchange datas</li><li>I you make a records</li></ul></p>"
        },
        {
          "title": "Offer members the opportunity to go highlining",
          "description_html": "<p><ul><li>Organize highligne meetups</li><li>Easy spots for beginners (terrebonnes etc)</li><li>Introduction to rigging</li><li>I personally love the Lucas technique to always try to bring a motivated beginner with you at all your expeditions</li><li>Facilitate transport (tool for covoiturage within website)</li></ul></p>"
        },
        {
          "title": "Highline parks with FQME @maybe",
          "description_html": "<p>so discounts etc</p>"
        },
        {
          "title": "Our gratitude",
          "description_html": "<p>and welcome to the family ;)</p>"
        }
      ]
    }
  }
}
</i18n>
