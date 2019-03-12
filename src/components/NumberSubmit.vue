<template>
  <div>
    <input v-model="number"
           type="number" />
    <button @click="addNumber">submit</button>
  </div>
</template>

<script>
import { EventBus } from '../event_bus.js'
export default {
  name: 'NumberSubmit',
  data () {
    return {
      number: 0
    }
  },
  methods: {
    addNumber () {
      EventBus.$emit('add_number', Number(this.number))
    }
  }
}
</script>

<style scoped>
</style>
