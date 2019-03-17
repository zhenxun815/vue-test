<!-- vuex -->
<template>
  <div>store count is: {{msg}}</div>
</template>

<script>
import store from '@/store/store.js'

export default {
  name: 'Store2',
  data () {
    return {
      msg: store.state.count
    }
  },
  store,
  components: {},
  computed: {},
  methods: {}
}

</script>
<style scoped>
</style>
