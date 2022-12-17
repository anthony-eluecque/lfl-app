import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';
import DisplayJoueurs from '../views/DisplayJoueurs.vue';
import AccueilView from '../views/AccueilView.vue';
import DisplayEquipes from '../views/DisplayEquipes.vue';
import DisplayClassement from '../views/DisplayClassement.vue';
import DisplayMatchs from '../views/DisplayMatchs.vue';
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
          component: DisplayEquipes
        },
        {
          path: '/classement',
          component: DisplayClassement,         
        },
        {
          path:'/classement/:week',
          name:'week',
          component : DisplayClassement,
          props:true
        },
        {
          path: '/matchs',
          component : DisplayMatchs
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