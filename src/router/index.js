import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo'
import elementUI from '@/components/elementUI'
import table from  '@/components/table'
import table1 from  '@/components/table1'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: elementUI
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/elementUI',
      name: 'elementUI',
      component: elementUI
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/table1',
      name: 'table1',
      component: table1
    }
  ]
})
