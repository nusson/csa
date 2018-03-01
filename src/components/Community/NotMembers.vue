<doc>
  # CommunityNotMembers
  > If not a members section, else will use CommunityMembers

  @author Nicolas Husson <hello@nusson.ninja>
</doc>

<script>
import { UiTitle, UiWysiwyg } from 'ui';

export default {
  name: 'CommunityNotMembers',
  components: {
    UiTitle,
    UiWysiwyg,
  },
};
</script>

<template>
  <article class="CommunityNotMembers">
    <div class="content _safeVW _confortPadding">
      <header class="Header">
        <UiTitle v-text="$t('title')" />
      </header>
      <section class="Section About">
        <div class="content">
          <UiTitle
            tag="h3"
            v-text="$t('about.title')" />
          <ul class="list">
            <li
              v-for="(item, index) in $t_raw('about.items')"
              :key="'about-'+index"
              class="item">
              <UiTitle
                tag="h4"
                v-text="item.title" />
              <UiWysiwyg v-html="item.description_html" />
            </li>
          </ul>
        </div>
      </section>
      <section class="Section Advantages">
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
                v-text="item.title" />
              <UiWysiwyg v-html="item.description_html" />
            </li>
          </ul>
        </div>
      </section>
    </div>
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
    padding 60px
    color c-black
    background-color c-white
    z-index 1

  .Header
    width 60%

  .Section
    width 70%
    margin-bottom 60px
    .list
      margin-top 30px
      > .item
        margin-bottom 20px

  //  ===DEBUG===
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
        }
      ]
    },
    "advantages": {
      "title": "Other advantage of the membership",
      "items":[
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
        }
      ]
    },
    "advantages": {
      "title": "Other advantage of the membership",
      "items":[
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
