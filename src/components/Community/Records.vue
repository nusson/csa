<doc>
/** CommunityRecords
 * > List of records
 *
 * ## ideas
 *
 * use graph for records
 *
 * @author Nicolas Husson <hello@nusson.ninja>
 */
</doc>

<script>
import ImageChart from 'assets/images/chart.png';

export default {
  name: 'CommunityRecords',
  components: {},
  props: {},
  data: () => ({
    debug: process.env.NODE_ENV === 'development',
    images: {
      chart: ImageChart,
    },
    records: [
      {
        id: 1,
        title: 'Lorem Ipsum dolor sit',
        user: {
          name: 'Some Name',
          avatar: '',
        },
        distance: 120,
        hight: 300,
      },
    ],
  }),
  computed: {},
  watch: {},
  mounted() {},
  beforeDestroyed() {},
  methods: {
    /** @return {Object} records datas - {key = label, value = description} */
    getRecordInfos(record) {
      return {
        'labels.name': record.user.name,
        'labels.distance': record.distance, // @todo also convert in feet
        'labels.hight': record.hight, // @todo also convert in feet
      };
    },
  },
};
</script>

<template>
  <div :class="['CommunityRecords', {'is-debug': debug}]">
    <div class="Content  _confortPaddings _safeVW">

      <h2 class="Title" v-html="$t('title')"></h2>
      <!-- <AppImage /> -->
      <img
        class="Image"
        :src="images.chart">
      <ul class="Records list">
        <li
          v-for="record in records"
          :key="'record-'+record.id"
          :class="['item', 'Record']">
          <figure class="Card">
            <img
              class="Image"
              :src="record.user.avatar"
              :alt="record.title+' - '+record.user.name">
            <figcaption class="Caption">
              <h3
                class="Title"
                v-html="record.title" />
              <ul class="Infos list">
                <li
                  v-for="(info, label) in getRecordInfos(record)"
                  :key="'info-'+record.id+'-'+label"
                  class="item -name">
                    <strong class="label" v-html="$t(label)" />
                    <span class="info" v-html="info" />
                </li>
              </ul>
            </figcaption>
          </figure>

        </li>
      </ul>
    </div>
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
  c-black := #000

  //  ===LAYOUT===
  .CommunityRecords
    position relative

    >.Title
      color white
      font-size 3rem
      text-transform uppercase

  .Records
    absolute 0 0 0 50%
    display flex
    justify-content stretch
    align-items stretch
    flex-wrap wrap

  .Card
    border 1px solid white
    color white
    padding 40px
    line-height 2

  //  ===DEBUG===
  .CommunityRecords.is_debug
    //
</style>


<style lang="stylus">
  //  ===NO_SCOPE===
  .CommunityRecords
    //
</style>

<i18n>
{
  "en": {
    "title": "Canadians Records",
    "labels": {
      "name": "Who?",
      "distance": "Distance :",
      "hight": "Hight :"
    }
  },
  "fr": {
    "title": "Records canadiens",
    "labels": {
      "name": "Qui?",
      "distance": "Distance :",
      "hight": "Hauteur :"
    }
  }
}
</i18n>
