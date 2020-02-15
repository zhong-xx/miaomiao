import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieRouter from './movie'
import CinemaRouter from './cinema'
import MineRouter from './mine'

Vue.use(VueRouter)

const routes = [
  MovieRouter,
  CinemaRouter,
  MineRouter,
  {
    path: '/*',
    redirect: '/movie/nowPlaying'
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
