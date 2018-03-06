import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/containers/HelloWorld'
import OneScroller from '@/containers/OneScroller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      meta: { // 动态设置meta
        title: 'HelloWorld'
      },
      component: HelloWorld
    },
    {
      path: '/one-scroller',
      name: 'OneScroller',
      meta: { // 动态设置meta
        title: 'One Scroller'
      },
      component: OneScroller
    }
  ]
})
