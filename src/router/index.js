import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import ConditionalAndLoop from '@/components/ConditionalAndLoop'
import Store1 from '@/components/Store1'
import Store2 from '@/components/Store2'

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
    },
    {
      path: '/store1',
      name: 'Store1',
      component: Store1
    },
    {
      path: '/store2',
      name: 'Store2',
      component: Store2
    }
  ]
})
