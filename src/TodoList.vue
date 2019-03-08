<template>
  <div>
    <div>
      <input type="text"
             v-model="inputValue">
      <input type="button"
             v-on:click="handleSubmit"
             value="提交">
    </div>
    <ul>
      <todo-item v-for="(item,index) of list"
                 v-bind:content="item"
                 v-bind:index="index"
                 v-bind:key="index"
                 v-on:deleteItem="deleteItem"></todo-item>
    </ul>
    <nav>
      <router-link to="/about">about</router-link>
      <router-link to="/home">home</router-link>
    </nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem'

export default {
  components: {
    'todo-item': TodoItem
  },
  data () {
    return {
      inputValue: '',
      list: []
    }
  },
  methods: {
    handleSubmit () {
      console.log('inputValue: ' + this.inputValue)
      this.list.push(this.inputValue)
      this.inputValue = ''
    },
    deleteItem (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>
<style>
</style>
