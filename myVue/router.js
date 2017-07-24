import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
 export default Router({
  // mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: require('@/components/page_home/r_home')
  }, {
    path: '/manage',
    name: 'manage',
    component: require('@/components/page_manage/r_manage')
  }, {
    path: '/collect',
    name: 'collect',
    component: require('@/components/page_home/r_collect')
  }]
})