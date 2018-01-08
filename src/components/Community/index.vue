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
import CommunityMap from './Map';
import CommunityRecords from './Records';
import CommunityLinks from './Links';
import CommunityNotMembers from './NotMembers';
import CommunityMembers from './Members';

export default {
  name: 'ComunityPage',
  components: {
    CommunityMap,
    CommunityRecords,
    CommunityLinks,
    CommunityNotMembers,
    CommunityMembers,
  },
  props: {},
  data: () => ({
    debug: process.env.NODE_ENV === 'development',
    user: {
      isMember: false,
    },
  }),
  computed: {},
  watch: {},
  mounted() {},
  beforeDestroyed() {},
  methods: {},
};
</script>

<template>
  <div :class="['ComunityPage', {'is-debug': debug}]">
    <div class="MapSection">
      <CommunityMap ref="Map" />
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
