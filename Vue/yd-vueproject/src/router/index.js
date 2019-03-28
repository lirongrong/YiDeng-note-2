import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PluginTest from '@/components/PluginTest'
import Home from '@/components/Home'
Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      //home会被缓存
      path: "/home",
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: "/plugin",
      component: PluginTest
    }
  ]
})
