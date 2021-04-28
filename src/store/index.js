import Vue from 'vue'
import Vuex from 'vuex'

import {storageGet, storageSet} from '@/assets/js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: storageGet('token') ? storageGet('token') : ''
  },
  mutations: {
    changeToken: function(state, plyload){
      state.token = plyload
      storageSet('token', plyload)
    }
  },
  actions: {
  },
  modules: {
  }
})
