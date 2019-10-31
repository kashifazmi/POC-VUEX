import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ParentComponent from '@/components/ParentComponent'
import PleaseClickMe from '@/components/PleaseClickMe'
import thekindscript from '@/components/thekindscript'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/parentcomponent',
      name: 'ParentComponent',
      component: ParentComponent
    },
    {
      path: '/pleaseclickme',
      name: 'PleaseClickMe',
      component: PleaseClickMe
    },
    {
      path: '/thekindscript',
      name: 'thekindscript',
      component: thekindscript
    }
  ]
})
