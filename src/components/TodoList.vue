<template>
  <div>
    <div>
      <input type="text"
             v-model="inputValue">
      <input type="button"
             @click="handleSubmit"
             value="提交">
    </div>
    <ul>
      <todo-item v-for="(item,index) of list"
                 :content="item"
                 :index="index"
                 :key="index"
                 v-on:deleteItem="deleteItem"></todo-item>
    </ul>

    <div>
      watch_attr: {{watch_attr}}
    </div>
    <div>
      compute_attr: {{compute_attr}}
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  components: {
    'todo-item': TodoItem
  },
  data () {
    return {
      inputValue: '',
      list: [],
      watch_attr: 'something'
    }
  },
  methods: {
    handleSubmit () {
      console.log('inputValue: ' + this.inputValue)
      this.list.push(this.inputValue)
      this.watch_attr = this.inputValue
      this.inputValue = ''
    },
    deleteItem (index) {
      this.list.splice(index, 1)
    }
  },
  watch: {
    watch_attr: function (newVal, oldVal) {
      console.log(`newVal is: ${newVal}, oldVal is: ${oldVal}`)
    }
  },
  computed: {
    compute_attr: function () {
      return `${this.watch_attr}`
    }
  }
}
</script>
<style>
</style>
