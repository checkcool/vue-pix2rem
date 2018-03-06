<template>
  <article class="pageview">
    <header class="header fixed">
      <div class="container"><a class="back back_ico" href="javascript:void(0);" @click="goBack"></a><span class="title">{{msg}}</span></div>
    </header>
    <section class="main">
        <button id="show-modal" @click="showModal({
          showCancel: false,
          showOk: false,
          header: 'Title 1',
          body: 'body 1',
          okCallback: okcallback1,
          cancelCallback: cancelcallback1,
          duration: 1000
        })">Show Modal 1</button>
        <br>
        <button id="show-modal2" @click="showModal({
          header: 'Title 2',
          body: 'body 2',
          okCallback: okcallback2,
          cancelCallback: cancelcallback2
        })">Show Modal 2</button>
        <!-- use the modal component, pass in the prop -->
        <modal
          ref="dialog"
          :show="show"
          :showOk="showOk"
          :showCancel="showCancel"
          :okText="okText"
          :cancelText="cancelText"
          :header="header"
          :body="body"
          :okCallback="okCallback"
          :cancelCallback="cancelCallback"
          :duration="duration"
        ></modal>
    </section>
  </article>
</template>

<script>
import Modal from '../components/Modal'
import {goBack, extend} from '../util/tools'
export default {
  name: 'ModalDemo',
  data () {
    return {
      msg: 'Modal Demo',
      show: false,
      showOk: true,
      showCancel: true,
      okText: 'OK',
      cancelText: 'Cancel',
      header: 'Tips',
      body: '',
      okCallback: function () {
        this.show = false
      },
      cancelCallback: function () {
        this.show = false
      },
      duration: 0
    }
  },
  components: {
    Modal
  },
  methods: {
    goBack: goBack,
    showModal: function (options) {
      let opts = {
        showOk: true,
        showCancel: true,
        okText: 'OK',
        cancelText: 'Cancel',
        header: 'Tips',
        body: '',
        okCallback: function () {
          this.show = false
        },
        cancelCallback: function () {
          this.show = false
        },
        duration: 0
      }
      // reset modal component
      extend(opts, options)
      extend(this, opts)
      this.show = true
      if (opts.duration && opts.duration > 0) {
        setTimeout(() => {
          this.show = false
        }, opts.duration)
      }
    },
    okcallback1: function () {
      alert('You\'ve clicked OK，from dialog 1!')
      this.show = false
    },
    cancelcallback1: function () {
      alert('You\'ve clicked Cancel，from dialog 1!')
      this.show = false
    },
    okcallback2: function () {
      alert('You\'ve clicked OK，from dialog 2!')
      this.show = false
    },
    cancelcallback2: function () {
      alert('You\'ve clicked Cancel，from dialog 2!')
      this.show = false
    }
  }
}
</script>

<style scoped>
  .main {
    text-align: center;
  }
  button {
    text-align: center;
    margin: 30px 0;
    padding: 20px;
  }
</style>
