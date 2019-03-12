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
      numbers: [1, 2, 3]
    }
  },
  created () {
    EventBus.$on('add_number', number => this.numbers.push(number))
  }
}
</script>

<style scoped>
</style>
