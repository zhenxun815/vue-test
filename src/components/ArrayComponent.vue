<template>
  <div @click="pushNumber">
    {{numbers}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      number: 0
    }
  },
  props: {
    numbers: {
      type: Array
    }
  },
  methods: {
    pushNumber () {
      this.$emit('push_number', Number(this.number))
    }
  }
}
</script>

<style scoped>
</style>
