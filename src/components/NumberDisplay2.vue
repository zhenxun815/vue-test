<template>
  <div>
    {{numbers}}
  </div>
</template>

<script>
import { EventBus } from '../event_bus.js'
export default {
  data () {
    return {
      numbers: [4, 5, 6]
    }
  },
  created () {
    EventBus.$on('add_number', number => this.numbers.unshift(number))
  }
}
</script>

<style scoped>
</style>
