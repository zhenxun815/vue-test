<template>
  <div>
    <h1 @click="showHome">Home</h1>
  </div>
</template>

<script>
export default {
  methods: {
    showHome () {
      alert('home..')
    }
  }
}
</script>

<style scoped>
</style>
