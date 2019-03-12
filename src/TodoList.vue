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
                 v-on:delete_item="deleteItem"></todo-item>
    </ul>
    <array-component :numbers="numbers"
                     @push_number="pushNumber">

    </array-component>
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
import ArrayComponent from './components/ArrayComponent'

export default {
  components: {
    'todo-item': TodoItem,
    'array-component': ArrayComponent
  },
  data () {
    return {
      inputValue: '',
      list: [],
      numbers: [1, 2, 3]
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
    },
    pushNumber (number) {
      console.log(`pushNuber${number}`)
      this.numbers.push(number)
    }
  }
}
</script>
<style>
</style>
