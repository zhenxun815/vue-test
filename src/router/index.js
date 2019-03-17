import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import ConditionalAndLoop from '@/components/ConditionalAndLoop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todo_list',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/conditional_and_loop',
      name: 'ConditionalAndLoop',
      component: ConditionalAndLoop
    }
  ]
})
