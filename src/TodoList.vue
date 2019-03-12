<template>
  <div>
    <number-submit></number-submit>
    <number-display></number-display>
  </div>
</template>

<script>

import NumberSubmit from './components/NumberSubmit'
import NumberDisplay from './components/NumberDisplay'

export default {
  components: {
    'number-submit': NumberSubmit,
    'number-display': NumberDisplay
  },
  data () {
    return {
      numbers: [1, 2, 3]
    }
  }
}
</script>
<style>
</style>
