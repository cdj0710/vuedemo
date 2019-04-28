// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import './assets/common.css'
/* eslint-disable */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)

//导航守卫
// 如果是去登陆页直接去, 如果不是去登录页,判断有没有登陆过
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  }
  // 如何判断是否登陆过? 判断是否有token
  // console.log(to.path)
  if (!localStorage.getItem('token')) {
    next('/login')
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
