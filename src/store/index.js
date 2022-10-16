import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      token: localStorage.getItem('token'),
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
    },
    updateToken(state, token) {
      state.token = token;
    }
  },
  actions: {
  },
  modules: {
  }
})
