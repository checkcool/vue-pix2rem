<template>
  <div class="wrap">
    <scroller :scrollerTitle="vTitle" :itemList="vList"></scroller>
  </div>
</template>

<script>
import Scroller from '../components/Scroller'
export default {
  name: 'OneScroller',
  data () {
    return {
      vList: [
        { value: 1, name: 'item 1', selected: false },
        { value: 2, name: 'item 2', selected: false },
        { value: 3, name: 'item 3', selected: false },
        { value: 4, name: 'item 4', selected: true },
        { value: 5, name: 'item 5', selected: false },
        { value: 6, name: 'item 6', selected: false },
        { value: 7, name: 'item 7', selected: false },
        { value: 8, name: 'item 8', selected: false }
      ],
      vTitle: 'List Title'
    }
  },
  components: {
    Scroller
  }
}
</script>

<style scoped>
  .wrap {
    width: 300px;
    background: rgba(230,230,230,.5);
    position: relative;
  }
</style>
