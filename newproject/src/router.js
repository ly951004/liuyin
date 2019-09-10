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
      path: '/ClearMoney',
      name: 'ClearMoney',
      component: ClearMoney
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
      path: '/Tirger',
      name: 'Tirger',
      component: Tirger
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
