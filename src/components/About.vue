<template>
  <div>
    <h1 @click="showAbout">about</h1>
  </div>
</template>

<script>
export default {
  methods: {
    showAbout () {
      alert('about')
    }
  }

}
</script>

<style scoped>
</style>
