<!-- 主页面 -->
<template>
  <div>
    <nav>
      <router-link to="/todo_list">TodoList</router-link>
      <router-link to="/conditional_and_loop">ConditionalAndLoop</router-link>
      <router-link to="/store1">Store1</router-link>
      <router-link to="/store2">Store2</router-link>
      <router-link to="/demo1">Demo1</router-link>
    </nav>
    <br>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {}
}

</script>
<style scoped>
</style>
