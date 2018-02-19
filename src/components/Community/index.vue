<doc>
  /** ComunityPage
   * > Page Community
   *
   * @author Nicolas Husson <hello@nusson.ninja>
   *
   * @todo scrollmagic padding map
   */
</doc>

<script>
import { UiSectionIntro } from 'ui';
import CommunityMap from './Map';
import CommunityRecords from './Records';
import CommunityLinks from './Links';
import CommunityNotMembers from './NotMembers';
import CommunityMembers from './Members';

export default {
  name: 'ComunityPage',
  components: {
    UiSectionIntro,
    CommunityMap,
    CommunityRecords,
    CommunityLinks,
    CommunityNotMembers,
    CommunityMembers,
  },
  data() {
    return {
      user: {
        isMember: false, // @todo store
      },
    };
  },
};
</script>

<template>
  <div class="ComunityPage">
    <UiSectionIntro
      class="Intro"
      :title="$t('intro.title')"
      :description="$t('intro.description')"
      :image="$t('intro.image')"
      />
    <CommunityMap
      class="Section Map"
      ref="Map" />
    <div class="MapSection">
      <div class="Tip">
        <h3 class="Title" v-html="$t('map.tips.title')" />
        <div class="content">
          <ul class="list">
            <li>
              <a
                class="Link"
                :href="$t('map.tips.link.href')"
                target="_blank"
                :title="$t('map.tips.link.alt')"
                v-html="$t('map.tips.link.label')" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <CommunityRecords />
    <CommunityLinks />
    <CommunityNotMembers v-if="!user.isMember" />
    <!-- <Shop /> -->
    <CommunityMembers v-if="user.isMember"/>
  </div>
</template>

<i18n>
{
  "fr":{
    "intro": {
      "title": "Voluptate tempor pariatur",
      "description": "<p>Cupidatat qui consectetur exercitation ad do ut do officia exercitation. Veniam nisi veniam sint ut irure labore aliquip occaecat culpa enim sunt duis sint eiusmod. Ea et ut nulla laboris. Qui duis sit officia in minim eu consequat. Sit voluptate nostrud cillum sint irure sint laborum mollit nulla occaecat officia dolor exercitation et. Esse laboris nisi elit cupidatat.</p>",
      "image": "https://picsum.photos/800/600/?random"
    },
    "map": {
      "tips": {
        "title": "Autres cartes utiles:",
        "link": {
          "href": "http://www.slacklinegroups.com",
          "alt": "slacklinegroups",
          "label": "slacklinegroups.com - La slackomunauté mondiale"
        }
      }
    }
  }
}
</i18n>

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
  .MapSection
    position relative
    size 80vw 60vh
    margin 0 auto
    max-width 1280px
    background-color black
    border 50px solid black // @todo scrollmagic to create scale
    margin-bottom 20vh
    >.ComunityMap
      absolute 0px 0
      overflow hidden
      >.Map
        absolute -100px 0
        transform translateY(100px) // @todo scrollmagic to create move

    >.Tip
      absolute false false 0 -5vw
      width 30vw
      min-width 200px
      max-width 400px
      padding 30px
      background-color white
      color black
      transform translateY(15vh) // @todo scrollmagic to create move


  //  ===DEBUG===
  .ComunityPage.is_debug
    //
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .ComunityPage
    //
</style>
