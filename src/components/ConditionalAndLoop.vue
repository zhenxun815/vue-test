<!-- 条件渲染&列表渲染 -->
<template>
  <div>
    <input type="number"
           v-model="count">
    <div :class="classObj">
      <h3> 条件渲染</h3>

      <div v-if="count > 0">
        count &gt; 0, count is {{count}}
      </div>
      <div v-else-if="count < 0">
        count &lt; 0, count is {{count}}
      </div>
      <div v-else>
        count = 0
      </div>

      <div v-show="count == 5">
        v-show when count == 5
      </div>
    </div>
    <div :class="classObj">
      <h3>列表渲染</h3>
      <h4>all person</h4>
      <div v-for="(person,index) in persons"
           :key="index"
           :class="[{odd:index%2==0}]">
        <span :style="styleMsg">{{person.name+ ': '+(person.age+Number(count))}}</span>
      </div>
      <h4>old person: </h4>
      <!-- Never use v-if on the same element as v-for.-->
      <div v-for="person in old_persons"
           :key="person.name">{{person.name+ ': '+(person.age+Number(count))}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
      persons: [
        {
          name: 'name0',
          age: 10
        },
        {
          name: 'name1',
          age: 20
        },
        {
          name: 'name2',
          age: 30
        },
        {
          name: 'name3',
          age: 40
        }
      ],
      styleMsg: {
        color: 'green',
        textShadow: '2px 1px 1px white'
      }
    }
  },
  computed: {
    old_persons: function () {
      return this.persons.filter(person => person.age + Number(this.count) > 30)
    },
    classObj: function () {
      return {
        gray: this.count % 2 === 0,
        green: this.count % 2 !== 0
      }
    }
  },
  methods: {
  }
}

</script>
<style scoped>
.gray {
  background-color: darkslategrey;
}
.green {
  background-color: greenyellow;
}
.odd {
  background: aqua;
}
</style>
