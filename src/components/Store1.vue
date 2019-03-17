<!-- vuex  -->
<template>
  <div>
    <div>store count is: {{msg}}</div>
    <button @click="add">increase</button>
  </div>
</template>

<script>
import store from '@/store/store.js'
export default {
  name: 'Store1',
  data () {
    return {
    }
  },
  store,
  components: {
  },
  computed: {
    msg: function () {
      return store.state.count
    }
  },
  methods: {
    add () {
      console.log('store1 add...')
      store.commit('increase')
    }
  }
}

</script>
<style scoped>
</style>
