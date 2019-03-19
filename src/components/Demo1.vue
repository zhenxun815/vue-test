<!--  -->
<template>
  <div>
    <ul>
      <li v-for="(item, index) in list1"
          :key="index"
          :class="{active:index==current&&current!==''}"
          @click="choose(index)">{{item}}
      </li>
    </ul>
    <button @click="add">choose</button>
    <ul>
      <li v-for="(item, index) in list2"
          :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Demo1',
  data () {
    return {
      list1: [1, 2, 3, 4, 5, 6, 7],
      list2: [],
      current: ''
    }
  },
  components: {},
  computed: {},
  methods: {
    choose (index) {
      console.log(`choose index is: ${index},current index is:${this.current}`)
      this.current = index
    },
    add () {
      if (this.current === '') {
        return
      }
      this.list2.push(this.list1[this.current])
      console.log(`current: ${this.current},list2: ${this.list2}`)
      this.current = ''
    }
  }
}

</script>
<style scoped>
.active {
  background-color: cadetblue;
}
</style>
