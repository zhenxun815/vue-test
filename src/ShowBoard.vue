<template>
  <div>
    <number-submit></number-submit>
    <number-display1></number-display1>
    <number-display2></number-display2>
  </div>
</template>

<script>

import NumberSubmit from './components/NumberSubmit'
import NumberDisplay1 from './components/NumberDisplay1'
import NumberDisplay2 from './components/NumberDisplay2'

export default {
  components: {
    'number-submit': NumberSubmit,
    'number-display1': NumberDisplay1,
    'number-display2': NumberDisplay2
  },
  data () {
    return {

    }
  }
}
</script>
<style>
</style>
