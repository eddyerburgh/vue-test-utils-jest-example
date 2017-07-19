import Vue from 'vue'
import Router from 'vue-router'
import Message from '@/components/Message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Message',
      component: Message
    }
  ]
})
