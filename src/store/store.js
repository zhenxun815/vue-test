import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increase () {
      this.state.count++
      console.log(`store count is:${this.state.count}`)
    }
  },
  actions: {}
})
