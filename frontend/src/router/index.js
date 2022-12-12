import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import DisplayJoueurs from '../views/DisplayJoueurs.vue'
import AccueilView from '../views/AccueilView.vue'
import Equipes from '../views/Equipes.vue'
import Classement from '../views/Classement.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/app',
      component: Main,
      children: [
        {
          path: '/joueurs',
          component: DisplayJoueurs
        },
        {
          path: '/equipes',
          component: Equipes
        },
        {
          path: '/classement',
          component: Classement
        }
      ],
    },
    {
      path: '/',
      component: AccueilView
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router