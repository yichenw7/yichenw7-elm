import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  userInfo: null, //用户信息
}
export default new Vuex.Store({
  state,
})
