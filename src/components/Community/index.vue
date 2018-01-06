<doc>
  /** ComunityPage
   * > Page Community
   *
   * @author Nicolas Husson <hello@nusson.ninja>
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
    <CommunityMap />
    <CommunityRecords />
    <CommunityLinks />
    <CommunityNotMembers v-if="!user.isMember" />
    <!-- <Shop /> -->
    <CommunityMembers v-if="user.isMember"/>
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

  //  ===DEBUG===
  .ComunityPage.is_debug
    //
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .ComunityPage
    //
</style>
