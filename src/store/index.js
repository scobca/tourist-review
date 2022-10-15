import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      menu: false
    }
  },
  getters: {
  },
  mutations: {
    toggleMenu() {
      this.state.menu = !this.state.menu
    },
    closeMenu() {
      this.state.menu = false
    }
  },
  actions: {
  },
  modules: {
  }
})
