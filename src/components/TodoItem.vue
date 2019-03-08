<template>
  <li v-on:dblclick="handleDelete">{{content}}</li>
</template>

<script>
export default {
  props: ['content', 'index'],
  methods: {
    handleDelete () {
      console.log('delete ' + this.index)
      this.$emit('deleteItem', this.index)
    }
  }
}
</script>

<style scoped>
</style>
