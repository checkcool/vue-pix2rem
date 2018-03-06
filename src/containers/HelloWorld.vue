<template>
  <article class="pageview">
    <header class="header fixed">
      <div class="container"><span class="title">{{msg}}</span></div>
    </header>
    <section class="main">
      <ul>
        <li><router-link to="one-scroller">One Scroller Demo</router-link></li>
        <li><router-link to="modal-demo">Modal Demo</router-link></li>
        <li>developing...</li>
        <li>developing...</li>
        <li>developing...</li>
        <li>developing...</li>
        <li>developing...</li>
      </ul>
    </section>
  </article>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello World'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../style/pix2rem/index';
  .main {
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
