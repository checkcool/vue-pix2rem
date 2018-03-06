<template>
  <article class="pageview">
    <header class="header fixed">
      <div class="container"><a class="back back_ico" href="javascript:void(0);" @click="goBack"></a><span class="title">{{msg}}</span></div>
    </header>
    <section class="main">
      <ul>
        <li><router-link to="one-scroller">One Scroller</router-link></li>
        <li>重温前两年习近平新年贺词：“人民”是高频词</li>
        <li>总理力推 新经济迎来哪些机遇？ 世界舆论看好中国</li>
        <li>明起这些新规将影响你我：全面二孩正式实施</li>
        <li>媒体：为何中央一并批判周薄徐郭令五虎</li>
        <li>十问“东方之星”客轮翻沉事件调查</li>
        <li>广东佛山土豪村分红：6口之家可分到200万(图)</li>
      </ul>
    </section>
  </article>
</template>

<script>
import {goBack} from '../util/tools'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goBack: goBack
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../style/pix2rem/index';
  .main {
    max-width:$mockup_width_px;
    margin:0 auto;
    padding-top: r(100);

    ul, li {
      list-style: decimal;
    }
    ul {
      padding-top: r(30);
      padding-left: r(30);
      margin-left: r(60);
      margin-right: r(60);
    }
    li{
      margin-bottom: r(10);
      border-bottom:1px solid #ddd;
    }
  }
</style>
