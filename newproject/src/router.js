import Vue from 'vue'
import Router from 'vue-router'
import Add from './views/Add.vue'
import ClearMoney from './views/ClearMoney.vue'
import Earnings from './views/Earnings.vue'
import Newname from './views/Newname.vue'
import Mygroup from './views/Mygroup.vue'
import Team from './views/Team.vue'
import Myteam from './views/Myteam.vue'
import Winnerslist from './views/Winnerslist.vue'
import Tirger from './views/Tirger.vue'
import SuperRedbag from './views/SuperRedbag.vue'
import Viptimeup from './views/Viptimeup.vue'
import Luckredbag from './views/Luckredbag.vue'
import Group from './views/Group.vue'
import hello from './views/hello.vue'
import Like from './views/Like.vue'
import Try from './views/Try.vue'
import Hi from './views/Hi.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Add
    },
    {
      path: '/Try',
      name: 'Try',
      component: Try
    },
    {
      path: '/Hi',
      name: 'Hi',
      component: Hi
    },
    {
      path: '/Like',
      name: 'Like',
      component: Like
    },
    {
      path: '/Group',
      name: 'Group',
      component: Group
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello
    },
    {
      path: '/Tirger',
      name: 'Tirger',
      component: Tirger
    },
    {
      path: '/Earnings',
      name: 'Earnings',
      component: Earnings
    },
    {
      path: '/Newname',
      name: 'Newname',
      component: Newname
    },
    {
      path: '/Mygroup',
      name: 'Mygroup',
      component: Mygroup
    },
    {
      path: '/Team',
      name: 'Team',
      component: Team
    },
    {
      path: '/Myteam',
      name: 'Myteam',
      component: Myteam
    },
    {
      path: '/Winnerslist',
      name: 'Winnerslist',
      component: Winnerslist
    },
    {
      path: '/ClearMoney',
      name: 'ClearMoney',
      component: ClearMoney
    },
    {
      path: '/SuperRedbag ',
      name: 'SuperRedbag ',
      component: SuperRedbag
    },
    {
      path: '/Viptimeup ',
      name: 'Viptimeup ',
      component: Viptimeup
    },
    {
      path: '/Luckredbag',
      name: 'Luckredbag',
      component: Luckredbag
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
